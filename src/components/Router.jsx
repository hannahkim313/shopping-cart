import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage/ErrorPage';
import App from './App/App';
import MenPage from './MenPage/MenPage';
import WomenPage from './WomenPage/WomenPage';
import ShoppingBag from './ShoppingBag/ShoppingBag';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'men',
      element: <MenPage />,
    },
    {
      path: 'women',
      element: <WomenPage />,
    },
    {
      path: 'bag',
      element: <ShoppingBag />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
