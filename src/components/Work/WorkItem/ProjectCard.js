import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
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
`;

const ProjectCard = (props) => {
  return (
    <Link to={props.links === undefined ? "" : props.links}>
      <Card color={props.background} lock={props.lock}>
        <div className={styles.contents_wrapper}>
          <h3
            className={`${styles.title} font-regular`}
            style={{
              color: `${props.color}`,
            }}
          >
            {props.title}
          </h3>
          <h4
            className={`${styles.info} font-light`}
            style={{
              color: `${props.color}`,
            }}
          >
            {props.company} - {props.year}
          </h4>
        </div>
        {props.lock === true ? <Lock /> : null}
      </Card>
    </Link>
  );
};

export default ProjectCard;
