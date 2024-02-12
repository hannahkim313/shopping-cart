import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ShoppingBagEmpty.module.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ShoppingBagEmpty = ({ numBagItems }) => (
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

ShoppingBagEmpty.propTypes = {
  numBagItems: PropTypes.number.isRequired,
};

export default ShoppingBagEmpty;
