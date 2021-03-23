import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  const links = props.links;
  const title = props.title;
  const company = props.company;
  const year = props.year;
  const background = props.background;
  const color = props.color;

  return (
    <div
      className={styles.card_wrapper}
      style={{
        backgroundImage: `url("${background}")`,
      }}
    >
      <Link to={links}>
        <div className={styles.card_contents}>
          <h2
            className={styles.title}
            style={{
              color: `${color}`,
            }}
          >
            {title}
          </h2>
          <h3
            className={styles.info}
            style={{
              color: `${color}`,
            }}
          >
            {company} - {year}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
