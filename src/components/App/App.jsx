import { useState } from 'react';
import Router from '../Router/Router';
import './App.module.css';

const App = () => {
  const [bagItems, setBagItems] = useState([]);

  const handleAddToBag = (data) => {
    // TODO: Prevent more than 10 quantities of a product from being added to the bag (add an error message?)

    const newItem = data;
    newItem.quantity = 1;

    const duplicateItemIndex = bagItems.findIndex(
      (currItem) => currItem.id === newItem.id
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

  return (
    <Router
      bagItems={bagItems}
      numBagItems={numBagItems}
      handleAddToBag={handleAddToBag}
    />
  );
};

export default App;
