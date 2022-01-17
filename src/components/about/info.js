import React from "react";
import styled from "styled-components";

const DetailWrapper = styled.div`
  padding-bottom: 20px;

  & p {
    margin-top: 4px;
    color: var(--color-gray-6);
  }
`;

const Info = ({ label, detail }) => {
  return (
    <DetailWrapper>
      <strong>{label}</strong>
      <p>{detail}</p>
    </DetailWrapper>
  );
};

export default Info;
