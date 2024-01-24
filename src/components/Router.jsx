import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage/ErrorPage';
import App from './App/App';
import AllProductsPage from './AllProductsPage/AllProductsPage';
import ShoppingBagEmpty from './ShoppingBagEmpty/ShoppingBagEmpty';
import Page from './Page/Page';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'men',
      element: (
        <Page>
          <AllProductsPage category="men's clothing" />
        </Page>
      ),
    },
    {
      path: 'women',
      element: (
        <Page>
          <AllProductsPage category="women's clothing" />
        </Page>
      ),
    },
    {
      path: 'bag',
      element: (
        <Page>
          <ShoppingBagEmpty />
        </Page>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
