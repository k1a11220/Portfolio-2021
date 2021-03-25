import React from "react";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = (props) => {
  return (
    <div className={styles.container}>
      <h2 className="font_regular font_gray">{props.company}</h2>
      <p className={`${styles.title} title_h1 font_extraBold`}>{props.title}</p>
      <span className={styles.info_cover}>
        <h3 className="font_regular font_italic">Goal </h3>
        <p className="font_light font_italic">: {props.goal}</p>
      </span>
      <span className={styles.info_cover}>
        <h3 className="font_regular font_italic">Role </h3>
        <p className="font_light font_italic">: {props.role}</p>
      </span>
      <h3 className={`${styles.details} font_light`}>{props.details}</h3>
    </div>
  );
};

export default ProjectDetail;
