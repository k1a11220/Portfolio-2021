import React from "react";

import projectList from "../ProjectList";

import ProjectSummary from "../components/Work/WorkItem/ProjectSummary";
import LargeBox from "../components/Work/WorkItem/ImageBox/LargeBox";
import MediumBox from "../components/Work/WorkItem/ImageBox/MediumBox";
import UpMargin from "../components/Assets/UpMargin";
import SmallBox from "../components/Work/WorkItem/ImageBox/SmallBox";

const JavaraLight = () => {
  const javaraLight = projectList[3];
  return (
    <section className="container">
      <LargeBox background="https://i.imgur.com/f71RFmr.png" />
      <ProjectSummary
        title={javaraLight.title}
        company={javaraLight.company}
        year={javaraLight.year}
        summary={javaraLight.summary}
        role={javaraLight.role}
        goal={javaraLight.goal}
      />
      <UpMargin />
      <div className="box_area">
        <MediumBox background="https://i.imgur.com/f71RFmr.png" />
        <MediumBox background="https://i.imgur.com/f71RFmr.png" />
        <MediumBox background="https://i.imgur.com/f71RFmr.png" />
        <MediumBox background="https://i.imgur.com/f71RFmr.png" />
      </div>
      <div className="box_area">
        <SmallBox background="https://i.imgur.com/f71RFmr.png" />
        <SmallBox background="https://i.imgur.com/f71RFmr.png" />
        <SmallBox background="https://i.imgur.com/f71RFmr.png" />
      </div>
    </section>
  );
};

export default JavaraLight;
