import React from "react";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.info} font_regular font_gray`}>
        {props.company}
      </h2>
      <p className={`${styles.title} title_h1 font_extraBold`}>{props.title}</p>
      <h3 className={`${styles.details} font_light`}>{props.details}</h3>
    </div>
  );
};

export default ProjectDetail;
