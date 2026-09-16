"use client"
import PieChartComponent from '@/components/charts/pieChart'
import Container from '@/components/Container'
import { motion } from "motion/react"
import { IconChartDots, IconGitCommit, IconBook2, IconTrendingUp, IconWorldMap, IconBrandSupabase } from '@tabler/icons-react';

const page = () => {
  return (
    <Container className='min-h-screen'>
      <div className='w-full h-104 flex flex-row gap-1 my-4'>
        <div className='h-full w-1/2 p-24 flex flex-col items-start justify-center'>
          <div className=" mb-4 flex w-fit items-center gap-2 rounded-full border border-brand px-3 py-1.5 bg-green-50">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-brand" />
            </span>

            <span className="text-xs font-medium text-brand">
              INSIGHTS
            </span>
          </div>

          <h1 className='text-xl font-semibold md:text-5xl'>Powerful <span className='text-brand'>insights</span>  <br />for better developers</h1>
          <p className='mt-1 text-md leading-[1.3] tracking-tight md:text-base'>GitScope turnsraw GitHub data into beautiful , easy to understand <br /> insights. Explore contributions, commits, repositories and more - all <br /> in one place.</p>
        </div>
        <div className='relative w-1/2 h-full overflow-hidden shadow-[0_0_50px_rgba(84,227,70,0.35)]'>
          <div className='absolute inset-0 '><video src="/aurora-background.mp4" loop autoPlay muted playsInline
            className='h-full w-full object-cover' /></div>
          <div className='relative size-full z-10  flex flex-row'>
            <div className='w-1/2 -rotate-10'>
              <PieChartComponent />

              <motion.div className='w-96 text-white flex flex-col gap-6 py-2 rounded-2xl px-4 bg-black/2 backdrop-blur-xs border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] rotate-20'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.6 }}>
                <div className='flex flex-col'>
                  <h1 className='text-lg font-semibold'>shadcn</h1>
                  <p className='text-xs font-base leading-1'>Full stack developer</p>
                </div>

                <div className='flex flex-row justify-between'>
                  <div>
                    <h3 className='text-sm font-base leading-1'>Respositories</h3>
                    <h1 className='text-lg font-semibold'>229</h1>
                  </div>
                  <div>
                    <h3 className='text-sm font-base leading-1'>Followers</h3>
                    <h1 className='text-lg font-semibold'>100.0K</h1>
                  </div>
                  <div>
                    <h3 className='text-sm font-base leading-1'>Following</h3>
                    <h1 className='text-lg font-semibold'>0</h1>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div className='w-1/2 flex items-start py-32'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.7, delay: 2.3 }}>
              <div className='w-full flex flex-col gap-4 text-white rounded-2xl px-4 py-2 bg-black/2 backdrop-blur-xs border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] -rotate-15'>
                <h1 className='text-lg font-semibold'>Top Repositories</h1>
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between items-center'>
                    <h4>portfolio</h4>
                    <p>124★</p>
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                    <h4>git-scope</h4>
                    <p>69★</p>
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                    <h4>next-js starter</h4>
                    <p>23★</p>
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                    <h4>ui-components</h4>
                    <p>21★</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <div className='relative overflow-hidden'>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#54E346]/25 blur-3xl" />
          <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-[#2A835F]/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-56 w-56 rounded-full bg-[#DFFFDA]/60 blur-3xl" />
        </div>



      </div>
      <div className='relative my-16 p-8 bg-white border border-white/30 rounded-2xl'>
        <div className=''>
          <h1 className='text-xl font-semibold md:text-4xl'>Everthing you need  <br /><span className='text-brand'> to understand a developer.</span></h1>
          <p>
            From contribution to language. Gitscope gives you a <br /> complete picture of a developer's journey - with clean ,  <br />animated charts and modern UI.
          </p>
        </div>
        <div className="w-full grid grid-cols-3 auto-rows-30 mt-8 gap-8">

          <div className="border border-neutral-200 px-4 py-2 rounded-2xl flex flex-col items-start justify-center 
  shadow-[8px_8px_16px_#c8cdd3,-8px_-8px_16px_#ffffff]
  transition-all
  hover:shadow-[4px_4px_8px_#c8cdd3,-4px_-4px_8px_#ffffff] duration-300">
            <div className='rounded-full bg-emerald-600 w-fit p-2'><IconChartDots stroke={2} color="#ffffff" /></div>
            <h3 className="text-base font-semibold">Contribution Activity</h3>
            <p className="text-sm leading-4 text-neutral-800">
              Track commit frequency and patterns to understand their workflows.
            </p>
          </div>

          <div className="border border-neutral-200 px-4 py-2 rounded-2xl flex flex-col items-start justify-center 
  shadow-[8px_8px_16px_#c8cdd3,-8px_-8px_16px_#ffffff]
  transition-all
  hover:shadow-[4px_4px_8px_#c8cdd3,-4px_-4px_8px_#ffffff] duration-300">
            <div className='rounded-full bg-emerald-600 w-fit p-2'><IconGitCommit stroke={2} color="#ffffff" /></div>
            <h3 className="text-base font-semibold">Commit Activity</h3>
            <p className="text-sm leading-4 text-neutral-800">
              See how a developer is over time with beautiful, animated charts.
            </p>
          </div>

          <div className="border border-neutral-200 px-4 py-2 rounded-2xl flex flex-col items-start justify-center 
  shadow-[8px_8px_16px_#c8cdd3,-8px_-8px_16px_#ffffff]
  transition-all
  hover:shadow-[4px_4px_8px_#c8cdd3,-4px_-4px_8px_#ffffff] duration-300">
            <div className='rounded-full bg-emerald-600 w-fit p-2'><IconBook2 stroke={2} color="#ffffff" /></div>
            <h3 className="text-base font-semibold">Repository Activity</h3>
            <p className="text-sm leading-4 text-neutral-800">
              Explore popular repositories, updates and growth trends.
            </p>
          </div>

          <div className="border border-neutral-200 px-4 py-2 rounded-2xl flex flex-col items-start justify-center 
  shadow-[8px_8px_16px_#c8cdd3,-8px_-8px_16px_#ffffff]
  transition-all
  hover:shadow-[4px_4px_8px_#c8cdd3,-4px_-4px_8px_#ffffff] duration-300">
            <div className='rounded-full bg-emerald-600 w-fit p-2'><IconTrendingUp stroke={2} color="#ffffff" /></div>
            <h3 className="text-base font-semibold">Contribution Trends</h3>
            <p className="text-sm leading-4 text-neutral-800">
              Spot long term patterns and improvements in activity.
            </p>
          </div>

          <div className="border border-neutral-200 px-4 py-2 rounded-2xl flex flex-col items-start justify-center 
  shadow-[8px_8px_16px_#c8cdd3,-8px_-8px_16px_#ffffff]
  transition-all
  hover:shadow-[4px_4px_8px_#c8cdd3,-4px_-4px_8px_#ffffff] duration-300">
            <div className='rounded-full bg-emerald-600 w-fit p-2'><IconWorldMap stroke={2} color="#ffffff" /></div>
            <h3 className="text-base font-semibold">Languages</h3>
            <p className="text-sm leading-4 text-neutral-800">
              Understand your tech stack.
            </p>
          </div>

          <div className="border border-neutral-200 px-4 py-2 rounded-2xl flex flex-col items-start justify-center 
  shadow-[8px_8px_16px_#c8cdd3,-8px_-8px_16px_#ffffff]
  transition-all
  hover:shadow-[4px_4px_8px_#c8cdd3,-4px_-4px_8px_#ffffff] duration-300">
            <div className='rounded-full bg-emerald-600 w-fit p-2'><IconBrandSupabase stroke={2} color="#ffffff" /></div>
            <h3 className="text-base font-semibold">Quick Insights</h3>
            <p className="text-sm leading-4 text-neutral-800">
              Get key stats and highlights in beautiful, compact cards.
            </p>
          </div>
        </div>
      </div>
    </Container >

  )
}

export default page