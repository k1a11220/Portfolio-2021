import React from "react";
import projectList from "../ProjectList";
import ProjectSummary from "../components/projects/ProjectSummary";
import { Article, Hero, Text } from "../styles/Project.styles";
import LargeBox from "../components/projects/LargeBox";
import Share from "../components/projects/Share";

const OLED = () => {
  const projectNumber = 2;
  const currentProject = projectList[projectNumber];
  const nextProject = projectList[projectNumber + 1];
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
        <LargeBox background="https://i.imgur.com/N5bGFiu.jpg" />
        <LargeBox background="https://i.imgur.com/NLfmqPn.jpg" />
        <LargeBox background="https://i.imgur.com/BFF8Hel.jpg" />
        <LargeBox background="https://i.imgur.com/ZuVyet8.jpg" />
        <LargeBox background="https://i.imgur.com/ICIFfkE.jpg" />
        <LargeBox background="https://i.imgur.com/HuH0fSV.jpg" />
        <LargeBox background="https://i.imgur.com/7txi2EQ.jpg" />
        <Share
          prevLink={prevProject.links}
          nextLink={nextProject.links}
          prevProject={prevProject.title}
          nextProject={nextProject.title}
        />
      </Article>
    </main>
  );
};

export default OLED;
