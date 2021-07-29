import React from "react";
import projectList from "../ProjectList";
import ProjectSummary from "../components/projects/ProjectSummary";
import { Article, Hero } from "../styles/Project.styles";
import LargeBox from "../components/projects/LargeBox";
import Share from "../components/projects/Share";

const Bokdda = () => {
  const projectNumber = 1;
  const currentProject = projectList[projectNumber];
  const nextProject = projectList[projectNumber + 1];
  const prevProject = projectList[projectNumber - 1];
  return (
    <main>
      <Hero src={currentProject.background} />
      <Article>
        <ProjectSummary
          title={currentProject.title}
          company={currentProject.company}
          year={currentProject.year}
          summary={currentProject.summary}
          role={currentProject.role}
          goal={currentProject.goal}
          thumbnail={currentProject.background}
        />
        <LargeBox background="https://i.imgur.com/GH9RSdm.png" />

        {/* <Text>
          <h3>Problem</h3>
          <p>
            It is very hard to find social sevices that we can apply. Social
            service must be easy but many people still feeling difficult. To
            apply social service, first we have to check the certifications that
            we can apply.
          </p>
        </Text>
        <Text>
          <h3>Solution</h3>
          <p>
            - 3개의 검색 기준을 6개로 증가. 복지 검색의 정확도를 높이기 위해
            기존 3개의 복지로 간편검색 분류 기준을 6개로 늘렸습니다. 특히 사용자
            인터뷰를 반영해 추가한 소득분위 계산기를 통해 월 소득과 가구 수,
            재산 규모, 부채, 저축금액 등을 입력하면 예상 소득분위를 확인할 수
            있게끔 했습니다. 이 결과 복지로 간편검색에 비해 정확도가 약 90%
            증가했고, 검색 후 다시 조건을 찾아보는 과정을 줄일 수 있었습니다.
          </p>
          <p>
            - <strong>신청과정의 간소화.</strong> 기존에는 검색, 발급, 신청을 다
            다른 곳에서 진행해야 했지만 볶다에서 모든 업무를 한 번에 처리할 수
            있습니다. 따라서 정부24, 노동부, 법원 등 정부 서비스와 연동하여 생체
            인증만으로 복지 신청에 필요한 서류를 자동으로 발급받고 신청까지
            가능하게 했습니다. 또한 사업계획서나 자기소개서, 구직계획서 등
            개인이 작성해야 하는 서류는 별도의 프로그램 설치 없이 볶다에서
            작성과 수정이 가능하도록 온라인에디터를 사용했습니다. 이후 진행한
            프로토타입 사용성 테스트 결과 복지 검색 후 실제 신청 전환율이 30 →
            45%가량 증가했습니다.
          </p>
        </Text> */}
        <Share
          prevLink={prevProject.links}
          nextLink={nextProject.links}
          prevProject={prevProject.title}
          nextProject={nextProject.title}
        />
      </Article>
    </main>
  );
};

export default Bokdda;
