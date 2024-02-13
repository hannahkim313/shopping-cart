import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage';
import AllProductsPage from '../AllProductsPage/AllProductsPage';
import ShoppingBag from '../ShoppingBag/ShoppingBag';
import HomePage from '../HomePage/HomePage';
import './App.module.css';

const App = () => {
  const [bagItems, setBagItems] = useState([]);

  const handleAddToBag = (data) => {
    setBagItems([...bagItems, data]);
    // TODO: Prevent more than 10 quantities of a product from being added to the bag (add an error message?)
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage numBagItems={bagItems.length} />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'men/products?/:productId?',
      element: (
        <AllProductsPage
          category="men's clothing"
          numBagItems={bagItems.length}
          handleAddToBag={handleAddToBag}
        />
      ),
    },
    {
      path: 'women/products?/:productId?',
      element: (
        <AllProductsPage
          category="women's clothing"
          numBagItems={bagItems.length}
          handleAddToBag={handleAddToBag}
        />
      ),
    },
    {
      path: 'bag',
      element: (
        <ShoppingBag numBagItems={bagItems.length} bagItems={bagItems} />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
