import React, { useEffect, useState } from 'react';
import { Carousel, Card } from '@/components/ui/apple-card-carousel';
import { useLanguage } from './LanguageProvider';

interface RepoData {
  name: string;
  commits: number;
  url: string;
}

const Content = ({ hrefs, txt }: { hrefs: string[], txt: string }) => {
  const [repoData, setRepoData] = useState<RepoData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const validHrefs = hrefs.filter(href => href !== "");
        
        if (validHrefs.length === 0) {
          setRepoData([]);
          return;
        }

        const response = await fetch('/data.json');
        const data = await response.json() as { repos: RepoData[] };

        const repoDataArray = validHrefs.map((href) => {
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
        setError(null);
      } catch (err) {
        setError('Failed to fetch data');
        console.error('Error fetching data:', err);
      }
    }
    fetchData();
  }, [hrefs]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="text-white text-lg">
      {repoData && repoData.length > 0 ? (
        <table className="mx-auto mt-10 w-[90%] text-left mb-10 rounded-lg border-separate border-spacing-0 border-2 border-white overflow-hidden">
          <thead>
            <tr>
              <th className="p-2 border-b-2 border-white">Repository</th>
              <th className="p-2 border-b-2 border-white">Commits</th>
            </tr>
          </thead>
          <tbody>
            {repoData.map((repo) => (
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
      ) : null}
      <p className="text-justify">{txt}</p>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

const projectTranslations = {
  en: {
    portfolio: {
      category: "Portfolio",
      title: "This website 😄",
      text: "This portfolio is an opportunity for me to showcase my work and explore the Next.js web technology."
    },
    nuitInfo: {
      category: "Night of info 2024",
      title: "SWS-corp",
      text: "The Nuit de l'Info is a national competition that brings together students, teachers, and companies to collaborate on developing a web application. This event takes place every year on the first Thursday of December, from sunset until the following morning. For this occasion, along with two classmates, we created the team Smart World Solution (or SWS). This competition was a great opportunity for us to work as a team on a single project, managing time and dealing with the pressure it entails …"
    },
    toptech: {
      category: "School project - Web",
      title: "TopTech",
      text: "TopTech was a team project in our computer science class during the 2022-23 school year. This website uses HTML/CSS/JS for the front-end and PHP for the server-side, particularly for the registration and login features."
    },
    oversim: {
      category: "Web",
      title: "Oversim",
      text: "Oversim is a project aimed at helping sim racers through technologies like AI, with features such as setup generation. Unfortunately, this project is currently on hold to prioritize the development of other projects, but it has not been abandoned"
    },
    csharp: {
      category: "C# Project",
      title: "All my C# apps",
      text: "I started programming thanks to a C# (or C-Sharp) course on the Udemy platform. This course helped me understand how a programming language works, as well as development environments. Following this training, I worked on personal projects involving small applications created using the same C# language."
    },
    python: {
      category: "School project - Python",
      title: "All my Python scripts",
      text: "Python is an ideal language for beginners, which is why it is taught in French high schools for computer science classes. This allowed me to work on some very simple projects in an academic setting."
    }
  },
  fr: {
    portfolio: {
      category: "Portfolio",
      title: "Ce site web 😄",
      text: "Ce portfolio est une opportunité pour moi de présenter mon travail et d'explorer la technologie web Next.js."
    },
    nuitInfo: {
      category: "Nuit de l'info 2024",
      title: "SWS-corp",
      text: "La Nuit de l'Info est une compétition nationale qui rassemble étudiants, enseignants et entreprises pour collaborer au développement d'une application web. Cet événement a lieu chaque année le premier jeudi de décembre, du coucher du soleil jusqu'au lendemain matin. Pour cette occasion, avec deux camarades de classe, nous avons créé l'équipe Smart World Solution (ou SWS). Cette compétition a été une excellente opportunité de travailler en équipe sur un projet unique, en gérant le temps et la pression que cela implique..."
    },
    toptech: {
      category: "Projet scolaire - Web",
      title: "TopTech",
      text: "TopTech était un projet d'équipe dans notre classe d'informatique durant l'année scolaire 2022-23. Ce site web utilise HTML/CSS/JS pour le front-end et PHP pour le côté serveur, notamment pour les fonctionnalités d'inscription et de connexion."
    },
    oversim: {
      category: "Web",
      title: "Oversim",
      text: "Oversim est un projet visant à aider les pilotes de simulation grâce à des technologies comme l'IA, avec des fonctionnalités comme la génération de réglages. Malheureusement, ce projet est actuellement en pause pour prioriser le développement d'autres projets, mais il n'a pas été abandonné."
    },
    csharp: {
      category: "Projet C#",
      title: "Toutes mes applications C#",
      text: "J'ai commencé la programmation grâce à un cours C# (ou C-Sharp) sur la plateforme Udemy. Ce cours m'a aidé à comprendre comment fonctionne un langage de programmation, ainsi que les environnements de développement. Suite à cette formation, j'ai travaillé sur des projets personnels impliquant de petites applications créées avec ce même langage C#."
    },
    python: {
      category: "Projet scolaire - Python",
      title: "Tous mes scripts Python",
      text: "Python est un langage idéal pour les débutants, c'est pourquoi il est enseigné dans les lycées français pour les cours d'informatique. Cela m'a permis de travailler sur quelques projets très simples dans un cadre académique."
    }
  }
};

export default function AppleCardsCarouselDemo() {
  const { language } = useLanguage();
  const t = projectTranslations[language as keyof typeof projectTranslations];

  const data = [
    {
      category: t.portfolio.category,
      title: t.portfolio.title,
      src: "/img/portfolio.webp",
      hrefs: ["https://api.github.com/repos/jossweb/Portfolio-FIGUEIRAS-Jossua"],
      content: <Content hrefs={["https://api.github.com/repos/jossweb/Portfolio-FIGUEIRAS-Jossua"]} txt={t.portfolio.text} />,
    },
    {
      category: t.nuitInfo.category,
      title: t.nuitInfo.title,
      src: "/img/night-info.webp",
      hrefs: ["https://api.github.com/repos/sws-corp/SWS-APP", "https://api.github.com/repos/sws-corp/site", "https://api.github.com/repos/sws-corp/QRCode-generator"],
      content: <Content hrefs={["https://api.github.com/repos/sws-corp/SWS-APP", "https://api.github.com/repos/sws-corp/site", "https://api.github.com/repos/sws-corp/QRCode-generator"]} txt={t.nuitInfo.text} />,
    },
    {
      category: t.toptech.category,
      title: t.toptech.title,
      src: "/img/toptech.webp",
      hrefs: ["https://api.github.com/repos/jossweb/Toptech"],
      content: <Content hrefs={["https://api.github.com/repos/jossweb/Toptech"]} txt={t.toptech.text} />,
    },
    {
      category: t.oversim.category,
      title: t.oversim.title,
      src: "/img/oversim.webp",
      content: <Content hrefs={[""]} txt={t.oversim.text} />,
    },
    {
      category: t.csharp.category,
      title: t.csharp.title,
      src: "/img/csharp.webp",
      hrefs: ["https://api.github.com/repos/jossweb/Calculatrice", "https://api.github.com/repos/jossweb/Moniteur"],
      content: <Content hrefs={["https://api.github.com/repos/jossweb/Calculatrice", "https://api.github.com/repos/jossweb/Moniteur"]} txt={t.csharp.text} />,
    },
    {
      category: t.python.category,
      title: t.python.title,
      src: "/img/python.webp",
      hrefs: ["https://api.github.com/repos/jossweb/Jeu-de-carte-NSI", "https://api.github.com/repos/jossweb/projet-NSI-illusion"],
      content: <Content hrefs={["https://api.github.com/repos/jossweb/Jeu-de-carte-NSI", "https://api.github.com/repos/jossweb/projet-NSI-illusion"]} txt={t.python.text} />,
    },
  ];

  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />);
  
  return (
    <div className="w-full h-full py-20 bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans">
        {language === 'fr' ? 'Mes autres projets' : 'My other projects'}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}