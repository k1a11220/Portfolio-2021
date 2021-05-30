import React from "react";

import projectList from "../ProjectList";

import ProjectSummary from "../components/Work/WorkItem/ProjectSummary";
import LargeBox from "../components/Work/WorkItem/ImageBox/LargeBox";
import MediumBox from "../components/Work/WorkItem/ImageBox/MediumBox";
import UpMargin from "../components/Assets/UpMargin";
// import SmallBox from "../components/Work/WorkItem/ImageBox/SmallBox";

const Toothbrush = () => {
  const toothbrush = projectList[7];
  return (
    <section className="container">
      <LargeBox background="https://i.imgur.com/jtzychE.png" />
      <ProjectSummary
        title={toothbrush.title}
        company={toothbrush.company}
        year={toothbrush.year}
        summary={toothbrush.summary}
        role={toothbrush.role}
        goal={toothbrush.goal}
      />
      <UpMargin />
      <div className="box_area">
        <MediumBox background="https://i.imgur.com/8Y0N3RP.png" />
        <MediumBox background="https://i.imgur.com/GH21oWV.png" />
        <MediumBox background="https://i.imgur.com/Npev8q1.png" />
        <MediumBox background="https://i.imgur.com/o2N6z4q.png" />
      </div>
      <LargeBox background="https://i.imgur.com/wI27uyq.png" />
      <LargeBox background="https://i.imgur.com/yKZsLNJ.png" />
      <div className="box_area">
        <MediumBox background="https://i.imgur.com/9LJrwMB.png" />
        <MediumBox background="https://i.imgur.com/54VnpNw.png" />
      </div>
      <LargeBox background="https://i.imgur.com/RBP2kxg.png" />
      <LargeBox background="https://i.imgur.com/mdJNHVC.png" />
    </section>
  );
};

export default Toothbrush;
