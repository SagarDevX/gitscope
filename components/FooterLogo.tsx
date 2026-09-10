
import React from 'react'

const FooterLogo = () => {
    return (
        <div className="w-full select-none">
      <div className="relative overflow-hidden bg-[#1B1C1E] text-neutral-500">
        
        {/* Huge GitScope text */}
        <h1 className="m-0 p-0 text-[clamp(100px,25vw,390px)] leading-none md:tracking-tighter tracking-[-0.09em] lg:tracking-[0.06]">
          GitScope
        </h1>

        {/* Bottom gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent to-black" />

      </div>
    </div>

    )
}

export default FooterLogo