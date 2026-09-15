'use client'
import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"
import Container from "./Container"
import { AnimatePresence, motion } from "motion/react"

const parentvariant = {
    hidden: {
        transition: {
            staggerChildren: 0.15,
            staggerDirection: -1,
        },
    },

    visible: {
        transition: {
            staggerChildren: 0.15,
            staggerDirection: 1,
        },
    }
}

const childVariant = {
    hidden:{
        opacity:0,
        y:10
    },
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:0.3
        }
    }
}

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
    return (
        <Container className="relative text-brandBlack ">
            <div className=" text-xl flex flex-row justify-between items-center px-4 py-4 sm:px-0 ">
                <div>
                    <Link href='/' className='font-wendy font-thin text-4xl py-4'>Git<span className='text-brand'>Scope</span></Link>
                </div>
                <div className="hidden md:flex flex-row justify-between items-center gap-8">
                    <div className="flex flex-row gap-8">
                        <Link href=''>Explore</Link>
                        <Link href='/insights'>Insights</Link>
                        <Link href=''>About</Link>
                        <button className="cursor-pointer" onClick={() =>
                            document.getElementById("features")?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }>Features</button>
                    </div>

                    <div className="group">
                        <Link href='https://github.com/'
                            target="_blank"
                            rel="noopener noreferreer"
                            className="flex flex-row items-center px-2 py-1 border-2 border-brand rounded-xl cursor-pointer hover:bg-brand transition-all duration-300">
                            <h2>Github</h2>
                            <IconArrowUpRight stroke={2} color="#1a1a1a" className=" group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 ease-in-out" /> </Link>
                    </div>
                </div>

                <button className="cursor-pointer md:hidden" onClick={() => setisOpen(!isOpen)}>
                    {isOpen ?
                        (<IconX />) :
                        (<IconMenu2 />)}
                </button>
            </div>

           <AnimatePresence>
    {isOpen && (
        <motion.div
            className="md:hidden min-h-dvh absolute z-50 top-16 left-0 w-full mt-2 bg-brandBlack px-2 py-2 text-white"
            variants={parentvariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.div variants={childVariant}>
                <Link
                    href=""
                    onClick={() => setisOpen(false)}
                    className="block w-full hover:bg-neutral-800 p-2 transition-all duration-300 ease-in-out"
                >
                    Explore
                </Link>
            </motion.div>

            <motion.div variants={childVariant}>
                <Link
                    href=""
                    onClick={() => setisOpen(false)}
                    className="block w-full hover:bg-neutral-800 p-2 transition-all duration-300 ease-in-out border-t border-neutral-700"
                >
                    Compare
                </Link>
            </motion.div>

            <motion.div variants={childVariant}>
                <Link
                    href=""
                    onClick={() => setisOpen(false)}
                    className="block w-full hover:bg-neutral-800 p-2 transition-all duration-300 ease-in-out border-t border-neutral-700"
                >
                    About
                </Link>
            </motion.div>

            <motion.div variants={childVariant}>
                <Link
                    href=""
                    onClick={() => setisOpen(false)}
                    className="block w-full hover:bg-neutral-800 p-2 transition-all duration-300 ease-in-out border-t border-neutral-700"
                >
                    Features
                </Link>
            </motion.div>
        </motion.div>
    )}
</AnimatePresence>
        </Container>
    )
}

export default Navbar