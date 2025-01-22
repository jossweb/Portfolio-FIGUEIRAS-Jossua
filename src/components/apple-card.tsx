import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Carousel, Card } from '@/components/ui/apple-card-carousel';

interface RepoData {
  path: string;
  name: string;
  url: string;
  commits: number;
}

const Content = ({ hrefs, category, txt }: { hrefs: string[], category: string, txt: string }) => {
  const [repoData, setRepoData] = useState<RepoData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data.json');
        const data = await response.json() as { repos: RepoData[] };

        const repoDataArray = hrefs.map((href) => {
          const strippedPath = href.replace('https://api.github.com/repos/', '');
          const normalUrl = `https://github.com/${strippedPath}`;
          const foundRepo = data.repos.find((repo) => repo.url === normalUrl);

          return {
            name: foundRepo ? foundRepo.name : strippedPath,
            commits: foundRepo ? foundRepo.commits : 0,
            url: foundRepo ? foundRepo.url : normalUrl,
          };
        });

        setRepoData(repoDataArray);
      } catch (error) {
        setError('Failed to fetch data');
      }
    }

    fetchData();
  }, [hrefs]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="text-white text-lg">
      <table className="mx-auto mt-10 w-[90%] text-left mb-10 rounded-lg border-separate border-spacing-0 border-2 border-white overflow-hidden">
        <thead>
          <tr>
            <th className="p-2 border-b-2 border-white">Repository</th>
            <th className="p-2 border-b-2 border-white">Commits</th>
          </tr>
        </thead>
        <tbody>
          {repoData.map((repo, index) => (
            <tr
              key={repo.url}
              onClick={() => window.open(repo.url, '_blank')}
              className="hover:bg-gray-700 cursor-pointer"
            >
              <td className="p-2 border-b border-white">{repo.name}</td>
              <td className="p-2 border-b border-white">{repo.commits}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-justify">{txt}</p>
      {error && <p>{error}</p>}
    </div>
  );
};

const data = [
  {
    category: "Portfolio",
    title: "This website 😄",
    src: "/img/portfolio.webp",
    hrefs: ["https://api.github.com/repos/jossweb/Portfolio-FIGUEIRAS-Jossua"],
    content: <Content hrefs={["https://api.github.com/repos/jossweb/Portfolio-FIGUEIRAS-Jossua"]} category="Portfolio" txt="This portfolio is an opportunity for me to showcase my work and explore the Next.js web technology." />,
  },
  {
    category: "night of info 2024",
    title: "SWS-corp",
    src: "/img/night-info.webp",
    hrefs: ["https://api.github.com/repos/sws-corp/SWS-APP", "https://api.github.com/repos/sws-corp/site", "https://api.github.com/repos/sws-corp/QRCode-generator"],
    content: <Content hrefs={["https://api.github.com/repos/sws-corp/SWS-APP", "https://api.github.com/repos/sws-corp/site", "https://api.github.com/repos/sws-corp/QRCode-generator"]} category="night of info 2024" txt="The Nuit de l’Info is a national competition that brings together students, teachers, and companies to collaborate on developing a web application. This event takes place every year on the first Thursday of December, from sunset until the following morning. For this occasion, along with two classmates, we created the team Smart World Solution (or SWS). This competition was a great opportunity for us to work as a team on a single project, managing time and dealing with the pressure it entails …" />,
  },
  {
    category: "School project - web",
    title: "TopTech",
    src: "/img/toptech.webp",
    hrefs: ["https://api.github.com/repos/jossweb/Toptech"],
    content: <Content hrefs={["https://api.github.com/repos/jossweb/Toptech", "https://api.github.com/repos/jossweb/Calculatrice", "https://api.github.com/repos/jossweb/Moniteur"]} category="School project - web" txt="TopTech was a team project in our computer science class during the 2022-23 school year. This website uses HTML/CSS/JS for the front-end and PHP for the server-side, particularly for the registration and login features." />,
  },
  {
    category: "Web",
    title: "Oversim : help simracers with ai",
    src: "/img/oversim.webp",
    hrefs: ["https://api.github.com/repos/jossweb/Stable-Diffusion-M-Chips"],
    content: <Content hrefs={["https://api.github.com/repos/jossweb/Stable-Diffusion-M-Chips"]} category="Web" txt="Oversim is a project aimed at helping sim racers through technologies like AI, with features such as setup generation. Unfortunately, this project is currently on hold to prioritize the development of other projects, but it has not been abandoned" />,
  },
  {
    category: "C# Project",
    title: "All my C# apps",
    src: "/img/csharp.webp",
    hrefs: ["https://api.github.com/repos/jossweb/money-management", "https://api.github.com/repos/jossweb/Calculatrice", "https://api.github.com/repos/jossweb/Moniteur"],
    content: <Content hrefs={["https://api.github.com/repos/jossweb/Stable-Diffusion-M-Chips"]} category="C# Project" txt="I started programming thanks to a C# (or C-Sharp) course on the Udemy platform. This course helped me understand how a programming language works, as well as development environments. Following this training, I worked on personal projects involving small applications created using the same C# language.”" />,
  },
  {
    category: "School project - Python",
    title: "All my python scripts",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hrefs: ["https://api.github.com/repos/jossweb/Jeu-de-carte-NSI", "https://api.github.com/repos/jossweb/projet-NSI-illusion"],
    content: <Content hrefs={["https://api.github.com/repos/jossweb/Jeu-de-carte-NSI", "https://api.github.com/repos/jossweb/projet-NSI-illusion"]} category="School project - Python" txt="Python is an ideal language for beginners, which is why it is taught in French high schools for computer science classes. This allowed me to work on some very simple projects in an academic setting." />,
  },
];

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />);

  return (
    <div className="w-full h-full py-20 bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans">
        My others projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}