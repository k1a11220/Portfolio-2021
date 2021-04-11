import React, { useCallback, useEffect, useState } from "react";
import styles from "./About.module.css";
// import UpMargin from "../components/UpMargin";
const TITLEARRAY = [
  "Hello",
  "안녕하세요",
  "Hallo",
  "Bonjour",
  "こんにちは",
  "你好",
  "Привет",
  "مرحبا",
  "Ciao",
  "Halo",
];
const About = () => {
  const [title, setTitle] = useState("Hello");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * TITLEARRAY.length);
    setTitle(TITLEARRAY[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <section className="container">
      <div className="title_wrapper">
        <div>
          <h1 className="font_gradient">{`[ ${title} ]`}</h1>
          <h2 className="font_regular font_gray font_gradient">
            I love to make impact with awesome products. <br />
            I’m currently working as a design engineer at TNG and Product
            Designer at BE THE LIGHT
          </h2>
        </div>
      </div>
      <ul className={styles.details_wrapper}>
        <li>
          <h2 className="font_regular font_gradient">Work Experience</h2>
          <div className={styles.experience_details}>
            <div className={styles.experience_grid}>
              <h3 className="font_regular">Leader, STUDIO</h3>
              <h3 className="font_regular font_gray">2017 ~ 2019</h3>
            </div>
            <div className={styles.experience_grid}>
              <h3 className="font_regular">Engineering Instructor, May KING</h3>
              <h3 className="font_regular font_gray">2018 ~ 2020</h3>
            </div>
            <div className={styles.experience_grid}>
              <h3 className="font_regular ">Design Engineer, TNG</h3>
              <h3 className="font_regular font_gray">2020 ~</h3>
            </div>
            <div className={styles.experience_grid}>
              <h3 className="font_regular ">Product Designer, BE THE LIGHT</h3>
              <h3 className="font_regular font_gray">2021 ~</h3>
            </div>
          </div>
        </li>

        <li>
          <h2 className="font_regular font_gradient">
            Clients I've worked with
          </h2>
          <div className={styles.experience_details}>
            <div className={styles.clients_grid}>
              <h3 className="font_regular">KITECH · 한국생산기술연구원</h3>
            </div>
            <div className={styles.clients_grid}>
              <h3 className="font_regular">Gaon Tech · 가온테크</h3>
            </div>
            <div className={styles.clients_grid}>
              <h3 className="font_regular ">NowFun · 나우펀</h3>
            </div>
          </div>
        </li>

        <li>
          <h2 className="font_regular font_gradient">Skills</h2>
          <div className={styles.experience_details}>
            <div className={styles.skills_grid}>
              <h3 className="font_regular">Design Engineering</h3>
              <h3 className="font_regular font_gray">
                Fusion 360, Solidworks, Ansys Maxwell, Keyshot
              </h3>
            </div>
            <div className={styles.skills_grid}>
              <h3 className="font_regular">Coding</h3>
              <h3 className="font_regular font_gray">
                Javascript, python, SwiftUI
              </h3>
            </div>
            <div className={styles.skills_grid}>
              <h3 className="font_regular">Prototyping</h3>
              <h3 className="font_regular font_gray">
                Adobe After Effects, Protopie
              </h3>
            </div>
            <div className={styles.skills_grid}>
              <h3 className="font_regular">Digital Product Design</h3>
              <h3 className="font_regular font_gray">Adobe XD, Sketch</h3>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
