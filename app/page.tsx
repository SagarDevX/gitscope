import Features from '@/components/Features'
import Navbar from '@/components/Navbar'
import Stats from '@/components/Stats'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='min-h-fit bg-[#faf8f2] rounded-xl'>
        <div className="relative overflow-hidden min-h-140 md:min-h-175 bg-brandBlack rounded-2xl">
          <div
            className="absolute inset-0 pointer-events-none blur-[35px] md:blur-[50px]"
            style={{
              background:
                "radial-gradient(ellipse 120% 145% at 50% -50%, rgba(0,0,0,0) 60%, rgba(91,255,77,1) 75%, rgba(0,0,0,0) 85%)",
              mixBlendMode: "screen",
            }}
            aria-hidden="true"
          ></div>
          <div
            className="absolute inset-0 pointer-events-none blur-[188px] md:blur-[260px] opacity-[0.74]"
            style={{
              background:
                "radial-gradient(ellipse 120% 145% at 50% -50%, rgba(0,0,0,0) 55%, rgba(91,255,77,1,0.5) 80%, rgba(0,0,0,0) 100%)",
              mixBlendMode: "screen",
            }}
            aria-hidden="true"
          ></div>

          <div
            className="absolute inset-0 pointer-events-none blur-[30px] md:blur-[43px] opacity-[0.94]"
            style={{
              background:
                "radial-gradient(ellipse 120% 145% at 50% -50%, rgba(0,0,0,0) 83.5%, #7a9997 84.5%, rgba(0,0,0,0) 85.5%)",
              mixBlendMode: "screen",
            }}
            aria-hidden="true"
          ></div>

          <div className="absolute size-full flex flex-col items-center justify-center text-white z-10 ">
            <div className="mx-auto hidden sm:flex w-fit items-center gap-2 rounded-full border border-neutral-400 px-3 py-1.5 mb-4">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-brand" />
              </span>

              <span className="text-xs font-medium text-green-500">
                FOR DEVELOPERS, BY DEVELOPERS
              </span>
            </div>

            <div className='text-center'>
              <h1 className='tracking-tight leading-[0.9] text-3xl sm:text-6xl font-semibold '>
                Explore <span className='font-wendy text-brand font-extralight tracking-normal '>GitHub</span><br />
                Developers
              </h1>

              <p className='mx-auto w-72 sm:w-xl mt-2 text-md sm:text-lg leading-tight tracking-tight text-neutral-100'>Explore GitHub developers, understand their work,<br /> and discover meaningful insights.</p>


              <form className='w-fit sm:bg-brandBlack my-4 text-md sm:text-xl mx-auto p-1 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 rounded-xl'>
                <input
                  type="text"
                  placeholder="Search GitHub username..."
                  className='text-lg rounded-md px-2 py-1.5 sm:focus:outline-none border-2 border-neutral-700 sm:border-0'
                />

                <button type="submit" className='bg-brand px-2 py-1.5 rounded-xl cursor-pointer hover:bg-brandHover transition-colors duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]'>
                  Explore →
                </button>
              </form>
            </div>


          </div>
        </div>
      </div>
      <Stats />
      <Features/>
    </div>
  )
}

export default page