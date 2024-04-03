import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import accountImg from '../../assets/images/account.svg';
import favoriteImg from '../../assets/images/favorite.svg';
import bagImg from '../../assets/images/shopping-bag.svg';
import menuImg from '../../assets/images/menu.svg';
import styles from './Header.module.css';

const Header = ({ numBagItems, handleMobileMenu }) => {
  const openMobileMenu = () => handleMobileMenu(true);

  return (
    <header>
      <Link to="/">
        <img
          className={styles.logo}
          src={logoImg}
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
          <img className={styles.icon} src={accountImg} alt="My account" />
        </button>
        <button type="button">
          <img className={styles.icon} src={favoriteImg} alt="My favorites" />
        </button>
        <div className={styles.bag}>
          <Link to="/bag">
            <img className={styles.icon} src={bagImg} alt="My shopping bag" />
          </Link>
          {numBagItems > 0 && <p className={styles.bagCount}>{numBagItems}</p>}
        </div>
      </div>
      <button
        className={styles.mobileMenu}
        type="button"
        onClick={openMobileMenu}
      >
        <img src={menuImg} alt="Sidebar menu" />
      </button>
    </header>
  );
};

Header.propTypes = {
  numBagItems: PropTypes.number.isRequired,
  handleMobileMenu: PropTypes.func.isRequired,
};

export default Header;
