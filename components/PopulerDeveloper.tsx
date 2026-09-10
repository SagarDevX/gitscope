"use client";

import { motion } from "motion/react";
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

const mockDevelopers: Developer[] = [
  {
    login: "torvalds",
    name: "Linus Torvalds",
    avatar_url: "https://github.com/torvalds.png",
    bio: "Creator of Linux and Git. Working on the Linux kernel.",
    followers: 210000,
    public_repos: 7,
    html_url: "https://github.com/torvalds",
  },
  {
    login: "yyx990803",
    name: "Evan You",
    avatar_url: "https://github.com/yyx990803.png",
    bio: "Creator of Vue.js and Vite. Building tools for the modern web.",
    followers: 105000,
    public_repos: 120,
    html_url: "https://github.com/yyx990803",
  },
  {
    login: "tj",
    name: "TJ Holowaychuk",
    avatar_url: "https://github.com/tj.png",
    bio: "Open source developer and creator of many popular Node.js projects.",
    followers: 40000,
    public_repos: 90,
    html_url: "https://github.com/tj",
  },
  {
    login: "shadcn",
    name: "shadcn",
    avatar_url: "https://github.com/shadcn.png",
    bio: "Building accessible and beautifully designed components for the web.",
    followers: 100000,
    public_repos: 35,
    html_url: "https://github.com/shadcn",
  },
];

const PopularDeveloper = () => {
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

      <div className="mx-auto mt-12 grid max-w-fit grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {mockDevelopers.map((developer, index) => (
          <DeveloperCard
            key={developer.login}
            developer={developer}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

type DeveloperCardProps = {
  developer: Developer;
  index: number;
};

const DeveloperCard = ({
  developer,
  index,
}: DeveloperCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group flex h-fit w-64  md:w-80 flex-col rounded-3xl border border-neutral-300 bg-[#faf6ee] px-6 py-2 sm:py-6 transition-all duration-500 hover:-translate-y-1   "
    >
      <div className="flex items-start justify-between">
        <img
          src={developer.avatar_url}
          alt={developer.login}
          className="size-16 rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <a
          href={developer.html_url}
          target="_blank"
          rel="noreferrer"
          className="transition-all group-hover:scale-110 duration-300 ease-in-out"
        >
          <IconBrandGithub size={24} />
        </a>
      </div>

      <motion.div
        className="mt-2 sm:mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.3 + index * 0.1,
        }}
      >
        <h2 className="text-xl font-semibold">
          {developer.login}
        </h2>

        <p className="mt-1 text-sm text-brandBlack ">
          {developer.name || "GitHub Developer"}
        </p>

        <p className="mt-2 sm:mt-4 line-clamp-3 min-h-18 text-sm leading-6 text-neutral-500 ">
          {developer.bio || "Open-source developer on GitHub."}
        </p>
      </motion.div>

      <div className=" grid grid-cols-2 gap-4 border-y border-black/10 py-2 sm:py-6 my-2 ">
       
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3 + index * 0.1,
          }}
        >
          <div className="flex items-center gap-2 text-brandBlack ">
            <IconUsers size={16} />

            <span className="text-xs">
              Followers
            </span>
          </div>

          <p className="mt-1 text-lg font-semibold">
            {formatNumber(developer.followers)}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3 + index * 0.1,
          }}
        >
          <div className="flex items-center gap-2 text-brandBlack ">
            <IconBook size={16} />

            <span className="text-xs">
              Repositories
            </span>
          </div>

          <p className="mt-1 text-lg font-semibold">
            {developer.public_repos}
          </p>
        </motion.div>
      </div>

      <div className="mt-auto px-2 sm:px-0 sm:pt-4">
        <a
          href={developer.html_url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-0 text-sm font-medium "
        >
          <h3 className=" group-hover:scale-110 transition-all duration-500 ease-linear">View Profile</h3>

          <IconArrowUpRight
            size={18}
            className="transition-transform duration-500 -translate-x-0.5 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </motion.div>
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

export default PopularDeveloper;