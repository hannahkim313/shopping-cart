import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => (
  <>
    <h2 className={styles.hidden}>Footer</h2>
    <footer>
      <article className={styles.newsletter}>
        <div className={styles.message}>
          <h3>BECOME A MEMBER</h3>
          <p>
            Get free shipping, member-only discounts, and exclusive access to
            products when you join.
          </p>
        </div>
        <button className={styles.signUp} type="button">
          Sign up for free
        </button>
      </article>
      <article className={styles.links}>
        <h3 className={styles.hidden}>Helpful links</h3>
        <div className={styles.group}>
          <div className={styles.navLinks}>
            <div className={styles.navLinksSet}>
              <h3>SHOP</h3>
              <Link to="/men">Men</Link>
              <Link to="/women">Women</Link>
              <p>Kids</p>
              <p>Sale</p>
              <p>Gift Cards</p>
            </div>
            <div className={styles.navLinksSet}>
              <h3>GET HELP</h3>
              <p>Order Status</p>
              <p>Shipping & Delivery</p>
              <p>Order Cancellation</p>
              <p>Returns</p>
              <p>FAQs</p>
              <p>Contact Us</p>
            </div>
            <div className={styles.navLinksSet}>
              <h3>ABOUT US</h3>
              <p>Our Story</p>
              <p>News</p>
              <p>Careers</p>
            </div>
          </div>
          <div className={styles.socials}>
            <h3 className={styles.hidden}>Our socials</h3>
            <img
              className={styles.icon}
              src="/src/assets/images/youtube.svg"
              alt="Youtube icon"
            />
            <img
              className={styles.icon}
              src="/src/assets/images/instagram.svg"
              alt="Instagram icon"
            />
            <img
              className={styles.icon}
              src="/src/assets/images/tiktok.svg"
              alt="TikTok icon"
            />
            <img
              className={styles.icon}
              src="/src/assets/images/twitter.svg"
              alt="Twitter icon"
            />
            <img
              className={styles.icon}
              src="/src/assets/images/facebook.svg"
              alt="Facebook icon"
            />
          </div>
        </div>
        <div className={styles.group}>
          <a href="https://github.com/hannahkim313/shopping-cart">
            Made by Hannah Kim
          </a>
          <div className={styles.specialLinks}>
            <h3 className={styles.hidden}>Special links</h3>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Accessibility Policy</p>
          </div>
        </div>
      </article>
    </footer>
  </>
);

export default Footer;
