import style from "./style.module.css";
import { Link } from "react-scroll";
import { sections } from "./sections";

export default function Header() {
  return (
    <header className={style}>
      <div
        className={style.menu}
        style={{ transition: "all .5s", zIndex: "20" }}
      >
        <nav className={style["lista-nav"]}>
          <div className={style["lista-nav"]}>
            <Link
              to={sections.home}
              smooth={true}
              duration={500}
              className={style.listagem}
            >
              Home
            </Link>
            <Link
              to={sections.quemSomos}
              smooth={true}
              duration={500}
              className={style.listagem}
            >
              Quem Somos
            </Link>
            <Link
              to={sections.atividades}
              smooth={true}
              duration={500}
              className={style.listagem}
            >
              Atividades
            </Link>
            <Link
              to={sections.contatos}
              smooth={true}
              duration={500}
              className={style.listagem}
            >
              Contatos
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
