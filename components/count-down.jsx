"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import React, { useState, useEffect } from "react";

const CountDown = ({ seconds, size }) => {
  const { theme } = useTheme();
  const { isPlaying, setIsPlaying } = useActiveSectionContext();
  const milliseconds = seconds * 1000;
  const radius = size / 2;
  const circumference = size * Math.PI;

  const [countdown, setCountdown] = useState(milliseconds);

  const strokeDashoffset = () =>
    circumference - (countdown / milliseconds) * circumference;

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 100);

        if (countdown === 0) {
          clearInterval(interval);
          setCountdown(milliseconds);
          setIsPlaying(false);
        }
      }, 100);
    } else {
      setCountdown(milliseconds);
    }

    return () => {
      clearInterval(interval);
    };
  }, [countdown, isPlaying]);

  const countdownSizeStyles = {
    height: size,
    width: size,
  };

  const textStyles = {
    fontSize: size * 0.35,
  };

  const secondsLeft = (countdown / 1000).toFixed();

  return (
    <div>
      <div style={{ ...styles.countdownContainer, ...countdownSizeStyles }}>
        <p style={textStyles}>{secondsLeft}s</p>
        <svg style={styles.svg}>
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
            stroke={theme === "light" ? "#33333340" : "#121212"}
            strokeWidth="2"
          ></circle>
        </svg>
        <svg style={styles.svg}>
          <circle
            strokeDasharray={circumference}
            strokeDashoffset={isPlaying ? strokeDashoffset() : 0}
            r={radius}
            cx={radius}
            cy={radius}
            fill="none"
            strokeLinecap="round"
            stroke={theme === "light" ? "#333" : "#fff"}
            strokeWidth="2"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

const styles = {
  countdownContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    margin: "auto",
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transform: "rotateY(-180deg) rotateZ(-90deg)",
    overflow: "visible",
  },
};

export default CountDown;
