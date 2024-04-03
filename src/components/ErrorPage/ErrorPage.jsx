import { Link } from 'react-router-dom';
import errorImg from '../../assets/images/404.jpg';
import styles from './ErrorPage.module.css';

const ErrorPage = () => (
  <div className={styles.contentContainer}>
    <main className={styles.main}>
      <h1 className={styles.hidden}>404 error</h1>
      <img className={styles.errorImg} src={errorImg} alt="" />
      <p className={styles.errorText}>Page not found</p>
      <Link className={styles.return} to="/">
        Return to the home page
      </Link>
    </main>
  </div>
);

export default ErrorPage;
