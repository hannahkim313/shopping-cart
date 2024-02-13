import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithRouter, setRoutes } from '../../utils/test-utils';
import ShoppingBag from './ShoppingBag';
import AllProductsPage from '../AllProductsPage/AllProductsPage';

const mockHandleAddToBag = vi.fn();

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
  },
];

describe('ShoppingBag component', () => {
  describe('rendering of elements when the shopping bag is empty', () => {
    it('renders the "SHOP MEN" nav link', () => {
      renderWithRouter(<ShoppingBag bagItems={[]} />, { route: '/bag' });
      expect(
        screen.getByRole('link', { name: 'SHOP MEN' })
      ).toBeInTheDocument();
    });

    it('renders the "SHOP WOMEN" nav link', () => {
      renderWithRouter(<ShoppingBag bagItems={[]} />, { route: '/bag' });
      expect(
        screen.getByRole('link', { name: 'SHOP WOMEN' })
      ).toBeInTheDocument();
    });
  });

  describe('rendering of elements when the shopping bag is not empty', () => {
    it('renders a product card for each different product in the bag', () => {
      renderWithRouter(<ShoppingBag bagItems={mockData} />, { route: '/bag' });
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

    it('renders a product card with the correct quantity for multiple quantities of a product in the bag', () => {
      // FIXME
      renderWithRouter(<ShoppingBag bagItems={mockData} />, { route: '/bag' });
      expect(screen.getByRole('combobox')).toHaveValue('2');
    });

    it('renders the order summary with the correct subtotal and total', () => {
      renderWithRouter(<ShoppingBag bagItems={mockData} />, { route: '/bag' });
      expect(screen.getAllByText('$26.98')).toHaveLength(2);
    });
  });

  describe('user interaction', () => {
    it('changes the subtotal and total when changing a product quantity', () => {
      // TODO: Write test
    });

    it('removes the product and changes the subtotal and total when removing a product from the bag', () => {
      // TODO: Write test
    });
  });

  describe('navigation of links to correct route', () => {
    it('renders the men shopping page when the nav link is clicked', async () => {
      renderWithRouter(
        setRoutes(
          '/bag',
          <ShoppingBag bagItems={[]} />,
          '/men',
          <AllProductsPage
            category="men's clothing"
            numBagItems={0}
            handleAddToBag={mockHandleAddToBag}
          />
        ),
        { route: '/bag' }
      );
      const link = screen.getByRole('link', { name: 'SHOP MEN' });
      await userEvent.click(link);
      expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
        'Men'
      );
    });

    it('renders the women shopping page when the nav link is clicked', async () => {
      renderWithRouter(
        setRoutes(
          '/bag',
          <ShoppingBag bagItems={[]} />,
          '/women',
          <AllProductsPage
            category="women's clothing"
            numBagItems={0}
            handleAddToBag={mockHandleAddToBag}
          />
        ),
        { route: '/bag' }
      );
      const link = screen.getByRole('link', { name: 'SHOP WOMEN' });
      await userEvent.click(link);
      expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
        'Women'
      );
    });
  });
});
