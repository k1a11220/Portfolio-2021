import React from "react";
import styled from "styled-components";
import Info from "./info";

const Container = styled.section`
  margin-top: 60px;
  margin-bottom: 20px;

  & h3 {
    color: var(--color-text-3);
    margin-bottom: 32px;
  }
`;

const InfoList = ({ title, list }) => {
  return (
    <Container>
      <h3>{title}</h3>
      {list.map((list) => (
        <Info label={list.label} detail={list.detail} />
      ))}
    </Container>
  );
};

export default InfoList;
