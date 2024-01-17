import { Link } from 'react-router-dom';
import styles from './ShoppingBagEmpty.module.css';

const ShoppingBagEmpty = () => (
  <main className={styles.main}>
    <h1>Your bag</h1>
    <p>There are no items in your bag.</p>
    <div className={styles.links}>
      <Link className={styles.linkDark} to="/men">
        SHOP MEN
      </Link>
      <Link className={styles.linkDark} to="/women">
        SHOP WOMEN
      </Link>
    </div>
  </main>
);

export default ShoppingBagEmpty;
