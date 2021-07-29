import React from "react";
import styled from "@emotion/styled";
import Arrow from "./Arrow";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";

const Black = "#4A4A4A";
const Blue = "#4080FF";

const Line = styled.hr`
  margin-bottom: ${theme.margin.laptop};
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
  margin-bottom: ${theme.margin.laptop};
  transition: all 0.1s ease-in-out;
  &:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.02);
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & h4 {
    font-size: 0.75rem;
    line-height: 1.5;
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
    align-items: flex-end;
    text-align: right;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    & div {
      width: ${theme.width.mobile};
      height: 100px;
      margin-bottom: ${theme.margin.mobile};
    }

    & div:last-child {
      margin-bottom: 0;
    }
  }
`;

const Share = (props) => {
  const copyToClipboard = () => {
    let inputc = document.body.appendChild(document.createElement("input"));
    inputc.value = window.location.href;
    inputc.focus();
    inputc.select();
    document.execCommand("copy");
    inputc.parentNode.removeChild(inputc);
    alert("URL Copied.");
  };
  return (
    <>
      <h3>🚀 Share this project!</h3>
      <div>
        <Button onClick={copyToClipboard} bgColor={Black}>
          Copy Link
        </Button>
        <Button bgColor={Blue}>Facebook</Button>
      </div>
      <Line />
      <NavWrapper>
        <div>
          <Link to={props.prevLink} style={{ width: "100%" }}>
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
          </Link>
        </div>
        <div>
          <Link to={props.nextLink} style={{ width: "100%" }}>
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
          </Link>
        </div>
      </NavWrapper>
    </>
  );
};

export default Share;
