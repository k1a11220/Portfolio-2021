import React from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";

const Profile = styled.img`
  width: ${theme.width.laptop};
  border-radius: 10px;
  margin-top: ${theme.margin.laptop};
  margin-bottom: ${theme.margin.laptop};
  @media screen and (max-width: 1400px) {
    width: ${theme.width.tablet};
  }
  @media screen and (max-width: 768px) {
    width: ${theme.width.mobile};
    margin-top: ${theme.margin.mobile};
    margin-bottom: ${theme.margin.mobile};
  }
`;

const Container = styled.article`
  width: ${theme.width.tablet};
  /* background-color: #f1f2f4; */
  align-self: center;

  @media screen and (max-width: 768px) {
    width: ${theme.width.mobile};
  }
`;

const About = () => {
  return (
    <main>
      <Profile src="https://i.imgur.com/4xmnZLI.png" />
      <Container>
        <header>
          <p className="font-md font-regular font-gradient">
            I love to make impact with awesome products.
          </p>
          <p className="font-md font-regular font-gradient">
            I’m currently working as a design engineer at TNG and Product
            Designer at BE THE LIGHT
          </p>
        </header>

        <section>
          <h3>Work Experience</h3>

          <b>May KING</b>
          <p>Founder, Design Instructor · Jan 2018 ~ Dec 2019</p>

          <b>TNG</b>
          <p>Design Engineer · Jan 2020 ~ Present</p>

          <b>BE THE LIGHT</b>
          <p>Product Designer · Mar 2021 ~ Present</p>
        </section>

        <section>
          <h3>Skills</h3>
          <div>
            <b>Design Engineering</b>
            <button>Fusion 360</button>
            <button>Solidworks</button>
            <button>Ansys Maxwell</button>
            <button>Keyshot</button>
          </div>
          <div>
            <b>Coding</b>
            <button>Javascript</button>
            <button>Python</button>
            <button>SwiftUI</button>
          </div>
          <div>
            <b>Digital Product Design</b>
            <button>Adobe XD</button>
            <button>Figma</button>
            <button>Adobe After Effets</button>
            <button>ProtoPie</button>
          </div>
        </section>

        <section>
          <h3>Clients worked with</h3>

          <b>KITECH</b>
          <p>ALD Equipments design engineering, Patent</p>

          <b>Gaon Tech</b>
          <p>Fire Alarm design</p>

          <b>ADM Tech</b>
          <p>Mask design</p>
        </section>
      </Container>
    </main>
  );
};

export default About;
