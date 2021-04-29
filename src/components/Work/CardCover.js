import React from "react";
import ProjectCard from "./WorkItem/ProjectCard";

const CardCover = (results, tabState) => {
  console.log(tabState);
  if (tabState === 0) {
    console.log("this is all");
  } else if (tabState === 68) {
    console.log("this is industrial");
  } else {
    console.log("this is digital");
  }
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
