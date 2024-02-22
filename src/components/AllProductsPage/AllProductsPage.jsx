import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import ProductPage from '../ProductPage/ProductPage';
import capitalize from '../../utils/capitalize';
import useFetchAPI from '../../hooks/useFetchAPI';
import styles from './AllProductsPage.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const AllProductsPage = ({
  category,
  numBagItems,
  isMaxQuantity,
  handleAddToBag,
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
      />
    );
  }

  return (
    <>
      <Header numBagItems={numBagItems} />
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
    </>
  );
};

AllProductsPage.propTypes = {
  category: PropTypes.string.isRequired,
  numBagItems: PropTypes.number.isRequired,
  isMaxQuantity: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
    .isRequired,
  handleAddToBag: PropTypes.func.isRequired,
};

export default AllProductsPage;
