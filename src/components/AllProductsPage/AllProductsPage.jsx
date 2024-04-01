import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import ProductPage from '../ProductPage/ProductPage';
import capitalize from '../../utils/capitalize';
import useFetchAPI from '../../hooks/useFetchAPI';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import styles from './AllProductsPage.module.css';

const AllProductsPage = ({
  category,
  numBagItems,
  isMaxQuantity,
  handleAddToBag,
  handleMobileMenu,
  isMobileMenuOpen,
}) => {
  const url = 'https://fakestoreapi.com/products';
  const { data, loading, errorState } = useFetchAPI(url);
  const { productId } = useParams();

  if (data.length > 0 && productId) {
    return (
      <ProductPage
        data={data[productId - 1]}
        numBagItems={numBagItems}
        isMaxQuantity={isMaxQuantity}
        id={Number(productId)}
        handleAddToBag={handleAddToBag}
        handleMobileMenu={handleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
    );
  }

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
        <h1>{capitalize(category)}</h1>
        <section className={styles.products}>
          <h2 className={styles.hidden}>All products</h2>
          {loading && <p>Loading products...</p>}
          {errorState && (
            <p>
              Oops! Something went wrong while fetching data. Please try again
              later.
            </p>
          )}
          {data.length > 0 &&
            data.map(
              (product) =>
                product.category === category && (
                  <ProductCard
                    key={uuidv4()}
                    category={category}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                  />
                )
            )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

AllProductsPage.propTypes = {
  category: PropTypes.string.isRequired,
  numBagItems: PropTypes.number.isRequired,
  isMaxQuantity: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
    .isRequired,
  handleAddToBag: PropTypes.func.isRequired,
  handleMobileMenu: PropTypes.func.isRequired,
  isMobileMenuOpen: PropTypes.bool.isRequired,
};

export default AllProductsPage;
