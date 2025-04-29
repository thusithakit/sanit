"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LearnMoreCard = ({ cardTitle, cardContent, href, className }: { cardTitle: string, cardContent: string, href: string, className?: string }) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`hover:bg-[#0C5ADB] group ease-in-out duration-300 lg:px-8 lg:pt-24 lg:pb-8 px-4 py-6 ${className}`}
        >
            {isHovering ? (
                <Image src="/learn-more-active.svg" alt="Learn More Active" width={65} height={65} className="mb-6" />
            ) : (<Image src="/learn-more.svg" alt="Learn More Active" width={65} height={65} className="mb-6" />)}
            <h2 className="text-[28px] text-[#323E59] mb-2.5 group-hover:text-white ease-in-out duration-300">{cardTitle}</h2>
            <p className="text-[#677187] text-18px group-hover:text-white ease-in-out duration-300 mb-6">{cardContent}</p>
            <Link href={href} className="py-4 px-6 border border-[##E0EAFF] rounded-[100px] text-[#323E59] font-[600] block w-fit group-hover:bg-white group-hover:text-[#0C5ADB] ease-in-out duration-300 mb-6">Learn More</Link>
        </div>
    )
}

export default LearnMoreCard