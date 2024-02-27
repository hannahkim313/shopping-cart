import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, vi } from 'vitest';
import { renderWithRouter, setRoutes } from '../../utils/test-utils';
import ShoppingBag from './ShoppingBag';
import AllProductsPage from '../AllProductsPage/AllProductsPage';

const mockData = [
  {
    category: 'test',
    id: 1,
    title: 'Product 1',
    price: 10.99,
    quantity: 2,
    image: 'product-1.jpg',
    rating: {
      rate: 5.0,
      count: 120,
    },
  },
  {
    category: 'test',
    id: 2,
    title: 'Product 2',
    price: 15.99,
    quantity: 1,
    image: 'product-2.jpg',
    rating: {
      rate: 3.0,
      count: 110,
    },
  },
];

const numBagItems = mockData.reduce(
  (accumulator, item) => accumulator + item.quantity,
  0
);

const mockHandleAddToBag = vi.fn();

const mockIsMaxQuantity = vi.fn();

const mockHandleQuantityChange = vi.fn();

const mockHandleRemoveFromBag = vi.fn();

describe('ShoppingBag component', () => {
  describe('rendering of elements when the shopping bag is empty', () => {
    afterEach(() => vi.restoreAllMocks());

    it('renders the "SHOP MEN" nav link', () => {
      renderWithRouter(
        <ShoppingBag
          bagItems={[]}
          numBagItems={0}
          handleQuantityChange={mockHandleQuantityChange}
          handleRemoveFromBag={mockHandleRemoveFromBag}
        />,
        {
          route: '/bag',
        }
      );

      expect(
        screen.getByRole('link', { name: 'SHOP MEN' })
      ).toBeInTheDocument();
    });

    it('renders the "SHOP WOMEN" nav link', () => {
      renderWithRouter(
        <ShoppingBag
          bagItems={[]}
          numBagItems={0}
          handleQuantityChange={mockHandleQuantityChange}
          handleRemoveFromBag={mockHandleRemoveFromBag}
        />,
        {
          route: '/bag',
        }
      );

      expect(
        screen.getByRole('link', { name: 'SHOP WOMEN' })
      ).toBeInTheDocument();
    });
  });

  describe('rendering of elements when the shopping bag is not empty', () => {
    afterEach(() => vi.restoreAllMocks());

    it('renders a product card for each different product', () => {
      renderWithRouter(
        <ShoppingBag
          bagItems={mockData}
          numBagItems={numBagItems}
          handleQuantityChange={mockHandleQuantityChange}
          handleRemoveFromBag={mockHandleRemoveFromBag}
        />,
        {
          route: '/bag',
        }
      );

      expect(
        screen.getByRole('heading', { level: 2, name: 'Product 1' })
      ).toBeInTheDocument();
      expect(screen.getByText('$10.99')).toBeInTheDocument();
      expect(screen.getAllByRole('img')[4]).toHaveAttribute(
        'src',
        'product-1.jpg'
      );
      expect(
        screen.getByRole('heading', { level: 2, name: 'Product 2' })
      ).toBeInTheDocument();
      expect(screen.getByText('$15.99')).toBeInTheDocument();
      expect(screen.getAllByRole('img')[7]).toHaveAttribute(
        'src',
        'product-2.jpg'
      );
    });

    it('renders a product card with the correct quantity of a product', () => {
      renderWithRouter(
        <ShoppingBag
          bagItems={mockData}
          numBagItems={numBagItems}
          handleQuantityChange={mockHandleQuantityChange}
          handleRemoveFromBag={mockHandleRemoveFromBag}
        />,
        {
          route: '/bag',
        }
      );

      expect(screen.getAllByRole('combobox')[0]).toHaveValue('2');
      expect(screen.getAllByRole('combobox')[1]).toHaveValue('1');
    });

    it('renders the order summary with the correct subtotal and total', () => {
      renderWithRouter(
        <ShoppingBag
          bagItems={mockData}
          numBagItems={numBagItems}
          handleQuantityChange={mockHandleQuantityChange}
          handleRemoveFromBag={mockHandleRemoveFromBag}
        />,
        {
          route: '/bag',
        }
      );

      expect(screen.getAllByText('$37.97')).toHaveLength(2);
    });
  });

  describe('user interaction', () => {
    beforeEach(() => {
      mockHandleQuantityChange.mockImplementation((id) => (e) => {
        mockData.find((item) => item.id === id).quantity = e.target.value;
      });

      mockHandleRemoveFromBag.mockImplementation((id) => {
        const index = mockData.findIndex((item) => item.id === id);
        mockData.splice(index, 1);
      });
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('selects the correct quantity value on change', async () => {
      const user = userEvent.setup();

      const { unmount } = renderWithRouter(
        <ShoppingBag
          bagItems={mockData}
          numBagItems={numBagItems}
          handleQuantityChange={mockHandleQuantityChange}
          handleRemoveFromBag={mockHandleRemoveFromBag}
        />,
        {
          route: '/bag',
        }
      );

      const selectInput = screen.getAllByRole('combobox')[0];
      await user.selectOptions(selectInput, '3');
      unmount();

      renderWithRouter(
        <ShoppingBag
          bagItems={mockData}
          numBagItems={numBagItems}
          handleQuantityChange={mockHandleQuantityChange}
          handleRemoveFromBag={mockHandleRemoveFromBag}
        />,
        {
          route: '/bag',
        }
      );

      expect(screen.getAllByRole('option', { name: '2' })[0].selected).toBe(
        false
      );
      expect(screen.getAllByRole('option', { name: '3' })[0].selected).toBe(
        true
      );
    });

    it('changes the subtotal and total when changing a product quantity', async () => {
      const user = userEvent.setup();

      const { unmount } = renderWithRouter(
        <ShoppingBag
          bagItems={mockData}
          numBagItems={numBagItems}
          handleQuantityChange={mockHandleQuantityChange}
          handleRemoveFromBag={mockHandleRemoveFromBag}
        />,
        {
          route: '/bag',
        }
      );

      const selectInput = screen.getAllByRole('combobox')[0];
      await user.selectOptions(selectInput, '3');
      unmount();

      renderWithRouter(
        <ShoppingBag
          bagItems={mockData}
          numBagItems={numBagItems}
          handleQuantityChange={mockHandleQuantityChange}
          handleRemoveFromBag={mockHandleRemoveFromBag}
        />,
        {
          route: '/bag',
        }
      );

      expect(screen.getAllByText('$48.96')).toHaveLength(2);
    });

    it('removes the product and changes the subtotal and total when removing a product from the bag', async () => {
      const user = userEvent.setup();

      const { unmount } = renderWithRouter(
        <ShoppingBag
          bagItems={mockData}
          numBagItems={numBagItems}
          handleQuantityChange={mockHandleQuantityChange}
          handleRemoveFromBag={mockHandleRemoveFromBag}
        />,
        {
          route: '/bag',
        }
      );

      const deleteBtn = screen.getAllByRole('button', { name: /remove/i })[0];
      await user.click(deleteBtn);
      unmount();

      renderWithRouter(
        <ShoppingBag
          bagItems={mockData}
          numBagItems={numBagItems}
          handleQuantityChange={vi.fn()}
          handleRemoveFromBag={mockHandleRemoveFromBag}
        />,
        {
          route: '/bag',
        }
      );

      expect(screen.getAllByText('$15.99')).toHaveLength(3);
    });
  });

  describe('navigation of links to correct route', () => {
    afterEach(() => vi.restoreAllMocks());

    it('renders the men shopping page when the nav link is clicked', async () => {
      const user = userEvent.setup();

      renderWithRouter(
        setRoutes(
          '/bag',
          <ShoppingBag
            bagItems={[]}
            numBagItems={0}
            handleQuantityChange={mockHandleQuantityChange}
            handleRemoveFromBag={mockHandleRemoveFromBag}
          />,
          '/men',
          <AllProductsPage
            category="men's clothing"
            numBagItems={0}
            isMaxQuantity={mockIsMaxQuantity}
            handleAddToBag={mockHandleAddToBag}
          />
        ),
        { route: '/bag' }
      );

      const link = screen.getByRole('link', { name: 'SHOP MEN' });
      await user.click(link);

      expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
        'Men'
      );
    });

    it('renders the women shopping page when the nav link is clicked', async () => {
      const user = userEvent.setup();

      renderWithRouter(
        setRoutes(
          '/bag',
          <ShoppingBag
            bagItems={[]}
            numBagItems={0}
            handleQuantityChange={mockHandleQuantityChange}
            handleRemoveFromBag={mockHandleRemoveFromBag}
          />,
          '/women',
          <AllProductsPage
            category="women's clothing"
            numBagItems={0}
            isMaxQuantity={mockIsMaxQuantity}
            handleAddToBag={mockHandleAddToBag}
          />
        ),
        { route: '/bag' }
      );

      const link = screen.getByRole('link', { name: 'SHOP WOMEN' });
      await user.click(link);

      expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
        'Women'
      );
    });
  });
});
