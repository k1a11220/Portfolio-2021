import React from "react";
import styled from "@emotion/styled";

const Hero = styled.div`
  height: 394px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f1f2f4;
  border-radius: 10px;
  margin-top: 2.5rem; //40px
  margin-bottom: 5rem;
  background-clip: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Header = styled.header`
  margin-bottom: 2.5rem;

  & h1 {
    font-weight: 600;
    margin-bottom: 4px;
  }

  & p:first-of-type {
    color: #086bce;
    font-weight: 500;
    margin-bottom: 4px;
  }

  & p:last-of-type {
    color: #a1a1a1;
    font-weight: 500;
  }
`;

const Line = styled.hr`
  margin-bottom: 40px;
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  & h3 {
    margin-bottom: 1rem;
  }
`;

const ProjectDetail = (props) => {
  const goals = props.goal.split(",");
  const roles = props.role.split(",");
  const squaredData = (DATA) =>
    DATA.map((element) => <p key={Math.random(100)}>{element}</p>);
  return (
    <>
      <meta itemProp="headline" content={props.title} />
      <Hero />
      <Header>
        <p>{props.company}</p>
        <h1>{props.title}</h1>
        <p>{props.year}</p>
      </Header>
      <Line />
      <Contents>
        <div>
          <h3>Project goals</h3>
          {squaredData(goals)}
        </div>
        <div>
          <h3>Roles</h3>
          {squaredData(roles)}
        </div>
        <div
          style={{ marginTop: "40px", marginBottom: "40px", gridColumn: "1/3" }}
        >
          <h3>Summary</h3>
          <p>{props.summary}</p>
        </div>
      </Contents>
    </>
  );
};

export default ProjectDetail;
