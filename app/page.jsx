import About from "@/component/about";
import Contact from "@/component/contact";
import Experience from "@/component/experience";
import Intro from "@/component/intro";
import Projects from "@/component/projects";
import ScrollDown from "@/component/scroll-down";
import Skill from "@/component/skill";
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
