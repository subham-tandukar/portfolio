import React from "react";

const SectionHeading = (props) => {
  return (
    <div className="heading">
      <h1>{props.title}</h1>
      <div class="heading-line"></div>
    </div>
  );
};

export default SectionHeading;
