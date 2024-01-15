import styles from './Banner.module.css';

const Banner = () => (
  <>
    <h2 className={styles.hidden}>Announcements</h2>
    <div className={styles.banner}>
      <p className={styles.text}>FREE SHIPPING ON ORDERS $50+</p>
    </div>
  </>
);

export default Banner;
