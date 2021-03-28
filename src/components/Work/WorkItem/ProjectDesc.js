import React from "react";
import styles from "./ProjectDesc.module.css";

const ProjectDesc = () => {
  return (
    <div className={styles.desc_container}>
      <div>
        <h2 className="title_h1 font_light">Challenge</h2>
      </div>
      <div>
        <h3 className="font_light">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </h3>
      </div>
    </div>
  );
};

export default ProjectDesc;
