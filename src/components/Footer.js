import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 148px;
  min-width: var(--min-width);
  background-color: var(--color-footer-background);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: content-box;
  position: relative;
  margin: 0 auto;
  max-width: var(--width);
  padding: 0 var(--padding-lg);
  z-index: 2;

  /* @media (max-width: ${({ theme }) => theme.device.md}) {
    padding: 22px;
  } */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Cta = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-footer-button-background);
  padding: 8px 24px 8px 24px;
  border-radius: 40px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-footer-button-color);

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
`;

const Icon = styled(FontAwesomeIcon)``;

const IconContainer = styled.a`
  padding-left: 20px;
  &:first-of-type {
    padding-left: 0;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        {/* 좌측 CTA 버튼 */}
        <a
          href="mailto:beskar.son@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Cta>Contact me</Cta>
        </a>

        {/* 우측 아이콘 영역 */}
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
