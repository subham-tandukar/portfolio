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
            I'm a passionate <strong>Web Developer</strong> 🚀 with a strong
            interest in both frontend and backend technologies. I have hands-on
            experience building dynamic and responsive web applications using{" "}
            <strong>React.js</strong>,<strong>Next.js</strong>,{" "}
            <strong>WordPress</strong>, and other modern libraries and
            frameworks. I also have experience in developing{" "}
            <strong>RESTful APIs</strong> with <strong>Node.js</strong>.
            Continuously learning and staying updated with new technologies is
            something I value deeply. I'm currently available for{" "}
            <strong>freelance </strong>
            opportunities and excited to collaborate on innovative projects.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
