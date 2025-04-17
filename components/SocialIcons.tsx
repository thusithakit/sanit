import { SocailMediaLinks } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SocialIcons = ({ className, data }: { className?: string, data: SocailMediaLinks }) => {
    const { facebook, instagram, linkedin } = data;
    return (
        <div className='flex gap-2 justify-center items-center'>
            {facebook && (
                <Link href={facebook} className={`hover:bg-white ease-in-out duration-300 rounded-full p-3 border border-[#D3E2FA] ${className}`}>
                    <Image src="/facebook-icon.svg" alt="Facebook icon" width={20} height={20} />
                </Link>
            )}
            {linkedin && (
                <Link href={linkedin} className={`hover:bg-white ease-in-out duration-300 rounded-full p-3 border border-[#D3E2FA] ${className}`}>
                    <Image src="/linkedin-icon.svg" alt="LinkedIn icon" width={20} height={20} />
                </Link>
            )}
            {instagram && (
                <Link href="" className={`hover:bg-white ease-in-out duration-300 rounded-full p-3 border border-[#D3E2FA] ${className}`}>
                    <Image src="/instagram-icon.svg" alt="Instagram icon" width={20} height={20} />
                </Link>
            )}
        </div>
    )
}

export default SocialIcons