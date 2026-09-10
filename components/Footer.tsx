import Link from "next/link"

const Footer = () => {
    return (
        <div className='w-full h-fit bg-[#1B1C1E] flex flex-col md:flex-row justify-between gap-8 lg:gap-16 px-8 lg:px-40 pt-4 md:pt-8 md:pb-24 '>

            <div className=' mt-24 flex flex-col gap-6 text-white'>
                <h1 className=' font-wendy font-thin text-4xl leading-[0.9]'>Git<span className='text-brand'>Scope</span></h1>
                <p className='tracking-tight '>Explore developers,their projects,<br />
                    technologies and activity - all in <br />
                    one place.
                </p>
                <div className=" mb-4 flex w-fit items-center gap-2 rounded-full border border-neutral-400 px-3 py-2 ">
                    <span className="relative flex size-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                        <span className="relative inline-flex size-2.5 rounded-full bg-brand" />
                    </span>

                    <span className="text-xs font-medium text-brand ">
                        Powered by GitHub API
                    </span>
                </div>
            </div>

            <div className='  md:mt-24 grid grid-cols-2 md:grid-cols-3 gap-16  text-md'>

                <div className='flex flex-col gap-6'>
                    <h1 className="text-neutral-200 font-semibold">Product</h1>
                    <div className="flex flex-col text-neutral-400 gap-4">
                        <Link href='/' className="hover:text-neutral-200 transition-colors duration-200 ease-linear"> Explore</Link>
                        <Link href='/' className="hover:text-neutral-200 transition-colors duration-200 ease-linear">Features</Link>
                    </div>
                </div>

                <div className='flex flex-col gap-6'>
                    <h1 className="text-neutral-200 font-semibold ">Resource</h1>
                    <div className="flex flex-col text-neutral-400 gap-4">
                        <Link href='/' className="hover:text-neutral-200 transition-colors duration-200 ease-linear"> Documentation</Link>
                        <Link href='/' className="hover:text-neutral-200 transition-colors duration-200 ease-linear">GitHub</Link>
                    </div>
                </div>

                <div className='flex flex-col gap-6'>
                    <h1 className="text-neutral-200 font-semibold">Product</h1>
                    <div className="flex flex-col text-neutral-400 gap-4">
                        <Link href='/' className="hover:text-neutral-200 transition-colors duration-200 ease-linear"> About</Link>
                        <Link href='/' className="hover:text-neutral-200 transition-colors duration-200 ease-linear">Contact</Link>
                        <Link href='/' className="hover:text-neutral-200 transition-colors duration-200 ease-linear">Privacy</Link>
                    </div>
                </div>



            </div>


        
        </div>
    )
}

export default Footer