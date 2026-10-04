import { IconUser, IconWorld, IconBook, IconStar, IconActivity } from '@tabler/icons-react';

const page = () => {
  return (
    <div className='pt-16 text-brandBlack'>
      <div className='w-full py-16 px-8 md:p-24 pb-8 text-brandBlack'>
        <h1 className='text-2xl font-semibold md:text-4xl font-hedvig'>GitScope Documentation</h1>
        <p className='mt-1 text-md leading-[1.3] tracking-tight md:text-lg'>Learn how GitScope works and how to explore developer profiles.</p>
      </div>

      <div className=' flex flex-col  md:flex-row gap-8 border border-neutral-300 m-2 text-brandBlack px-8 md:px-24 py-8 rounded-2xl '>
        <div className='w-full md:w-1/2 text-3xl font-semibold'><h1>Get Started</h1></div>
        <div className='w-full md:w-1/2 flex flex-col gap-8 '>
          <div className='w-full flex flex-col gap-1 items-start justify-center'>

            <h1 className='flex flex-row justify-center items-center gap-2 font-semibold leading-[0.7] text-[18px]'> <span className='size-8 rounded-full bg-brand flex items-center justify-center'>1</span>Enter a GitHub Username.</h1>
            <p className=' w-full px-10 leading-tight md:leading-0'>GitScope will fetch the data from GitHub.</p>
          </div>
          <div className='w-full flex flex-col gap-1 items-start justify-center'>
            <h1 className='flex flex-row justify-center items-center gap-2 font-semibold leading-[0.7] text-[18px]'> <span className='size-8 rounded-full bg-brand flex items-center justify-center'>2</span>Press Enter or click Search.</h1>
            <p className=' w-full px-10 leading-tight md:leading-0'>View profile, repositories, languages and more.</p>
          </div>
          <div className='w-full flex flex-col gap-1 items-start justify-center'>
            <h1 className='flex flex-row justify-center items-center gap-2 font-semibold leading-[1.3] md:leading-[0.7] text-[18px]'> <span className='size-8 rounded-full bg-brand flex items-center justify-center'>3</span>Explore the Developer dashboard.</h1>
            <p className=' w-full px-10 leading-tight md:leading-0'>Search for any public GitHub Username.</p>
          </div>
          <div className='w-full flex flex-col gap-1 items-start justify-center'>
            <h1 className='flex flex-row justify-center items-center gap-2 font-semibold leading-[0.7] text-[18px]'> <span className='size-8 rounded-full bg-brand flex items-center justify-center'>4</span>Discover Insights.</h1>
            <p className=' w-full px-10 leading-tight md:leading-0'>Understand the developer's activity and tech stack.</p>
          </div>

        </div>

      </div>


      <div className=' flex flex-col md:flex-row gap-8 border border-neutral-300 m-2 text-brandBlack  px-8 md:px-24 py-8 rounded-2xl '>
        <div className='w-full md:w-1/2 text-3xl font-semibold'><h1>Developer Dashboard</h1></div>
        <div className='w-full md:w-1/2 flex flex-col gap-8 '>
          <div className='w-full flex flex-col gap-1 items-start justify-center'>

            <h1 className='flex flex-row justify-center items-center gap-2 font-semibold leading-[0.7] text-[18px]'><IconUser stroke={2} color="#1a1a1a" className='size-8 bg-gray-200 rounded-full p-1' />Overview</h1>
            <p className=' w-full px-9 md:px-10 leading-tight md:leading-0'>Profile information, followers, repositories ,etc.</p>
          </div>
          <div className='w-full flex flex-col gap-1 items-start justify-center'>
            <h1 className='flex flex-row justify-center items-center gap-2 font-semibold leading-[0.7] text-[18px]'><IconWorld stroke={2} color="#1a1a1a" className='size-8 bg-gray-200 rounded-full p-1' />Top Languages</h1>
            <p className=' w-full px-9 md:px-10 leading-tight md:leading-0'>Languages detected across the fetched repositories.</p>
          </div>
          <div className='w-full flex flex-col gap-1 items-start justify-center'>
            <h1 className='flex flex-row justify-center items-center gap-2 font-semibold leading-[0.7] text-[18px]'> <IconBook stroke={2} color="#1a1a1a" className='size-8 bg-gray-200 rounded-full p-1' />Repository Activity</h1>
            <p className=' w-full px-9 md:px-10 leading-tight md:leading-0'>Repository update activity over time.</p>
          </div>
          <div className='w-full flex flex-col gap-1 items-start justify-center'>
            <h1 className='flex flex-row justify-center items-center gap-2 font-semibold leading-[0.7] text-[18px]'> <IconStar stroke={2} color="#1a1a1a" className='size-8 bg-gray-200 rounded-full p-1' />Popular Repositories</h1>
            <p className=' w-full px-9 md:px-10 leading-tight md:leading-0'>Repositories with the most stars.</p>
          </div>
          <div className='w-full flex flex-col gap-1 items-start justify-center'>
            <h1 className='flex flex-row justify-center items-center gap-2 font-semibold leading-[0.7] text-[18px]'> <IconActivity stroke={2} color="#1a1a1a" className='size-8 bg-gray-200 rounded-full p-1' />Repositories</h1>
            <p className=' w-full px-9 md:px-10 leading-tight md:leading-0'>Recently updated Repositories.</p>
          </div>

        </div>

      </div>


      <div className=' flex flex-row gap-8 border border-neutral-300 m-2 text-brandBlack px-8 md:px-24 py-8 rounded-2xl '>
        <div className='w-full md:w-1/2 text-3xl font-semibold'><h1>Data Sources</h1></div>
        <div className='w-full md:w-1/2 flex flex-col gap-8 '>
          <p>GitHub uses publicly available information from the GitHub API. The data show can change as Github profiles and Repositories are updated.
          </p>
        </div>
      </div>


      <div className=' flex flex-row gap-8 border border-neutral-300 m-2 text-brandBlack px-8 md:px-24 py-8 rounded-2xl '>
        <div className='w-full md:w-1/2 text-3xl font-semibold'><h1>Limitation</h1></div>
        <div className='w-full md:w-1/2 flex flex-col gap-8 '>
          <p>GitScope does not have access to every GitHub metric. Some contribution and activity statistics are limited by the data available through GitHub's public API.</p>

        </div>

      </div>

      <div></div>
    </div>
  )
}

export default page