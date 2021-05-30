import React from "react";
import styles from "./ProjectTable.module.css";

const ProjectTable = (props) => {
  return (
    <div className={styles.table_container}>
      <div>{props.year}</div>
      <div>{props.company}</div>
      <div>{props.title}</div>
      <div className={styles.tag}>{props.tag}</div>
    </div>
  );
};

export default ProjectTable;
