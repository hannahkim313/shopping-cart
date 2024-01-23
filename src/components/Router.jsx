import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage/ErrorPage';
import App from './App/App';
import MenPage from './MenPage/MenPage';
import WomenPage from './WomenPage/WomenPage';
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
          <MenPage />
        </Page>
      ),
    },
    {
      path: 'women',
      element: (
        <Page>
          <WomenPage />
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
