import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PrimaryButton = ({ children, href }: { children: React.ReactNode, href: string }) => {
    return (
        <Link href={href} className='primary-button'>
            {children}
            <Image src="/arrow-icon.svg" className='animate-pulse' alt="Arrow Right" width={45} height={45} />
        </Link>
    )
}

export default PrimaryButton