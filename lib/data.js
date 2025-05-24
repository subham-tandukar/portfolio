import home from "@/public/images/home.png";
import about from "@/public/images/about.png";
import project from "@/public/images/project.png";
import skill from "@/public/images/skills.png";
import experience from "@/public/images/experience.png";
import contact from "@/public/images/contact.png";
import postbook from "@/public/images/postbook.png";
import game from "@/public/images/game.png";
import htdrl from "@/public/images/htdrl.png";
import react from "@/public/images/react.png";
import html from "@/public/images/html.png";
import css from "@/public/images/css.png";
import js from "@/public/images/js.png";
import nextjs from "@/public/images/nextjs.png";
import redux from "@/public/images/redux.png";
import api from "@/public/images/api.png";
import db from "@/public/images/db.png";
import tailwind from "@/public/images/tailwind.png";
import adminPanel from "@/public/images/adminPanel.png";
import jobPortal from "@/public/images/job-portal.png";
import jobPortalAdmin from "@/public/images/job-portal-admin.png";
import realtimeTracker from "@/public/images/realtime-tracker.png";
import mui from "@/public/images/mui.png";
import sass from "@/public/images/sass.png";
import node from "@/public/images/node.png";
import express from "@/public/images/express.png";
import socketIo from "@/public/images/socket-io.png";
import aptech from "@/public/images/aptech.png";
import easy from "@/public/images/easy.png";
import genesis from "@/public/images/genesis.png";
import outside from "@/public/images/outside.jpg";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: home,
  },
  {
    name: "About",
    hash: "#about",
    icon: about,
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: project,
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: skill,
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: experience,
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: contact,
  },
];

export const experiencesData = [
  {
    title: "Web Designing",
    location: "Kumaripati, Lalitpur",
    description:
      "Successfully completed the Web Designing and Hosting Course from Aptech Computer Education Pvt. Ltd. and able to convert my UI Design into pixel perfect Responsive HTML5/CSS3.",
    icon: <LuGraduationCap />,
    date: "Oct 2021 - Dec 2021",
    img: aptech,
    name: "Aptech",
    link: "https://www.aptechlalitpur.com/",
  },
  {
    title: "React Web Developer",
    location: "Kalimati, Kathmandu",
    description:
      "During my tenure, I had the opportunity to contribute my skills in developing and maintaining an admin panel based on CRUD application. My responsibilities included designing and implementing front-end solutions using various technologies such as HTML5, CSS, JavaScript, and other frameworks.",
    icon: <FaReact />,
    date: "April 2022 - June 2023",
    img: easy,
    name: "Easy Software",
    link: "https://easysoftware.com.np/",
  },
  {
    title: "Frontend Web Developer",
    location: "Shankhamul, Kathmandu",
    description:
      "During my tenure, I worked as a Frontend Developer at a company specializing in WordPress development. My role involved in creating and maintaining user interfaces for WordPress-based projects using HTML, CSS, and JavaScript. I collaborated with a diverse team to ensure high-quality, visually appealing, and user-friendly websites and web applications. ",
    icon: <CgWorkAlt />,
    date: "July 2023 - Febuary 2025",
    img: genesis,
    name: "Genesis Web Technology",
    link: "https://www.genesiswtech.com/",
  },
  {
    title: "Software Engineer",
    location: "Jhamsikhel, Lalitpur",
    description:
      "I am currently working as a Full Stack Engineer specializing in WordPress development. My primary responsibility is to deliver high-quality, scalable solutions within tight deadlines. I focus on optimizing both front-end and back-end performance to ensure a seamless user experience. This includes developing responsive, mobile-friendly interfaces, implementing custom themes and plugins, and ensuring cross-browser compatibility.",
    icon: <CgWorkAlt />,
    date: "March 2025 - till present",
    img: outside,
    name: "Outside Studio",
    link: "https://outside.studio/",
  },
];

export const projectsData = [
  {
    title: "Job Portal",
    description:
      "I've developed a dynamic job portal where users can search for jobs and apply directly through the platform. After applying, users receive automated email notifications about their application status, whether selected or rejected. The portal requires users to log in to apply, ensuring secure and personalized access.",
    tags: [react, api, redux, tailwind],
    imageUrl: jobPortal,
    link: "https://job-portal-frontend-sooty-alpha.vercel.app",
  },
  {
    title: "Job Portal Admin",
    description:
      "I've developed an admin panel for the above job portal that allows administrators to add jobs, review applicants, and accept or reject candidates based on their CVs. The panel also supports CRUD operations for managing blogs, advertisements, pages, and other content on the platform.",
    tags: [react, node, express, api, db, redux],
    imageUrl: jobPortalAdmin,
    link: "https://job-portal-admin-panel.vercel.app",
  },
  {
    title: "Real Time Tracker",
    description:
      "I've developed a real-time tracker app using the MERN stack. When the site is open on multiple devices, you can track each of them in real time.",
    tags: [node, express, socketIo],
    imageUrl: realtimeTracker,
    link: "https://realtime-tracker-bc5z.onrender.com/",
  },
  {
    title: "Next Step",
    description:
      "I've developed a CMS featuring blog management, booking management, and user interaction capabilities. Users can read and comment on blogs, as well as book seats for courses. Admins have full CRUD functionality for both blogs and courses, along with access to booking records for courses.",
    tags: [react, api, db, sass],
    imageUrl: adminPanel,
    link: "https://next-step-eight.vercel.app/login",
  },
  {
    title: "Library App",
    description:
      "I've developed a full-stack web app using the MERN stack. This includes user authentication with email verification using OTP code and CRUD functionality for managing books.",
    tags: [react, node, express, api, db, mui],
    imageUrl: htdrl,
    link: "https://htdrl.netlify.app/",
  },
  {
    title: "Post Book",
    description:
      "I've developed a goggle authentication and crud application using next js where you can sign in with your google account and create a post where you can edit and delete it.",
    tags: [nextjs, api, db, tailwind],
    imageUrl: postbook,
    link: "https://post-book.vercel.app/",
  },
  {
    title: "Games",
    description:
      "I've developed two games: Tic Tac Toe and Sliding Puzzle. Tic Tac Toe offers easy and hard modes for single-player against the computer or multiplayer with friends. Sliding Puzzle lets users upload their favorite images to solve personalized puzzles.",
    tags: [react, html, css, js],
    imageUrl: game,
    link: "https://subhamtandukar-games.vercel.app/",
  },
];

export const skillsData = [
  "Next JS",
  "React",
  "Redux",
  "HTML 5",
  "CSS 3",
  "Sass",
  "Javascript",
  "Jquery",
  "Node JS",
  "Express JS",
  "API integration",
  "Mongo DB",
  "Scoket IO",
  "Bootstrap",
  "UI kit",
  "Tailwind CSS",
  "Php",
  "Wordpress",
  "Material UI",
  "Adobe Photoshop",
  "Figma",
  "Git",
];
