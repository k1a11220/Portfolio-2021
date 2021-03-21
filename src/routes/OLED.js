import React from "react";

import projectList from "../ProjectList";

import DetailTitle from "../components/DetailTitle";
import LargeBox from "../components/LargeBox";
import MediumBox from "../components/MediumBox";
import MediumLongBox from "../components/MediumLongBox";
import UpMargin from "../components/UpMargin";
import styles from "./Detail.module.css";
import SmallBox from "../components/SmallBox";

const OLED = () => {
  return (
    <section className="container">
      <LargeBox title="" background="https://i.imgur.com/f71RFmr.png" />
      <UpMargin />
      <DetailTitle
        title={projectList[0].title}
        company={projectList[0].company}
        year={projectList[0].year}
        details={projectList[0].details}
      />
      <UpMargin />
      <div className={styles.box_area}>
        <MediumLongBox background="https://i.imgur.com/f71RFmr.png" />
        <MediumLongBox background="https://i.imgur.com/f71RFmr.png" />
      </div>
      <div className={styles.box_area}>
        <MediumBox background="https://i.imgur.com/f71RFmr.png" />
        <MediumBox background="https://i.imgur.com/f71RFmr.png" />
        <MediumBox background="https://i.imgur.com/f71RFmr.png" />
        <MediumBox background="https://i.imgur.com/f71RFmr.png" />
      </div>
      <div className={styles.box_area}>
        <SmallBox background="https://i.imgur.com/f71RFmr.png" />
        <SmallBox background="https://i.imgur.com/f71RFmr.png" />
        <SmallBox background="https://i.imgur.com/f71RFmr.png" />
      </div>
    </section>
  );
};

export default OLED;
