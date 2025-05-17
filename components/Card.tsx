"use client"
import Image from 'next/image'
import React, { ReactElement, useState } from 'react'

const Card = ({ cardTitle, cardContent, className, icon }: { cardTitle: string, cardContent: string, className?: string, icon?: React.ReactNode }) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    function cloneWithProps<P>(element: ReactElement<P>, props: Partial<P>): ReactElement<P> {
        return React.cloneElement(element, props);
    }

    const styledIcon = React.isValidElement(icon) ? cloneWithProps(icon, { fill: isHovering ? "#fff" : "#323E59" }) : null;
    return (
        <div className={`flex flex-col items-start justify-center py-10 px-5 lg:py-24 lg:px-6 hover:bg-[#0C5ADB] group ${className}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <span className='mb-6'>
                {styledIcon ? styledIcon : <Image src="/card-icon.svg" alt="Card Icon" className='animate-pulse' width={65} height={65} />}
            </span>
            <h2 className='text-xl lg:text-[28px] text-[#323E59] font-normal mb-2.5 group-hover:text-white'>{cardTitle}</h2>
            <p className='lg:text-[18px] text-[#677187] group-hover:text-white'>{cardContent}</p>
        </div>
    )
}

export default Card