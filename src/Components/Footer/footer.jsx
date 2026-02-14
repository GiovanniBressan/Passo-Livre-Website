import Localização from "./googleMaps/googlemaps";
import style from "./style.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={style.footerBox}>
        <div className={style.footerItem}>
          <h1
            style={{
              paddingLeft: "2.5rem",
            }}
          >
            Contatos
          </h1>
          <ul className={style.listUl}>
            <li className={style}>
              R. Celestino Júnior, 288 - São Francisco, Curitiba - PR
            </li>
            <li className={style}>Telefone: (41) 3323-8164</li>
            <li className={style}>Email: escolapassolivre@hotmail.com</li>
            <div className={style.socialMidia}>
              <a href="https://www.instagram.com/escolapassolivre/">
                <img
                  src={"/instagram.svg"}
                  alt="instagram"
                  className={style.socialMidia}
                />
              </a>
              <a
                href="https://www.facebook.com/passolivreescola/"
                target="_blank"
              >
                <img
                  src={"/facebook.svg"}
                  alt="Facebook"
                  target="_blank"
                  className={style.socialMidia}
                />
              </a>
            </div>
          </ul>
        </div>
        <div className={style.footerItem}>
          <h1
            style={{
              paddingLeft: "2.5rem",
            }}
          >
            Links
          </h1>
          <ul className={style.listUl}>
            <div>
              <a href="/">
                <li className={style.listagemFooter}>Home</li>
              </a>
            </div>
            <li className={style.listagemFooter}>Quem Somos</li>
            <li className={style.listagemFooter}>Atividades</li>
            <li className={style.listagemFooter}>Contatos</li>
          </ul>
        </div>
        <div className={style.footerItem}>
          <h1
            style={{
              paddingLeft: "1rem",
              margin: 1,
            }}
          >
            Localização
          </h1>
          <Localização></Localização>
        </div>
      </div>
      <p
        style={{
          backgroundColor: "rgb(80, 111, 255)",
          margin: 0,
          textAlign: "center",
          color: "white",
        }}
        id="ano-atual"
      >
        Copyright © 2025 Passo Livre
      </p>
    </footer>
  );
}
