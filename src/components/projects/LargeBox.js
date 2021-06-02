import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 394px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f1f2f4;
  border-radius: 10px;
  margin-bottom: 2.5rem; //40px
  background: url(${(props) => props.background});
  background-clip: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const LargeBox = ({ background }) => {
  return <Container background={background}></Container>;
};

export default LargeBox;
