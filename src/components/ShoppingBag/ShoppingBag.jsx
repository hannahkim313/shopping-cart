import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ShoppingBag.module.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ShoppingBag = ({ numBagItems }) => (
  <>
    <Header numBagItems={numBagItems} />
    <main className={styles.main}>
      <h1>Your Bag</h1>
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
    <Footer />
  </>
);

ShoppingBag.propTypes = {
  numBagItems: PropTypes.number.isRequired,
};

export default ShoppingBag;
