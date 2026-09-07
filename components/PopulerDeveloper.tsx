"use client";

import { useEffect, useState } from "react";
import {
  IconBrandGithub,
  IconUsers,
  IconBook,
  IconArrowUpRight,
} from "@tabler/icons-react";

type Developer = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  followers: number;
  public_repos: number;
  html_url: string;
};

const usernames = [
  "torvalds",
  "gaearon",
  "sindresorhus",
  "tj",
];

const PopulerDeveloper = () => {
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const results = await Promise.all(
          usernames.map(async (username): Promise<Developer> => {
            const response = await fetch(
              `https://api.github.com/users/${username}`
            );

            if (!response.ok) {
              throw new Error(`Failed to fetch ${username}`);
            }

            return response.json();
          })
        );

        setDevelopers(results);
      } catch (error) {
        console.error("Error fetching developers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDevelopers();
  }, []);

  return (
    <section className="min-h-screen px-6 py-20">

      <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-neutral-400 bg-green-50 px-3 py-1.5">
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />

          <span className="relative inline-flex size-2.5 rounded-full bg-brand" />
        </span>

        <span className="text-xs font-medium text-brand">
          POPULAR DEVELOPERS
        </span>
      </div>

      <div className="mx-auto w-fit text-center text-brandBlack">
        <h1 className="text-xl font-semibold md:text-4xl">
          Discover{" "}
          <span className="text-brand">popular </span>
          Developers
        </h1>

        <p className="mt-1 text-md leading-[1.3] tracking-tight md:text-lg">
          Explore developers making an impact across the GitHub community.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

        {loading
          ? usernames.map((username) => (
              <div
                key={username}
                className="h-[400px] animate-pulse rounded-3xl bg-black/5"
              />
            ))
          : developers.map((developer) => (
              <DeveloperCard
                key={developer.login}
                developer={developer}
              />
            ))}

      </div>
    </section>
  );
};

type DeveloperCardProps = {
  developer: Developer;
};

const DeveloperCard = ({ developer }: DeveloperCardProps) => {
  return (
    <div className="group flex min-h-100 flex-col rounded-3xl border border-black/10 bg-[#faf6ee] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand hover:bg-black hover:text-white">

      <div className="flex items-start justify-between">

        <img
          src={developer.avatar_url}
          alt={developer.login}
          className="size-16 rounded-full object-cover"
        />

        <a
          href={developer.html_url}
          target="_blank"
          rel="noreferrer"
          className="transition-colors group-hover:text-brand"
        >
          <IconBrandGithub size={24} />
        </a>

      </div>

      <div className="mt-6">

        <h2 className="text-xl font-semibold">
          {developer.login}
        </h2>

        <p className="mt-1 text-sm text-black/50 group-hover:text-white/60">
          {developer.name || "GitHub Developer"}
        </p>

        <p className="mt-4 line-clamp-3 min-h-[72px] text-sm leading-6 text-black/70 group-hover:text-white/70">
          {developer.bio || "Open-source developer on GitHub."}
        </p>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-y border-black/10 py-5 group-hover:border-white/10">

        <div>
          <div className="flex items-center gap-2 text-black/50 group-hover:text-white/50">
            <IconUsers size={16} />

            <span className="text-xs">
              Followers
            </span>
          </div>

          <p className="mt-1 text-lg font-semibold">
            {formatNumber(developer.followers)}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-black/50 group-hover:text-white/50">
            <IconBook size={16} />

            <span className="text-xs">
              Repositories
            </span>
          </div>

          <p className="mt-1 text-lg font-semibold">
            {developer.public_repos}
          </p>
        </div>

      </div>

      <div className="mt-auto pt-6">

        <a
          href={developer.html_url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-medium group-hover:text-brand"
        >
          View Profile

          <IconArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>

      </div>

    </div>
  );
};

const formatNumber = (number: number) => {
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  }

  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  }

  return number;
};

export default PopulerDeveloper;