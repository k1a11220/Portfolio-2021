import React from "react";
import styles from "./Box.module.css";

const MediumLongBox = (props) => {
  const background = props.background;
  return (
    <div
      className={styles.mediumLongBox}
      style={{
        backgroundImage: `url("${background}")`,
      }}
    ></div>
  );
};

export default MediumLongBox;
