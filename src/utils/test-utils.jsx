import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
};

const setRoutes = (initialPath, initialElement, newPath, newElement) => (
  <Routes>
    <Route path={initialPath} element={initialElement} />
    <Route path={newPath} element={newElement} />
  </Routes>
);

export { renderWithRouter, setRoutes };
