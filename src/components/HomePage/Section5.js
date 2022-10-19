import React from "react";
import Typewriter from "typewriter-effect";

const Section5 = () => {
  return (
    <>
      <div className="all-project-bg">
        <div className="uk-container project-bg-txt">
          <Typewriter
            options={{
              strings: [
                "Want to see all projects ?",
                "Click on the button below . . .",
              ],
              autoStart: true,
              loop: true,
            }}
          />

          <button className="uk-button hover-btn uk-margin-top">View All . . .</button>
        </div>
      </div>
    </>
  );
};

export default Section5;
