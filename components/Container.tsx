import { cn } from "@/lib/utils"
import React from "react"
const Container = (
    { children, className }
        :
        {
            children: React.ReactNode,
            className?: string
        }) => {
    return (
        <div className={cn("w-full sm:px-8 bg-white", className)}>
            {children}
        </div>
    )
}

export default Container