import React from "react";
import ProjectTable from "./ProjectTable";

const TableCover = (results) => {
  return (
    <section>
      {results.results.map((post) => {
        return (
          <ProjectTable
            title={post.title}
            links={post.links}
            company={post.company}
            year={post.year}
            background={post.background}
          />
        );
      })}
    </section>
  );
};

export default TableCover;
