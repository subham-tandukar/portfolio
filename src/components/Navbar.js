import React from "react";
import { NavLink } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { BsSlashLg } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="head uk-grid">
          <div className="head-1 uk-width-expand">
            <a href="tel:9869031285">
              {" "}
              <BsFillTelephoneFill color="#03041C" /> 9869031285
            </a>
            <a href="mailto:subhamtndkr9@gmail.com">
              {" "}
              <FaEnvelope color="#03041C" /> subhamtndkr9@gmail.com
            </a>
          </div>

          <div className="head-2 uk-width-1-3">
            <a
              href="https://www.facebook.com/subham.tandukar.3/"
              uk-tooltip="title: Facebook"
              target="_blank"
            >
              <RiFacebookFill />
            </a>
            <a
              href="https://www.instagram.com/subham._.tandukar.js/"
              uk-tooltip="title: Instagram"
              target="_blank"
            >
              <GrInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/aniket-tandukar-7b9aaa180/"
              uk-tooltip="title: LinkedIn"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <nav
          className="uk-navbar-container"
          uk-navbar="true"
          uk-sticky="top:300; animation: uk-animation-slide-top;"
        >
          <div className="uk-navbar-left logo uk-flex">
            <FaChevronLeft color="#03041c" size="2rem" />
            <span>
              {" "}
              Aniket <br /> Tandukar{" "}
            </span>
            <div>
              <BsSlashLg className="slash" />
              <FaChevronRight color="#03041c" size="2rem" />
            </div>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
