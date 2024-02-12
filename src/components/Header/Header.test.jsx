import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouter, setRoutes } from '../../utils/test-utils';
import Header from './Header';
import HomePage from '../HomePage/HomePage';
import AllProductsPage from '../AllProductsPage/AllProductsPage';
import ShoppingBagEmpty from '../ShoppingBagEmpty/ShoppingBagEmpty';

describe('rendered elements of the header', () => {
  it('renders the logo', () => {
    renderWithRouter(<Header numBagItems={0} />);
    expect(screen.getByRole('img', { name: /home page/i })).toBeInTheDocument();
  });

  it('renders the "Men" nav link', () => {
    renderWithRouter(<Header numBagItems={0} />);
    expect(screen.getByRole('link', { name: 'Men' })).toBeInTheDocument();
  });

  it('renders the "Women" nav link', () => {
    renderWithRouter(<Header numBagItems={0} />);
    expect(screen.getByRole('link', { name: 'Women' })).toBeInTheDocument();
  });

  it('renders the shopping bag icon', () => {
    renderWithRouter(<Header numBagItems={0} />);
    expect(
      screen.getByRole('img', { name: 'My shopping bag' })
    ).toBeInTheDocument();
  });
});

describe('navigation of links to correct route', () => {
  it('renders the home page when the logo is clicked', async () => {
    renderWithRouter(setRoutes('/', <HomePage />, '/', <HomePage />));
    const link = screen.getByRole('link', { name: /home page/i });
    await userEvent.click(link);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /home page/i
    );
  });

  it('renders the men shopping page when the nav link is clicked', async () => {
    renderWithRouter(
      setRoutes(
        '/',
        <HomePage />,
        '/men',
        <AllProductsPage category="men's clothing" numBagItems={0} />
      )
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
        '/',
        <HomePage />,
        '/women',
        <AllProductsPage category="women's clothing" numBagItems={0} />
      )
    );
    const link = screen.getByRole('link', { name: 'SHOP WOMEN' });
    await userEvent.click(link);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      'Women'
    );
  });

  it('renders the empty shopping bag page when the nav link is clicked', async () => {
    renderWithRouter(
      setRoutes('/', <HomePage />, '/bag', <ShoppingBagEmpty numBagItems={0} />)
    );
    const link = screen.getByRole('link', { name: /bag/i });
    await userEvent.click(link);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /bag/i
    );
  });
});
