import React, { useState } from "react";
import projectList from "../ProjectList";
import CardCover from "../components/Work/CardCover";
import styles from "./Work.module.css";
// import ME from "../media/me.png";
const Work = () => {
  const [tabLocation, setTabLocation] = useState(0);
  const [tabWidth, setTabwidth] = useState(66);
  const allSelected = () => {
    setTabLocation(0);
    setTabwidth(65);
  };
  const industrialSelected = () => {
    setTabLocation(68);
    setTabwidth(111);
  };
  const digitalSelected = () => {
    setTabLocation(182);
    setTabwidth(90);
  };
  return (
    <section className="container">
      <div className="title_wrapper">
        <div>
          {/* <h1 className="font_gradient">
            LET'S <br /> MAKE <br /> HISTORY
          </h1> */}
          <p className="font-md font-regular font-gradient">
            I'm Beomsoo Son, an Engineer and Designer based in Suwon, South
            Korea focused on Industrial Design engineering and Digital product
            design.
          </p>
        </div>
      </div>
      <ul className={styles.filter_wrapper}>
        <li
          onClick={allSelected}
          style={{
            color: tabLocation === 0 ? "#ffffff" : "#0a0a0a",
          }}
        >
          All
        </li>
        <li
          onClick={industrialSelected}
          style={{
            color: tabLocation === 68 ? "#ffffff" : "#0a0a0a",
          }}
        >
          Industrial
        </li>
        <li
          onClick={digitalSelected}
          style={{
            color: tabLocation === 182 ? "#ffffff" : "#0a0a0a",
          }}
        >
          Digital
        </li>
        <div
          className={styles.tab_indicator}
          style={{
            width: `${tabWidth}px`,
            transform: `translate(${tabLocation}px, -3.5px)`,
          }}
        ></div>
      </ul>
      <CardCover results={projectList} />
    </section>
  );
};

export default Work;
