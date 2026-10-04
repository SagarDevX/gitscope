"use client"
import { motion } from "motion/react"
import Link from "next/link";
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

const contacts = [
    {
        title: "Email",
        description: "The best way to reach me directly.",
        label: "Send an email",
        href: "mailto:sagarpundir25@gmail.com",
        icon: IconMail,
    hoverColor: "#EA4335",
    },
    {
        title: "GitHub",
        description: "Explore the project, open an issue, or contribute.",
        label: "View GitHub",
        href: "https://github.com/SagarDevX",
        icon: IconBrandGithub,
        hoverColor: "#24292F",
    },
    {
        title: "LinkedIn",
        description: "Interested in connecting professionally?",
        label: "Connect on LinkedIn",
        href: "https://linkedin.com/in/sagaadev",
        icon: IconBrandLinkedin,
        hoverColor: "#0A66C2",
    },
    {
        title: "X",
        description: "Follow along as I build and experiment.",
        label: "Follow @SagaaDev",
        href: "https://x.com/SagaaDev",
        icon: IconBrandX,
        hoverColor: "#000000",
    },
];

const page = () => {
    return (
        <div className='pt-16 text-brandBlack'>
            <div className='w-full py-16 px-8 md:p-24 pb-8 text-brandBlack'>
                <h1 className='text-2xl font-semibold md:text-4xl font-hedvig'>Got an <span className='text-brand'> Idea?</span> <br />Let's build on it.</h1>
                <p className='mt-1 text-md leading-[1.3] tracking-tight md:text-lg'>Found a bug have a feature idea, want collaborate <br /> or simply want to connect. I'd love to hear from you.</p>
            </div>

            <div className='px-8 pb-8 md:pb-16 grid grid-col-1 md:grid-cols-2 gap-8'>
                {contacts.map((contact, index) => {
                    const Icon = contact.icon;

                    return (
                        <motion.div
                            key={contact.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                        >
                            <Link
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex size-11 items-center justify-center rounded-xl text-white transition-colors duration-300 group-hover:bg-neutral-300 group-hover:text-black">
                                        <Icon size={24} stroke={1.8} color="#000000" />
                                    </div>

                                </div>

                                <div className="px-2">
                                    <h3 className="text-xl md:text-xl font-semibold">
                                        {contact.title}
                                    </h3>

                                    <p className="text-lg md:text-sm leading-6 text-neutral-500">
                                        {contact.description}
                                    </p>

                                    <p className="mt-5 text-sm font-semibold text-black">
                                        {contact.label} →
                                    </p>
                                </div>

                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    )
}

export default page