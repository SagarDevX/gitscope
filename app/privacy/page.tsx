import { IconUserOff, IconBrandGithub, IconUser, IconLink, IconRefresh } from '@tabler/icons-react';

const page = () => {
    return (
        <div className='pt-16 text-brandBlack'>
            <div className='w-full py-16 px-8 md:p-24 pb-8 text-brandBlack'>
                <h1 className='text-2xl font-semibold md:text-4xl font-hedvig'>Privacy</h1>
                <p className='mt-1 text-md leading-[1.3] tracking-tight md:text-lg'>GitScope is designed to keep things simple.</p>
            </div>

            <div className='text-brandBlack grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16 py-8'>
                <div className='flex flex-col py-8 px-12 border-2 border-neutral-100 rounded-xl hover:shadow-sm transition-all duration-300 ease-in-out'>
                    <IconUserOff stroke={2} color="#1a1a1a" className='size-8 p-1 rounded-full bg-green-200' />
                    <h1 className='font-semibold text-xl'>What data do we collect?</h1>
                    <p className=''>GitScope does not require user to create an account. When you search for a GitHub username, GitScope requests publicly available GitHub information to display the developer profile.</p>
                </div>
                <div className='flex flex-col py-8 px-12 border-2 border-neutral-100 rounded-xl hover:shadow-sm transition-all duration-300 ease-in-out'>
                    <IconBrandGithub stroke={2} color="#1a1a1a" className='size-8 p-1 rounded-full bg-green-200' />
                    <h1 className='font-semibold text-xl'>GitHub Data</h1>
                    <p className=''>Developer information displayed by GitScope comes from the GitHub API and is based on public available GitHub data.</p>
                </div>
                <div className='flex flex-col py-8 px-12 border-2 border-neutral-100 rounded-xl hover:shadow-sm transition-all duration-300 ease-in-out'>
                    <IconUser stroke={2} color="#1a1a1a" className='size-8 p-1 rounded-full bg-green-200' />
                    <h1 className='font-semibold text-xl'>Personal Information</h1>
                    <p className=''>GitScope does not ask you to provide personal information such as your name, email address, or password to explore developer profiles.</p>
                </div>
                <div className='flex flex-col py-8 px-12 border-2 border-neutral-100 rounded-xl hover:shadow-sm transition-all duration-300 ease-in-out'>
                    <IconLink stroke={2} color="#1a1a1a" className='size-8 p-1 rounded-full bg-green-200' />
                    <h1 className='font-semibold text-xl'>Third-party services</h1>
                    <p className=''>GitScope uses third-party services such as GitHub's API to derive public developer information.</p>
                </div>


            </div>

            <div className='flex flex-col md:flex-row gap-2 items-start mx-4 md:mx-16 mb-8 px-8 py-4 rounded-xl bg-green-200 text-brandBlack'>
                <IconRefresh stroke={2} color="#1a1a1a" size={32}/>
                <div>
                    <h1 className='text-lg font-semibold'>Changes</h1>
                    <p>This privacy page may be updated as GitScope evolves.</p>
                </div>
            </div>
        </div>
    )
}

export default page