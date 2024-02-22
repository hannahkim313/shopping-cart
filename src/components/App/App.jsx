import { useState } from 'react';
import Router from '../Router/Router';
import './App.module.css';

const App = () => {
  const [bagItems, setBagItems] = useState([]);

  const handleAddToBag = (data) => {
    // FIXME: Prevent API call every time a product is added to the bag

    const newItem = data;
    newItem.quantity = 1;

    const duplicateItemIndex = bagItems.findIndex(
      (item) => item.id === newItem.id
    );

    if (duplicateItemIndex > -1) {
      const duplicateItem = bagItems[duplicateItemIndex];
      duplicateItem.quantity += 1;
      setBagItems([...bagItems]);
    } else {
      setBagItems([...bagItems, newItem]);
    }
  };

  const numBagItems = bagItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  const isMaxQuantity = (id) => {
    const product = bagItems.find((item) => item.id === id);

    return !product ? false : product.quantity === 10;
  };

  return (
    <Router
      bagItems={bagItems}
      numBagItems={numBagItems}
      isMaxQuantity={isMaxQuantity}
      handleAddToBag={handleAddToBag}
    />
  );
};

export default App;
