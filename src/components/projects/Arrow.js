import React from "react";
import styled from "@emotion/styled";

const Arrow = ({ direction }) => {
  const SVG = styled.svg`
    margin: 20px;
    transform: rotate(${direction});
  `;
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <g id="그룹_105" data-name="그룹 105" transform="translate(-630 -4357)">
        <circle
          id="타원_1"
          data-name="타원 1"
          cx="16"
          cy="16"
          r="16"
          transform="translate(630 4357)"
          fill="#fff"
        />
        <line
          id="선_6"
          data-name="선 6"
          x2="14"
          transform="translate(639 4373.5)"
          fill="none"
          stroke="#4a4a4a"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <line
          id="선_7"
          data-name="선 7"
          y1="5"
          x2="5.5"
          transform="translate(639 4368.5)"
          fill="none"
          stroke="#4a4a4a"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <line
          id="선_8"
          data-name="선 8"
          x2="5.5"
          y2="5"
          transform="translate(639 4373.5)"
          fill="none"
          stroke="#4a4a4a"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
    </SVG>
  );
};

export default Arrow;
