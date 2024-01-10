import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">
      <img src="../src/assets/images/logo.png" alt="Shopping bag icon" />
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="men">Men</Link>
        </li>
        <li>
          <Link to="women">Women</Link>
        </li>
        <li>Kids</li>
        <li>Sale</li>
      </ul>
    </nav>
    <div>
      <img src="../src/assets/images/account.svg" alt="My account" />
      <img src="../src/assets/images/favorite.svg" alt="My favorites" />
      <Link to="bag">
        <img
          src="../src/assets/images/shopping-bag.svg"
          alt="My shopping bag"
        />
      </Link>
    </div>
  </header>
);

export default Header;
