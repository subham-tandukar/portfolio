import React, { useContext } from "react";
import Context from "../context/context";
import {
  FaHandPointRight,
  FaHandPointLeft,
  FaRegCalendarAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import edu from "../../img/education.jpg";

const Education = () => {
  const { setStep } = useContext(Context);

  const prev = () => {
    setStep(2);
  };
  const next = () => {
    setStep(4);
  };
  return (
    <>
      <div className="uk-container uk-container-expand uk-position-relative wrap">
        <div className="uk-grid uk-child-width-1-2 edu ">
          <div className="b">
            <div
              className="edu-img l"
              uk-scrollspy="cls: uk-animation-fade; delay: 500"
            >
              <img src={edu} alt="" />
            </div>
          </div>

          <div>
            <div className="edu-info r uk-flex uk-flex-middle">
              <div className="edu-logo">
                <FaGraduationCap className="logo-wrap" />
              </div>
              <div uk-scrollspy="cls: uk-animation-slide-right">
                <h5>
                  School <FaRegCalendarAlt className="uk-margin-small-left" />{" "}
                  <span>2016</span>
                </h5>
                <p>
                  Living Stone Academy{" "}
                  <MdLocationOn className="uk-margin-small-left" /> Nakkhu,
                  Lalitpur
                </p>
              </div>
            </div>

            <div className="edu-info r uk-flex uk-flex-middle">
              <div className="edu-logo">
                <FaGraduationCap className="logo-wrap" />
              </div>
              <div uk-scrollspy="cls: uk-animation-slide-right; delay: 500">
                <h5>
                  High School{" "}
                  <FaRegCalendarAlt className="uk-margin-small-left" />{" "}
                  <span>2017 - 2019</span>
                </h5>
                <p>
                  Caspian Valley College{" "}
                  <MdLocationOn className="uk-margin-small-left" /> Kumaripati,
                  Lalitpur
                </p>
                <span>Management in Business Studies.</span>
              </div>
            </div>

            <div className="edu-info r uk-flex uk-flex-middle">
              <div className="edu-logo">
                <FaGraduationCap className="logo-wrap" />
              </div>
              <div uk-scrollspy="cls: uk-animation-slide-right; delay: 1000">
                <h5>
                  Bachelor's Degree{" "}
                  <FaRegCalendarAlt className="uk-margin-small-left" />{" "}
                  <span>2019 - present</span>
                </h5>
                <p>
                  Caspian Valley College{" "}
                  <MdLocationOn className="uk-margin-small-left" />{" "}
                  Mahalaxmistan, Lalitpur
                </p>
                <span>Currently studying Bachelors in Business Studies.</span>
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

export default Education;
