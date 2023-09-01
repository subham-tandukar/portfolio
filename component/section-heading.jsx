import React from "react";

const SectionHeading = (props) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {props.title}
    </h2>
  );
};

export default SectionHeading;
