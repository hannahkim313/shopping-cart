import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './ShoppingBag.module.css';

const ShoppingBag = ({
  bagItems,
  numBagItems,
  handleQuantityChange,
  handleRemoveFromBag,
}) => {
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

  const sum = (prices = []) =>
    prices.length === 0 ? 0 : prices.reduce((a, b) => a + b).toFixed(2);

  const checkoutContent = () => (
    <div className={styles.checkoutContainer}>
      <div className={styles.products}>
        {bagItems.map((data, index) => (
          <Fragment key={uuidv4()}>
            <article className={styles.productCard}>
              <img className={styles.image} src={data.image} alt="" />
              <div className={styles.info}>
                <h2>{data.title}</h2>
                <label
                  className={styles.quantity}
                  htmlFor={`productQuantity-${data.id}`}
                >
                  Quantity
                  <select
                    name="quantity"
                    id={`productQuantity-${data.id}`}
                    defaultValue={data.quantity}
                    onChange={handleQuantityChange(data.id)}
                  >
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
                  <button
                    type="button"
                    aria-label="Remove"
                    onClick={() => handleRemoveFromBag(data.id)}
                  >
                    <img src="/src/assets/images/delete.svg" alt="Remove" />
                  </button>
                </div>
              </div>
              <p className={styles.price}>${data.price.toFixed(2)}</p>
            </article>
            {index < bagItems.length - 1 ? (
              <div className={styles.divider} />
            ) : (
              ''
            )}
          </Fragment>
        ))}
      </div>
      <div className={styles.summaryContainer}>
        <article className={styles.summary}>
          <h2>Order Summary</h2>
          <div className={styles.divider} />
          <div>
            <p>Subtotal</p>
            <p>${sum(bagItems.map((data) => data.price * data.quantity))}</p>
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
            <p>${sum(bagItems.map((data) => data.price * data.quantity))}</p>
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
        {numBagItems === 0 ? emptyContent : checkoutContent()}
      </main>
      <Footer />
    </>
  );
};

ShoppingBag.propTypes = {
  bagItems: PropTypes.oneOfType([PropTypes.array]).isRequired,
  numBagItems: PropTypes.number.isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
  handleRemoveFromBag: PropTypes.func.isRequired,
};

export default ShoppingBag;
