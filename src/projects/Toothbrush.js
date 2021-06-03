import React from "react";
import projectList from "../ProjectList";
import ProjectSummary from "../components/projects/ProjectSummary";
import { Article, Hero, Text } from "../styles/Project.styles";
import LargeBox from "../components/projects/LargeBox";
import Share from "../components/projects/Share";

const Padintosh = () => {
  const currentProject = 7;
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
        <LargeBox background="https://i.imgur.com/jtzychE.png" />
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
          prevProject={projectList[currentProject - 1].title}
          nextProject={projectList[currentProject + 1].title}
        />
      </Article>
    </>
  );
};

export default Padintosh;
