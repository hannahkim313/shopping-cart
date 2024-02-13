import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter, setRoutes } from '../../utils/test-utils';
import ShoppingBag from './ShoppingBag';
import AllProductsPage from '../AllProductsPage/AllProductsPage';

describe('ShoppingBag component', () => {
  describe('rendering of elements when the shopping bag is empty', () => {
    it('renders the "SHOP MEN" nav link', () => {
      renderWithRouter(<ShoppingBag numBagItems={0} />, { route: '/bag' });
      expect(
        screen.getByRole('link', { name: 'SHOP MEN' })
      ).toBeInTheDocument();
    });

    it('renders the "SHOP WOMEN" nav link', () => {
      renderWithRouter(<ShoppingBag numBagItems={0} />, { route: '/bag' });
      expect(
        screen.getByRole('link', { name: 'SHOP WOMEN' })
      ).toBeInTheDocument();
    });
  });

  describe('rendering of elements when the shopping bag is not empty', () => {
    it('renders the product card with the product details', () => {
      // TODO: Write test
    });

    it('renders the order summary with the correct subtotal and total', () => {
      // TODO: Write test
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
          <ShoppingBag numBagItems={0} />,
          '/men',
          <AllProductsPage category="men's clothing" />
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
          <ShoppingBag numBagItems={0} />,
          '/women',
          <AllProductsPage category="women's clothing" />
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
