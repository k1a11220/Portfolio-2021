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

  & header {
    margin-top: 40px;
    margin-bottom: 20px;
    & h3 {
      margin-bottom: ${theme.margin.mobile};
    }
  }

  & section {
    margin-top: 60px;
    margin-bottom: 20px;
    & p {
      margin-top: 4px;
      margin-bottom: 24px;
    }
    & h3 {
      margin-bottom: ${theme.margin.mobile};
    }
  }
`;

const Button = styled.button`
  border: none;
  background-color: #444444;
  color: white;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 16px;
  margin-right: 12px;
  margin-top: 14px;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    & img {
      margin-bottom: 24px;
    }
  }

  & img {
    height: 52px;
  }
`;

const About = () => {
  return (
    <main>
      <Profile src="https://i.imgur.com/4xmnZLI.png" />
      <Container>
        <header>
          <h3 className="font-gradient">"Young and be ambitious!"</h3>
          <p>I love to make impact with awesome products.</p>
          <p>
            I’m currently working as a design engineer at TNG and Product
            Designer at BE THE LIGHT
          </p>
        </header>

        <section>
          <h3>Work Experience</h3>

          <strong>May KING</strong>
          <p>Founder, Design Instructor · Jan 2018 ~ Dec 2019</p>

          <strong>TNG</strong>
          <p>Design Engineer · Jan 2020 ~ Present</p>

          <strong>BE THE LIGHT</strong>
          <p>Product Designer · Mar 2021 ~ Present</p>
        </section>

        <section>
          <h3>Skills</h3>
          <strong>Design Engineering</strong>
          <div>
            <Button>Solidworks</Button>
            <Button>Fusion 360</Button>
            <Button>Ansys Maxwell</Button>
            <Button style={{ marginBottom: "24px" }}>Keyshot</Button>
          </div>
          <strong>Coding</strong>
          <div>
            <Button>Javascript</Button>
            <Button>Python</Button>
            <Button style={{ marginBottom: "24px" }}>SwiftUI</Button>
          </div>
          <strong>Digital Product Design</strong>
          <div>
            <Button>Adobe XD</Button>
            <Button>Figma</Button>
            <Button>Adobe After Effets</Button>
            <Button style={{ marginBottom: "24px" }}>ProtoPie</Button>
          </div>
        </section>

        <section>
          <h3>Clients worked with</h3>
          <ImageContainer>
            <img src="https://i.imgur.com/OHOhz0y.png" alt="kitech" />
            <img src="https://i.imgur.com/klmEfrQ.png" alt="gaontech" />
          </ImageContainer>
        </section>
      </Container>
    </main>
  );
};

export default About;
