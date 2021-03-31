import React from "react";

import projectList from "../ProjectList";

import ProjectDetail from "../components/Work/WorkItem/ProjectDetail";
import LargeBox from "../components/Work/WorkItem/ImageBox/LargeBox";
import MediumBox from "../components/Work/WorkItem/ImageBox/MediumBox";
import UpMargin from "../components/Assets/UpMargin";
import ProjectDesc from "../components/Work/WorkItem/ProjectDesc";
import MediumLongBox from "../components/Work/WorkItem/ImageBox/MediumLongBox";

const Bokdda = () => {
  const bokdda = projectList[1];
  return (
    <section className="container">
      <LargeBox background="https://i.imgur.com/QPNqqhO.png" />
      <ProjectDetail
        title={bokdda.title}
        company={bokdda.company}
        year={bokdda.year}
        details={bokdda.details}
        role={bokdda.role}
        goal={bokdda.goal}
      />
      <UpMargin />
      <MediumLongBox />
      <ProjectDesc
        title="Problem"
        desc_1="It is very hard to find social sevices that we can apply."
        desc_2="Social service must be easy but many people still feeling difficult. To apply social service, first we have to check the certifications that we can apply."
      />
      <LargeBox background="https://i.imgur.com/QPNqqhO.png" />

      <ProjectDesc
        title="Approach"
        desc_1="We brainstormed with Joey on the look and feel for his portfolio site. He wanted the user experience to be very immersive and interactive with fun moments of discovery."
        desc_2="We learned about Joey's creative process, developed visual mood boards, and researched unique interactive web approaches. We mapped out the architecture of the site and began with lots of analog sketching."
      />
      <LargeBox background="https://i.imgur.com/QPNqqhO.png" />
      <div className="box_area">
        <MediumBox background="https://i.imgur.com/f71RFmr.png" />
        <ProjectDesc
          title="Solution"
          desc="- 3개의 검색 기준을 6개로 증가.
          복지 검색의 정확도를 높이기 위해 기존 3개의 복지로 간편검색 분류 기준을 6개로 늘렸습니다.
          
          특히 사용자 인터뷰를 반영해 추가한 소득분위 계산기를 통해 월 소득과 가구 수, 재산 규모, 부채, 저축금액 등을 입력하면 예상 소득분위를 확인할 수 있게끔 했습니다.
          이 결과 복지로 간편검색에 비해 정확도가 약 90% 증가했고, 검색 후 다시 조건을 찾아보는 과정을 줄일 수 있었습니다.
          
          - 신청과정의 간소화.
          기존에는 검색, 발급, 신청을 다 다른 곳에서 진행해야 했지만 볶다에서 모든 업무를 한 번에 처리할 수 있습니다.
          따라서 정부24, 노동부, 법원 등 정부 서비스와 연동하여 생체 인증만으로 복지 신청에 필요한 서류를 자동으로 발급받고 신청까지 가능하게 했습니다.
          
          또한 사업계획서나 자기소개서, 구직계획서 등 개인이 작성해야 하는 서류는 별도의 프로그램 설치 없이 볶다에서 작성과 수정이 가능하도록 온라인에디터를 사용했습니다.
          이후 진행한 프로토타입 사용성 테스트 결과 복지 검색 후 실제 신청 전환율이 30 → 45%가량 증가했습니다."
        />
      </div>
    </section>
  );
};

export default Bokdda;
