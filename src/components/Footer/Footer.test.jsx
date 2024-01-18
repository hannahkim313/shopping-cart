import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App/App';
import MenPage from '../MenPage/MenPage';
import WomenPage from '../WomenPage/WomenPage';
import Footer from './Footer';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
};

const setRoutes = (path, element) => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path={path} element={element} />
  </Routes>
);

describe('navigation of links to correct route', () => {
  it('renders the men shopping page when the nav link is clicked', async () => {
    renderWithRouter(setRoutes('/men', <MenPage />));
    const links = screen.getAllByRole('link', { name: 'Men' });
    const link = links[links.length - 1];
    await userEvent.click(link);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      'Men'
    );
  });

  it('renders the women shopping page when the nav link is clicked', async () => {
    renderWithRouter(setRoutes('/women', <WomenPage />));
    const links = screen.getAllByRole('link', { name: 'Women' });
    const link = links[links.length - 1];
    await userEvent.click(link);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      'Women'
    );
  });
});

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
