import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100vw;
  margin-top: 40px;
  background-color: #f3f3f3;
`;

const Wrapper = styled.ul`
  width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2.5rem;
  align-items: flex-start;
  justify-content: space-around;

  @media screen and (max-width: 1400px) {
    width: 90vw;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Info = styled.div`
  padding-right: 80px;

  &:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }

  & h3 {
    margin-bottom: 1rem;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Info>
          <h3>Let’s make history together.</h3>
          <a href="mailto:beskar.son@gmail.com">beskar.son@gmail.com</a>
        </Info>
        <Info>
          <h3>Welcome to visit.</h3>
          <a href="https://www.instagram.com/beomsoo_son/">Instagram</a>
          <a href="https://www.behance.net/sonbeomsoo">Behance</a>
          <a href="https://www.linkedin.com/in/beomsoo-son-65a201178/">
            LinkedIn
          </a>
          <a href="https://github.com/k1a11220">Github</a>
        </Info>
        <p
          style={{
            fontSize: "12px",
            marginBottom: "40px",
          }}
        >
          Copyright © 2021 Beomsoo Son. All rights reserved.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Footer;
