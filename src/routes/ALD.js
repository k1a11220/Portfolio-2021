import React from "react";

import projectList from "../ProjectList";

import ProjectSummary from "../components/Work/WorkItem/ProjectSummary";
import LargeBox from "../components/Work/WorkItem/ImageBox/LargeBox";
import MediumBox from "../components/Work/WorkItem/ImageBox/MediumBox";
import UpMargin from "../components/Assets/UpMargin";
// import SmallBox from "../components/Work/WorkItem/ImageBox/SmallBox";

const ALD = () => {
  const ald = projectList[0];
  return (
    <article className="container">
      <LargeBox background="https://i.imgur.com/G6fuleq.png" />
      <ProjectSummary
        title={ald.title}
        company={ald.company}
        year={ald.year}
        summary={ald.summary}
        role={ald.role}
        goal={ald.goal}
      />
      <UpMargin />
      <LargeBox background="https://i.imgur.com/pdhw0fS.png" />
      <article className="container_article">
        <h3 className="font-md font-regular">The Challenge</h3>
        <p className="font-gray">
          There were two challenges that we have to solve.
        </p>
        <p className="font-gray">
          First, 'How to rotate chamber'. Second, 'Sealing chamber in rotating
          process'.
        </p>
      </article>
      <UpMargin />
      <LargeBox background="https://i.imgur.com/ndH1BGy.jpg" />
      <article className="container_article">
        <h3 className="font-md font-regular">Gear and motors</h3>
        <p className="font-gray" style={{ marginBottom: "1rem" }}>
          To rotate the chamber, our team determined to use a servo motor and
          internal gears. So we calculated the gear ratio by those formulas.
          Based on the result data we selected internal gears and servo motor
          type.
        </p>
        <h3 className="font-md font-regular">
          Sealing with O-ring & Magnetic fluid
        </h3>
        <p className="font-gray">
          O-ring design was not difficult. But we spent a lot of time to think
          magnetic fluid.
        </p>
        <p className="font-gray" style={{ marginBottom: "0.625rem" }}>
          It's not recommended to use an o-ring with moving parts. Because
          o-ring makes particles by friction. Particles bring the critical issue
          to the wafer.
        </p>
        <p className="font-gray" style={{ marginBottom: "0.625rem" }}>
          So we have to find material that meet two criteria.
          <br /> 1. Don't make any particles <br />
          2. Vacuum sealing during rotating chamber.
        </p>
        <p className="font-gray">
          Finally we found magnetic fluid with magnet.
        </p>
      </article>
      <UpMargin />
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
    </article>
  );
};

export default ALD;
