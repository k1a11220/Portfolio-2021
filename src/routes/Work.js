import React from "react";
import LargeBox from "../components/LargeBox";
import ProjectCard from "../components/ProjectCard";
// import UpMargin from "../components/UpMargin";
import styles from "./Work.module.css";
import projectList from "../ProjectList";

const Work = () => {
  console.log(projectList);
  return (
    <section className="container">
      <LargeBox
        title="LET'S MAKE HISTORY"
        details="I'm Beomsoo Son, an engineer/designer based in Suwon, South Korea
        focused on Industrial Design & Engineering and Product Design."
      />
      <div className={styles.card_area}>
        <ProjectCard
          title={projectList[0].title}
          links={projectList[0].links}
          company={projectList[0].company}
          year={projectList[0].year}
          background={projectList[0].background}
        />
        <ProjectCard
          title={projectList[1].title}
          links={projectList[1].links}
          company={projectList[1].company}
          year={projectList[1].year}
          background={projectList[1].background}
        />
        <ProjectCard
          title={projectList[2].title}
          links={projectList[2].links}
          company={projectList[2].company}
          year={projectList[2].year}
          background={projectList[2].background}
        />
        <ProjectCard
          title={projectList[3].title}
          links={projectList[3].links}
          company={projectList[3].company}
          year={projectList[3].year}
          background={projectList[3].background}
        />
        <ProjectCard
          title={projectList[4].title}
          links={projectList[4].links}
          company={projectList[4].company}
          year={projectList[4].year}
          background={projectList[4].background}
          color="white"
        />
        <ProjectCard
          title={projectList[5].title}
          links={projectList[5].links}
          company={projectList[5].company}
          year={projectList[5].year}
          background={projectList[5].background}
        />
        <ProjectCard
          title={projectList[6].title}
          links={projectList[6].links}
          company={projectList[6].company}
          year={projectList[6].year}
          background={projectList[6].background}
          color="white"
        />
      </div>
    </section>
  );
};

export default Work;
