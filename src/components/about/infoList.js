import React from "react";
import styled from "styled-components";
import Info from "./info";

const Container = styled.section`
  margin-top: 60px;
  margin-bottom: 20px;

  & h3 {
    font-family: Oxygen, sans-serif;
    color: var(--color-gray-6);
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const InfoList = ({ title, list, isList }) => {
  return (
    <Container>
      <h3>{title}</h3>
      {list.map((list) => (
        <Info
          label={list.label}
          detail={list.detail}
          content={list.content}
          isList={isList}
        />
      ))}
    </Container>
  );
};

export default InfoList;
