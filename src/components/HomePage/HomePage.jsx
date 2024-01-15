import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import Banner from '../Banner/Banner';

const HomePage = () => (
  <main className={styles.main}>
    <Banner />
    <div className={styles.images}>
      <div>
        <img
          className={styles.image}
          src="../src/assets/images/home-1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className={styles.image}
          src="../src/assets/images/home-2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className={styles.image}
          src="../src/assets/images/home-3.jpg"
          alt=""
        />
      </div>
    </div>
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
        <Link to="men">SHOP MEN</Link>
        <Link to="women">SHOP WOMEN</Link>
      </div>
    </div>
    <aside className={styles.story}>
      <p className={styles.title}>
        Redefining fashion with every stitch since 1945
      </p>
      <div className={styles.content}>
        <div className={styles.col}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            facere, ad, laudantium molestias minima quaerat harum exercitationem
            eligendi doloribus, commodi vitae amet non. Sed sit alias
            dignissimos et perspiciatis libero id corporis explicabo, vel saepe
            veniam. Rerum saepe illo nulla provident, dolorum animi natus
            reprehenderit nesciunt autem iusto neque similique.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            tempore iusto rerum fugiat soluta sunt voluptatem, inventore
            perferendis quam id distinctio at sapiente nulla magni sequi animi
            accusantium est ipsam.
          </p>
        </div>
        <div className={styles.col}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            corporis fugiat alias expedita iure in dolore dolor nobis distinctio
            delectus adipisci mollitia voluptatem est quam eum corrupti id
            voluptate laboriosam maiores, nesciunt autem excepturi dolorem
            quaerat incidunt. Quos libero dolorem distinctio nobis fuga quod
            magni dolore. Odio fugit ut mollitia quo, fugiat dicta provident
            aliquid quam distinctio enim, adipisci animi, atque rem quod. Porro
            repellat asperiores ex vero facere inventore nam itaque unde. Eaque,
            eligendi.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            perspiciatis.
          </p>
        </div>
      </div>
    </aside>
  </main>
);

export default HomePage;
