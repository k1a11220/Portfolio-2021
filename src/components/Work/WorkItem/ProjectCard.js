import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Lock from "../../Lock";

const Card = styled.div`
  display: flex;
  height: 380px;
  justify-content: space-between;
  background-color: #f3f3f3;
  border-radius: 10px;
  background-image: url("${(props) => props.color}");
  background-clip: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.1s ease-in;
  cursor: ${(props) => (props.lock === true ? "default" : "pointer")};

  &:hover {
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);
    transition: all 0.1s ease-in;
    transform: scale(1.02);
  }

  @media screen and (max-width: 768px) {
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    height: 260px;
  }
`;

const ContentsWrapper = styled.div`
  margin-top: 40px;
  margin-left: 40px;

  @media screen and (max-width: 786px) {
    margin-top: 24px;
    margin-left: 24px;
  }
`;

const ProjectCard = (props) => {
  return (
    <Link to={props.links === undefined ? "" : props.links}>
      <Card color={props.background} lock={props.lock}>
        <ContentsWrapper>
          <h3 style={{ color: `${props.color}` }}>{props.title}</h3>
          <h4 style={{ color: `${props.color}` }}>
            {props.company} · {props.year}
          </h4>
        </ContentsWrapper>
        {props.lock === true ? <Lock /> : null}
      </Card>
    </Link>
  );
};

export default ProjectCard;
