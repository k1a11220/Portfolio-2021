import React from "react";
import styles from "./Box.module.css";

const MediumBox = (props) => {
  const background = props.background;
  return (
    <div
      className={styles.mediumBox}
      style={{
        backgroundImage: `url("${background}")`,
      }}
    ></div>
  );
};

export default MediumBox;
