"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import Image from "next/image";
import about from "@/public/images/about-img.gif";
import "@/css/about.css";

export default function About() {
  return (
    <motion.section
      className=" mySection my__container about__section section-b"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      
      id="about"
    >
      <SectionHeading title="Who am I ?" subTitle="About" />

      <div className="about__wrapper">
        <div>
          <Image alt="about" src={about} quality={100} />
        </div>
        <div>
          <p>
            A passionate React Web Developer 🚀 having a special interest in
            Frontend technologies and experience of building Web applications
            with JavaScript / Reactjs / Nodejs and some other cool libraries and
            frameworks. Also have knowledge about creating REST APIs using
            Node.js. I am always looking to learn new technologies. I am
            currently looking for a position as a{" "}
            <strong>Frontend Web Developer.</strong>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
