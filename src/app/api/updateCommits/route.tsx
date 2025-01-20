import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export async function GET() {
  const dataPath = path.join(process.cwd(), 'public/data.json');

  const REPOS = [
    'jossweb/Portfolio-FIGUEIRAS-Jossua',
    'sws-corp/SWS-APP',
    'sws-corp/site',
    'sws-corp/QRCode-generator',
    'jossweb/Toptech',
    'jossweb/Stable-Diffusion-M-Chips',
    'jossweb/Calculatrice',
    'jossweb/Moniteur',
    'jossweb/money-management',
    'jossweb/Jeu-de-carte-NSI',
    'jossweb/projet-NSI-illusion'
  ];

  async function fetchCommitsCount(repo: string): Promise<number> {
    let page = 1;
    let totalCommits = 0;
    let hasMoreCommits = true;

    while (hasMoreCommits) {
      const response = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=100&page=${page}`, {
        headers: { Authorization: `Bearer ${process.env.GITHUB_API_KEY}` },
      });
      if (!response.ok) return totalCommits;
      const data = await response.json();
      totalCommits += data.length;
      if (data.length < 100) {
        hasMoreCommits = false;
      } else {
        page++;
      }
    }

    return totalCommits;
  }

  const updatedRepos = await Promise.all(
    REPOS.map(async (repo) => {
      const commits = await fetchCommitsCount(repo);
      return { path: repo, commits };
    })
  );

  const newData = {
    repos: updatedRepos,
    lastUpdated: new Date().toISOString(),
  };

  try {
    fs.writeFileSync(dataPath, JSON.stringify(newData, null, 2));
  } catch (error) {
    console.error('Error writing data to file:', error);
  }

  return new Response(JSON.stringify(newData), { status: 200 });
}