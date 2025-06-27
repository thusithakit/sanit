import Card from '@/components/Card'
import { BsFillEyeFill,BsFillRocketTakeoffFill } from 'react-icons/bs';


const page = () => {
    return (
        <div className="lg:pt-20 pt-12 bg-gradient-to-b from-[#F0F5FD] to-10%-white">
            <div className="container">
                <div className="grid lg:grid-cols-2 pb-[60px] lg:py-[156px] border border-x-0 border-t-0 border-b-[#E0EAFF] lg:gap-8 gap-5">
                    <h1 className='lg:w-[544px]'>Company <span>Overview</span></h1>
                    <div className='lg:w-[544px] text-[16px] lg:text-[18px]'>
                        <p className='mb-5 text-[#677187]'>
                            &quot;At Sanit, we believe a true &apos;solution&apos; goes beyond a product or service, it&apos;s built on, quality, innovation, and impact. Since 2010, our team has grown from just three (03) to over 70 dedicated professionals, all united by a shared vision and unwavering core values.
                        </p>
                        <p className='mb-5 text-[#677187]'>
                            Over 16 years, we&apos;ve consistently helped clients to grow by delivering forward thinking and reliable solutions. Our commitment has earned us recognition, awards, and most importantly the trust of those we serve.
                        </p>
                        <p className='text-[#677187]'>
                            Trust remains as our greatest strength.&quot;
                        </p>
                    </div>
                </div>
                <div className='lg:py-36 py-10 border border-x-0 border-t-0 border-b-[#E0EAFF]'>
                    <h1 className='lg:mb-20 mb-10'>Our <span>Vision</span> and <span>Mission</span></h1>
                    <div className="grid lg:grid-cols-2 lg:gap-8 gap-4">
                        <Card className='bg-white border border-[#E5EDFF] pb-[41px]' cardTitle='Our Vision' icon={<BsFillEyeFill size={65}/>} cardContent='To provide businesses with seamless and secure networking and communication solutions, ensuring efficiency and reliability in an ever-evolving digital landscape.' />
                        <Card className='bg-white border border-[#E5EDFF] pb-[41px]' cardTitle='Our Mission' icon={<BsFillRocketTakeoffFill size={65}/>} cardContent='To be the leading IT solutions provider in Sri Lanka, revolutionizing business communication and security with cutting-edge technology.' />
                    </div>
                </div>
                <div className='lg:py-44 py-10 border border-x-0 border-t-0 border-b-[#E0EAFF]'>
                    <div className='grid lg:grid-cols-2 lg:gap-8 lg:mb-[86px] gap-4 mb-[50px]'>
                        <h1 className='lg:text-[52px] text-[40px]'><span>Our</span> Belief</h1>
                        <div className='lg:w-[544px] text-[20px] lg:text-2xl text-[#677187]'>
                            <p className='lg:mb-7 mb-4'>
                                Quality is not just a standard; it&apos;s a principle we lived by. That&apos;s why we never compromise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page