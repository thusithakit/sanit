import React from 'react'

const Numbers = ({ number, slug, className }: { number: number, slug: string, className: string }) => {
    return (
        <div className={`justify-center items-start flex-col gap-2 ${className}`}>
            <h3 className='text-[#323E59] text-[32px]'>{number}+</h3>
            <p className='text-[#323E59] text-[18px]'>{slug}</p>
        </div>
    )
}

export default Numbers