import PropTypes from 'prop-types';
import styles from './AllProductsPage.module.css';
import capitalize from '../../utils/capitalize';

const AllProductsPage = ({ category }) => (
  <main>
    <h1>{capitalize(category)}</h1>
    <section className={styles.products}>
      <h2 className={styles.hidden}>All products</h2>
      {/* TODO:
          Implement logic that maps out <ProductCard /> components for each
          product in a given category
      */}
    </section>
  </main>
);

AllProductsPage.propTypes = {
  category: PropTypes.string.isRequired,
};

export default AllProductsPage;
