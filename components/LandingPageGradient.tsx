"use client"
import { motion } from "motion/react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import TextReveal from "./TextReveal";


const LandingPageGradient = () => {
    const [username, setUsername] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username.trim()) return;

        router.push(`/Developer/${username.trim()}`);
    };

    return (
        <div>
            <div className="relative h-screen w-full item-center justify-center overflow-hidden px-0">
                <div className="absolute inset-0 bg-[#080A08]" />
                <div className="pointer-events-none absolute inset-0 overflow-hidden">

                    <svg
                        className="absolute left-[-10%] top-[20%] h-[80%] w-[120%]"
                        viewBox="0 0 1200 500"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient
                                id="greenWave"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop offset="0%" stopColor="#080A08" stopOpacity="0" />
                                <stop offset="12%" stopColor="#091109" stopOpacity="0.2" />
                                <stop offset="25%" stopColor="#0D260F" stopOpacity="0.4" />
                                <stop offset="38%" stopColor="#218C27" stopOpacity="0.65" />
                                <stop offset="50%" stopColor="#08CB00" stopOpacity="0.95" />
                                <stop offset="70%" stopColor="#08CB00" />
                                <stop offset="100%" stopColor="#73EC8B" />
                            </linearGradient>

                            <filter id="waveBlur">
                                <feGaussianBlur stdDeviation="30" />
                            </filter>
                        </defs>

                        <path
                            className="wave-path"
                            fill="url(#greenWave)"
                            filter="url(#waveBlur)"
                            d="
              M0 110
              C100 50 180 175 300 110
              C420 50 500 175 620 110
              C740 50 820 175 940 110
              C1060 50 1120 160 1200 105
              L1200 500
              L0 500
              Z
            "
                        />
                    </svg>

                    <div
                        className="absolute inset-0"
                        style={{
                            background: `
              linear-gradient(
                to right,
                rgba(8,10,8,0.18),
                transparent 5%,
                transparent 95%,
                rgba(8,10,8,0.18)
              ),
              linear-gradient(
                to bottom,
                transparent 90%,
                rgba(8,10,8,0.3) 100%
              )
            `,
                        }}
                    />

                </div>

                <div
                    className="pointer-events-none absolute inset-0 z-5 opacity-[0.1] mix-blend-soft-light"
                    style={{
                        backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' seed='12' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")
          `,
                    }}
                />

                <div
                    className="pointer-events-none absolute inset-0 z-5 opacity-[0.02] mix-blend-screen"
                    style={{
                        backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.35' numOctaves='2' seed='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")
          `,
                    }}
                />

                <div className="relative z-50 h-full flex w-full items-center justify-center px-6">
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

                        <div className='text-center '>
                            <div>
                                <TextReveal className="tracking-tight font-hedvig leading-[1.1] text-3xl sm:text-5xl font-semibold">
                                    Explore{" "}
                                    <span className="text-brand tracking-normal">
                                        GitHub
                                    </span>{" "}
                                    Developers
                                </TextReveal>
                                <TextReveal delay={0.8} className="tracking-tight font-hedvig leading-[1.1] text-3xl sm:text-5xl font-semibold">
                                    Understand{" "} their{" "}
                                    <span className="text-brand tracking-normal">
                                        Code
                                    </span>{" "}
                                </TextReveal>

                            </div>

                            <motion.p className='mx-auto w-72 sm:w-xl mt-2 text-md sm:text-lg leading-[1.1] tracking-tight text-neutral-100'
                                initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
                                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4, delay: 1.4 }}
                            >Explore GitHub developers, understand their work,<br /> and discover meaningful insights.
                            </motion.p>


                            <motion.form className='w-fit sm:bg-black my-4 text-md sm:text-xl mx-auto p-1 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 rounded-xl'
                                initial={{ opacity: 0, filter: "blur(20px)", y: 20,scale:1.5 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0,scale:1 }}
                                transition={{ duration: 0.6, delay: 1.5 }}
                                onSubmit={handleSearch}>
                                <input
                                    type="text"
                                    placeholder="Search GitHub username..."
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className='text-md sm:text-lg rounded-md px-2 py-1.5 focus:outline-none  border border-neutral-400 sm:border-0'
                                />

                                <button type="submit" className='bg-brand px-2 py-1.5 rounded-lg cursor-pointer hover:bg-brandHover transition-colors duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]]'>
                                    Explore →
                                </button>
                            </motion.form>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPageGradient