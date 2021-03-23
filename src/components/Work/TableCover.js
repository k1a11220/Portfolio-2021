import React from "react";
import ProjectTable from "./WorkItem/ProjectTable";

const TableCover = (results) => {
  return (
    <section className="scene_element--fadein scene_element">
      {results.results.map((post) => {
        return (
          <ProjectTable
            title={post.title}
            links={post.links}
            company={post.company}
            year={post.year}
            background={post.background}
            tag={post.tag}
          />
        );
      })}
    </section>
  );
};

export default TableCover;
