import React from "react";

const Child = (props) => {
  return (
    <div>
      <svg>
        <circle
          cx="47"
          cy="47"
          r="40"
          stroke="#00ABBA "
          stroke-width="3"
          fill="#00ABBA "
        />
        <g className="circle-label">{props.providers}</g>
      </svg>
    </div>
  );
};

export default Child;
