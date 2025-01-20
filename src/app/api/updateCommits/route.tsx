import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export async function GET() {
  const dataPath = path.join(process.cwd(), 'public/data.json');

  const REPOS = ['jossweb/Portfolio-FIGUEIRAS-Jossua', 'sws-corp/SWS-APP'];

  async function fetchCommitsCount(repo: string): Promise<number> {
    const response = await fetch(`https://api.github.com/repos/${repo}/commits`, {
      headers: { Authorization: `Bearer ${process.env.GITHUB_API_KEY}` },
    });
    if (!response.ok) return 0;
    const data = await response.json();
    return data.length;
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

  try {
    fs.writeFileSync(dataPath, JSON.stringify(newData, null, 2));
  } catch (error) {
    console.error('Error writing data to file:', error);
  }

  return new Response(JSON.stringify(newData), { status: 200 });
}