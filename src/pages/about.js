import React from "react";
import styled from "styled-components";
import SEO from "components/seo";
import Layout from "layout/layout";

const Wrapper = styled.main`
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Profile = styled.img`
  width: 90px;
  border-radius: 10px;
  margin-top: 4rem;
  align-self: flex-start;
`;

const Container = styled.article`
  width: 700px;
  /* background-color: #f1f2f4; */
  align-self: center;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 92%;
  }

  & > div {
  }

  & header {
    margin-top: 20px;
    margin-bottom: 120px;

    & h2 {
      font-family: Oxygen, sans-serif;
      font-weight: var(--font-weight-medium);
      margin-bottom: 1rem;
    }

    & p {
      font-size: var(--text-title);
      color: var(--color-gray-4);
    }

    & p:last-of-type {
      margin-top: 1rem;
      font-size: var(--text-md);
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
      color: var(--color-text-3);
      margin-bottom: 1.5rem;
    }
    & div {
      display: flex;
    }
  }
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
        <Container>
          <div>
            <Profile src="https://i.imgur.com/ZiyS9UC.png" />
            <header>
              <h2 className="font-gradient">"Young and be ambitious!"</h2>
              {/* <p>
                I'm a design engineer who looks at the nature of the problem. In
                the form of the product, Regardless of whether it's digital or
                hardware, I'll solve problems. I have it. Paying attention to
                the relationship between products and users, the service is
                great. Dream of being with the user's life.
              </p> */}
              <p>
                문제의 본질을 바라보는 디자인 엔지니어입니다. 제품의 형태에
                구애받지 않고 디지털과 하드웨어 사이를 넘나들며 문제를 풀어가고
                있습니다. 제품과 사용자의 관계에 주목하며, 멋진 서비스가
                사용자의 삶과 함께하는 모습을 꿈꿉니다.
              </p>
            </header>
          </div>
          <section>
            <h3>Work Experience</h3>

            <strong>May KING</strong>
            <p>Founder, Design Instructor · Jan 2018 ~ Dec 2019</p>

            <strong>TNG</strong>
            <p>Design Engineer · Jan 2020 ~ Aug 2021</p>

            <strong>BE THE LIGHT</strong>
            <p>Product Designer · Mar 2021 ~ Aug 2021</p>

            <strong>Korean National Police Agency</strong>
            <p>Auxiliary Police · Aug 2021 ~ Present</p>
          </section>
          <section>
            <h3>Research & Patent</h3>

            <strong>
              원자층 복합 증착 챔버 (atomic layer deposition chamber)
            </strong>
            <p>KITECH · 10-2021-009228</p>

            <strong>
              원자층 복합 증착 장치 (Atomic layer deposition apparatus)
            </strong>
            <p>KITECH · 10-2021-0157694</p>

            <strong>
              지속가능한 ALD 공정챔버 개발을 위한 공정갭에 따른 가스유동 평가
            </strong>
            <p>제 29회 한국반도체학술대회(이하, KCS 2022) · D_0041 / TP1-085</p>

            <strong>전기클린룸 개발을 위한 수분무 가습노즐 평가</strong>
            <p>대한설비공학회 2021 동계학술발표대회 · 21-W-160</p>
          </section>
          <section>
            <h3>Skills</h3>
            <strong>Design Engineering</strong>
            <div>
              <p>#Solidworks</p>
              <p>#Fusion 360</p>
              <p>#Ansys Maxwell</p>
              <p>#Keyshot</p>
            </div>
            <strong>Coding</strong>
            <div>
              <p>#JavaScript</p>
              <p>#React</p>
              <p>#Next</p>
              <p>#Gatsby</p>
              <p>#GraphQL</p>
            </div>
            <strong>Digital Product Design</strong>
            <div>
              <p>#XD</p>
              <p>#Figma</p>
              <p>#Framer</p>
              <p>#AfterEffect</p>
              <p>#ProtoPie</p>
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
