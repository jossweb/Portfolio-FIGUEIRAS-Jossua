import { ProjectData } from "../types/projects";

export const projects: ProjectData[] = [
  {
    name: "Flan'erie",
    description: "Flan’erie is a project currently in development. It is the e-commerce website of a flan shop based in Orléans. Through this site, customers can place online orders, and everything is managed by the company’s staff via the admin dashboard.”",
    github: null,
    link: "https://dev.flanerie-orleans.fr",
    type: "Web",
    imgPath: "/img/flanerie.png",
    technos: ["Symfony" , "Tailwind css", "Mysql", "Doctrine"],
  },
  {
    name: "Jossnet",
    description: "Jossnet is the name of a series of projects focused on network protocols. I first started by experimenting with the Noise Protocol (a framework that allows you to create custom protocols), and then developed a new version in C and Objective-C based on TCP/IP. This work is intended purely for educational purposes and is not meant for production use. (Disclaimer: only the code of the first version is currently available on GitHub).",
    github: "https://github.com/jossweb/Jossnet-Core",
    link: "https://jossnet.com",
    type: "Network",
    imgPath: "/img/jossnetbanner.png",
    technos: ["C" , "Objective-C", "Noise-protocole"],
  },
  {
    name: "Skillup",
    description: "Skillup is a website designed to connect teachers who publish their courses on the platform with users who can access them. Skillup is a group project developed as part of my studies.",
    github: "https://github.com/jossweb/SkillUp",
    link: "https://skillup.great-site.net",
    type: "Web",
    imgPath: "/img/skillupbanner.png",
    technos: ["PHP" , "MySql"],
  },
  {
    name: "Portfolio",
    description: "This portfolio: find the code and all the information on GitHub.",
    github: "https://github.com/jossweb/Portfolio-FIGUEIRAS-Jossua",
    link: "https://jossua.dev",
    type: "Web",
    imgPath: "/img/jossuabanner.png",
    technos: ["Next JS" , "Tailwind css"],
  },
    {
    name: "Nuit de l’info",
    description: "In 2024, we took part in the Nuit de l’Info and won a gold medal.",
    github: "https://github.com/sws-corp",
    link: "https://www.sws-corp.tech/",
    type: "Challenges",
    imgPath: "/img/swsbanner.png",
    technos: ["Next JS" , "Tailwind css"],
  },
    {
    name: "C game",
    description: "A small C game that serves as a demo of the Missionaries and Cannibals problem. It is a group project carried out as part of my studies.",
    github: "https://github.com/jossweb/probleme-missionnaires-et-cannibales",
    link: "https://remyweb.fr/missionnaires-cannibales/",
    type: "C-game",
    imgPath: "/img/cgamebanner.png",
    technos: ["C" , "Raylib"],
  }
];