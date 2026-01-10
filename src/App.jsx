import style from "./style.module.css";
import Header from "./Components/header/header";
import Main from "./Components/Text/text";
import Footer from "./Components/Footer/footer";
import { sections } from "./Components/header/sections";

function App() {
  return (
    <>
      <div id={sections.home}>
        <Header></Header>
        <section className={style.fundoBanner}>
          <div className={style.bannerLogo}>
            <div className={style.boxMain}>
              <img
                src={"/logo-main.svg"}
                alt="Logo"
                className={style.logoMain}
              />
              <br />
              <span className={style.boxText}>Livre para aprender,</span>
              <br />
              <span className={style.boxTextSec}>Livre para crescer</span>
            </div>
          </div>
        </section>
      </div>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
