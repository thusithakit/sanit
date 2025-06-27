import Link from 'next/link'
import React from 'react'
import SocialIcons from './SocialIcons'
import { companySocialMediaLinks } from '@/utils/data'
import Image from 'next/image'
import logo from "@/public/logo.svg"

const Footer = () => {
    return (
        <footer className='bg-white'>
            <div className="container py-24">
                <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-start py-10 lg:py-0'>
                    <Link href="/" className='relative mx-auto lg:mx-0'>
                        <Image src={logo} alt="Logo" width={200} />
                    </Link>
                    <div className='lg:mb-24'>
                        <div className='grid lg:grid-cols-3 gap-8 lg:gap-14 mb-16'>
                            <div className='flex flex-col gap-6'>
                                <Link href='/contact' className='footer-link'><h3>Contact Us</h3></Link>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <Link href='/about' className='footer-link'><h3>About Us</h3></Link>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <Link href='/clients' className='footer-link'><h3>Our Clients</h3></Link>
                            </div>
                            {/* <div className='flex flex-col gap-6'>
                                <h3>Solutions</h3>
                                <Link href='/services/network-solutions' className='footer-link'><p>Network Infrastructure Solutions</p></Link>
                                <Link href='/services/wifi-solutions' className='footer-link'><p>Wi-Fi Solutions</p></Link>
                                <Link href='/services/iptv-solutions' className='footer-link'><p>IPTV Solutions</p></Link>
                                <Link href='/services/firewall-solutions' className='footer-link'><p>Firewall Solutions</p></Link>
                                <Link href='/services/pabx-systems' className='footer-link'><p>PABX Solutions</p></Link>
                                <Link href='/services/sdwan-solutions' className='footer-link'><p>SD-WAN Solutions</p></Link>
                                <Link href='/services/cctv-solutions' className='footer-link'><p>CCTV Camera Solutions</p></Link>
                                <Link href='/services/fiber-solutions' className='footer-link'><p>Fiber Optic Solutions</p></Link>
                                <Link href='/services/pa-solutions' className='footer-link'><p>PA Systems</p></Link>
                                <Link href='/services/security-solutions' className='footer-link'><p>Security Access Solutions Systems</p></Link>
                            </div> */}
                        </div>
                        <h1 className='border border-t-0 border-x-0 border-b-[#E0EAFF]'>Get In <span>Touch</span></h1>
                        <div className='flex justify-between flex-col lg:flex-row items-start gap-8'>
                            <div className='flex flex-col gap-4 pt-7'>
                                <a href="mailto:info@sanit.lk" className='footer-link'><p>info@sanit.lk</p></a>
                                <a href="tel:+94112772222" className='footer-link'><p>+94112 224 422 / +94112 772 222</p></a>
                                <address className='footer-link not-italic'><p>No: 32/2A, Udumulla Road, Battaramulla, Sri Lanka.</p></address>
                            </div>
                            <SocialIcons className='mt-4' data={companySocialMediaLinks} />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-4 flex-wrap flex-col-reverse text-center lg:flex-row lg:text-left lg:flex-nowrap'>
                    <p className='text-sm text-[#677187]'>Copyright Sanit Invention Private Limited. All Rights Reserved.</p>
                    <Link href="/" className='footer-link'><p className='underline'>Terms & Conditions</p></Link>
                    <Link href="/" className='footer-link'><p className='underline'>Privacy Policy</p></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer