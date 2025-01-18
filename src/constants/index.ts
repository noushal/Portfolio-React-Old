import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  starbucks,
  threejs,
  csharp,
  cpp,
  lua,
  bash,
  dexcord,
  deadline,
  brototype,
  buyMeACoffee,
  arox,
  edclub,
  nophoto,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Unity Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D designer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Lua",
    icon: lua,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "bash",
    icon: bash,
  },
];

const experiences: TExperience[] = [
  {
    title: "Node.js Developer",
    companyName: "Dexcord",
    icon: dexcord,
    iconBg: "#000000",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Game Developer",
    companyName: "Deadline",
    icon: deadline,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - April 2024",
    points: [
      "Developing and maintaining the game server using Pawn and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality Features.",
      "Implementing immersive and quality based features.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Unity Developer - Intern",
    companyName: "Brototype",
    icon: brototype,
    iconBg: "#000000",
    date: "June 2024 - Present",
    points: [
      "Studying and Developing Unity Games using C# and other related technologies.",
      "Setting goals for a week and try to complete it within a week",
      "Studying and Implementing new Features.",
      "Participating in reviews and getting feedback from developers.",
    ],
  },
];

const projects: TProject[] = [
  {
    name: "First Person Shooter",
    description:
      "An intense first-person shooter game created in Unity, offering immersive combat scenarios and realistic weapon mechanics. Players navigate through detailed environments.",
    tags: [
      {
        name: "csharp",
        color: "purple-text-gradient",
      },
      {
        name: "unity",
        color: "text-gradient",
      },
    ],
    image: nophoto,
    sourceCodeLink: "https://github.com/noushal/FPS-Game",
  },
  {
    name: "Third Person Shooter",
    description:
      "A thrilling third-person shooter game developed in Unity, featuring dynamic gameplay. Players can experience action-packed missions with various weapons, enemies, and environments",
    tags: [
      {
        name: "csharp",
        color: "purple-text-gradient",
      },
      {
        name: "unity",
        color: "text-gradient",
      },
    ],
    image: nophoto,
    sourceCodeLink: "https://github.com/noushal/Third-Person-Shooter",
  },
  {
    name: "Typing Club - Clone",
    description:
      "A replica of the Typing Club (Ed Club) website, built using HTML and CSS. This project recreates the original site's design and structure, offering a responsive and visually appealing layout.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: edclub,
    sourceCodeLink: "https://github.com/noushal/Edclub-clone",
  },
  {
    name: "Arox Bot",
    description:
      "Arox Official is a custom Discord music bot built with Node.js for a dedicated Discord server. It offers seamless music playback with commands for playing, pausing, skipping, and queue management.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "text-gradient",
      },
      {
        name: "Discord.js",
        color: "blue-text-gradient",
      },
    ],
    image: arox,
    sourceCodeLink: "https://github.com/noushal/Arox-Official",
  },
  {
    name: "Starbucks - Clone",
    description:
      "A responsive Starbucks website clone built with HTML, CSS. This project replicates the original site's design and functionality, including navigation, product showcase, and interactive features.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: starbucks,
    sourceCodeLink: "https://github.com/noushal/Starbucks-clone",
  },
  {
    name: "BMC - Clone",
    description:
      "A responsive Buy Me a Coffee website clone created using HTML and CSS. This project replicates the original site's design, focusing on a user-friendly interface, and responsive elements.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: buyMeACoffee,
    sourceCodeLink: "https://github.com/noushal/Buy-me-a-Coffee-clone",
  },
];

export { services, technologies, experiences, projects };
