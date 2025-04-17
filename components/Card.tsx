import Image from 'next/image'
import React from 'react'

const Card = ({ cardTitle, cardContent, className }: { cardTitle: string, cardContent: string, className?: string }) => {
    return (
        <div className={`flex flex-col items-start justify-center py-24 px-6 ${className}`}>
            <Image src="/card-icon.svg" alt="Card Icon" className='mb-6 animate-pulse' width={65} height={65} />
            <h2 className='text-[28px] text-[#323E59] font-normal mb-2.5'>{cardTitle}</h2>
            <p className='text-[18px] text-[#748099]'>{cardContent}</p>
        </div>
    )
}

export default Card