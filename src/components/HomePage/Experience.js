import React, { useContext } from "react";
import Context from "../context/context";
import {
  FaHandPointRight,
  FaHandPointLeft,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import exp from "../../img/experience.jpg";

const Experience = () => {
  const { setStep } = useContext(Context);

  const prev = () => {
    setStep(1);
  };
  const next = () => {
    setStep(3);
  };
  return (
    <>
      <div className="uk-container uk-container-expand uk-position-relative wrap">
        <div className="uk-grid uk-child-width-1-2 exp">
          <div className="b">
            <div className="exp-img l" uk-scrollspy="cls: uk-animation-fade; delay: 500">
              <img src={exp} alt="" />
            </div>
          </div>

          <div>
            <div className="exp-info r uk-flex uk-flex-middle">
              <div className="exp-logo">
                <MdWork className="logo-wrap" />
              </div>
              <div uk-scrollspy="cls: uk-animation-slide-right">
                <h5>
                  <FaRegCalendarAlt />{" "}
                  <span>5th October 2021 - 15th December 2021</span>
                </h5>
                <p>
                  Aptech / Computer Education{" "}
                  <MdLocationOn className="uk-margin-small-left" /> Kumaripati,
                  Lalitpur
                </p>
                <span>Training of Web Designing and Hosting Course.</span>
              </div>
            </div>

            <div className="exp-info r uk-flex uk-flex-middle">
              <div className="exp-logo">
                <MdWork className="logo-wrap" />
              </div>
              <div uk-scrollspy="cls: uk-animation-slide-right; delay: 500">
                <h5>
                  <FaRegCalendarAlt />{" "}
                  <span>15th April 2022 - 18th July 2022</span>
                </h5>
                <p>
                  Easy Software{" "}
                  <MdLocationOn className="uk-margin-small-left" /> Kalimati,
                  Kathmandu
                </p>
                <span>
                  Internship in UI/UX designer and Frontend Developer.
                </span>
              </div>
            </div>

            <div className="exp-info r uk-flex uk-flex-middle">
              <div className="exp-logo">
                <MdWork className="logo-wrap" />
              </div>
              <div uk-scrollspy="cls: uk-animation-slide-right; delay: 1000">
                <h5>
                  <FaRegCalendarAlt /> <span>28th July 2022 - present</span>
                </h5>
                <p>
                  Easy Software{" "}
                  <MdLocationOn className="uk-margin-small-left" /> Kalimati,
                  Kathmandu
                </p>
                <span>Working as Frontend React JS Developer.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-flex uk-flex-between uk-flex-middle skill-button">
          <button
            onClick={prev}
            className="prev uk-button"
            uk-tooltip="title: Previous"
          >
            <FaHandPointLeft color="#03041c" size="3rem" />
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

export default Experience;
