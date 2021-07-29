import React from "react";
import projectList from "../ProjectList";
import ProjectSummary from "../components/projects/ProjectSummary";
import { Article, Hero } from "../styles/Project.styles";
import LargeBox from "../components/projects/LargeBox";
import Share from "../components/projects/Share";

const Padintosh = () => {
  const projectNumber = 7;
  const currentProject = projectList[projectNumber];
  // const nextProject = projectList[projectNumber + 1];
  const prevProject = projectList[projectNumber - 1];
  return (
    <main>
      <Hero src={currentProject.background} />
      <Article>
        <ProjectSummary
          title={currentProject.title}
          company={currentProject.company}
          year={currentProject.year}
          summary={currentProject.summary}
          role={currentProject.role}
          goal={currentProject.goal}
          thumbnail={currentProject.background}
        />
        <LargeBox background="https://i.imgur.com/8Y0N3RP.png" />
        <LargeBox background="https://i.imgur.com/GH21oWV.png" />
        <LargeBox background="https://i.imgur.com/Npev8q1.png" />
        <LargeBox background="https://i.imgur.com/o2N6z4q.png" />
        <LargeBox background="https://i.imgur.com/wI27uyq.png" />
        <LargeBox background="https://i.imgur.com/9LJrwMB.png" />
        <LargeBox background="https://i.imgur.com/54VnpNw.png" />
        <LargeBox background="https://i.imgur.com/RBP2kxg.png" />
        <LargeBox background="https://i.imgur.com/mdJNHVC.png" />
        <Share
          prevLink={prevProject.links}
          nextLink="/"
          prevProject={prevProject.title}
          nextProject="Last Project"
        />
      </Article>
    </main>
  );
};

export default Padintosh;
