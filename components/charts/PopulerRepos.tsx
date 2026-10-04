"use client";

import Link from "next/link";

export default function PopularRepos({
    repos,
}: {
    repos: any[];
}) {
    if (!repos || repos.length === 0) {
        return null;
    }

    const popularRepos = [...repos]
        .sort(
            (a, b) =>
                b.stargazers_count - a.stargazers_count
        )
        .slice(0, 4);

    return (
        <div className="w-fit border border-neutral-200 rounded-2xl px-6 pt-4">
            <h2 className="text-2xl font-semibold">
                Popular Repositories
            </h2>

            <p className="text-md md:text-sm text-neutral-500">
                Most starred repositories
            </p>

            <div className="mt-6 flex flex-col gap-4">
                {popularRepos.map((repo) => (
                    <div
                        key={repo.id}
                        className="flex items-center justify-between border-b border-neutral-100 pb-4 last:border-0"
                    >
                        <div className="min-w-0">
                            <Link
                                href={repo.html_url}
                                target="_blank"
                                className="text-xl md:text-base font-semibold hover:text-brand transition-colors duration-200 ease-in-out"
                            >
                                {repo.name}
                            </Link>

                            <p className="w-82 md:w-104 text-sm text-neutral-500 truncate">
                                {repo.description || "No description"}
                            </p>
                        </div>

                        <div className="ml-4 shrink-0 text-sm">
                             ☆ {repo.stargazers_count}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}