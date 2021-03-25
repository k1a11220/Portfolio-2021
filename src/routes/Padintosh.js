import React from "react";

import projectList from "../ProjectList";

import ProjectDetail from "../components/Work/WorkItem/ProjectDetail";
import LargeBox from "../components/Work/WorkItem/ImageBox/LargeBox";
import MediumBox from "../components/Work/WorkItem/ImageBox/MediumBox";
import UpMargin from "../components/Assets/UpMargin";
// import SmallBox from "../components/Work/WorkItem/ImageBox/SmallBox";
import insertGif from "../media/Padintosh_1.gif";

const Padintosh = () => {
  const padintosh = projectList[5];
  return (
    <section className="container">
      <LargeBox background="https://i.imgur.com/x47sS54.jpg" />
      <ProjectDetail
        title={padintosh.title}
        company={padintosh.company}
        year={padintosh.year}
        details={padintosh.details}
        role={padintosh.role}
        goal={padintosh.goal}
      />
      <UpMargin />
      <div className="box_area">
        <MediumBox background="https://i.imgur.com/A2VBZ87.jpg" />
        <MediumBox background="https://i.imgur.com/qRsQy6G.jpg" />
      </div>
      <LargeBox background={insertGif} />
      <LargeBox background="https://i.imgur.com/qBeo6b5.png" />
      <div className="box_area">
        <MediumBox background="https://i.imgur.com/M8uZ7OE.jpg" />
        <MediumBox background="https://i.imgur.com/4i9lnGb.jpg" />
        <MediumBox background="https://i.imgur.com/rCGajsS.jpg" />
        <MediumBox background="https://i.imgur.com/kERO0EE.jpg" />
      </div>
      <LargeBox background="https://i.imgur.com/x6QGGmC.jpg" />
      <div className="box_area">
        <MediumBox background="https://i.imgur.com/3ljGKE1.png" />
        <MediumBox background="https://i.imgur.com/7rUezBD.png" />
        <MediumBox background="https://i.imgur.com/5nrrDAr.png" />
        <MediumBox background="https://i.imgur.com/m2iVOEK.png" />
      </div>
    </section>
  );
};

export default Padintosh;
