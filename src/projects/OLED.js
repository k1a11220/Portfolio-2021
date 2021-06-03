import React from "react";
import projectList from "../ProjectList";
import ProjectSummary from "../components/projects/ProjectSummary";
import { Article, Hero, Text } from "../styles/Project.styles";
import LargeBox from "../components/projects/LargeBox";
import Share from "../components/projects/Share";

const OLED = () => {
  const currentProject = 2;
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
        <LargeBox background="https://i.imgur.com/N5bGFiu.jpg" />
        <LargeBox background="https://i.imgur.com/NLfmqPn.jpg" />
        <LargeBox background="https://i.imgur.com/BFF8Hel.jpg" />
        <LargeBox background="https://i.imgur.com/ZuVyet8.jpg" />
        <LargeBox background="https://i.imgur.com/ICIFfkE.jpg" />
        <LargeBox background="https://i.imgur.com/HuH0fSV.jpg" />
        <LargeBox background="https://i.imgur.com/7txi2EQ.jpg" />
        <Share
          prevProject={projectList[currentProject - 1].title}
          nextProject={projectList[currentProject + 1].title}
        />
      </Article>
    </>
  );
};

export default OLED;
