"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BiLogoLinkedin } from "react-icons/bi";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import "@/css/intro.css";
import { useActiveSectionContext } from "@/context/active-section-context";
import profile from "@/public/images/profile.png";
import github from "@/public/images/github.png";
import linkedin from "@/public/images/linkedin.png";
// import { useSpeechSynthesis } from "react-speech-kit";
import Typewriter from "typewriter-effect";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const speakRef = useRef();

  const onEnd = () => {
    setIsSpeaking(false); // Speech is finished
  };

  // const { speak, cancel, voices } = useSpeechSynthesis({ onEnd });
  const [isSpeaking, setIsSpeaking] = useState(false);

  const toggleSpeech = () => {
    setIsSpeaking(!isSpeaking); // Toggle the speech state
  };

  // useEffect(() => {
  //   if (!isSpeaking) {
  //     cancel(); // Cancel the current speech // Pause the speech by speaking an empty string
  //   } else {
  //     const textToSpeak = speakRef.current.textContent;
  //     speak({
  //       text: textToSpeak,
  //       voice: voices[1],
  //     });
  //   }
  // }, [isSpeaking]);

  return (
    <section
      id="home"
      className="mySection my__container my__container-small intro__section"
    >
      <div className="profile__wrapper">
        <div className="wrapper">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profile}
              alt="profile"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="profile"
            />
          </motion.div>

          <motion.div
            className={`${!isSpeaking ? "bounch" : ""} profile__icon`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.5,
              duration: 0.7,
            }}
            // onClick={toggleSpeech}
          >
            <div className={`${isSpeaking ? "show" : ""} speaker__bar`}>
              <PiSpeakerSimpleHighFill size="1rem" />
            </div>
          </motion.div>

          <motion.div
            className="profile-border"
            initial={{ opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, x: "-50%", y: "-50%" }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 220 220">
              <circle
                id="orbit3"
                cx="50%"
                cy="50%"
                r="95px"
                fill="none"
                stroke="var(--line-color)"
                strokeWidth="3px"
              />

              <circle
                id="profile-circle"
                cx="50%"
                cy="50%"
                r="8px"
                fill="var(--line-dot-color)"
              />
            </svg>
          </motion.div>

          <div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className={`${isSpeaking ? "hide" : ""} type__writer`}
          >
            <Typewriter
              options={{
                strings: ["Play Audio..."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        ref={speakRef}
      >
        <span>Hello, I'm Subham.</span> I'm a{" "}
        <span>Frontend Web Developer</span> with <span>more than 1 year</span>{" "}
        of experience. I enjoy building{" "}
        <span className="italic">websites.</span> My focus is{" "}
        <span className="underline">React Js.</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="btn-row">
          <Link href="#contact" className="btn">
            Contact me here <BsArrowRight className="btn-icon" />
          </Link>

          <a className="btn btn-outline" href="/CV.pdf" download>
            Download CV <HiDownload className="btn-icon" />
          </a>
          <a
            className="btn-bg linkedin"
            href="https://www.linkedin.com/in/aniket-tandukar-7b9aaa180/"
            target="_blank"
          >
            <BiLogoLinkedin />
          </a>

          <a
            className="btn-bg github"
            href="https://github.com/subham-tandukar"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
