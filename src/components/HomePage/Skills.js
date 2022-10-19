import React, { useContext, useState, useEffect } from "react";
import Context from "../context/context";
import {
  FaHandPointRight,
  FaHandPointLeft,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiPhp,
  SiAdobephotoshop,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import BorderLinearProgress from "@mui/material/LinearProgress";

const Skills = () => {
  const { setStep } = useContext(Context);

  const next = () => {
    setStep(2);
  };

  return (
    <>
      <div className="uk-container uk-container-expand uk-position-relative wrap">
        <div className="uk-grid uk-child-width-1-2 skill">
          <div className="b">
            <div className="skill-bar l">
              <div className="uk-margin-top">
                <div className="uk-flex uk-flex-middle skill-txt">
                  <SiHtml5 color="#F25320" size="2rem" className="skill-icon" />
                  <h5>HTML 5</h5>
                  <span>(100%)</span>
                </div>
                <div className="uk-position-relative">
                  <BorderLinearProgress
                    variant="determinate"
                    value={100}
                    uk-scrollspy="cls: uk-animation-slide-left; repeat: true;"
                  />
                  <div className="skill-bg"></div>
                </div>
              </div>

              <div className="uk-margin-top">
                <div className="uk-flex uk-flex-middle skill-txt">
                  <FaCss3 color="#2091EB" size="2rem" className="skill-icon" />
                  <h5>CSS 3</h5>
                  <span>(100%)</span>
                </div>

                <div className="uk-position-relative">
                  <BorderLinearProgress
                    variant="determinate"
                    value={100}
                    uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:300"
                  />
                  <div className="skill-bg"></div>
                </div>
              </div>

              <div className="uk-margin-top">
                <div className="uk-flex uk-flex-middle skill-txt">
                  <FaSass color="#C26191" size="2rem" className="skill-icon" />
                  <h5>Sass</h5>
                  <span>(100%)</span>
                </div>

                <div className="uk-position-relative">
                  <BorderLinearProgress
                    variant="determinate"
                    value={100}
                    uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:600"
                  />
                  <div className="skill-bg"></div>
                </div>
              </div>

              <div className="uk-margin-top">
                <div className="uk-flex uk-flex-middle skill-txt">
                  <SiJavascript
                    color="#EAD41C"
                    size="2rem"
                    className="skill-icon"
                  />
                  <h5>Javascript</h5>
                  <span>(90%)</span>
                </div>

                <div className="uk-position-relative">
                  <BorderLinearProgress
                    variant="determinate"
                    value={90}
                    uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:900"
                  />
                  <div className="skill-bg"></div>
                </div>
              </div>

              <div className="uk-margin-top">
                <div className="uk-flex uk-flex-middle skill-txt">
                  <SiJquery
                    color="#1F5B93"
                    size="2rem"
                    className="skill-icon"
                  />
                  <h5>Jquery</h5>
                  <span>(95%)</span>
                </div>

                <div className="uk-position-relative">
                  <BorderLinearProgress
                    variant="determinate"
                    value={95}
                    uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:1200"
                  />
                  <div className="skill-bg"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="b">
            <div className="skill-bar r">
              <div className="uk-margin-top">
                <div className="uk-flex uk-flex-middle skill-txt">
                  <FaBootstrap
                    color="#7210EB"
                    size="2rem"
                    className="skill-icon"
                  />
                  <h5>Bootstrap</h5>
                  <span>(100%)</span>
                </div>

                <div className="uk-position-relative">
                  <BorderLinearProgress
                    variant="determinate"
                    value={100}
                    uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:1500"
                  />
                  <div className="skill-bg"></div>
                </div>
              </div>
              <div className="uk-margin-top">
                <div className="uk-flex uk-flex-middle skill-txt">
                  <FaReact color="#5CCFEE" size="2rem" className="skill-icon" />
                  <h5>React</h5>
                  <span>(95%)</span>
                </div>

                <div className="uk-position-relative">
                  <BorderLinearProgress
                    variant="determinate"
                    value={95}
                    uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:1800"
                  />
                  <div className="skill-bg"></div>
                </div>
              </div>

              <div className="uk-margin-top">
                <div className="uk-flex uk-flex-middle skill-txt">
                  <SiPhp color="#3460A6" size="2rem" className="skill-icon" />
                  <h5>Php</h5>
                  <span>(50%)</span>
                </div>

                <div className="uk-position-relative">
                  <BorderLinearProgress
                    variant="determinate"
                    value={50}
                    uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:2100"
                  />
                  <div className="skill-bg"></div>
                </div>
              </div>

              <div className="uk-margin-top">
                <div className="uk-flex uk-flex-middle skill-txt">
                  <SiAdobephotoshop
                    color="#061D32"
                    size="2rem"
                    className="skill-icon"
                  />
                  <h5>Adobe Photoshop</h5>
                  <span>(100%)</span>
                </div>

                <div className="uk-position-relative">
                  <BorderLinearProgress
                    variant="determinate"
                    value={100}
                    uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:2400"
                  />
                  <div className="skill-bg"></div>
                </div>
              </div>

              <div className="uk-margin-top">
                <div className="uk-flex uk-flex-middle skill-txt">
                  <FiFigma color="#34293C" size="2rem" className="skill-icon" />
                  <h5>Figma</h5>
                  <span>(100%)</span>
                </div>

                <div className="uk-position-relative">
                  <BorderLinearProgress
                    variant="determinate"
                    value={100}
                    uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:2700"
                  />
                  <div className="skill-bg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-flex uk-flex-between uk-flex-middle skill-button">
          <button disabled className="prev uk-button disable">
            <FaHandPointLeft color="rgba(0, 0, 0, 0.38)" size="3rem" />
          </button>
          <button
            onClick={next}
            className="next uk-button"
            uk-tooltip="title: Next"
          >
            <FaHandPointRight color="#03041c" size="3rem" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Skills;
