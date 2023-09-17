import React from "react";

const SectionHeading = (props) => {
  return (
    <div className="heading">
      <h1>{props.title}</h1>
      <div className="wave">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default SectionHeading;
