import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithRouter, setRoutes } from '../../utils/test-utils';
import Sidebar from './Sidebar';
import HomePage from '../HomePage/HomePage';
import AllProductsPage from '../AllProductsPage/AllProductsPage';
import ShoppingBag from '../ShoppingBag/ShoppingBag';

const mockHandleMobileMenu = vi.fn();
const mockIsMobileMenuOpen = vi.fn();

describe('Sidebar component', () => {
  describe('rendering of elements', () => {
    it('renders the nav links', () => {
      renderWithRouter(
        <Sidebar
          handleMobileMenu={mockHandleMobileMenu}
          isMobileMenuOpen={mockIsMobileMenuOpen}
        />
      );

      expect(screen.getByRole('link', { name: 'Men' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Women' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Bag' })).toBeInTheDocument();
    });
  });

  describe('navigation of links to correct route', () => {
    it('renders the men shopping page when the nav link is clicked', async () => {
      const user = userEvent.setup();

      renderWithRouter(
        setRoutes(
          '/',
          <HomePage
            numBagItems={0}
            handleMobileMenu={mockHandleMobileMenu}
            isMobileMenuOpen={mockIsMobileMenuOpen}
          />,
          '/men',
          <AllProductsPage category="men's clothing" />
        )
      );

      const link = screen.getAllByRole('link', { name: 'Men' })[1];
      await user.click(link);

      expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
        'Men'
      );
    });

    it('renders the women shopping page when the nav link is clicked', async () => {
      const user = userEvent.setup();

      renderWithRouter(
        setRoutes(
          '/',
          <HomePage
            numBagItems={0}
            handleMobileMenu={mockHandleMobileMenu}
            isMobileMenuOpen={mockIsMobileMenuOpen}
          />,
          '/women',
          <AllProductsPage category="women's clothing" />
        )
      );

      const link = screen.getAllByRole('link', { name: 'Women' })[1];
      await user.click(link);

      expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
        'Women'
      );
    });

    it('renders the shopping bag page when the nav link is clicked', async () => {
      const user = userEvent.setup();

      renderWithRouter(
        setRoutes(
          '/',
          <HomePage
            numBagItems={0}
            handleMobileMenu={mockHandleMobileMenu}
            isMobileMenuOpen={mockIsMobileMenuOpen}
          />,
          '/bag',
          <ShoppingBag bagItems={[]} numBagItems={0} />
        )
      );

      const link = screen.getByRole('link', { name: 'Bag' });
      await user.click(link);

      expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
        'Your Bag'
      );
    });
  });
});
