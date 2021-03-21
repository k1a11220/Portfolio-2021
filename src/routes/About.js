import React from "react";
import styles from "./About.module.css";
import UpMargin from "../components/UpMargin";

const About = () => {
  return (
    <section className="container">
      <div>
        <h1 className={styles.title}>HELLO</h1>
        <h3 className={styles.details}>
          I'm Beomsoo Son, an engineer/designer based in Suwon, South Korea.
          <br />
          Main area is Industrial Design & Engineering and Product Design.
        </h3>
        <h3 className={styles.details}>
          I love to make impact with awesome products. <br />
          I’m currently working as a design engineer at TNG and Product Designer
          at BE THE LIGHT
        </h3>
        <UpMargin />
        <UpMargin />
        <UpMargin />
        <UpMargin />
        <hr className={styles.line} />
      </div>
      <UpMargin />
      <UpMargin />
      <div>
        <ul className={styles.details_wrapper}>
          <div>
            <h1 className={styles.experience_title}>Work Experience</h1>
            <li className={styles.experience_details}>
              <ul>
                <li>STUDIO</li>
                <li>May KING</li>
                <li>TNG</li>
                <li>BE THE LIGHT</li>
              </ul>
              <ul>
                <li>Leader</li>
                <li>Engineering Instructor</li>
                <li>Design Engineer</li>
                <li>Product Designer</li>
              </ul>
              <ul>
                <li>2017 ~ 2019</li>
                <li>2018 ~ 2020</li>
                <li>2020 ~</li>
                <li>2021 ~</li>
              </ul>
            </li>
          </div>

          <div>
            <h1 className={styles.experience_title}>
              Clients I've worked with
            </h1>
            <li className={styles.experience_details}>
              <ul>
                <li>KITECH</li>
                <li>Gaon Tech</li>
                <li>NowFun</li>
              </ul>
            </li>
          </div>
        </ul>
      </div>
      <UpMargin />
      <UpMargin />
      <UpMargin />
    </section>
  );
};

export default About;
