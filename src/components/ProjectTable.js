import React from "react";
import projectList from "../ProjectList";
import styles from "./ProjectTable.module.css";

const ProjectTable = (props) => {
  return (
    <div className={styles.table_container}>
      <table>
        <tr className={styles.table_wrapper}>
          <td>{props.year}</td>
          <td>{props.company}</td>
          <td>{props.title}</td>
          <td className={styles.last}>{props.tag}</td>
        </tr>
      </table>
    </div>
  );
};

export default ProjectTable;
