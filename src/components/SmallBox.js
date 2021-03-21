import React from "react";
import styles from "./Box.module.css";

const SmallBox = (props) => {
  const background = props.background;
  return (
    <div
      className={styles.smallBox}
      style={{
        backgroundImage: `url("${background}")`,
      }}
    ></div>
  );
};

export default SmallBox;
