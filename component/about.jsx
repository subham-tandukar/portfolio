"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  return (
    <motion.section
      className=" mySection"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      A passionate React Web Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks. Also have knowledge about creating REST APIs using Node.js.
        I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">position</span> as a react web
        developer.
      </p> */}

      <SectionHeading title="About" />
    </motion.section>
  );
}
