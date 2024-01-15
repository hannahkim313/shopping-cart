import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import styles from './Page.module.css';

const Page = () => (
  <div className={styles.page}>
    <Header />
    <HomePage />
    <Footer />
  </div>
);

export default Page;
