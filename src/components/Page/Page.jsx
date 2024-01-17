import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Page.module.css';

const Page = ({ children }) => (
  <div className={styles.page}>
    <Header />
    {children}
    <Footer />
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
