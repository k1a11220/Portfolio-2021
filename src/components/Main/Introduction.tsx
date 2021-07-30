import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ProfileImageProps } from "components/Main/ProfileImage";

type IntroductionProps = ProfileImageProps;

const Wrapper = styled.div`
  position: relative;
  top: 54px;
  width: 1200px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;

  @media (max-width: 1400px) {
    width: 92%;
  }
`;

const Title = styled.div`
  width: 80%;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  color: #1d1d1f;
  font-family: "Oxygen", sans-serif;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 25px;
  }
`;
const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    // <Background>
    <Wrapper>
      {/* <ProfileImage profileImage={profileImage} /> */}
      <div>
        {/* <SubTitle>안녕하세요</SubTitle> */}
        <Title>
          I'm <strong>Beomsoo Son</strong>, an Engineer and Designer based in
          Suwon, South Korea focused on Industrial design engineering and
          Digital product design.
        </Title>
      </div>
    </Wrapper>
    // </Background>
  );
};

export default Introduction;
