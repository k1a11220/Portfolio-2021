import React from "react";

import projectList from "../ProjectList";

import ProjectSummary from "../components/Work/WorkItem/ProjectSummary";
import LargeBox from "../components/Work/WorkItem/ImageBox/LargeBox";
import MediumBox from "../components/Work/WorkItem/ImageBox/MediumBox";
import UpMargin from "../components/Assets/UpMargin";
// import SmallBox from "../components/Work/WorkItem/ImageBox/SmallBox";

const OLED = () => {
  const oled = projectList[2];
  return (
    <section className="container">
      <LargeBox background="https://i.imgur.com/N5bGFiu.jpg" />
      <ProjectSummary
        title={oled.title}
        company={oled.company}
        year={oled.year}
        summary={oled.summary}
        role={oled.role}
        goal={oled.goal}
      />
      <UpMargin />
      <LargeBox background="https://i.imgur.com/NLfmqPn.jpg" />
      <div className="box_area">
        <MediumBox background="https://i.imgur.com/BFF8Hel.jpg" />
        <MediumBox background="https://i.imgur.com/ZuVyet8.jpg" />
        <MediumBox background="https://i.imgur.com/ICIFfkE.jpg" />
        <MediumBox background="https://i.imgur.com/HuH0fSV.jpg" />
      </div>
      <LargeBox background="https://i.imgur.com/7txi2EQ.jpg" />
    </section>
  );
};

export default OLED;
