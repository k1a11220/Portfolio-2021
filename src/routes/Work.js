import React, { useState } from "react";
import projectList from "../ProjectList";
import CardCover from "../components/Work/CardCover";
import TableCover from "../components/Work/TableCover";

const Work = () => {
  const [card, setCard] = useState(true);
  const [list, setList] = useState(false);

  const hideCard = () => {
    setCard(false);
    setList(true);
  };
  const showCard = () => {
    setCard(true);
    setList(false);
  };
  return (
    <section className="container">
      <div className="title_wrapper">
        <h1 className="font_gradient">
          LET'S <br /> MAKE <br /> HISTORY
        </h1>
        <h3 className="font_light">
          I'm Beomsoo Son, an engineer/designer based in South Korea, <br />
          focused on Industrial Design & Engineering and Product Design.
        </h3>
      </div>

      {/* <div className={styles.stateBtn_wrapper}>
        <button className={styles.stateBtn} onClick={showCard}>
          Card View
        </button>
        <button className={styles.stateBtn} onClick={hideCard}>
          List View
        </button>
      </div> */}
      {list === true ? <TableCover results={projectList} /> : null}
      {card === true ? <CardCover results={projectList} /> : null}
    </section>
  );
};

export default Work;
