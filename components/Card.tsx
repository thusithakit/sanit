import Image from 'next/image'
import React from 'react'

const Card = ({ cardTitle, cardContent, className, icon }: { cardTitle: string, cardContent: string, className?: string, icon?: React.ReactNode }) => {
    return (
        <div className={`flex flex-col items-start justify-center py-10 px-5 lg:py-24 lg:px-6 ${className}`}>
            <span className='mb-6'>
                {icon ? icon : <Image src="/card-icon.svg" alt="Card Icon" className='animate-pulse' width={65} height={65} />}
            </span>
            <h2 className='text-xl lg:text-[28px] text-[#323E59] font-normal mb-2.5'>{cardTitle}</h2>
            <p className='lg:text-[18px] text-[#677187]'>{cardContent}</p>
        </div>
    )
}

export default Card