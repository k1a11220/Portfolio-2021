import React from "react";
import projectList from "../ProjectList";
import ProjectSummary from "../components/projects/ProjectSummary";
import { Article, Hero, Text } from "../styles/Project.styles";
import LargeBox from "../components/projects/LargeBox";
import Share from "../components/projects/Share";

const Padintosh = () => {
  const currentProject = 6;
  const projectInfo = projectList[currentProject];
  return (
    <>
      <Hero background={projectInfo.background} />
      <Article>
        <ProjectSummary
          title={projectInfo.title}
          company={projectInfo.company}
          year={projectInfo.year}
          summary={projectInfo.summary}
          role={projectInfo.role}
          goal={projectInfo.goal}
          thumbnail={projectInfo.background}
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
          prevProject={projectList[currentProject - 1].title}
          nextProject={projectList[currentProject + 1].title}
        />
      </Article>
    </>
  );
};

export default Padintosh;
