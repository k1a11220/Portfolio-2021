import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className="container">
      <div className={styles.me_img}></div>
      <div className={styles.title_wrapper}>
        <p className="font-md font-regular font-gradient">
          I love to make impact with awesome products.
        </p>
        <p className="font-md font-regular font-gradient">
          I’m currently working as a design engineer at TNG and Product Designer
          at BE THE LIGHT
        </p>
      </div>
      <div className={styles.up_margin}></div>
      <div className={styles.work_wrapper}>
        <div className={styles.work}>
          <h2 className="font-xl font-gray font-bold">Work Experience</h2>
          <div className={styles.details_wrapper}>
            <p className="font-md font-regular">May KING</p>
            <p className="font-light">
              Founder, Design Instructor · Jan 2018 ~ Dec 2019
            </p>
          </div>
          <div className={styles.details_wrapper}>
            <p className="font-md font-regular">TNG</p>
            <p className="font-light">Design Engineer · Jan 2020 ~ Present</p>
          </div>
          <div className={styles.details_wrapper}>
            <p className="font-md font-regular">BE THE LIGHT</p>
            <p className="font-light">Product Designer · Mar 2021 ~ Present</p>
          </div>
        </div>
        <div className={styles.work}>
          <h2 className="font-xl font-gray font-bold">Skills</h2>
          <div className={styles.details_wrapper}>
            <p className="font-md font-regular">Design Engineering</p>
            <button className={styles.roleBtnText}>Fusion 360</button>
            <button className={styles.roleBtnText}>Solidworks</button>
            <button className={styles.roleBtnText}>Ansys Maxwell</button>
            <button className={styles.roleBtnText}>Keyshot</button>
          </div>
          <div className={styles.details_wrapper}>
            <p className="font-md font-regular">Coding</p>
            <button className={styles.roleBtnText}>Javascript</button>
            <button className={styles.roleBtnText}>Python</button>
            <button className={styles.roleBtnText}>SwiftUI</button>
          </div>
          <div className={styles.details_wrapper}>
            <p className="font-md font-regular">Digital Product Design</p>
            <button className={styles.roleBtnText}>Adobe XD</button>
            <button className={styles.roleBtnText}>Figma</button>
            <button className={styles.roleBtnText}>Adobe After Effets</button>
            <button className={styles.roleBtnText}>ProtoPie</button>
          </div>
        </div>
      </div>
      <div className={styles.up_margin}></div>
      <div className={styles.work}>
        <h2 className="font-xl font-gray font-bold">Clients worked with</h2>
        <div className={styles.details_wrapper}>
          <p className="font-md font-regular">Suwon Hi-tech Highschool</p>
          <p className="font-light">
            Mechatronics, Mechanical Engineering · Mar 2017 ~ Jan 2020
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
