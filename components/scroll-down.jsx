"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "@/css/scroll-down.css";

export default function ScrollDown() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const myWindow = window.scrollY;
      const topWindow = myWindow * 4;
      const windowHeight = window.innerHeight;
      const position = topWindow / windowHeight;
      const calculatedOpacity = 1 - position;

      setOpacity(calculatedOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial scrollspy setup
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [opacity]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      className="scroll__down"
    >
      <div
        style={{
          opacity: opacity,
          visibility: opacity < 0 ? "hidden" : "visible",
          transition: "all 0.5s linear",
        }}
      >
        <div className="scroll-line">
          <span></span>
          <span></span>
          <span></span>Scroll
        </div>
      </div>
      <div
        className="section__line"
        style={{
          opacity: opacity < 0 ? "1" : opacity,
          height: opacity < 0 ? "4rem" : "0rem",
        }}
      ></div>
    </motion.div>
  );
}
