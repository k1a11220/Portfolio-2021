import React from "react";
import styled from "styled-components";
import SEO from "components/seo";
import Layout from "layout/layout";
import InfoList from "../components/about/infoList";

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
    padding: 0 var(--padding-lg);
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
      color: var(--color-gray-6);
    }

    & p:last-of-type {
      margin-top: 1rem;
      font-size: var(--text-md);
    }
  }
`;

// const ImageContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;

//   @media screen and (max-width: 768px) {
//     grid-template-columns: 1fr;
//     & img {
//       margin-bottom: 24px;
//     }
//   }

//   & img {
//     height: 52px;
//   }
// `;

// const ClientWrapper = styled.section`
//   margin-top: 60px;
//   margin-bottom: 20px;

//   & h3 {
//     font-family: Oxygen, sans-serif;
//     color: var(--color-gray-6);
//     font-weight: 400;
//     font-size: 2rem;
//     margin-bottom: 40px;
//   }
// `;

const WorkList = [
  {
    label: "대한민국 경찰청",
    detail: "의무경찰 · 2021.8 ~ Present",
    content: ["신임 의무경찰 온보딩 경험 개선"],
  },
  {
    label: "TNG",
    detail: "Design Engineer · 2020.1 ~ 2021.8",
    content: [
      "비 접촉식 수소 압축기 연구개발",
      "한국생산기술연구원 ALD 장비 연구개발",
      "ALD 장비 인터페이스 디자인",
      "OLED 장비 사용성과 안전성 개선",
    ],
  },
  {
    label: "BE THE LIGHT",
    detail: "Design Engineer · 2021.3 ~ 2021.8",
    content: [
      "휴대용 태양광 랜턴 디자인 및 하드웨어 설계",
      "BE THE LIGHT 웹사이트 디자인",
    ],
  },
  {
    label: "May KING",
    detail: "Founder, Design Instructor · 2018.1 ~ 2019.12",
    content: [
      "비영리 디자인, 설계 교육단체 May KING 설립",
      "디자인, 설계 교육 커리큘럼 기획 및 강의",
    ],
  },
];

const ResearchList = [
  {
    label: "원자층 복합 증착 챔버 (atomic layer deposition chamber)",
    detail: "KITECH · 10-2021-009228",
    content: [],
  },
  {
    label: "원자층 복합 증착 장치 (Atomic layer deposition apparatus)",
    detail: "KITECH · 10-2021-0157694",
    content: [],
  },
  {
    label: "지속가능한 ALD 공정챔버 개발을 위한 공정갭에 따른 가스유동 평가",
    detail: "제 29회 한국반도체학술대회(이하, KCS 2022) · D_0041 / TP1-085",
    content: [],
  },
  {
    label: "전기클린룸 개발을 위한 수분무 가습노즐 평가",
    detail: "대한설비공학회 2021 동계학술발표대회 · 21-W-160",
    content: [],
  },
];

const SkillList = [
  {
    label: "Design Engineering",
    detail: "Solidworks, Fusion 360, Ansys Maxwell, Keyshot",
    content: [
      "여러 기술이 얽혀있는 하드웨어 산업에서 실제로 개발, 적용 가능한 솔루션을 제시합니다. 연구실과 현장의 간격을 줄이고자 합니다. 사용자 뿐만 아니라 산업 전반에서 발생하는 문제를 해결하는 것을 지향합니다.",
    ],
  },
  {
    label: "Product Development",
    detail: "React, React Navtive, Next.js, Gatsby, GraphQL",
    content: [
      "가설과 디자인으로 끝나는 것이 아닌 실제 제품을 만들어 검증하고 측정합니다. 핵심 기능을 포함한 MVP를 만듭니다. 나아가 코드 기반의 디자인 시스템을 구축하고, 개발과 디자인 사이를 연결하고자 합니다.",
    ],
  },
  {
    label: "Digital Product Design",
    detail: "XD, Figma, Framer, AfterEffect, ProtoPie",
    content: [
      "사용자 중심 디자인을 추구합니다. 완성도 높은 UI를 넘어 문제를 해결하기 위해 가설을 세우고 빠르게 실행하여 사용자의 문제를 해결할 수 있는 ",
    ],
  },
];

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <Container>
          <div>
            <Profile src="https://i.imgur.com/ZiyS9UC.png" />
            <header>
              <h2 className="font-gradient">"안녕하세요 손범수입니다."</h2>
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
          <InfoList title={"Work Experience"} list={WorkList} isList={true} />
          <InfoList
            title={"Research & Patent"}
            list={ResearchList}
            isList={true}
          />
          <InfoList title={"Skills"} list={SkillList} isList={false} />
          {/* <ClientWrapper>
            <h3>Clients worked with</h3>
            <ImageContainer>
              <img src="https://i.imgur.com/OHOhz0y.png" alt="kitech" />
              <img src="https://i.imgur.com/klmEfrQ.png" alt="gaontech" />
            </ImageContainer>
          </ClientWrapper> */}
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default About;
