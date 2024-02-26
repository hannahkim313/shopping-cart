import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouter, setRoutes } from '../../utils/test-utils';
import HomePage from './HomePage';
import AllProductsPage from '../AllProductsPage/AllProductsPage';

describe('rendered elements of the home page', () => {
  it('renders the "SHOP MEN" nav link', () => {
    renderWithRouter(<HomePage numBagItems={0} />);

    expect(screen.getByRole('link', { name: 'SHOP MEN' })).toBeInTheDocument();
  });

  it('renders the "SHOP WOMEN" nav link', () => {
    renderWithRouter(<HomePage numBagItems={0} />);

    expect(
      screen.getByRole('link', { name: 'SHOP WOMEN' })
    ).toBeInTheDocument();
  });
});

describe('navigation of links to correct route', () => {
  it('renders the men shopping page when the nav link is clicked', async () => {
    renderWithRouter(
      setRoutes(
        '/',
        <HomePage numBagItems={0} />,
        '/men',
        <AllProductsPage category="men's clothing" />
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
        <HomePage numBagItems={0} />,
        '/women',
        <AllProductsPage category="women's clothing" />
      )
    );

    const link = screen.getByRole('link', { name: 'SHOP WOMEN' });
    await userEvent.click(link);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      'Women'
    );
  });
});
