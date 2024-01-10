import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage component', () => {
  it('renders the "SHOP MEN" nav link', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: 'SHOP MEN' })).toBeInTheDocument();
  });

  it('renders the "SHOP WOMEN" nav link', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('link', { name: 'SHOP WOMEN' })
    ).toBeInTheDocument();
  });
});
