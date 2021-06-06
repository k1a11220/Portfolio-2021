import React from "react";
import projectList from "../ProjectList";
import ProjectSummary from "../components/projects/ProjectSummary";
import { Article, Hero, Text } from "../styles/Project.styles";
import LargeBox from "../components/projects/LargeBox";
import Share from "../components/projects/Share";
import insertGif from "../media/Padintosh_1.gif";

const Padintosh = () => {
  const projectNumber = 5;
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
