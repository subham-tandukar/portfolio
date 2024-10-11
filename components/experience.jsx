"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { useTheme } from "@/context/theme-context";
import "@/css/experience.css";

export default function Experience() {
  const { theme } = useTheme();
  return (
    <section
      id="experience"
      className="mySection  section-b experience__section"
    >
      <SectionHeading subTitle="Experience" title="My Experience Timeline" />
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <div className="exp__head">
                <a href={item.link} target="_blank">
                  <Image
                    src={item.img}
                    alt=""
                    quality={95}
                    width={150}
                    height={150}
                    className="exp__img "
                  />
                </a>
                <div>
                  <h3 className="exp__head__title">
                    <a href={item.link} target="_blank">
                      {item.name}
                    </a>
                  </h3>
                  <p className="exp__location">{item.location}</p>
                </div>
              </div>
              <h3 className="exp__title">{item.title}</h3>

              <p className="exp__desc">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
