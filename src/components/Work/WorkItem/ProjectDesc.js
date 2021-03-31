import React from "react";
import styles from "./ProjectDesc.module.css";

const ProjectDesc = (props) => {
  return (
    <div className={styles.desc_container}>
      <div className={styles.title}>
        <h2 className="">{props.title}</h2>
      </div>
      <div>
        <h3 className="font_light">{props.desc_1}</h3>
        <h3 className="font_light">{props.desc_2}</h3>
      </div>
    </div>
  );
};

export default ProjectDesc;
