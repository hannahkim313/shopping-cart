import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter, setRoutes } from '../../utils/test-utils';
import AllProductsPage from '../AllProductsPage/AllProductsPage';
import Footer from './Footer';
import HomePage from '../HomePage/HomePage';

describe('rendered elements of the footer from the default home page', () => {
  it('renders the "Men" nav link', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole('link', { name: 'Men' })).toBeInTheDocument();
  });

  it('renders the "Women" nav link', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole('link', { name: 'Women' })).toBeInTheDocument();
  });

  it('renders the "Made by" link to the GitHub repo with the correct link', () => {
    renderWithRouter(<Footer />);
    expect(
      screen.getByRole('link', { name: 'Made by Hannah Kim' })
    ).toHaveAttribute('href', 'https://github.com/hannahkim313/shopping-cart');
  });
});

describe('navigation of links to correct route', () => {
  it('renders the men shopping page when the nav link is clicked', async () => {
    renderWithRouter(
      setRoutes(
        '/',
        <HomePage />,
        '/men',
        <AllProductsPage category="men's clothing" />
      )
    );
    const links = screen.getAllByRole('link', { name: 'Men' });
    const link = links[links.length - 1];
    await userEvent.click(link);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      'Men'
    );
  });

  it('renders the women shopping page when the nav link is clicked', async () => {
    renderWithRouter(
      setRoutes(
        '/',
        <HomePage />,
        '/women',
        <AllProductsPage category="women's clothing" />
      )
    );
    const links = screen.getAllByRole('link', { name: 'Women' });
    const link = links[links.length - 1];
    await userEvent.click(link);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      'Women'
    );
  });
});
