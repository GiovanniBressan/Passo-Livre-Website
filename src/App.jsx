import style from "./style.module.css";
import Header from "./Components/header/header";
import Main from "./Components/Text/text";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <>
      <Header></Header>
      <section className={style.fundoBanner}>
        <div className={style.bannerLogo}>
          <div className={style.boxMain}>
            <img src={"/logo-main.svg"} alt="Logo" className={style.logoMain} />
            <br />
            <span className={style.boxText}>Livre para aprender,</span>
            <br />
            <span className={style.boxTextSec}>Livre para crescer</span>
          </div>
        </div>
      </section>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
