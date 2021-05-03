import React from "react";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = (props) => {
  return (
    <section className={styles.container}>
      <div>
        <h2 className="font_regular font_gray">{props.company}</h2>
        <p className={`${styles.title} title_h1 font_extraBold`}>
          {props.title}
        </p>
        <button className={styles.roleBtnText}>Design engineering</button>
        <button className={styles.roleBtnText}>Product design</button>
      </div>
      <div>
        <div className={styles.info_cover}>
          <h2>Summary</h2>
          <h3 className="font_light">{props.details}</h3>
        </div>
        <div className={styles.info_cover}>
          <h2>Project goals</h2>
          <h3 className="font_light">
            {props.goal}
            <br />
          </h3>
        </div>
        {/* <h3 className={`${styles.details} font_light`}>{props.role}</h3> */}
      </div>
    </section>
  );
};

export default ProjectDetail;
