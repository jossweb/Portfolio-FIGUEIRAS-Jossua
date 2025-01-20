import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-card-carousel";
import dotenv from "dotenv";

dotenv.config();

console.log("GITHUB_API_KEY:", process.env.GITHUB_API_KEY);

interface RepoData {
  name: string;
  commits: number;
  url: string;
}

const DummyContent = ({ hrefs, category, txt }: { hrefs: string[], category: string, txt: string }) => {
  const [repoData, setRepoData] = useState<RepoData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const dataPromises = hrefs.map(async (href) => {
          console.log(`Fetching commit data from ${href}`);

          const response = await axios.get(``, {
            params: { repoUrl: href }
          });
          console.log(`Commits response for ${href}:`, response.data);

          return {
            url: href,
            name: response.data.name,
            commits: response.data.commits,
          };
        });

        const data = await Promise.all(dataPromises);
        setRepoData(data);
      } catch (err) {
        console.error("Error fetching repository data:", err);
        setError("Failed to fetch repository data");
      }
    }

    fetchData();
  }, [hrefs]);

  return (
    <div className="bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        {txt}
      </p>
      {error && <p className="text-red-500">{error}</p>}
      <div className="overflow-x-auto mt-4">
        <table className="table-auto border border-white mt-8 bg-neutral-900 text-white w-full max-w-md mx-auto rounded-lg">
          <tbody>
            {repoData.map((repo, index) => (
              <tr
                key={index}
                className="cursor-pointer hover:bg-gray-700"
                onClick={() => window.open(repo.url, '_blank')}
              >
                <td className="border border-white px-4 py-2 rounded-l-lg">
                  <div className="flex justify-between">
                    <span>{repo.name}</span>
                    <span>{repo.commits} commits</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const data = [
  {
    category: "Portfolio",
    title: "This website 😄",
    src: "/img/portfolio.webp",
    hrefs: ["https://api.github.com/repos/jossweb/Portfolio-FIGUEIRAS-Jossua"],
    content: <DummyContent hrefs={["https://api.github.com/repos/jossweb/Portfolio-FIGUEIRAS-Jossua"]} category="Portfolio" txt="This portfolio is an opportunity for me to showcase my work and explore the Next.js web technology." />,
  },
  {
    category: "night of info 2024",
    title: "SWS-corp",
    src: "/img/night-info.webp",
    hrefs: ["https://api.github.com/repos/sws-corp/SWS-APP", "https://api.github.com/repos/sws-corp/site", "https://api.github.com/repos/sws-corp/QRCode-generator"],
    content: <DummyContent hrefs={["https://api.github.com/repos/sws-corp/SWS-APP", "https://api.github.com/repos/sws-corp/site", "https://api.github.com/repos/sws-corp/QRCode-generator"]} category="night of info 2024" txt="The Nuit de l’Info is a national competition that brings together students, teachers, and companies to collaborate on developing a web application. This event takes place every year on the first Thursday of December, from sunset until the following morning. For this occasion, along with two classmates, we created the team Smart World Solution (or SWS). This competition was a great opportunity for us to work as a team on a single project, managing time and dealing with the pressure it entails …" />,
  },
  {
    category: "School project - web",
    title: "TopTech : a website that lists the best tech devices",
    src: "/img/toptech.webp",
    hrefs: ["https://api.github.com/repos/jossweb/Toptech", "https://api.github.com/repos/jossweb/Calculatrice", "https://api.github.com/repos/jossweb/Moniteur"],
    content: <DummyContent hrefs={["https://api.github.com/repos/jossweb/Toptech", "https://api.github.com/repos/jossweb/Calculatrice", "https://api.github.com/repos/jossweb/Moniteur"]} category="School project - web" txt="TopTech was a team project in our computer science class during the 2022-23 school year. This website uses HTML/CSS/JS for the front-end and PHP for the server-side, particularly for the registration and login features." />,
  },
  {
    category: "Web",
    title: "Oversim : help simracers with ai",
    src: "/img/oversim.webp",
    hrefs: ["https://api.github.com/repos/jossweb/Stable-Diffusion-M-Chips"],
    content: <DummyContent hrefs={["https://api.github.com/repos/jossweb/Stable-Diffusion-M-Chips"]} category="Web" txt="Oversim is a project aimed at helping sim racers through technologies like AI, with features such as setup generation. Unfortunately, this project is currently on hold to prioritize the development of other projects, but it has not been abandoned" />,
  },
  {
    category: "C# Project",
    title: "All my C# apps",
    src: "/img/csharp.webp",
    hrefs: ["https://api.github.com/repos/jossweb/Stable-Diffusion-M-Chips"],
    content: <DummyContent hrefs={["https://api.github.com/repos/jossweb/Stable-Diffusion-M-Chips"]} category="C# Project" txt="I started programming thanks to a C# (or C-Sharp) course on the Udemy platform. This course helped me understand how a programming language works, as well as development environments. Following this training, I worked on personal projects involving small applications created using the same C# language.”" />,
  },
  {
    category: "School project - Python",
    title: "All my python scripts",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hrefs: ["https://api.github.com/repos/jossweb/Jeu-de-carte-NSI", "https://api.github.com/repos/jossweb/projet-NSI-illusion"],
    content: <DummyContent hrefs={["https://api.github.com/repos/jossweb/Jeu-de-carte-NSI", "https://api.github.com/repos/jossweb/projet-NSI-illusion"]} category="School project - Python" txt="Python is an ideal language for beginners, which is why it is taught in French high schools for computer science classes. This allowed me to work on some very simple projects in an academic setting." />,
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
      <p className="text-right text-white pr-10 pt-6">* Some of these images are generated by AI</p>
    </div>
  );
}