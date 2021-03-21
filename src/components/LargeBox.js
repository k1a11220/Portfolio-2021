import React from "react";
import styles from "./Box.module.css";

const LargeBox = (props) => {
  console.log(props.title);
  const string = props.title; //title에서 문장을 받음
  const strArry = string.split(" "); // 띄어쓰기를 기준으로 단어를 분리
  const background = props.background;
  return (
    <div
      className={styles.largeBox}
      style={{
        backgroundImage: `url("${background}")`,
      }}
    >
      <h1 className={styles.title}>
        {strArry[0]}
        <br />
        {strArry[1]}
        <br />
        {strArry[2]}
      </h1>
      <h3 className={styles.details}>{props.details}</h3>
    </div>
  );
};

export default LargeBox;
