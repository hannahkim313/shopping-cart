import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithRouter, setRoutes } from '../../utils/test-utils';
import Header from './Header';
import HomePage from '../HomePage/HomePage';
import AllProductsPage from '../AllProductsPage/AllProductsPage';
import ShoppingBag from '../ShoppingBag/ShoppingBag';

const mockHandleQuantityChange = vi.fn();

const mockHandleRemoveFromBag = vi.fn();

const mockHandleMobileMenu = vi.fn();

const mockIsMobileMenuOpen = vi.fn();

describe('rendered elements of the header', () => {
  it('renders the logo', () => {
    renderWithRouter(
      <Header
        numBagItems={0}
        handleMobileMenu={mockHandleMobileMenu}
        isMobileMenuOpen={mockIsMobileMenuOpen}
      />
    );

    expect(screen.getByRole('img', { name: /home page/i })).toBeInTheDocument();
  });

  it('renders the "Men" nav link', () => {
    renderWithRouter(
      <Header
        numBagItems={0}
        handleMobileMenu={mockHandleMobileMenu}
        isMobileMenuOpen={mockIsMobileMenuOpen}
      />
    );

    expect(screen.getByRole('link', { name: 'Men' })).toBeInTheDocument();
  });

  it('renders the "Women" nav link', () => {
    renderWithRouter(
      <Header
        numBagItems={0}
        handleMobileMenu={mockHandleMobileMenu}
        isMobileMenuOpen={mockIsMobileMenuOpen}
      />
    );

    expect(screen.getByRole('link', { name: 'Women' })).toBeInTheDocument();
  });

  it('renders the shopping bag icon', () => {
    renderWithRouter(
      <Header
        numBagItems={0}
        handleMobileMenu={mockHandleMobileMenu}
        isMobileMenuOpen={mockIsMobileMenuOpen}
      />
    );

    expect(
      screen.getByRole('img', { name: 'My shopping bag' })
    ).toBeInTheDocument();
  });

  it('renders the correct number of items in the bag', () => {
    renderWithRouter(
      <Header
        numBagItems={2}
        handleMobileMenu={mockHandleMobileMenu}
        isMobileMenuOpen={mockIsMobileMenuOpen}
      />
    );

    expect(screen.getByText('2')).toBeInTheDocument();
  });
});

describe('navigation of links to correct route', () => {
  it('renders the home page when the logo is clicked', async () => {
    const user = userEvent.setup();

    renderWithRouter(
      setRoutes(
        '/',
        <HomePage
          handleMobileMenu={mockHandleMobileMenu}
          isMobileMenuOpen={mockIsMobileMenuOpen}
        />,
        '/',
        <HomePage
          handleMobileMenu={mockHandleMobileMenu}
          isMobileMenuOpen={mockIsMobileMenuOpen}
        />
      )
    );

    const link = screen.getByRole('link', { name: /home page/i });

    await user.click(link);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /home page/i
    );
  });

  it('renders the men shopping page when the nav link is clicked', async () => {
    const user = userEvent.setup();

    renderWithRouter(
      setRoutes(
        '/',
        <HomePage
          handleMobileMenu={mockHandleMobileMenu}
          isMobileMenuOpen={mockIsMobileMenuOpen}
        />,
        '/men',
        <AllProductsPage
          category="men's clothing"
          numBagItems={0}
          handleMobileMenu={mockHandleMobileMenu}
          isMobileMenuOpen={mockIsMobileMenuOpen}
        />
      )
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
        '/',
        <HomePage
          handleMobileMenu={mockHandleMobileMenu}
          isMobileMenuOpen={mockIsMobileMenuOpen}
        />,
        '/women',
        <AllProductsPage
          category="women's clothing"
          numBagItems={0}
          handleMobileMenu={mockHandleMobileMenu}
          isMobileMenuOpen={mockIsMobileMenuOpen}
        />
      )
    );

    const link = screen.getByRole('link', { name: 'SHOP WOMEN' });

    await user.click(link);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      'Women'
    );
  });

  it('renders the empty shopping bag page when the nav link is clicked', async () => {
    const user = userEvent.setup();

    renderWithRouter(
      setRoutes(
        '/',
        <HomePage
          handleMobileMenu={mockHandleMobileMenu}
          isMobileMenuOpen={mockIsMobileMenuOpen}
        />,
        '/bag',
        <ShoppingBag
          bagItems={[]}
          numBagItems={0}
          handleQuantityChange={mockHandleQuantityChange}
          handleRemoveFromBag={mockHandleRemoveFromBag}
          handleMobileMenu={mockHandleMobileMenu}
          isMobileMenuOpen={mockIsMobileMenuOpen}
        />
      )
    );

    const link = screen.getByRole('link', { name: 'My shopping bag' });

    await user.click(link);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /bag/i
    );
  });
});
