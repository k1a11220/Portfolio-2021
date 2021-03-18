import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import styles from "./Work.module.css";

const Work = () => {
  return (
    <section>
      <div className={styles.heroBox}>
        <h1 className={styles.title}>
          LET'S <br />
          MAKE <br />
          HISTORY.
        </h1>
        <h3 className={styles.details}>
          I'm Beomsoo Son, an engineer/designer based in Suwon, South Korea
          focused on Industrial Design & Engineering and Product Design.
        </h3>
      </div>
      <div className={styles.card_area}>
        <ProjectCard title="OLED Equipment" company="TNG" year="2020" />
        <ProjectCard title="ALD Equipment" company="KITECH" year="2020" />
        <ProjectCard title="OLED Equipment" company="TNG" year="2020" />
        <ProjectCard title="OLED Equipment" company="TNG" year="2020" />
        <ProjectCard title="OLED Equipment" company="TNG" year="2020" />
        <ProjectCard title="OLED Equipment" company="TNG" year="2020" />
        <ProjectCard title="OLED Equipment" company="TNG" year="2020" />
        <ProjectCard title="OLED Equipment" company="TNG" year="2020" />
      </div>
    </section>
  );
};

export default Work;
