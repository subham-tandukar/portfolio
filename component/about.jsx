"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Speech from 'react-text-to-speech';

export default function About() {
  const startBtn = <button className='my-start-btn'>Start Speech</button>
    const pauseBtn = <button className='my-pause-btn'>Pause Speech</button>
    const stopBtn = <button className='my-stop-btn'>Stop Speech</button>
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

      <SectionHeading title="About"/>
      <Speech 
        text='This is a partially customized speech component.'
        pitch={1.5}
        rate={1}
        volume={1}
        startBtn={startBtn}
        pauseBtn={pauseBtn}
        stopBtn={stopBtn}
        props={{ title: 'React Text-To-Speech Component' }}
        onError={() => console.error('Browser not supported!')}
    />
      
    </motion.section>
  );
}
