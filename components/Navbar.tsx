'use client'
import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"
import Container from "./Container"
import { AnimatePresence, motion } from "motion/react"
import { usePathname, useRouter } from "next/navigation";


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
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3
        }
    }
}



const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
    const pathname = usePathname();
    const router = useRouter();

    const handleFeatures = () => {
        if (pathname === "/") {
            document.getElementById("feature")?.scrollIntoView({
                behavior: "smooth",
            });
        } else {
            router.push("/#feature");
        }
    };
    const handleExplore = () => {
        if (pathname === "/") {
            document.getElementById("explore")?.scrollIntoView({
                behavior: "smooth",
            });
        } else {
            router.push("/");
        }
    };
    return (
        <Container className="relative fixed top-0 z-100 w-full text-white bg-[#080A08] ">
            <motion.div className=" text-xl flex flex-row justify-between items-center px-4 py-6 sm:px-0 ">
                <div>
                    <Link href='/' className='font-wendy font-thin text-3xl sm:text-4xl py-4'>Git<span className='text-brand'>Scope</span></Link>
                </div>
                <div className="hidden md:flex flex-row justify-between items-center gap-8">
                    <div className="flex flex-row gap-8">
                        <button
                            onClick={handleExplore}
                            className="group relative py-1 cursor-pointer"
                        >
                            Explore
                            <span className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 scale-x-0 bg-neutral-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                        </button>

                        <Link
                            href="/insights"
                            className="group relative py-1"
                        >
                            Insights
                            <span className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 scale-x-0 bg-neutral-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                        </Link>

                        <button
                            className="group relative cursor-pointer py-1"
                            onClick={handleFeatures}
                        >
                            Features
                            <span className="absolute bottom-0 left-1/2 h-px  w-full -translate-x-1/2 scale-x-0 bg-neutral-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                        </button>
                    </div>

                    <div className="group">
                        <Link href='https://github.com/'
                            target="_blank"
                            rel="noopener noreferreer"
                            className="flex flex-row items-center px-2 py-1 border-2 border-brand rounded-xl cursor-pointer hover:bg-brand transition-all duration-300">
                            <h2>Github</h2>
                            <IconArrowUpRight stroke={2} color="#ffffff" className=" group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 ease-in-out" /> </Link>
                    </div>
                </div>

                <button className="cursor-pointer md:hidden " onClick={() => setisOpen(!isOpen)}>
                    {isOpen ?
                        (<IconX />) :
                        (<IconMenu2 />)}
                </button>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden min-h-screen absolute z-50 top-16 left-0 w-full mt-2 bg-black px-2 py-2 text-white"
                        variants={parentvariant}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >

                        <motion.div variants={childVariant}>
                            <button
                                onClick={() => {
                                    handleExplore();
                                    setisOpen(false);
                                }}
                                className="flex items-start w-full hover:bg-neutral-800 p-2 transition-all duration-300 ease-in-out border-t border-neutral-700"
                            >
                                Explore
                            </button>
                        </motion.div>


                        <motion.div variants={childVariant}>
                            <Link
                                href="/insights"
                                onClick={() => setisOpen(false)}
                                className="block w-full hover:bg-neutral-800 p-2 transition-all duration-300 ease-in-out border-t border-neutral-700"
                            >
                                Insights
                            </Link>
                        </motion.div>



                        <motion.div variants={childVariant}>
                            <button
                                className="flex items-start w-full hover:bg-neutral-800 p-2 transition-all duration-300 ease-in-out border-t border-neutral-700"
                                onClick={() => {
                                    handleFeatures();
                                    setisOpen(false);
                                }}
                            >
                                Features
                            </button>
                        </motion.div>
                        <motion.div variants={childVariant}>
                            <Link
                                href="/about"
                                onClick={() => setisOpen(false)}
                                className="block w-full hover:bg-neutral-800 p-2 transition-all duration-300 ease-in-out border-t border-neutral-700"
                            >
                                About
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    )
}

export default Navbar