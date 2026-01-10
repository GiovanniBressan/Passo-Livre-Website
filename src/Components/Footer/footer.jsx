import Localização from "./googleMaps/googlemaps";
import style from "./style.module.css";
import { sections } from "../header/sections";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer id={sections.contatos}>
      <div className={style.footerBox}>
        <div className={style.footerItem}>
          <h1>Contatos</h1>
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
                  target="_blank"
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
          <h1>Links</h1>

          <nav className={style["listU2"]}>
            <div className={style["listU2"]}>
              <Link
                to={sections.home}
                smooth={true}
                duration={500}
                className={style.listagemFooter}
              >
                Home
              </Link>
              <Link
                to={sections.quemSomos}
                smooth={true}
                duration={500}
                className={style.listagemFooter}
              >
                Quem Somos
              </Link>
              <Link
                to={sections.atividades}
                smooth={true}
                duration={500}
                className={style.listagemFooter}
              >
                Atividades
              </Link>
              <Link
                to={sections.contatos}
                smooth={true}
                duration={500}
                className={style.listagemFooter}
              >
                Contatos
              </Link>
            </div>
          </nav>
        </div>
        <div className={style.footerItem}>
          <h1>Localização</h1>
          <Localização></Localização>
        </div>
      </div>
      <p
        style={{
          backgroundColor: "rgb(120, 145, 255)",
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
