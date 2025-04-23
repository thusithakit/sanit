import Link from 'next/link'
import React from 'react'
import SocialIcons from './SocialIcons'
import { companySocialMediaLinks } from '@/utils/data'

const Footer = () => {
    return (
        <footer className='bg-white'>
            <div className="container py-24">
                <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-start py-10 md:py-0'>
                    <h2>LOGO</h2>
                    <div className='md:mb-24'>
                        <div className='grid md:grid-cols-3 gap-8 md:gap-14 mb-16'>
                            <div className='flex flex-col gap-6'>
                                <Link href='/contact' className='footer-link'><h3>Contact Us</h3></Link>
                                <Link href='/about' className='footer-link'><h3>About Us</h3></Link>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h3>Services</h3>
                                <Link href='/services/network' className='footer-link'><p>Network Solutions</p></Link>
                                <Link href='/services/network' className='footer-link'><p>PAX Systems</p></Link>
                                <Link href='/services/network' className='footer-link'><p>Wi-Fi Solutions</p></Link>
                                <Link href='/services/network' className='footer-link'><p>Firewall Solutions</p></Link>
                            </div>
                            <div className="flex flex-col gap-6">
                                <h3>Products</h3>
                                <Link href='/products/network' className='footer-link'><p>Network Equipment</p></Link>
                                <Link href='/products/network' className='footer-link'><p>Communication Devices</p></Link>
                                <Link href='/products/network' className='footer-link'><p>Wireless Solutions</p></Link>
                                <Link href='/products/network' className='footer-link'><p>Security Appliances</p></Link>
                            </div>
                        </div>
                        <h1 className='border border-t-0 border-x-0 border-b-[#E0EAFF]'>Get In <span>Touch</span></h1>
                        <div className='flex justify-between flex-col md:flex-row items-start gap-8'>
                            <div className='flex flex-col gap-4 pt-7'>
                                <a href="mailto:info@sanit.lk" className='footer-link'><p>info@sanit.lk</p></a>
                                <a href="tel:+94112772222" className='footer-link'><p>+94 11 2 772 222</p></a>
                                <address className='footer-link not-italic'><p>No: 32/2A, Udumulla Road, Battaramulla, Sri Lanka.</p></address>
                            </div>
                            <SocialIcons className='mt-4' data={companySocialMediaLinks} />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-4 flex-wrap flex-col-reverse text-center md:flex-row md:text-left md:flex-nowrap'>
                    <p className='text-sm text-[#748099]'>Copyright Sanit Invention Private Limited. All Rights Reserved.</p>
                    <Link href="/terms" className='footer-link'><p className='underline'>Terms & Conditions</p></Link>
                    <Link href="/privacy" className='footer-link'><p className='underline'>Privacy Policy</p></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer