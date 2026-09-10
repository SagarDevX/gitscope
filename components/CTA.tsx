"use client";

import { motion } from "framer-motion";
import { GithubIcon, ArrowUpRight } from "@animateicons/react/lucide";
import Link from "next/link";

const CTA = () => {
    return (
        <section className="px-6 py-20">
            <div
                className="relative mx-auto flex h-fit max-w-7xl overflow-hidden rounded-[40px] bg-[#eef1f5] shadow-[12px_12px_24px_#c8cdd3,-12px_-12px_24px_#ffffff] px-8 md:px-16 py-12 md:py-16 ">

                <div className="absolute  inset-0 bg-[radial-gradient(circle,#d6d3d1_1.2px,transparent_1px)] bg-size-[24px_24px]"/>

                    <div className="relative z-30 flex max-w-xl flex-col justify-center">

                        <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-brand bg-[#2A835F]/5 px-4 py-2">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />

                                <span className="relative inline-flex size-2 rounded-full bg-brand" />
                            </span>

                            <span className="text-xs font-semibold tracking-widest text-brand">
                                GET STARTED
                            </span>
                        </div>


                        <h1 className="max-w-xl text-2xl font-semibold leading-[1.05] tracking-tight text-brandBlack md:text-3xl">
                            Ready to discover the people behind the code?
                        </h1>

                        <p className="mt-2 max-w-md text-base text-[#26354a]/60 md:text-md">
                            Explore developers, their projects, technologies, activity,
                            and contributions - all in one place.
                        </p>

                        <Link href="/" className=" mt-4 flex w-fit items-center gap-2 rounded-full bg-brand hover:bg-brandHover px-6 py-3.5 text-md font-semibold text-neutral-100 transition-all duration-300">Start Exploring</Link>
                    </div>

                    <div className="absolute opacity-0 md:opacity-50 lg:opacity-100 top-1/2 size-8 md:size-110 -translate-y-1/2 md:right-16 transition-all duration-300"
                    >

                        <div className=" absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2A835F]/10 blur-3xl" />

                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="  absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#eef1f5] shadow-[10px_10px_20px_#c8cdd3 "
                        >
                            <GithubIcon
                                size={52}
                                color="#54e346"
                            />
                        </motion.div>


                        <motion.div
                            className=" absolute left-1/2 top-1/2 size-65 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#26354a]/15"
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 9,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >

                            <div
                                className=" absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-brand shadow-[3px_3px_8px_#c8cdd3]"
                            />
                        </motion.div>


                        <motion.div
                            className=" absolute left-1/2 top-1/2 size-93 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#26354a]/10
            "
                            animate={{
                                rotate: -360,
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >

                            <div
                                className="absolute -right-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-brand shadow-[4px_4px_8px_#c8cdd3]"
                            />
                        </motion.div>

                        <motion.div
                            className=" absolute left-1/2 top-1/2 size-118 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#26354a]/[0.07]"
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 22,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {/* Planet */}

                            <div
                                className=" absolute -bottom-4 left-1/2 size-8 -translate-x-1/2 rounded-full bg-brand "
                            />
                        </motion.div>
                    </div>
                </div>
        </section>
    );
};

export default CTA;