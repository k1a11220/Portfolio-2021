import React from "react";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = (props) => {
  return (
    <section className={styles.container}>
      <div>
        <p className="font-lg font-regular font-gray">{props.company}</p>
        <h2 className={`${styles.title} title_h1 font-regular`}>
          {props.title}
        </h2>
        <button className={styles.roleBtnText}>Design engineering</button>
        <button className={styles.roleBtnText}>Product design</button>
      </div>
      <div>
        <div className={styles.info_cover}>
          <h3 className="font-md font-regular">Summary</h3>
          <p className="font-light font-gray">{props.details}</p>
        </div>
        <div className={styles.info_cover}>
          <h3 className="font-md font-regular">Project goals</h3>
          <p className="font-light">
            {props.goal}
            <br />
          </p>
        </div>
        {/* <h3 className={`${styles.details} font_light`}>{props.role}</h3> */}
      </div>
    </section>
  );
};

export default ProjectDetail;
