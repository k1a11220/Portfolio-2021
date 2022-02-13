import React from "react";
import styled from "styled-components";

const DetailWrapper = styled.div`
  padding-bottom: 32px;

  & strong {
    font-weight: 600;
    font-size: var(--text-title);
  }

  & p {
    margin-top: 4px;
    font-weight: 400;
    color: var(--color-gray-6);
  }
`;

const DetailList = styled.ul`
  margin-top: 8px;
  margin-left: ${(props) => (props.isList ? "1.25rem" : "0")};
  list-style: ${(props) => (props.isList ? "circle !important" : "none")};

  li {
    margin-bottom: 4px;
  }
`;

const Info = ({ label, detail, content, isList }) => {
  return (
    <DetailWrapper>
      <strong>{label}</strong>
      <p>{detail}</p>
      <DetailList isList={isList}>
        {content.map((item) => (
          <li>{item}</li>
        ))}
      </DetailList>
    </DetailWrapper>
  );
};

export default Info;
