"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import "@/css/header.css";
import Image from "next/image";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  const navLinks = useRef([]);

  useEffect(() => {
    const sections = document.querySelectorAll(".mySection");
    navLinks.current = document.querySelectorAll("header nav a");

    const handleScroll = () => {
      const bottom = window.scrollY + window.innerHeight;

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
          }
        }
      });

      // Check if the user is at the top of the page
      if (window.scrollY === 0) {
        navLinks.current.forEach((link) => {
          link.classList.remove("nav-active");
        });
        const homeLink = document.querySelector(
          `header nav a[href="#home"]`
        );
        if (homeLink) {
          homeLink.classList.add("nav-active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="">
        <nav className="">
          {links.map((link) => (
            <Link
              className={activeSection === link.hash ? "nav-active" : ""}
              key={link.hash}
              href={link.hash}
              onClick={() => {
                setActiveSection(link.hash);
              }}
            >
              <span className="icon">
                <Image alt={link.name} src={link.icon} quality={100} />
              </span>
              <span className="text">{link.name}</span>
            </Link>
          ))}
          <div className="slider"></div>
        </nav>
      </header>
    </>
  );
}
