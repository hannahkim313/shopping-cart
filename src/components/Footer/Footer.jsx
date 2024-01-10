import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <article>
      <div>
        <h2>BECOME A MEMBER</h2>
        <p>
          Get free shipping, member-only discounts, and exclusive access to
          products when you join.
        </p>
      </div>
      <button type="button">Sign up for free</button>
    </article>
    <article>
      <h2>Helpful links</h2>
      <div>
        <div>
          <div>
            <h3>SHOP</h3>
            <Link to="men">Men</Link>
            <Link to="women">Women</Link>
            <p>Kids</p>
            <p>Sale</p>
            <p>Gift Cards</p>
          </div>
          <div>
            <h3>GET HELP</h3>
            <p>Order Status</p>
            <p>Shipping and Delivery</p>
            <p>Order Cancellation</p>
            <p>Returns</p>
            <p>FAQs</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h3>ABOUT US</h3>
            <p>Our Story</p>
            <p>News</p>
            <p>Careers</p>
          </div>
        </div>
        <div>
          <h3>Our socials</h3>
          <img src="../src/assets/images/youtube.svg" alt="Youtube icon" />
          <img src="../src/assets/images/instagram.svg" alt="Instagram icon" />
          <img src="../src/assets/images/tiktok.svg" alt="TikTok icon" />
          <img src="../src/assets/images/twitter.svg" alt="Twitter icon" />
          <img src="../src/assets/images/facebook.svg" alt="Facebook icon" />
        </div>
      </div>
      <div>
        <a href="https://github.com/hannahkim313/shopping-cart">
          Made by Hannah Kim
        </a>
        <div>
          <h3>Special links</h3>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Accessibility Policy</p>
        </div>
      </div>
    </article>
  </footer>
);

export default Footer;
