import React from "react";
import { MdClose } from "react-icons/md";
import CountDown from "./count-down";
import "@/css/popup.css";
import { useActiveSectionContext } from "@/context/active-section-context";

const Popup = () => {
  const { isPlaying, setIsPlaying, error, setIsError, msg, setMsg } =
    useActiveSectionContext();
  return (
    <div className={`${isPlaying ? "active" : ""} popup__bg`}>
      <div className={`${isPlaying ? "active" : ""} popup__modal`}>
        <div className="close__popup" onClick={() => setIsPlaying(false)}>
          <MdClose size="1.8rem" />
        </div>
        <h1>{error ? "Failed" : "Success"}</h1>
        <div className={`${isPlaying ? "active" : ""} success-animation`}>
          <svg
            className={`checkmark error ${error && isPlaying ? "toggle" : ""} `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
              stroke={error ? "#ec2e2e" : "#4bb71b"}
            />
            {!error ? (
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            ) : (
              <>
                <line
                  className="left"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  x1="14.271"
                  y1="14.521"
                  x2="39.729"
                  y2="39.979"
                />
                <line
                  className="right"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  x1="39.729"
                  y1="14.521"
                  x2="14.271"
                  y2="39.979"
                />
              </>
            )}
          </svg>
        </div>
        {error ? (
          <p>{msg}</p>
        ) : (
          <>
            <p>Message sent successfully!</p>
            <p>Thank you for contacting me.</p>
          </>
        )}

        <div className="countdown__wrapper">
          <CountDown seconds={10} size={40} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
