import React, { useState } from "react";
import LargeBox from "../components/LargeBox";
import styles from "./Work.module.css";
import projectList from "../ProjectList";
import CardCover from "../components/CardCover";
import TableCover from "../components/TableCover";

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
      <LargeBox
        title="LET'S MAKE HISTORY"
        details="I'm Beomsoo Son, an engineer/designer based in Suwon, South Korea
        focused on Industrial Design & Engineering and Product Design."
      />
      <div className={styles.stateBtn_wrapper}>
        <button className={styles.stateBtn} onClick={showCard}>
          Card View
        </button>
        <button className={styles.stateBtn} onClick={hideCard}>
          List View
        </button>
      </div>
      {list === true ? <TableCover results={projectList} /> : null}
      {card === true ? <CardCover results={projectList} /> : null}
    </section>
  );
};

export default Work;
