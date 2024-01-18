import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ShoppingBagEmpty from './ShoppingBagEmpty';
import MenPage from '../MenPage/MenPage';
import WomenPage from '../WomenPage/WomenPage';

const renderWithRouter = (ui, { route = '/bag' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
};

const setRoutes = (path, element) => (
  <Routes>
    <Route path="/bag" element={<ShoppingBagEmpty />} />
    <Route path={path} element={element} />
  </Routes>
);

describe('rendered elements of the empty shopping bag page', () => {
  it('renders the "SHOP MEN" nav link', () => {
    renderWithRouter(<ShoppingBagEmpty />);
    expect(screen.getByRole('link', { name: 'SHOP MEN' })).toBeInTheDocument();
  });

  it('renders the "SHOP WOMEN" nav link', () => {
    renderWithRouter(<ShoppingBagEmpty />);
    expect(
      screen.getByRole('link', { name: 'SHOP WOMEN' })
    ).toBeInTheDocument();
  });
});

describe('navigation of links to correct route', () => {
  it('renders the men shopping page when the nav link is clicked', async () => {
    renderWithRouter(setRoutes('/men', <MenPage />));
    const link = screen.getByRole('link', { name: 'SHOP MEN' });
    await userEvent.click(link);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      'Men'
    );
  });

  it('renders the women shopping page when the nav link is clicked', async () => {
    renderWithRouter(setRoutes('/women', <WomenPage />));
    const link = screen.getByRole('link', { name: 'SHOP WOMEN' });
    await userEvent.click(link);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      'Women'
    );
  });
});
