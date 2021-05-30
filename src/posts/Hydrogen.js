import React from "react";

import projectList from "../ProjectList";

import ProjectSummary from "../components/Work/WorkItem/ProjectSummary";
import LargeBox from "../components/Work/WorkItem/ImageBox/LargeBox";
import MediumBox from "../components/Work/WorkItem/ImageBox/MediumBox";
import UpMargin from "../components/Assets/UpMargin";
import SmallBox from "../components/Work/WorkItem/ImageBox/SmallBox";

const Hydrogen = () => {
  const hydrogen = projectList[4];
  return (
    <section className="container">
      <LargeBox background="https://i.imgur.com/f71RFmr.png" />
      <ProjectSummary
        title={hydrogen.title}
        company={hydrogen.company}
        year={hydrogen.year}
        summary={hydrogen.summary}
        role={hydrogen.role}
        goal={hydrogen.goal}
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

export default Hydrogen;
