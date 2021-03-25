import React from "react";

import projectList from "../ProjectList";

import ProjectDetail from "../components/Work/WorkItem/ProjectDetail";
import LargeBox from "../components/Work/WorkItem/ImageBox/LargeBox";
import MediumBox from "../components/Work/WorkItem/ImageBox/MediumBox";
import UpMargin from "../components/Assets/UpMargin";
// import SmallBox from "../components/Work/WorkItem/ImageBox/SmallBox";

const FireAlarm = () => {
  const fireAlarm = projectList[6];
  return (
    <section className="container">
      <LargeBox background="https://i.imgur.com/u9fWvx0.png" />
      <ProjectDetail
        title={fireAlarm.title}
        company={fireAlarm.company}
        year={fireAlarm.year}
        details={fireAlarm.details}
        role={fireAlarm.role}
        goal={fireAlarm.goal}
      />
      <UpMargin />
      <div className="box_area">
        <MediumBox background="https://i.imgur.com/KKzE9OK.jpg" />
        <MediumBox background="https://i.imgur.com/tRvchup.jpg" />
        <MediumBox background="https://i.imgur.com/6RV775y.png" />
        <MediumBox background="https://i.imgur.com/AsKzVes.jpg" />
      </div>
      <LargeBox background="https://i.imgur.com/W8Yo2RF.png" />
      <div className="box_area">
        <MediumBox background="https://i.imgur.com/hUC7mT1.png" />
        <MediumBox background="https://i.imgur.com/7ZNpy3h.png" />
        <MediumBox background="https://i.imgur.com/kuAHmBe.png" />
        <MediumBox background="https://i.imgur.com/qRehrGX.png" />
      </div>
      <LargeBox background="https://i.imgur.com/MVOzPe1.png" />
    </section>
  );
};

export default FireAlarm;
