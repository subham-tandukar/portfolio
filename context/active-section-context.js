"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import { links } from "@/lib/data";
const ActiveSectionContext = createContext(null);

export default function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState(links[0].hash);
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setIsError] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (isPlaying) {
      document.documentElement.classList.add("hide-scroll");
    } else {
      document.documentElement.classList.remove("hide-scroll");
    }

    // Cleanup the class when the component unmounts
    return () => {
      document.documentElement.classList.remove("hide-scroll");
    };
  }, [isPlaying]);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
        isPlaying,
        setIsPlaying,
        error,
        setIsError,
        msg,
        setMsg,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}
