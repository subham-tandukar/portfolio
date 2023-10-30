"use client";

import React, { useEffect, useRef, useState } from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import "@/css/header.css";
import Image from "next/image";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  const navLinks = useRef([]);

  const [currentActive, setCurrentActive] = useState(null);

  const initialLink = links[0].hash;

  // State to track whether to show/hide navigation arrows
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll(".mySection");
    navLinks.current = document.querySelectorAll("header nav a");
    const container = document.querySelector("header nav");
    const handleScroll = () => {
      const bottom = window.scrollY + window.innerHeight;
      let currentSection = null;
      let lastScrollPosition = 0;

      // Variable to track if user has tapped
      let hasTapped = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute("id");

        if (
          rect.top <= window.innerHeight - 9 * 16 &&
          rect.bottom >= window.innerHeight
        ) {
          navLinks.current.forEach((link) => {
            link.classList.remove("nav-active");
          });

          const correspondingLink = document.querySelector(
            `header nav a[href="#${id}"]`
          );

          if (correspondingLink) {
            correspondingLink.classList.add("nav-active");
            setActiveSection(`#${id}`);
          }
          currentSection = section;
        }
      });

      if (currentSection !== currentActive) {
        setCurrentActive(currentSection);
        if (bottom > lastScrollPosition) {
          // Scroll down: scroll the navigation container to center the active link
          const activeLink = document.querySelector("header nav a.nav-active");
          if (activeLink) {
            const linkRect = activeLink.getBoundingClientRect();
            const containerWidth = container.clientWidth;
            const containerScrollLeft = container.scrollLeft;

            const scrollToCenter =
              linkRect.left - containerWidth / 2 + linkRect.width / 2;
            container.scrollTo({
              left: scrollToCenter + containerScrollLeft,
              behavior: "smooth",
            });
          }
        } else {
          // Scroll up: scroll the navigation container to center the active link
          const activeLink = document.querySelector("header nav a.nav-active");
          if (activeLink) {
            const linkRect = activeLink.getBoundingClientRect();
            const containerWidth = container.clientWidth;
            const containerScrollLeft = container.scrollLeft;

            const scrollToCenter =
              linkRect.left - containerWidth / 2 + linkRect.width / 2;
            container.scrollTo({
              left: scrollToCenter + containerScrollLeft,
              behavior: "smooth",
            });
          }
        }
        lastScrollPosition = bottom;

        // Reset hasTapped when the user scrolls
        hasTapped = false;
      }

      // Check if the user is at the top of the page
      if (window.scrollY === 0 && !hasTapped) {
        navLinks.current.forEach((link) => {
          link.classList.remove("nav-active");
        });
        const homeLink = document.querySelector(
          `header nav a[href="${initialLink}"]`
        );
        if (homeLink) {
          homeLink.classList.add("nav-active");
          setActiveSection(`${initialLink}`);
        }

        // Set hasTapped to true to prevent immediate scrolling again
        hasTapped = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial scrollspy setup
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentActive]);

  // Handle the scroll event on the nav element
  const handleNavScroll = () => {
    const container = document.querySelector("header nav");
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    setShowPrevArrow(scrollLeft > 0);
    setShowNextArrow(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    handleNavScroll();
  }, []);

  // Scroll to the next section on click
  const handleNextClick = () => {
    const container = document.querySelector("header nav");
    container.scrollTo({
      left: container.scrollLeft + 100, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  };

  // Scroll to the previous section on click
  const handlePrevClick = () => {
    const container = document.querySelector("header nav");
    container.scrollTo({
      left: container.scrollLeft - 100, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  };
  return (
    <>
      <motion.header
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
      >
        <div
          className={`nav-prev arrow ${showPrevArrow ? "" : " hidden"}`}
          onClick={handlePrevClick}
        >
          <BiChevronLeft />
        </div>
        <nav onScroll={handleNavScroll}>
          {links.map((link) => (
            <Link
              className={activeSection === link.hash ? "nav-active" : ""}
              key={link.hash}
              href={link.hash}
            >
              <span className="icon">
                <Image alt={link.name} src={link.icon} quality={100} />
              </span>
              <span className="text">{link.name}</span>
              {/* {activeSection === link.hash && <span className="mob__bg"></span>} */}

              {link.hash === activeSection && (
                <motion.span
                  className="mob__bg"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </Link>
          ))}
          <div className="slider"></div>
        </nav>
        <div
          className={`nav-next arrow ${showNextArrow ? "" : " hidden"}`}
          onClick={handleNextClick}
        >
          <BiChevronRight />
        </div>
      </motion.header>
    </>
  );
}
