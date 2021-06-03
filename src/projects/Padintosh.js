import React from "react";
import projectList from "../ProjectList";
import ProjectSummary from "../components/projects/ProjectSummary";
import { Article, Hero, Text } from "../styles/Project.styles";
import LargeBox from "../components/projects/LargeBox";
import Share from "../components/projects/Share";
import insertGif from "../media/Padintosh_1.gif";

const Padintosh = () => {
  const currentProject = 5;
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
        <LargeBox background="https://i.imgur.com/x47sS54.jpg" />
        <LargeBox background="https://i.imgur.com/A2VBZ87.jpg" />
        <LargeBox background="https://i.imgur.com/qRsQy6G.jpg" />
        <LargeBox background={insertGif} />
        <LargeBox background="https://i.imgur.com/qBeo6b5.png" />
        <LargeBox background="https://i.imgur.com/M8uZ7OE.jpg" />
        <LargeBox background="https://i.imgur.com/4i9lnGb.jpg" />
        <LargeBox background="https://i.imgur.com/rCGajsS.jpg" />
        <LargeBox background="https://i.imgur.com/kERO0EE.jpg" />
        <LargeBox background="https://i.imgur.com/x6QGGmC.jpg" />
        <LargeBox background="https://i.imgur.com/3ljGKE1.png" />
        <LargeBox background="https://i.imgur.com/7rUezBD.png" />
        <LargeBox background="https://i.imgur.com/5nrrDAr.png" />
        <LargeBox background="https://i.imgur.com/m2iVOEK.png" />
        <Share
          prevProject={projectList[currentProject - 1].title}
          nextProject={projectList[currentProject + 1].title}
        />
      </Article>
    </>
  );
};

export default Padintosh;
