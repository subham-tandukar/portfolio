import React from "react";

const SectionHeading = (props) => {
  return (
    <div className="my__heading">
      <span className="sub__heading">{props.subTitle}</span>
      <h1 className="heading">{props.title}</h1>
      <div className="heading-line"></div>
    </div>
  );
};

export default SectionHeading;
