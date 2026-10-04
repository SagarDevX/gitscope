import Link from "next/link";
import { IconBriefcase, IconLocation, IconBriefcase2, IconDeviceImac } from '@tabler/icons-react';
import TopLanguages from "@/components/charts/TopLanguages";
import RepositoryActivity from "@/components/charts/ReposActivity";
import PopularDeveloper from "@/components/PopulerDeveloper";
import PopularRepos from "@/components/charts/PopulerRepos";

const page = async ({ params }:
    { params: Promise<{ username: string }> }) => {

    const { username } = await params
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()

    const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=10&sort=updated`
    );

    const repos = await reposResponse.json();
    const languageCount: Record<string, number> = {};

    repos.forEach((repo: any) => {
        if (repo.language) {
            languageCount[repo.language] =
                (languageCount[repo.language] || 0) + 1;
        }
    });

    const languages = Object.entries(languageCount)
        .map(([name, value]) => ({
            name,
            value,
        }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);


    const activityCount: Record<string, number> = {};
    repos.forEach((repo: any) => {
        if (repo.updated_at) {
            const month = new Date(repo.updated_at).toLocaleString(
                "en-US",
                { month: "short" }
            );

            activityCount[month] =
                (activityCount[month] || 0) + 1;
        }
    });

    const repositoryActivity = Object.entries(activityCount).map(
        ([month, updates]) => ({
            month,
            updates,
        })
    );

    return (
        <div className="pt-22">

            <div className="h-fit flex justify-between p-8 md:p-16 border border-neutral-200 m-2 rounded-xl ">

                <div className="flex flex-col gap-8 min-w-xl" >
                    <div className="h-fit flex flex-row gap-8 ">
                        <img
                            src={data.avatar_url}
                            alt={data.name || "GitHub avatar"}
                            className="size-32 rounded-full object-cover border border-neutral-100"
                        />
                        <div className="flex flex-col">
                            <div>
                                <h1 className="text-4xl text-black font-semibold">{data.name}</h1>
                                <p className="text-xl">@{data.login}</p>
                                <p>{data.bio}</p>
                            </div>
                            <div className="flex flex-row gap-2 text-neutral-400">
                                <div className="">⚲ {data.location}</div>
                                <Link href={data.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                    {data.html_url}
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className="w-full flex flex-row gap-12 md:gap-20 text-black mt-4 items-center md:justify-end " >
                        <div>
                            <p className="font-semibold text-2xl">{data.followers}</p>
                            <h4 className="text-neutral-500">Followers</h4>
                        </div>
                        <div>
                            <p className="font-semibold text-2xl">{data.following}</p>
                            <h4 className="text-neutral-500">Following</h4>
                        </div>
                        <div>
                            <p className="font-semibold text-2xl">{data.public_repos}</p>
                            <h4 className="text-neutral-500">Repositories</h4>
                        </div>

                    </div>
                </div>

                <div className="hidden h-fit w-fit pl-6 pr-12 py-6 md:flex flex-col items-start gap-2 border border-neutral-300 rounded-xl shadow-sm">
                    <h3 className="text-xl text-black font-semibold">Quick Info</h3>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-4 items-center">
                            <IconBriefcase stroke={2} color="#1a1a1a" size={24} />
                            <div className="text-sm text-black">
                                <h4 className="text-neutral-500"> Company</h4>
                                <h4 className="">{data.company}</h4>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <IconLocation stroke={2} color="#1a1a1a" size={24} />
                            <div className="text-sm text-black">
                                <h4 className="text-neutral-500"> Location</h4>
                                <h4 className="">{data.location}</h4>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <IconBriefcase2 stroke={2} color="#1a1a1a" size={24} />
                            <div className="text-sm text-black">
                                <h4 className="text-neutral-500"> Member since</h4>
                                <h4 className="">{new Date(data.created_at).getFullYear()}</h4>
                            </div>
                        </div>
                        <Link href={data.html_url} target="_blank" rel="noopener noreferrer" className=" px-2 py-1 text-white bg-brand hover:bg-brandHover transition-all duration-200 ease-in-out font-semibold text-center mt-4 rounded-xl">
                            View on Github
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-3 m-2">
                <TopLanguages languages={languages} />

                <RepositoryActivity data={repositoryActivity} />

                <PopularRepos repos={repos} />
            </div>

            <div className="border border-neutral-200 p-4 m-2 rounded-2xl">

                <div className="flex flex-row gap-2 w-full text-black items-center">
                    <IconDeviceImac
                        stroke={2}
                        color="#1a1a1a"
                        size={24}
                    />

                    <h4 className="font-semibold text-2xl underline decoration-dotted underline-offset-4 decoration-neutral-500">
                        Repositories
                    </h4>
                </div>

                {repos.map((repo: any) => {

                    const daysAgo = Math.floor(
                        (Date.now() - new Date(repo.updated_at).getTime()) /
                        (1000 * 60 * 60 * 24)
                    );

                    return (
                        <Link
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="w-full mt-8 p-4 border border-neutral-200 rounded-xl flex flex-row gap-4 items-start hover:border-brand transition-colors duration-300 ease-in-out">

                                <IconDeviceImac
                                    stroke={2}
                                    color="#1a1a1a"
                                    size={24}
                                />

                                <div className="w-full min-w-0 flex flex-col items-start gap-1 text-lg">


                                    <div className="w-full flex flex-row items-center justify-between gap-4">

                                        <h3 className="font-semibold leading-tight truncate">
                                            {repo.name}
                                        </h3>

                                        <p className="shrink-0 text-sm text-neutral-400">
                                            Updated{" "}
                                            {daysAgo === 0
                                                ? "Today"
                                                : daysAgo === 1
                                                    ? "1 day ago"
                                                    : `${daysAgo} days ago`}
                                        </p>

                                    </div>

                                    <p className="text-neutral-500 text-sm leading-tight">
                                        {repo.description || "No description"}
                                    </p>

                                    <div className="w-full flex items-center justify-start md:justify-end">

                                        <div className="w-full mt-4 md:w-2/5 flex flex-row justify-around text-md md:text-lg">

                                            <p>
                                                ☆ {repo.stargazers_count}
                                            </p>

                                            <p>
                                                🍴 {repo.forks_count}
                                            </p>

                                            <p>
                                                {repo.language || "Unknown"}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </Link>
                    );
                })}

            </div>

        </div>
    )
}

export default page