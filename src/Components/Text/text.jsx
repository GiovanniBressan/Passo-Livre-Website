import style from "./style.module.css";
import { sections } from "../header/sections";

export default function Main() {
  return (
    <main>
      <section className={style.sectionBoxMain}>
        <div className={style.border} id={sections.quemSomos}>
          <h2 className={style.quemSomos}>Quem Somos</h2>
          <p className={style.text}>
            Estamos desde 1998, oferecendo um ambiente acolhedor para berçário,
            maternal e pré-escola, com horários estendidos pensados
            especialmente para facilitar a rotina das famílias. Acreditamos que
            o amor é a base para o aprendizado e, por isso, cuidamos de cada
            detalhe: da segurança à alimentação, do brincar ao aprender.Aqui,
            cada criança é recebida com carinho, respeito e atenção individual.
            Somos mais que um Centro de Educação Infantil — somos um espaço onde
            os pequenos podem crescer livres, seguros e felizes.Nosso maior
            orgulho é ver nossos pequenos explorando o mundo com confiança.
            Afinal, aqui, eles estão livres para aprender e livres para crescer.
          </p>
        </div>
      </section>
      <section className={style.sectionBoxMainSec} id={sections.atividades}>
        <div className={style.boxSect}>
          <div className={style.bercarioBox}>
            <h3 className={style.titulo}>Berçário</h3>
            <p className={style.bercarioText}>
              É um espaço cuidadosamente planejado para atender às necessidades,
              ritmos e possibilidades interativas dos bebês a partir dos 4 meses
              de idade. Aqui, priorizamos o acolhimento, o cuidado afetuoso e a
              construção de vínculos seguros entre educadores, bebês e suas
              famílias. <br />
              Com ambientes tranquilos, seguros e estimulantes, oferecemos
              momentos de descanso em salas confortáveis preparadas para a
              soneca, além de atividades leves e prazerosas que favorecem o
              desenvolvimento sensorial, motor e emocional dos pequenos.
              Acreditamos que o brincar, mesmo nos primeiros meses de vida, é
              essencial para o aprendizado. <br />
              Por isso, promovemos experiências com materiais diversos, música,
              leitura e estímulos psicomotores, respeitando o tempo e o ritmo de
              cada criança. Nosso objetivo é oferecer um espaço onde os bebês
              possam crescer com liberdade, carinho e segurança — sempre em
              parceria com as famílias.
            </p>
          </div>
          <div className={style.itemMain}>
            <img
              src={"/berçario-1_1.svg"}
              alt="bebês no berçário"
              className={style.bercarioImg}
            />
          </div>
        </div>
      </section>
      <section className={style.sectionBoxMainSec}>
        <div className={style.boxSect}>
          <div className={style.bercarioBox}>
            <h3 className={style.titulo}>Maternal</h3>
            <p className={style.bercarioText}>
              Acolhemos as crianças em sua nova fase de descobertas marcantes —
              um momento em que a curiosidade se intensifica, os primeiros
              vínculos sociais se fortalecem e o brincar ganha ainda mais
              significado. <br />
              Com um ambiente seguro, estimulante e afetuoso, propomos vivências
              que respeitam o ritmo e as particularidades de cada criança.
              Através de atividades lúdicas, artísticas e psicomotoras,
              promovemos o desenvolvimento da linguagem, da autonomia, da
              coordenação e das relações interpessoais. Nosso espaço conta com
              áreas planejadas para a leitura, movimento e brincadeiras livres,
              além do uso de materiais pedagógicos que despertam a imaginação e
              favorecem a aprendizagem de forma natural e prazerosa. Valorizamos
              a escuta sensível e o cuidado individualizado, sempre em parceria
              com as famílias, construindo juntos uma base sólida para o
              crescimento saudável e feliz.
            </p>
          </div>
          <div className={style.itemMain}>
            <img
              src={"/pre-1.svg"}
              alt="crianças maternal"
              className={style.bercarioImg}
            />
          </div>
        </div>
      </section>
      <section className={style.sectionBoxMainSec}>
        <div className={style.boxSect}>
          <div className={style.bercarioBox}>
            <h3 className={style.titulo}>Pré-Escola</h3>
            <p className={style.bercarioText}>
              A Pré-escola é uma fase de consolidação de habilidades e
              preparação para os próximos passos da vida escolar.
              <br />
              Nesta etapa, Estruturamos uma rotina que favorece o
              desenvolvimento da autonomia, da linguagem, da coordenação motora,
              do pensamento lógico e das habilidades socioemocionais.Onde as
              crianças são convidadas a explorar o mundo ao seu redor com mais
              autonomia e participação, por meio de jogos, histórias, músicas,
              experimentações artísticas e brincadeiras dirigidas.
              <br />
              Tudo isso em um ambiente acolhedor, seguro e planejado para
              promover o protagonismo infantil, respeitando os interesses e o
              ritmo de cada criança. Trabalhamos lado a lado com as famílias
              para garantir uma transição tranquila e enriquecedora entre a
              educação infantil e o ensino fundamental.
            </p>
          </div>
          <div className={style.itemMain}>
            <img
              src={"/pre-2.svg"}
              alt="crianças"
              className={style.bercarioImg}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
