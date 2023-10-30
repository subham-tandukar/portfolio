import About from "@/component/about";
import Contact from "@/component/contact";
import Experience from "@/component/experience";
import Intro from "@/component/intro";
import Projects from "@/component/projects";
import SectionDivider from "@/component/section-divider";
import Skill from "@/component/skill";
import React from "react";

const Home = () => {
  return (
    <main>
      <Intro />
      {/* <SectionDivider /> */}
      <About />
      <Projects />
      <Skill />
      <Experience />
      <Contact />
    </main>
  );
};

export default Home;
