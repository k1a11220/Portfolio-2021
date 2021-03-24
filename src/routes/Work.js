import React from "react";
import projectList from "../ProjectList";
import CardCover from "../components/Work/CardCover";
// import TableCover from "../components/Work/TableCover";
import ME from "../media/me.png";

const Work = () => {
  // const [card, setCard] = useState(true);
  // const [list, setList] = useState(false);

  // const hideCard = () => {
  //   setCard(false);
  //   setList(true);
  // };
  // const showCard = () => {
  //   setCard(true);
  //   setList(false);
  // };
  return (
    <section className="container">
      <div className="title_wrapper">
        <div>
          <h1 className="font_gradient">
            LET'S <br /> MAKE <br /> HISTORY
          </h1>
          <h2 className="font_regular font_gradient">
            I'm Beomsoo Son, an engineer/designer based in South Korea, focused
            on Industrial Design & Engineering and Product Design.
          </h2>
        </div>
        <div>
          <img className="me" src={ME} alt="Beomsoo (me)"></img>
        </div>
      </div>

      {/* <div className={styles.stateBtn_wrapper}>
        <button className={styles.stateBtn} onClick={showCard}>
          Card View
        </button>
        <button className={styles.stateBtn} onClick={hideCard}>
          List View
        </button>
      </div> */}
      {/* {list === true ? <TableCover results={projectList} /> : null}
      {card === true ? <CardCover results={projectList} /> : null} */}
      <CardCover results={projectList} />
    </section>
  );
};

export default Work;
