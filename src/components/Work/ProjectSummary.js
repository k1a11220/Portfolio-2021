import React from "react";
import styled from "@emotion/styled";

const Header = styled.header`
  margin-top: 80px;
  margin-bottom: 40px;

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

  & h3 {
    margin-bottom: 1rem;
  }
`;

const ProjectDetail = (props) => {
  const goals = props.goal.split(",");
  const roles = props.role.split(",");
  const squaredData = (DATA) => DATA.map((element) => <p>{element}</p>);
  return (
    <article>
      <meta itemProp="headline" content={props.title} />
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
    </article>
  );
};

export default ProjectDetail;
