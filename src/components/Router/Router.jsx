import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ErrorPage from '../ErrorPage/ErrorPage';
import AllProductsPage from '../AllProductsPage/AllProductsPage';
import ShoppingBag from '../ShoppingBag/ShoppingBag';

const Router = ({ bagItems, numBagItems, handleAddToBag }) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage numBagItems={numBagItems} />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'men/products?/:productId?',
      element: (
        <AllProductsPage
          key={uuidv4()}
          category="men's clothing"
          numBagItems={numBagItems}
          handleAddToBag={handleAddToBag}
        />
      ),
    },
    {
      path: 'women/products?/:productId?',
      element: (
        <AllProductsPage
          key={uuidv4()}
          category="women's clothing"
          numBagItems={numBagItems}
          handleAddToBag={handleAddToBag}
        />
      ),
    },
    {
      path: 'bag',
      element: <ShoppingBag bagItems={bagItems} numBagItems={numBagItems} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

Router.propTypes = {
  bagItems: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
  numBagItems: PropTypes.number.isRequired,
  handleAddToBag: PropTypes.func.isRequired,
};

export default Router;
