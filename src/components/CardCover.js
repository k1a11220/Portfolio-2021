import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "../routes/Work.module.css";

const CardCover = (results) => {
  return (
    <div className={styles.card_area}>
      {results.results.map((post) => {
        return (
          <ProjectCard
            title={post.title}
            links={post.links}
            company={post.company}
            year={post.year}
            background={post.background}
            color={post.titleColor}
          />
        );
      })}
    </div>
  );
};

export default CardCover;
