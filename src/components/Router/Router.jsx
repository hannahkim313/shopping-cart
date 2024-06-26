import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ErrorPage from '../ErrorPage/ErrorPage';
import AllProductsPage from '../AllProductsPage/AllProductsPage';
import ShoppingBag from '../ShoppingBag/ShoppingBag';

const Router = ({
  bagItems,
  numBagItems,
  isMaxQuantity,
  handleAddToBag,
  handleQuantityChange,
  handleRemoveFromBag,
  handleMobileMenu,
  isMobileMenuOpen,
}) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <HomePage
          numBagItems={numBagItems}
          handleMobileMenu={handleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: 'men/products?/:productId?',
      element: (
        <AllProductsPage
          key={uuidv4()}
          category="men's clothing"
          numBagItems={numBagItems}
          isMaxQuantity={isMaxQuantity}
          handleAddToBag={handleAddToBag}
          handleMobileMenu={handleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
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
          isMaxQuantity={isMaxQuantity}
          handleAddToBag={handleAddToBag}
          handleMobileMenu={handleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      ),
    },
    {
      path: 'bag',
      element: (
        <ShoppingBag
          bagItems={bagItems}
          numBagItems={numBagItems}
          handleQuantityChange={handleQuantityChange}
          handleRemoveFromBag={handleRemoveFromBag}
          handleMobileMenu={handleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

Router.propTypes = {
  bagItems: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
  numBagItems: PropTypes.number.isRequired,
  isMaxQuantity: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
    .isRequired,
  handleAddToBag: PropTypes.func.isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
  handleRemoveFromBag: PropTypes.func.isRequired,
  handleMobileMenu: PropTypes.func.isRequired,
  isMobileMenuOpen: PropTypes.bool.isRequired,
};

export default Router;
