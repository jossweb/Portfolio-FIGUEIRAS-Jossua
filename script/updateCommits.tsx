import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  /*if (req.headers['x-vercel-cron'] !== 'true') {
    return res.status(403).json({ error: 'Forbidden' });
  }*/

  const dataPath = path.join(process.cwd(), 'public/data.json');
  const REPOS = ['jossweb/Portfolio-FIGUEIRAS-Jossua', 'sws-corp/SWS-APP']; 

  async function fetchCommitsCount(repo: string): Promise<number> {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Authorization: `Bearer ${process.env.GITHUB_API_KEY}` },
    });
    if (!response.ok) return 0;
    const data = await response.json();
    return data.commits || 0; 
  }

  const updatedRepos = await Promise.all(
    REPOS.map(async (repo) => {
      const commits = await fetchCommitsCount(repo);
      return { name: repo, commits };
    })
  );

  const newData = {
    repos: updatedRepos,
    lastUpdated: new Date().toISOString(),
  };

  fs.writeFileSync(dataPath, JSON.stringify(newData, null, 2));
  res.status(200).json(newData);
}