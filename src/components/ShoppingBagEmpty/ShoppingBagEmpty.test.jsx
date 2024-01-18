import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter, setRoutes } from '../../tests/test-utils';
import ShoppingBagEmpty from './ShoppingBagEmpty';
import MenPage from '../MenPage/MenPage';
import WomenPage from '../WomenPage/WomenPage';

describe('rendered elements of the empty shopping bag page', () => {
  it('renders the "SHOP MEN" nav link', () => {
    renderWithRouter(<ShoppingBagEmpty />, { route: '/bag' });
    expect(screen.getByRole('link', { name: 'SHOP MEN' })).toBeInTheDocument();
  });

  it('renders the "SHOP WOMEN" nav link', () => {
    renderWithRouter(<ShoppingBagEmpty />, { route: '/bag' });
    expect(
      screen.getByRole('link', { name: 'SHOP WOMEN' })
    ).toBeInTheDocument();
  });
});

describe('navigation of links to correct route', () => {
  it('renders the men shopping page when the nav link is clicked', async () => {
    renderWithRouter(
      setRoutes('/bag', <ShoppingBagEmpty />, '/men', <MenPage />),
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
      setRoutes('/bag', <ShoppingBagEmpty />, '/women', <WomenPage />),
      { route: '/bag' }
    );
    const link = screen.getByRole('link', { name: 'SHOP WOMEN' });
    await userEvent.click(link);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      'Women'
    );
  });
});
