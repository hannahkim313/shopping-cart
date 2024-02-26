import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { afterEach, beforeEach, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithRouter, setRoutes } from '../../utils/test-utils';
import AllProductsPage from './AllProductsPage';
import ProductPage from '../ProductPage/ProductPage';

global.fetch = vi.fn();

const mockHandleAddToBag = vi.fn();
const mockIsMaxQuantity = vi.fn();

const mockData = [
  {
    category: 'test',
    id: 1,
    title: 'Product 1',
    price: 10.99,
    image: 'product-1.jpg',
    rating: {
      rate: 5.0,
      count: 120,
    },
    quantity: 1,
  },
  {
    category: 'test',
    id: 2,
    title: 'Product 2',
    price: 15.99,
    image: 'product-2.jpg',
    rating: {
      rate: 3.0,
      count: 110,
    },
    quantity: 2,
  },
];

const createFetchResponse = ({
  data = mockData,
  loading = false,
  errorState = null,
} = {}) =>
  Promise.resolve({
    json: () => Promise.resolve(data, loading, errorState),
  });

describe('AllProductsPage component with mocked products', () => {
  beforeEach(() => {
    fetch.mockResolvedValue(createFetchResponse());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('rendering of component', () => {
    it('renders the ProductPage component if there is a productId', async () => {
      vi.mock('react-router-dom', async () => ({
        ...(await vi.importActual('react-router-dom')),
        useParams: () => ({
          productId: 1,
        }),
      }));

      renderWithRouter(
        setRoutes(
          'test/products?/:productId?',
          <AllProductsPage
            numBagItems={0}
            handleAddToBag={mockHandleAddToBag}
            isMaxQuantity={mockIsMaxQuantity}
            category="test"
          />,
          'products?/:productId?',
          <ProductPage
            data={mockData[0]}
            numBagItems={3}
            isMaxQuantity={mockIsMaxQuantity}
            id={1}
            handleAddToBag={mockHandleAddToBag}
          />
        ),
        { route: '/products/1' }
      );

      await waitFor(() => {
        expect(
          screen.getByRole('heading', { level: 2, name: /reviews/i })
        ).toBeInTheDocument();
      });
    });

    it('renders the component if there is no productId', async () => {
      vi.mock('react-router-dom', async () => ({
        ...(await vi.importActual('react-router-dom')),
        useParams: () => ({
          productId: undefined,
        }),
      }));

      renderWithRouter(
        <AllProductsPage
          numBagItems={0}
          handleAddToBag={mockHandleAddToBag}
          isMaxQuantity={mockIsMaxQuantity}
          category="test"
        />
      );

      await waitFor(() => {
        expect(
          screen.getByRole('heading', { level: 2, name: /all products/i })
        ).toBeInTheDocument();
      });
    });
  });

  describe('rendering of component with different prop values', () => {
    it('renders the men shopping page with the correct title', async () => {
      renderWithRouter(
        <AllProductsPage
          numBagItems={0}
          handleAddToBag={mockHandleAddToBag}
          isMaxQuantity={mockIsMaxQuantity}
          category="men's clothing"
        />
      );

      await waitFor(() => {
        expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
          "Men's Clothing"
        );
      });
    });

    it('renders a given shopping page with the correct title', async () => {
      renderWithRouter(
        <AllProductsPage
          numBagItems={0}
          handleAddToBag={mockHandleAddToBag}
          isMaxQuantity={mockIsMaxQuantity}
          category="example"
        />
      );

      await waitFor(() => {
        expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
          'Example'
        );
      });
    });
  });

  describe('rendering of messages', () => {
    it('renders a loading message when "loading" is true and disappears when false', async () => {
      fetch.mockResolvedValue(createFetchResponse({ loading: true }));
      renderWithRouter(
        <AllProductsPage
          numBagItems={0}
          handleAddToBag={mockHandleAddToBag}
          isMaxQuantity={mockIsMaxQuantity}
          category="test"
        />
      );

      await waitFor(() => {
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
        waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
      });

      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    it('renders an "oops" message when "errorState" is not null', async () => {
      fetch.mockRejectedValue(createFetchResponse({ errorState: new Error() }));
      renderWithRouter(
        <AllProductsPage
          numBagItems={0}
          handleAddToBag={mockHandleAddToBag}
          isMaxQuantity={mockIsMaxQuantity}
          category="test"
        />
      );

      await waitFor(() => {
        expect(screen.getByText(/oops/i)).toBeInTheDocument();
      });
    });
  });

  describe('rendering of product cards', () => {
    it('renders all product cards', async () => {
      renderWithRouter(
        <AllProductsPage
          numBagItems={0}
          handleAddToBag={mockHandleAddToBag}
          isMaxQuantity={mockIsMaxQuantity}
          category="test"
        />
      );

      await waitFor(() => {
        expect(screen.getAllByRole('article')).toHaveLength(4);
      });
    });

    it('renders the name of the products', async () => {
      renderWithRouter(
        <AllProductsPage
          numBagItems={0}
          handleAddToBag={mockHandleAddToBag}
          isMaxQuantity={mockIsMaxQuantity}
          category="test"
        />
      );

      await waitFor(() => {
        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
      });
    });

    it('renders the price of the products', async () => {
      renderWithRouter(
        <AllProductsPage
          numBagItems={0}
          handleAddToBag={mockHandleAddToBag}
          isMaxQuantity={mockIsMaxQuantity}
          category="test"
        />
      );

      await waitFor(() => {
        expect(screen.getByText('$10.99')).toBeInTheDocument();
        expect(screen.getByText('$15.99')).toBeInTheDocument();
      });
    });

    it('renders the image of the products', async () => {
      renderWithRouter(
        <AllProductsPage
          numBagItems={0}
          handleAddToBag={mockHandleAddToBag}
          isMaxQuantity={mockIsMaxQuantity}
          category="test"
        />
      );

      await waitFor(() => {
        expect(screen.getAllByRole('link')).toHaveLength(9);
      });
    });
  });

  describe('navigation of routes', () => {
    it('renders the product page when the product card link is clicked', async () => {
      vi.mock('react-router-dom', async () => ({
        ...(await vi.importActual('react-router-dom')),
        useParams: () => ({
          productId: undefined,
        }),
      }));

      renderWithRouter(
        setRoutes(
          '/test',
          <AllProductsPage
            numBagItems={0}
            handleAddToBag={mockHandleAddToBag}
            isMaxQuantity={mockIsMaxQuantity}
            category="test"
          />,
          '/products?/:productId?',
          <ProductPage
            data={mockData[0]}
            numBagItems={3}
            isMaxQuantity={mockIsMaxQuantity}
            id={1}
            handleAddToBag={mockHandleAddToBag}
          />
        ),
        { route: '/test' }
      );

      await waitFor(async () => {
        const link = screen.getAllByRole('link')[4];
        await userEvent.click(link);
      });

      expect(
        screen.getByRole('heading', { level: 2, name: 'Reviews' })
      ).toBeInTheDocument();
    });
  });
});
