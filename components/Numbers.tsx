import React from 'react'
import AnimatedCounter from './AnimatedCounter'

const Numbers = ({ number, slug, className }: { number: number, slug: string, className: string }) => {
    return (
        <div className={`justify-center items-start flex-col gap-2 ${className}`}>
            <h3 className='text-[#323E59] text-[32px]'><AnimatedCounter from={1} to={number} />+</h3>
            <p className='text-[#323E59] text-[16px] lg:text-[18px]'>{slug}</p>
        </div>
    )
}

export default Numbers