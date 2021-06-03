import React from "react";
import projectList from "../ProjectList";
import ProjectSummary from "../components/projects/ProjectSummary";
import { Article, Hero, Text } from "../styles/Project.styles";
import LargeBox from "../components/projects/LargeBox";
import Share from "../components/projects/Share";

const OLED = () => {
  const currentProject = 3;
  const projectInfo = projectList[currentProject];
  return (
    <>
      <Hero background={projectInfo.background} />
      <Article>
        <ProjectSummary
          title={projectInfo.title}
          company={projectInfo.company}
          year={projectInfo.year}
          summary={projectInfo.summary}
          role={projectInfo.role}
          goal={projectInfo.goal}
          thumbnail={projectInfo.background}
        />
        <LargeBox background="https://i.imgur.com/N5bGFiu.jpg" />
        <Text>
          <h3 className="font-md font-regular">The Challenge</h3>
          <p>
            There were two challenges that we have to solve. First, '
            <strong>How to rotate chamber</strong>'. Second, '
            <strong>Sealing chamber in rotating process</strong>'.
          </p>
        </Text>
        <LargeBox background="https://i.imgur.com/NLfmqPn.jpg" />
        <Text>
          <h3>Gear and Motor</h3>
          <p>
            To rotate the chamber, our team determined to use a servo motor and
            internal gears. So we calculated the gear ratio by those formulas.
            Based on the result data we selected internal gears and servo motor
            type.
          </p>
        </Text>
        <LargeBox background="https://i.imgur.com/BFF8Hel.jpg" />
        <Text>
          <h3>Sealing with O-ring & Magnetic fluid</h3>
          <p>
            O-ring design was not difficult. But we spent a lot of time to
            determin magnetic fluid.
          </p>
          <p>
            It's not recommended to use an o-ring with moving parts. Because
            o-ring makes particles by friction. Particles bring the critical
            issue to the wafer. So we have to find material that meet two
            criteria.
          </p>
          <p>
            <strong>1. Don't make any particles</strong> <br />
            <strong>2. Vacuum sealing during rotating chamber</strong>
          </p>
        </Text>
        <LargeBox background="https://i.imgur.com/ZuVyet8.jpg" />
        <LargeBox background="https://i.imgur.com/ICIFfkE.jpg" />
        <LargeBox background="https://i.imgur.com/HuH0fSV.jpg" />
        <LargeBox background="https://i.imgur.com/7txi2EQ.jpg" />
        <Share
          prevProject={projectList[currentProject - 1].title}
          nextProject={projectList[currentProject + 1].title}
        />
      </Article>
    </>
  );
};

export default OLED;
