import { IconUsers, IconLibrary, IconGitCommit, IconWorldMap } from '@tabler/icons-react';

const section = [
    {
        name: "Developers",
        icon: IconUsers,
        numbers: "1.2 M+"
    },
    {
        name: "Repositories",
        icon: IconLibrary,
        numbers: "250 M+"
    },
    {
        name: "Commits",
        icon: IconGitCommit,
        numbers: "1.6 B+"
    },
    {
        name: "Languages",
        icon: IconWorldMap,
        numbers: "100+"
    },
]

const Stats = () => {

    return (
        <div className='flex flex-row rounded-2xl bg-brandBlack gap-16 mx-auto w-fit mt-8 px-8 text-white'>
            {section.map((items) => {
                const Icon = items.icon;
                return <div className='group flex flex-col py-8 mx-8 text-xl items-center text-center '>
                    <Icon size={40} className='group-hover:text-brand transition-all duration-350' />
                    <div>
                        <h1>{items.name}</h1>
                        <h2>{items.numbers}</h2>
                    </div>
                </div>

            })}
        </div>
    )
}

export default Stats