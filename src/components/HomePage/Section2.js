import React from "react";
import { Step, StepLabel, Stepper } from "@material-ui/core";
import { useState } from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Resume from "./Resume";
import { useContext } from "react";
import Context from "../context/context";

const Section2 = () => {
  const { currentStep, setStep } = useContext(Context);

  function showStep(step) {
    switch (step) {
      case 1:
        return <Skills />;
      case 2:
        return <Experience />;
      case 3:
        return <Education />;
      case 4:
        return <Resume />;
    }
  }

  return (
    <>
      <div className="about-info uk-container uk-container-expand">
        <div className="form-stepper">
          <Stepper
            activeStep={currentStep - 1}
            orientation="horizontal"
            alternativeLabel
          >
            <Step>
              <StepLabel>Skills</StepLabel>
            </Step>
            <Step>
              <StepLabel>Experience</StepLabel>
            </Step>
            <Step>
              <StepLabel>Education</StepLabel>
            </Step>
            <Step>
              <StepLabel>Resume</StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
      </div>
    </>
  );
};

export default Section2;
