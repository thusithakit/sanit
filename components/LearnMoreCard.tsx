"use client"

import Image from "next/image";
import Link from "next/link";
import React, { ReactElement, useState } from "react";

const LearnMoreCard = ({ cardTitle, cardContent, href, className, icon, itemClass }: { cardTitle: string, cardContent: string, href?: string, className?: string, icon?: React.ReactNode, itemClass?: string }) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    function cloneWithProps<P>(element: ReactElement<P>, props: Partial<P>): ReactElement<P> {
        return React.cloneElement(element, props);
    }

    const styledIcon = React.isValidElement(icon) ? cloneWithProps(icon, { fill: isHovering ? "#fff" : "#323E59" }) : null;
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`hover:bg-[#0C5ADB] group ease-in-out duration-300 lg:px-8 lg:pt-24 lg:pb-8 px-4 py-6 ${className}`}
        >
            <span className="mb-6 block group-hover:scale-[0.98]">
                {styledIcon ? styledIcon : <Image src="/card-icon.svg" alt="Card Icon" width={65} height={65} />}
            </span>
            <h2 className="text-[28px] text-[#323E59] mb-2.5 group-hover:text-white ease-in-out duration-300">{cardTitle}</h2>
            <p className="text-[#677187] text-18px group-hover:text-white ease-in-out duration-300 mb-6">{cardContent}</p>
            {href && <Link href={href} className={`py-4 px-6 border border-[##E0EAFF] rounded-[100px] text-[#323E59] font-[600] block w-fit group-hover:bg-white group-hover:text-[#0C5ADB] ease-in-out duration-300 mb-6 ${itemClass}`}>Learn More</Link>}
        </div>
    )
}

export default LearnMoreCard