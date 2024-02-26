import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter, setRoutes } from '../../utils/test-utils';
import ErrorPage from './ErrorPage';
import HomePage from '../HomePage/HomePage';

describe('rendered elements of the 404 error page', () => {
  it('renders the nav link that navigates to the home page', () => {
    renderWithRouter(<ErrorPage />, { route: '/error' });

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /404/i
    );
  });
});

describe('navigation of links to correct route', () => {
  it('renders the home page when the nav link is clicked', async () => {
    const user = userEvent.setup();

    renderWithRouter(setRoutes('/error', <ErrorPage />, '/', <HomePage />), {
      route: '/error',
    });

    const link = screen.getByRole('link', { name: /home/i });
    await user.click(link);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /home page/i
    );
  });
});
