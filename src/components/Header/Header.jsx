import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ numBagItems }) => (
  <header>
    <Link to="/">
      <img
        className={styles.logo}
        src="/src/assets/images/logo.png"
        alt="Urban Thread home page"
      />
    </Link>
    <nav className={styles.navLinksProducts}>
      <ul>
        <li>
          <Link to="/men">Men</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li>
          <button type="button">Kids</button>
        </li>
        <li>
          <button type="button">Sale</button>
        </li>
      </ul>
    </nav>
    <div className={styles.navLinksPages}>
      <button type="button">
        <img
          className={styles.icon}
          src="/src/assets/images/account.svg"
          alt="My account"
        />
      </button>
      <button type="button">
        <img
          className={styles.icon}
          src="/src/assets/images/favorite.svg"
          alt="My favorites"
        />
      </button>
      <div className={styles.bag}>
        <Link to="/bag">
          <img
            className={styles.icon}
            src="/src/assets/images/shopping-bag.svg"
            alt="My shopping bag"
          />
        </Link>
        {numBagItems > 0 && <p className={styles.bagCount}>{numBagItems}</p>}
      </div>
    </div>
    <button className={styles.mobileMenu} type="button">
      <img src="/src/assets/images/menu.svg" alt="Sidebar menu" />
    </button>
  </header>
);

Header.propTypes = {
  numBagItems: PropTypes.number.isRequired,
};

export default Header;
