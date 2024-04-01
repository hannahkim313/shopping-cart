import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = ({ handleMobileMenu, isMobileMenuOpen }) => {
  const closeMobileMenu = () => handleMobileMenu(false);

  // TODO: When clicking on nav link in sidebar, close sidebar

  return (
    <aside
      className={`${styles.sidebar} ${isMobileMenuOpen ? styles.open : ''}`}
    >
      <button
        className={styles.closeButton}
        type="button"
        onClick={closeMobileMenu}
      >
        <img src="/src/assets/images/close.svg" alt="Close sidebar" />
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
            <img src="/src/assets/images/shopping-bag.svg" alt="" />
            <Link to="/bag" onClick={closeMobileMenu}>
              Bag
            </Link>
          </li>
          <li>
            <img src="/src/assets/images/favorite.svg" alt="" />
            <button type="button">Favorites</button>
          </li>
          <li>
            <img src="/src/assets/images/account.svg" alt="" />
            <button type="button">My Account</button>
          </li>
          <li>
            <img src="/src/assets/images/orders.svg" alt="" />
            <button type="button">Orders</button>
          </li>
          <li>
            <img src="/src/assets/images/store.svg" alt="" />
            <button type="button">Find a Store</button>
          </li>
          <li>
            <img src="/src/assets/images/help.svg" alt="" />
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
