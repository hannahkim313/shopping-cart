import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const HomePage = () => (
  <>
    <Header />
    <main className={styles.main}>
      <h1 className={styles.hidden}>Urban Thread home page</h1>
      <Banner />
      <div className={styles.images}>
        <div>
          <img
            className={styles.image}
            src="/src/assets/images/home-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.image}
            src="/src/assets/images/home-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.image}
            src="/src/assets/images/home-3.jpg"
            alt=""
          />
        </div>
      </div>
      <h2 className={styles.hidden}>Brand motto</h2>
      <div className={styles.motto}>
        <p className={styles.main}>
          ELEVATE YOUR STYLE
          <br />
          EMBRACE YOUR ESSENCE
        </p>
        <p className={styles.sub}>
          Join us on a journey of self-discovery through fashion,
          <br />
          where every outfit becomes a statement of your true self.
        </p>
        <div className={styles.navLinks}>
          <Link className={styles.linkDark} to="/men">
            SHOP MEN
          </Link>
          <Link className={styles.linkDark} to="/women">
            SHOP WOMEN
          </Link>
        </div>
      </div>
      <h2 className={styles.hidden}>How the brand began</h2>
      <aside className={styles.story}>
        <p className={styles.title}>
          Redefining fashion with every stitch since 1945
        </p>
        <div className={styles.content}>
          <div className={styles.col}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              facere, ad, laudantium molestias minima quaerat harum
              exercitationem eligendi doloribus, commodi vitae amet non. Sed sit
              alias dignissimos et perspiciatis libero id corporis explicabo,
              vel saepe veniam. Rerum saepe illo nulla provident, dolorum animi
              natus reprehenderit nesciunt autem iusto neque similique.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum tempore iusto rerum fugiat soluta sunt voluptatem,
              inventore perferendis quam id distinctio at sapiente nulla magni
              sequi animi accusantium est ipsam.
            </p>
          </div>
          <div className={styles.col}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              corporis fugiat alias expedita iure in dolore dolor nobis
              distinctio delectus adipisci mollitia voluptatem est quam eum
              corrupti id voluptate laboriosam maiores, nesciunt autem excepturi
              dolorem quaerat incidunt. Quos libero dolorem distinctio nobis
              fuga quod magni dolore. Odio fugit ut mollitia quo, fugiat dicta
              provident aliquid quam distinctio enim, adipisci animi, atque rem
              quod. Porro repellat asperiores ex vero facere inventore nam
              itaque unde. Eaque, eligendi.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              perspiciatis.
            </p>
          </div>
        </div>
      </aside>
    </main>
    <Footer />
  </>
);

export default HomePage;
