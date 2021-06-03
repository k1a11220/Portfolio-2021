import React from "react";
import projectList from "../ProjectList";
import ProjectSummary from "../components/projects/ProjectSummary";
import { Article, Hero, Text } from "../styles/Project.styles";
import LargeBox from "../components/projects/LargeBox";
import Share from "../components/projects/Share";

const Padintosh = () => {
  const currentProject = 4;
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
        <LargeBox background="https://i.imgur.com/f71RFmr.png" />
        <LargeBox background="https://i.imgur.com/f71RFmr.png" />
        <LargeBox background="https://i.imgur.com/f71RFmr.png" />
        <LargeBox background="https://i.imgur.com/f71RFmr.png" />
        <LargeBox background="https://i.imgur.com/f71RFmr.png" />
        <LargeBox background="https://i.imgur.com/f71RFmr.png" />
        <LargeBox background="https://i.imgur.com/f71RFmr.png" />
        <LargeBox background="https://i.imgur.com/f71RFmr.png" />
        <Share
          prevProject={projectList[currentProject - 1].title}
          nextProject={projectList[currentProject + 1].title}
        />
      </Article>
    </>
  );
};

export default Padintosh;
