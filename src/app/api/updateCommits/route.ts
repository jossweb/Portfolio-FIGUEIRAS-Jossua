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
      const commits = await response.json();
      totalCommits += commits.length;
      hasMoreCommits = commits.length === 100;
      page++;
    }

    return totalCommits;
  }

  const reposData = await Promise.all(REPOS.map(async (repo) => {
    const commits = await fetchCommitsCount(repo);
    return {
      path: repo,
      name: repo.split('/')[1],
      url: `https://github.com/${repo}`,
      commits
    };
  }));

  const data = {
    repos: reposData,
    lastUpdated: new Date().toISOString()
  };

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  return new Response(JSON.stringify(data), { status: 200 });
}