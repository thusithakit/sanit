import React from 'react'
import AnimatedCounter from './AnimatedCounter'

const Numbers = ({ number, slug, className }: { number: number, slug: string, className: string }) => {
    return (
        <div className={`justify-center items-start flex-col gap-2 ${className}`}>
            <span className='text-[#323E59] text-[32px] font-medium'><AnimatedCounter from={1} to={number} />+</span>
            <p className='text-[#323E59] text-[16px] lg:text-[18px]'>{slug}</p>
        </div>
    )
}

export default Numbers