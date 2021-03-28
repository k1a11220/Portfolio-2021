import React from "react";

import projectList from "../ProjectList";

import ProjectDetail from "../components/Work/WorkItem/ProjectDetail";
import LargeBox from "../components/Work/WorkItem/ImageBox/LargeBox";
import MediumBox from "../components/Work/WorkItem/ImageBox/MediumBox";
import UpMargin from "../components/Assets/UpMargin";
// import SmallBox from "../components/Work/WorkItem/ImageBox/SmallBox";

const ALD = () => {
  const ald = projectList[0];
  return (
    <section className="container">
      <LargeBox background="https://i.imgur.com/G6fuleq.png" />
      <ProjectDetail
        title={ald.title}
        company={ald.company}
        year={ald.year}
        details={ald.details}
        role={ald.role}
        goal={ald.goal}
      />
      <UpMargin />
      <LargeBox background="https://i.imgur.com/pdhw0fS.png" />
      <LargeBox background="https://i.imgur.com/ndH1BGy.jpg" />
      <LargeBox background="https://i.imgur.com/DVwd0yg.jpg" />
      <div className="box_area">
        <MediumBox background="https://i.imgur.com/PWrC0pF.png" />
        <MediumBox background="https://i.imgur.com/qXSVH8A.png" />
        <MediumBox background="https://i.imgur.com/d8qkZih.jpg" />
        <MediumBox background="https://i.imgur.com/LCO4c6v.png" />
      </div>
      <LargeBox background="https://i.imgur.com/E0B7RR3.jpg" />
      <LargeBox background="https://i.imgur.com/iR147O4.jpg" />
      <LargeBox background="https://i.imgur.com/O5r1fuA.jpg" />
    </section>
  );
};

export default ALD;
