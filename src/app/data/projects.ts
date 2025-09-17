import { Project } from "../types/projects";

export const projects: Project[] = [
  {
    name: "Flan'erie",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    github: null,
    link: "https://dev.flanerie-orleans.fr",
    type: "Web",
    imgPath: "/img/flanerie.png",
     technos: ["Symfony" , "Tailwind css", "Mysql", "Doctrine"],
  },
  {
    name: "Jossnet",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    github: "https://github.com/jossweb/Jossnet-Core",
    link: "https://jossnet.com",
    type: "Network",
    imgPath: "/img/jossnetbanner.png",
    technos: ["C" , "Objective-C", "Noise-protocole"],
  },
    {
    name: "Skillup",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    github: "https://github.com/jossweb/SkillUp",
    link: "https://skillup.great-site.net",
    type: "Web",
    imgPath: "/img/skillupbanner.png",
    technos: ["PHP" , "MySql"],
  },
    {
    name: "Portfolio",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    github: "https://github.com/jossweb/Portfolio-FIGUEIRAS-Jossua",
    link: "https://jossua.dev",
    type: "Web",
    imgPath: "/img/jossuabanner.png",
    technos: ["Next JS" , "Tailwind css"],
  },
];