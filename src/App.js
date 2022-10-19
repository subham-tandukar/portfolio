import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Blog from "./components/BlogPage.js/Blog";
import Contact from "./components/ContactPage/Contact";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import "animate.css";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
