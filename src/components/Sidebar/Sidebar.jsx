import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import closeImg from '../../assets/images/close.svg';
import bagImg from '../../assets/images/shopping-bag.svg';
import favoriteImg from '../../assets/images/favorite.svg';
import accountImg from '../../assets/images/account.svg';
import ordersImg from '../../assets/images/orders.svg';
import storeImg from '../../assets/images/store.svg';
import helpImg from '../../assets/images/help.svg';
import styles from './Sidebar.module.css';

const Sidebar = ({ handleMobileMenu, isMobileMenuOpen }) => {
  const closeMobileMenu = () => handleMobileMenu(false);

  return (
    <aside
      className={`${styles.sidebar} ${isMobileMenuOpen ? styles.open : ''}`}
    >
      <button
        className={styles.closeButton}
        type="button"
        onClick={closeMobileMenu}
      >
        <img src={closeImg} alt="Close sidebar" />
      </button>
      <nav>
        <ul className={styles.links}>
          <li>
            <Link to="/men" onClick={closeMobileMenu}>
              Men
            </Link>
          </li>
          <li>
            <Link to="/women" onClick={closeMobileMenu}>
              Women
            </Link>
          </li>
          <li>
            <button type="button">Kids</button>
          </li>
          <li>
            <button type="button">Sale</button>
          </li>
        </ul>
        <div className={styles.divider} />
        <ul className={styles.links}>
          <li>
            <img src={bagImg} alt="" />
            <Link to="/bag" onClick={closeMobileMenu}>
              Bag
            </Link>
          </li>
          <li>
            <img src={favoriteImg} alt="" />
            <button type="button">Favorites</button>
          </li>
          <li>
            <img src={accountImg} alt="" />
            <button type="button">My Account</button>
          </li>
          <li>
            <img src={ordersImg} alt="" />
            <button type="button">Orders</button>
          </li>
          <li>
            <img src={storeImg} alt="" />
            <button type="button">Find a Store</button>
          </li>
          <li>
            <img src={helpImg} alt="" />
            <button type="button">Help</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  handleMobileMenu: PropTypes.func.isRequired,
  isMobileMenuOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
