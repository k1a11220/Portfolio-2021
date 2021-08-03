import React from "react";
import styled from "styled-components";
import SEO from "components/seo";
import Layout from "layout/layout";

const Wrapper = styled.main`
  margin: 0 auto;
`;

// const Profile = styled.img`
//   width: 75rem;
//   border-radius: 10px;
//   margin-top: 2.5rem;
//   margin-bottom: 2.5rem;
//   @media screen and (max-width: 1400px) {
//     width: 700px;
//   }
//   @media screen and (max-width: 768px) {
//     width: 92%;
//     margin-top: 1.5rem;
//     margin-bottom: 1.5rem;
//   }
// `;

const Container = styled.article`
  width: 700px;
  /* background-color: #f1f2f4; */
  align-self: center;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 92%;
  }

  & header {
    margin-top: 40px;
    margin-bottom: 20px;
    & h3 {
      margin-bottom: 1.5rem;
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
      margin-bottom: 1.5rem;
    }
  }
`;

const Button = styled.button`
  border: none;
  background-color: #444444;
  color: white;
  font-size: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 20px;
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
    <Layout>
      <SEO title="About" />
      <Wrapper>
        {/* <Profile src="https://i.imgur.com/4xmnZLI.png" /> */}
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
            <h3>Research & Patent</h3>

            <strong>
              원자층 복합 증착 챔버 (atomic layer deposition chamber)
            </strong>
            <p>KITECH · 10-2021-009228</p>
          </section>

          <section>
            <h3>Awards</h3>

            <strong>KIDP 2021 GOOD DESIGN SELECTION</strong>
            <p>BE THE LIGHT · []</p>
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
      </Wrapper>
    </Layout>
  );
};

export default About;
