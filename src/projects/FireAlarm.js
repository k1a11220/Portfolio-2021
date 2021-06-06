import React from "react";
import projectList from "../ProjectList";
import ProjectSummary from "../components/projects/ProjectSummary";
import { Article, Hero, Text } from "../styles/Project.styles";
import LargeBox from "../components/projects/LargeBox";
import Share from "../components/projects/Share";

const Padintosh = () => {
  const projectNumber = 6;
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
        <LargeBox background="https://i.imgur.com/u9fWvx0.png" />
        <LargeBox background="https://i.imgur.com/KKzE9OK.jpg" />
        <LargeBox background="https://i.imgur.com/tRvchup.jpg" />
        <LargeBox background="https://i.imgur.com/6RV775y.png" />
        <LargeBox background="https://i.imgur.com/AsKzVes.jpg" />
        <LargeBox background="https://i.imgur.com/W8Yo2RF.png" />
        <LargeBox background="https://i.imgur.com/hUC7mT1.png" />
        <LargeBox background="https://i.imgur.com/7ZNpy3h.png" />
        <LargeBox background="https://i.imgur.com/kuAHmBe.png" />
        <LargeBox background="https://i.imgur.com/qRehrGX.png" />
        <LargeBox background="https://i.imgur.com/MVOzPe1.png" />
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

export default Padintosh;
