import ContactForm from '@/components/ContactForm'
import SecondaryButton from '@/components/SecondaryButton';
import { branchDetails } from '@/utils/data'
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


const page = () => {
    return (
        <div className="pt-24 bg-gradient-to-b from-[#F0F5FD] to-10%-white">
            <div className="container">
                <div className='flex gap-8 flex-wrap pb-28'>
                    <div className='flex-1 w-[544px]'>
                        <h1 className='mb-36'>Get In Touch <span>with us!</span></h1>
                        <p className='text-[24px] mb-4 w-sm'>Contact us today and let’s discuss how we can help your business</p>
                        <div className='text-[18px] pb-7 border border-[#E0EAFF] border-x-0 border-t-0 mb-5'>
                            <p className='mb-4'>Email:&nbsp;info@sanit.lk</p>
                            <p className='mb-4'>Phone:&nbsp;+94 11 2 772 222</p>
                            <p>FAX:&nbsp;+94 11 2 772 222</p>
                        </div>
                        <div>
                            <h2 className='text-2xl mb-6'>Our Branches:</h2>
                            <div className='flex flex-wrap gap-4'>
                                {branchDetails.map((branch, i) => (
                                    <SecondaryButton key={i}>
                                        <Link href={`/contact/#${branch.branchName.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-")}`}>
                                            {branch.branchName.replace('SANIT Inventions ', '')}
                                            <MoveRight size={16} />
                                        </Link>
                                    </SecondaryButton>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 w-[544px] bg-white border border-[#E5EDFF] rounded-sm pt-14 pb-16 px-8'>
                        <h2 className='text-[32px] mb-4'>Online Inquiry</h2>
                        <p className='text-[20px] text-[#748099] mb-[88px]'>
                            Please feel free to get in touch at any time.<br />
                            We look forward to supporting you.
                        </p>
                        <ContactForm />
                    </div>
                </div>
                <div>
                    <h2 className='text-[32px] mb-[88px] text-center'>Our Branches close to you!</h2>
                    <div className='grid gap-8'>
                        {branchDetails.map((branch, i) => (
                            <div key={i} id={branch.branchName.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-")} className='flex gap-8'>
                                <Image src={branch.branchPhoto || "/branch_background.png"} alt={`This is a picture of ${branch.branchName}`} width={544} height={600} className='object-cover min-w-[544px]' />
                                <div className='mx-8 py-8 ml-0 border border-x-0 border-t-0 border-b-[#E0EAFF]'>
                                    <h3 className='text-[52px] text-[#92ABD6] mb-7'>SANIT Inventions <br />{branch.branchName.split("SANIT Inventions ")[1]}</h3>
                                    <div className='grid grid-cols-2 gap-7 text-xl mb-10'>
                                        <p>{branch.branchAddress}</p>
                                        <div>
                                            {branch.branchEmail && <p className='mb-3.5'>Email: {branch.branchEmail}</p>}
                                            {branch.branchPhone && <p>Phone: {branch.branchPhone}</p>}
                                        </div>
                                    </div>
                                    {branch.branchMapUrl && (
                                        <Link href={branch.branchMapUrl} target='_blank' className='border border-[#E0EAFF] rounded-full px-6 py-4 font-[600] flex gap-2 w-fit items-center hover:bg-white animate-bounce direction-alternate duration-300 hover:animate-none transition-all'>
                                            Get Directions
                                            <MoveRight size={16} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page