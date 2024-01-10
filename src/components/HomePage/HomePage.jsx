import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const HomePage = () => (
  <>
    <Header />
    <Banner />
    <main>
      <div>
        <img src="../src/assets/images/home-1.jpg" alt="" />
        <img src="../src/assets/images/home-2.jpg" alt="" />
        <img src="../src/assets/images/home-3.jpg" alt="" />
      </div>
      <div>
        <p>ELEVATE YOUR STYLE, EMBRACE YOUR ESSENCE</p>
        <div>
          <Link to="men">SHOP MEN</Link>
          <Link to="women">SHOP WOMEN</Link>
        </div>
      </div>
      <aside>
        <p>Redefining fashion with every stitch since 1945.</p>
        <div>
          <div>
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
          <div>
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
