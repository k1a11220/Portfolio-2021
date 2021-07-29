import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

const Header = styled.header`
  margin-bottom: ${theme.margin.laptop};

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
  @media screen and (max-width: 768px) {
    margin-bottom: ${theme.margin.mobile};
  }
`;

const Line = styled.hr`
  margin-bottom: ${theme.margin.laptop};
  @media screen and (max-width: 768px) {
    margin-bottom: ${theme.margin.mobile};
  }
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.margin.mobile};
  }

  & div {
    margin-bottom: ${theme.margin.laptop};

    @media screen and (max-width: 768px) {
      margin-bottom: ${theme.margin.mobile};
    }
  }

  & h3 {
    margin-bottom: 0.75rem;

    @media screen and (max-width: 768px) {
      margin-bottom: ${theme.paragraphMargin.mobile};
    }
  }
`;

const ProjectDetail = (props) => {
  const goals = props.goal.split(",");
  const roles = props.role.split(",");
  const url = `https://www.works.beomsoo.me${props.url}`;
  console.log(url);
  const squaredData = (DATA) =>
    DATA.map((element) => <p key={Math.random(100)}>- {element}</p>);
  return (
    <>
      <meta itemProp="headline" content={props.title} />
      <meta property="og:url" content={props.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.summary} />
      <meta property="og:image" content={props.thumbnail} />
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
        <div style={{ gridColumn: "1/3" }}>
          <h3>Summary</h3>
          <summary>{props.summary}</summary>
        </div>
      </Contents>
    </>
  );
};

export default ProjectDetail;
