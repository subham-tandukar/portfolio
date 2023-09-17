"use client";

import React, { useEffect, useRef, useState } from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import "@/css/header.css";
import Image from "next/image";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import $ from "jquery";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  const navLinks = useRef([]);
  const navContainer = useRef(null);
  const [currentActive, setCurrentActive] = useState(null);

  const initialLink = links[0].hash;

  // State to track whether to show/hide navigation arrows
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(false);

  // Function to scroll the navigation to the center of the active section
  const scrollCenter = (elem, speed) => {
    const active = document.querySelector(elem);

    if (active) {
      const container = navContainer.current;
      const activeWidth = active.offsetWidth / 2;
      const pos = active.offsetLeft + activeWidth;
      const containerWidth = container.clientWidth;
      const targetScroll = pos - containerWidth / 2;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  $.fn.scrollClickCenter = function (elem, speed) {
    var active = $(this).find(elem);

    if (active.length > 0) {
      var container = $(this);
      var activeWidth = active.width() / 2;
      var pos = active.position().left + activeWidth;
      var currentScroll = container.scrollLeft();
      var containerWidth = container.width();
      pos = pos + currentScroll - containerWidth / 2;

      container.animate(
        {
          scrollLeft: pos,
        },
        speed == undefined ? 1000 : speed
      );
    }

    return this;
  };

  const handleClick = (link) => {
    setActiveSection(link.hash);
    // Use setTimeout to ensure scrollCenter runs after setActiveSection updates the state
    setTimeout(() => {
      $("header nav").scrollClickCenter(".nav-active", 300);
    }, 0);
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".mySection");
    navLinks.current = document.querySelectorAll("header nav a");

    const handleScroll = () => {
      const bottom = window.scrollY + window.innerHeight;
      let currentSection = null;
      let lastScrollPosition = 0;
      sections.forEach((section) => {
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const offsetThreshold = height * 0.3;
        const id = section.getAttribute("id");

        if (bottom >= offset + offsetThreshold && bottom < offset + height) {
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
          // Scroll down: scroll to the center of the active section
          scrollCenter(".nav-active", 300);
        } else {
          // Scroll up: scroll to the center of the active section
          scrollCenter(".nav-active", 300);
        }
        lastScrollPosition = bottom;
      }

      // Check if the user is at the top of the page
      if (window.scrollY === 0) {
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
    const scrollLeft = navContainer.current.scrollLeft;
    const scrollWidth = navContainer.current.scrollWidth;
    const clientWidth = navContainer.current.clientWidth;

    setShowPrevArrow(scrollLeft > 0);
    setShowNextArrow(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    handleNavScroll();
  }, []);

  // Scroll to the next section on click
  const handleNextClick = () => {
    navContainer.current.scrollTo({
      left: navContainer.current.scrollLeft + 100, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  };

  // Scroll to the previous section on click
  const handlePrevClick = () => {
    navContainer.current.scrollTo({
      left: navContainer.current.scrollLeft - 100, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="">
        <div
          className={`nav-prev arrow ${showPrevArrow ? "" : " hidden"}`}
          onClick={handlePrevClick}
        >
          <BiChevronLeft />
        </div>
        <nav className="" onScroll={handleNavScroll} ref={navContainer}>
          {links.map((link) => (
            <Link
              className={activeSection === link.hash ? "nav-active" : ""}
              key={link.hash}
              href={link.hash}
              onClick={() => handleClick(link)}
            >
              <span className="icon">
                <Image alt={link.name} src={link.icon} quality={100} />
              </span>
              <span className="text">{link.name}</span>
              {activeSection === link.hash && <span className="mob__bg"></span>}
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
      </header>
    </>
  );
}
