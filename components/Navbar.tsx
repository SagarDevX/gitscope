import { IconArrowUpRight } from "@tabler/icons-react"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="text-xl flex flex-row justify-between items-center">
            <div>
                <h1 className='font-wendy font-thin text-4xl py-4'>Git<span className='text-brand'>Scope</span></h1>
            </div>

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
    )
}

export default Navbar