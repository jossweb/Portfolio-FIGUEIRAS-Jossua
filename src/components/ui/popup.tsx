import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";

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
  const [reposData, setReposData] = useState<RepoData[]>([]);

  // Scroll lock effect
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Data fetching effect
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data.json');
        const data = await response.json() as { repos: RepoData[] };
        
        const reposPaths = [
          'jossweb/Stable-Diffusion-M-Chips',
          'jossweb/Llama-M-Chips'  // Ajout du second repo
        ];
        
        const foundRepos = reposPaths.map(repoPath => {
          const normalUrl = `https://github.com/${repoPath}`;
          const foundRepo = data.repos.find((repo) => repo.url === normalUrl);
          return foundRepo || {
            name: repoPath.split('/')[1],
            commits: 0,
            url: normalUrl
          };
        });

        setReposData(foundRepos);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }

    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  if (!isOpen || reposData.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center isolate overflow-hidden text-white" style={{ zIndex: 50 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#777]/20 backdrop-blur-lg"
            style={{ zIndex: 49 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto bg-black h-fit my-10 p-4 md:p-10 rounded-3xl font-sans"
            style={{ zIndex: 51 }}
          >
          <button
            className="absolute top-4 right-4 h-8 w-8 bg-black rounded-full flex items-center justify-center"
            onClick={onClose}
          >
            <IconX className="h-6 w-6 text-gray-200" />
          </button>
          <p className="text-base font-medium p-0 m-0 text-gray-200">Ai Project</p>
          <h2 className="text-2xl md:text-5xl font-semibold text-white mt-4 mb-4">Dépôt GitHub</h2>
          <div className="overflow-x-auto py-10">
            <table className="mx-auto mt-5 w-[90%] text-left rounded-lg border-separate border-spacing-0 border-2 border-white overflow-hidden">
              <thead>
                <tr>
                  <th className="p-2 border-b-2 border-white">Repository</th>
                  <th className="p-2 border-b-2 border-white">Commits</th>
                </tr>
              </thead>
              <tbody>
                {reposData.map((repo) => (
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
            <p className="text-red-800 pt-5 pb-2 text-center">2 others privates repos</p>
            <p className="text-justify">This project aims to harness the full power of modern machines to provide an artificial intelligence service that respects both the environment and user data.</p>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
  );
}