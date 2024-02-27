import { useState } from 'react';
import Router from '../Router/Router';
import './App.module.css';

const App = () => {
  const [bagItems, setBagItems] = useState([]);

  const handleAddToBag = (data) => {
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

  const handleQuantityChange = (id) => (e) => {
    const newValue = Number(e.target.value);
    const itemData = bagItems.find((item) => item.id === id);
    itemData.quantity = newValue;
    setBagItems([...bagItems]);
  };

  const handleRemoveFromBag = (id) => {
    setBagItems([...bagItems.filter((item) => item.id !== id)]);
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
      handleQuantityChange={handleQuantityChange}
      handleRemoveFromBag={handleRemoveFromBag}
    />
  );
};

export default App;
