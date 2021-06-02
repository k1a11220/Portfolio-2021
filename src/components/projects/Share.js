import React from "react";
import styled from "@emotion/styled";
import Arrow from "./Arrow";

const Black = "#4A4A4A";
const Blue = "#4080FF";

const Line = styled.hr`
  margin-bottom: 2.5rem;
`;

const Button = styled.button`
  width: 6.375rem;
  height: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
  border: none;
  color: white;
  font-size: 0.75rem;
  margin-right: 1rem;
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
  transition: all 0.1s ease-in-out;
  &:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.02);
  }
`;

const NavWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  & h4 {
    font-size: 0.75rem;
  }
  & p {
    font-weight: 500;
  }
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 330px;
    height: 84px;
    border-radius: 10px;
    background-color: #f1f2f4;
    transition: all 0.1s ease-in-out;
    &:hover {
      transition: all 0.1s ease-in-out;
      transform: scale(1.02);
    }
  }
  & div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 330px;
    height: 84px;
    border-radius: 10px;
    background-color: #f1f2f4;
    text-align: right;
  }
`;

const Share = (props) => {
  return (
    <>
      <h3>🚀 Share this project!</h3>
      <span>
        <Button bgColor={Black}>Copy Link</Button>
        <Button bgColor={Blue}>Facebook</Button>
      </span>
      <Line />
      <NavWrapper>
        <div>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Arrow direction="" />
            <span>
              <h4>Previous Project</h4>
              <p>{props.prevProject}</p>
            </span>
          </span>
        </div>
        <div>
          <span
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Arrow direction="180deg" />
            <span>
              <h4>Next Project</h4>
              <p>{props.nextProject}</p>
            </span>
          </span>
        </div>
      </NavWrapper>
    </>
  );
};

export default Share;
