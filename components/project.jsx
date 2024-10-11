"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Project = ({ title, description, tags, imageUrl, link, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
        top: `calc(100px + 0px) `,
      }}
      className="project__wrapper sticky"
    >
      <a href={link} target="_blank" className="project__card">
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>
                <Image src={tag} alt="" quality={95} width={20} height={20} />
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="project__img"
        />
      </a>
    </motion.div>
  );
};

export default Project;
