import React from "react";

const filterIndicator = () => {
  const [tabLocation, setTabLocation] = useState(0);
  const [tabWidth, setTabwidth] = useState(66);
  const allSelected = () => {
    setTabLocation(0);
    setTabwidth(65);
  };
  const industrialSelected = () => {
    setTabLocation(68);
    setTabwidth(111);
  };
  const digitalSelected = () => {
    setTabLocation(182);
    setTabwidth(90);
  };
  return (
    <ul className={styles.filter_wrapper}>
      <li
        onClick={allSelected}
        style={{
          color: tabLocation === 0 ? "#ffffff" : "#0a0a0a",
        }}
      >
        All
      </li>
      <li
        onClick={industrialSelected}
        style={{
          color: tabLocation === 68 ? "#ffffff" : "#0a0a0a",
        }}
      >
        Industrial
      </li>
      <li
        onClick={digitalSelected}
        style={{
          color: tabLocation === 182 ? "#ffffff" : "#0a0a0a",
        }}
      >
        Digital
      </li>
      <div
        className={styles.tab_indicator}
        style={{
          width: `${tabWidth}px`,
          transform: `translate(${tabLocation}px, -3.5px)`,
        }}
      ></div>
    </ul>
  );
};

export default filterIndicator;
