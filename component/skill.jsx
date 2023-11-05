"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import "@/css/skill.css";

export default function Skills() {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="skills"
      className="mySection my__container section-b skill__section"
    >
      <SectionHeading subTitle="Skills" title="My Skills and Abilities" />
      <ul className="skill__wrapper">
        {skillsData.map((skill, index) => (
          <motion.li
            className="skill__card"
            key={index}
            variants={{
              initial: {
                opacity: 0,
                y: 100,
              },
              animate: (index) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.05 * index,
                },
              }),
            }}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
