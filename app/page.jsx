import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import ScrollDown from "@/components/scroll-down";
import Skill from "@/components/skill";
import React from "react";

const Home = () => {
  return (
    <main>
      <Intro />
      <ScrollDown />
      <About />
      <Projects />
      <Skill />
      <Experience />
      <Contact />
    </main>
  );
};

export default Home;
