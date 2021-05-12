import React from "react";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = (props) => {
  const goals = props.goal.split(",");
  return (
    <article className={styles.container}>
      <div>
        <div className={styles.up_margin}></div>
        <p className="font-lg font-regular font-gray">{props.company}</p>
        <h2 className={`${styles.title} title_h1 font-regular`}>
          {props.title}
        </h2>
        <button className={styles.roleBtnText}>Design engineering</button>
        <button className={styles.roleBtnText}>Product design</button>
      </div>
      <div className={styles.info_wrapper}>
        <div className={styles.info_cover}>
          <h3 className="font-md font-regular">Summary</h3>
          <p className="font-light font-gray">{props.summary}</p>
        </div>
        <div className={styles.info_cover}>
          <h3 className="font-md font-regular">Project goals</h3>
          <p className="font-light font-gray">
            {goals[1]} <br />
            {goals[2]} <br />
            {goals[3]} <br />
            {goals[4]}
          </p>
        </div>
        {/* <h3 className={`${styles.details} font_light`}>{props.role}</h3> */}
      </div>
    </article>
  );
};

export default ProjectDetail;
