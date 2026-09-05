'use client'
import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
    return (
        <div className="relative">
            <div className=" text-xl flex flex-row justify-between items-center text-brandBlack">
                <div>
                    <h1 className='font-wendy font-thin text-4xl py-4'>Git<span className='text-brand'>Scope</span></h1>
                </div>
                <div className="hidden md:flex flex-row justify-between items-center gap-8">
                    <div className="flex flex-row gap-8">
                        <Link href=''>Explore</Link>
                        <Link href=''>Compare</Link>
                        <Link href=''>About</Link>
                        <Link href=''>Features</Link>
                    </div>

                    <div className="">
                        <button className="flex flex-row items-center px-2 py-1 border-2 border-brand rounded-xl cursor-pointer hover:bg-brand transition-all duration-300">
                            <h2>Github</h2>
                            <IconArrowUpRight stroke={2} color="#1a1a1a" /> </button>
                    </div>
                </div>

                <button className="cursor-pointer md:hidden" onClick={() => setisOpen(!isOpen)}>
                    {isOpen ?
                        (<IconX />) :
                        (<IconMenu2 />)}
                </button>
            </div>


            {isOpen && (
                <div className="md:hidden h-screen absolute z-50 top-full left-0 w-full mt-3 rounded-xl bg-brandBlack px-2 py-2 text-white ">
                    <div className="flex flex-col items-start">
                        <Link href="" onClick={() => setisOpen(false)} className="size-full hover:bg-neutral-800 p-2 rounded-lg transition-all duration-300 ease-in-out">
                            Explore
                        </Link>

                        <Link href="" onClick={() => setisOpen(false)} className="size-full hover:bg-neutral-800 p-2 rounded-lg transition-all duration-300 ease-in-out">
                            Compare
                        </Link>

                        <Link href="" onClick={() => setisOpen(false)} className="size-full hover:bg-neutral-800 p-2 rounded-lg transition-all duration-300 ease-in-out">
                            About
                        </Link>

                        <Link href="" onClick={() => setisOpen(false)} className="size-full hover:bg-neutral-800 p-2 rounded-lg transition-all duration-300 ease-in-out">
                            Features
                        </Link>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Navbar