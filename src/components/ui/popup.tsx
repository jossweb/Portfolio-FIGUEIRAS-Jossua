import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface RepoData {
  name: string;
  commits: number;
  url: string;
}

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Popup({ isOpen, onClose }: PopupProps) {
  const [repoData, setRepoData] = useState<RepoData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const repoUrl = `https://api.github.com/repos/jossweb/Stable-Diffusion-M-Chips`;
      const commitsUrl = `${repoUrl}/commits`;

      const repoResponse = await axios.get(repoUrl);
      const commitsResponse = await axios.get(commitsUrl);

      const data = {
        name: repoResponse.data.name,
        commits: commitsResponse.data.length,
        url: repoResponse.data.html_url,
      };

      setRepoData(data);
    }

    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  if (!isOpen || !repoData) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="relative bg-black bg-opacity-80 text-white p-6 rounded-md shadow-lg w-[40%] text-center border border-white">
        <h2 className="text-xl mb-4">Dépôt GitHub</h2>
        <button
          type="button"
          className="absolute top-2 right-2 text-white bg-transparent text-2xl font-bold hover:text-gray-300"
          onClick={onClose}
        >
          X
        </button>
        <div className="overflow-x-auto">
          <table className="table-auto border border-white bg-gray-900 text-white w-full">
            <tbody>
              <tr
                className="cursor-pointer hover:bg-gray-700"
                onClick={() => window.open(repoData.url, '_blank')}
              >
                <td className="border border-white px-4 py-2">
                  <div className="flex justify-between">
                    <span>{repoData.name}</span>
                    <span>{repoData.commits} commits</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-red-800 pt-8 pb-5">2 others privates repos</p>
        </div>
      </div>
    </div>
  );
}