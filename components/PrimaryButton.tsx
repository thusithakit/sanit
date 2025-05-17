"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PrimaryButton = ({ children, href, classes }: { children: React.ReactNode, href: string, classes?: string }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <Link href={href} className={`primary-button ${classes}`} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            {children}
            {isHovering ? <Image src="/active-arrow-Icon.svg" alt="Arrow Right" width={45} height={45} /> : <Image src="/arrow-icon.svg" className='animate-pulse' alt="Arrow Right" width={45} height={45} />}
        </Link>
    )
}

export default PrimaryButton