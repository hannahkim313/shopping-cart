import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import StarRating from '../StarRating/StarRating';
import Sidebar from '../Sidebar/Sidebar';
import styles from './ProductPage.module.css';

const ProductPage = ({
  data,
  numBagItems,
  isMaxQuantity,
  id,
  handleAddToBag,
  handleMobileMenu,
  isMobileMenuOpen,
}) => {
  const sendProductData = () => handleAddToBag(data);

  return (
    <div
      className={`${styles.contentContainer} ${
        isMobileMenuOpen ? styles.overflow : ''
      }`}
    >
      <Header numBagItems={numBagItems} handleMobileMenu={handleMobileMenu} />
      <Sidebar
        handleMobileMenu={handleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <main className={styles.main}>
        <img className={styles.productImg} src={data.image} alt="" />
        <div className={styles.productInfoContainer}>
          <div className={styles.topInfoContainer}>
            <h1>{data.title}</h1>
            <h2 className={styles.hidden}>Reviews</h2>
            <h3 className={styles.hidden}>Rating: {data.rating.rate}</h3>
            <div className={styles.rating}>
              <div className={styles.stars}>
                <StarRating rating={data.rating.rate} />
              </div>
              <h3 className={styles.hidden}>Number of reviews</h3>
              <p>({data.rating.count})</p>
            </div>
            <p className={styles.price}>${data.price.toFixed(2)}</p>
          </div>
          <div className={styles.divider} />
          <h2 className={styles.hidden}>Description</h2>
          <p className={styles.productDescription}>{data.description}</p>
          <div className={styles.buttons}>
            {isMaxQuantity(id) && (
              <p className={styles.quantityError}>
                You have reached the quantity limit.
              </p>
            )}
            <button
              className={styles.add}
              type="button"
              disabled={isMaxQuantity(id)}
              onClick={sendProductData}
            >
              Add to bag
            </button>
            <button className={styles.favorite} type="button">
              Favorite
              <img src="/src/assets/images/favorite.svg" alt="" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

ProductPage.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  numBagItems: PropTypes.number.isRequired,
  isMaxQuantity: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
    .isRequired,
  id: PropTypes.number.isRequired,
  handleAddToBag: PropTypes.func.isRequired,
  handleMobileMenu: PropTypes.func.isRequired,
  isMobileMenuOpen: PropTypes.bool.isRequired,
};

export default ProductPage;
