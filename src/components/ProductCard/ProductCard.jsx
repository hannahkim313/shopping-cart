import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ id, title, price, image }) => (
  <article className={styles.product}>
    <Link to={`products/${id}`}>
      <img className={styles.productImg} src={image} alt="" />
      <h3>{title}</h3>
    </Link>
    <p>${price.toFixed(2)}</p>
  </article>
);

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
