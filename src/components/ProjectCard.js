import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={styles.card_wrapper}>
      <h2>{props.title}</h2>
      <h3>
        {props.company} - {props.year}
      </h3>
    </div>
  );
};

export default ProjectCard;
