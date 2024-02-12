import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage';
import AllProductsPage from '../AllProductsPage/AllProductsPage';
import ShoppingBagEmpty from '../ShoppingBagEmpty/ShoppingBagEmpty';
import HomePage from '../HomePage/HomePage';
import './App.module.css';

const App = () => {
  const [bagItems, setBagItems] = useState([]);

  const handleAddToBag = (data) => {
    setBagItems([...bagItems, data]);
    // TODO: Update the shopping bag page to include products added to the bag using data and finish writing tests
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
      element: <ShoppingBagEmpty numBagItems={bagItems.length} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
