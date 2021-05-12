import React from "react";
import ProjectCard from "./WorkItem/ProjectCard";

const CardCover = (results, tabState) => {
  return (
    <div className={`card_area scene_element--fadein scene_element`}>
      {results.results.map((post) => {
        return (
          <ProjectCard
            key={post.key}
            title={post.title}
            links={post.links}
            company={post.company}
            year={post.year}
            background={post.background}
            color={post.titleColor}
            tag={post.tag}
            category={post.category}
            lock={post.lock}
          />
        );
      })}
    </div>
  );
};

export default CardCover;
