import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouter, setRoutes } from '../../tests/test-utils';
import HomePage from './HomePage';
import MenPage from '../MenPage/MenPage';
import WomenPage from '../WomenPage/WomenPage';
import App from '../App/App';

describe('rendered elements of the home page', () => {
  it('renders the "SHOP MEN" nav link', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByRole('link', { name: 'SHOP MEN' })).toBeInTheDocument();
  });

  it('renders the "SHOP WOMEN" nav link', () => {
    renderWithRouter(<HomePage />);
    expect(
      screen.getByRole('link', { name: 'SHOP WOMEN' })
    ).toBeInTheDocument();
  });
});

describe('navigation of links to correct route', () => {
  it('renders the men shopping page when the nav link is clicked', async () => {
    renderWithRouter(setRoutes('/', <App />, '/men', <MenPage />));
    const link = screen.getByRole('link', { name: 'SHOP MEN' });
    await userEvent.click(link);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      'Men'
    );
  });

  it('renders the women shopping page when the nav link is clicked', async () => {
    renderWithRouter(setRoutes('/', <App />, '/women', <WomenPage />));
    const link = screen.getByRole('link', { name: 'SHOP WOMEN' });
    await userEvent.click(link);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      'Women'
    );
  });
});
