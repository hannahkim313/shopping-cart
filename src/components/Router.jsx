import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage/ErrorPage';
import App from './App/App';
import AllProductsPage from './AllProductsPage/AllProductsPage';
import ShoppingBagEmpty from './ShoppingBagEmpty/ShoppingBagEmpty';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'men/products?/:productId?',
      element: <AllProductsPage category="men's clothing" />,
    },
    {
      path: 'women/products?/:productId?',
      element: <AllProductsPage category="women's clothing" />,
    },
    {
      path: 'bag',
      element: <ShoppingBagEmpty />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
