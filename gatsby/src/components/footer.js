import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  width: 100vw;
  height: 148px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f2f4;
  margin-top: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 1400px) {
    width: 92%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Cta = styled.div`
  display: flex;
  align-items: center;
  background-color: #086bce;
  padding: 8px 24px 8px 24px;
  border-radius: 40px;
  font-size: 0.875rem;
  font-weight: 400;
  color: #ffffff;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  & svg {
    margin-left: 16px;
  }
`;

const Icon = styled(FontAwesomeIcon)``;

const IconContainer = styled.a`
  &:hover {
    & > svg {
      color: green;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <a
          href="mailto:beskar.son@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Cta>beskar.son@gmail.com</Cta>
        </a>
        <IconWrapper>
          <IconContainer
            href="https://www.behance.net/sonbeomsoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="font-icon" icon={faBehance} size="lg" />
          </IconContainer>
          <IconContainer
            href="https://www.instagram.com/beomsoo_son/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={faInstagram} size="lg" />
          </IconContainer>
          <IconContainer
            href="https://github.com/k1a11220"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={faGithub} size="lg" />
          </IconContainer>
          <IconContainer
            href="https://www.linkedin.com/in/beomsoo-son-65a201178/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={faLinkedinIn} size="lg" />
          </IconContainer>
        </IconWrapper>
      </Wrapper>
    </Container>
  );
};

export default Footer;
