import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './ShoppingBag.module.css';

const ShoppingBag = ({ numBagItems, bagItems }) => {
  const emptyContent = (
    <>
      <p>There are no items in your bag.</p>
      <div className={styles.links}>
        <Link className={styles.linkDark} to="/men">
          SHOP MEN
        </Link>
        <Link className={styles.linkDark} to="/women">
          SHOP WOMEN
        </Link>
      </div>
    </>
  );

  const checkoutContent = (
    <div className={styles.checkoutContainer}>
      <div className={styles.products}>
        {bagItems.map((data, index) => (
          // FIXME: If there are multiple quantities of the same product, map a single product card and increase the quantity by 1
          <>
            <article className={styles.productCard} key={uuidv4()}>
              <img className={styles.image} src={data.image} alt="" />
              <div className={styles.info}>
                <h2>{data.title}</h2>
                <label
                  className={styles.quantity}
                  htmlFor={`product-quantity-${data.id}`}
                >
                  Quantity
                  <select name="quantity" id={`product-quantity-${data.id}`}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </label>
                <div className={styles.buttons}>
                  <button type="button">
                    <img
                      src="/src/assets/images/favorite.svg"
                      alt="Move to Favorites"
                    />
                  </button>
                  <button type="button">
                    <img src="/src/assets/images/delete.svg" alt="Remove" />
                  </button>
                </div>
              </div>
              <p className={styles.price}>${data.price}</p>
            </article>
            {index < bagItems.length - 1 ? (
              <div className={styles.divider} />
            ) : (
              ''
            )}
          </>
        ))}
      </div>
      <div className={styles.summaryContainer}>
        <article className={styles.summary}>
          <h2>Order Summary</h2>
          <div className={styles.divider} />
          <div>
            <p>Subtotal</p>
            {/* FIXME: Calculate subtotal */}
            <p>$TEST</p>
          </div>
          <div>
            <p>Estimated Shipping & Handling</p>
            <p>-</p>
          </div>
          <div>
            <p>Estimated Tax</p>
            <p>-</p>
          </div>
          <div className={styles.divider} />
          <div>
            <p>Total</p>
            {/* FIXME: Calculate total */}
            <p>$TEST</p>
          </div>
          <div className={styles.divider} />
        </article>
        <button type="button">Checkout</button>
      </div>
    </div>
  );

  return (
    <>
      <Header numBagItems={numBagItems} />
      <main className={styles.main}>
        <h1>Your Bag</h1>
        {bagItems.length === 0 ? emptyContent : checkoutContent}
      </main>
      <Footer />
    </>
  );
};

ShoppingBag.propTypes = {
  numBagItems: PropTypes.number.isRequired,
  bagItems: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default ShoppingBag;
