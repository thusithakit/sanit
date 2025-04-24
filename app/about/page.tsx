import Card from '@/components/Card'
import dynamic from 'next/dynamic'

const TeamCarousel = dynamic(() => import('@/components/TeamCarousel'));

const page = () => {
    return (
        <div className="lg:pt-24 pt-12 bg-gradient-to-b from-[#F0F5FD] to-10%-white">
            <div className="container">
                <div className="grid lg:grid-cols-2 pb-[60px] lg:py-[156px] border border-x-0 border-t-0 border-b-[#E0EAFF] lg:gap-8 gap-5">
                    <h1 className='lg:w-[544px]'>Company <span>Overview</span></h1>
                    <div className='lg:w-[544px] text-[20px] lg:text-2xl'>
                        <p className='mb-7 text-[#748099]'>
                            Sanit Technologies is a premier provider of networking, telecommunication and security solutions in Sri Lanka.
                        </p>
                        <p className='text-[#748099]'>
                            With a team of industry experts and years of experience, we deliver innovative IT infrastructure solutions that enhance connectivity, security and efficiency for business across various industries.
                        </p>
                    </div>
                </div>
                <div className='lg:py-36 py-10 border border-x-0 border-t-0 border-b-[#E0EAFF]'>
                    <h1 className='lg:mb-20 mb-10'>Our <span>Vision</span> and <span>Mission</span></h1>
                    <div className="grid lg:grid-cols-2 lg:gap-8 gap-4">
                        <Card className='bg-white border border-[#E5EDFF] pb-[41px]' cardTitle='Our Vision' cardContent='To provide businesses with seamless and secure networking and communication solutions, ensuring efficiency and reliability in an ever-evolving digital landscape.' />
                        <Card className='bg-white border border-[#E5EDFF] pb-[41px]' cardTitle='Our Mission' cardContent='To be the leading IT solutions provider in Sri Lanka, revolutionizing business communication and security with cutting-edge technology.' />
                    </div>
                </div>
                <div className='lg:py-44 py-10 border border-x-0 border-t-0 border-b-[#E0EAFF]'>
                    <div className='grid lg:grid-cols-2 lg:gap-8 lg:mb-[86px] gap-4 mb-[50px]'>
                        <h1 className='lg:text-[52px] text-[40px]'><span>Meet the Experts</span> Behind Sanit Technologies</h1>
                        <div className='lg:w-[544px] text-[20px] lg:text-2xl text-[#748099]'>
                            <p className='lg:mb-7 mb-4'>
                                Our team of network engineers, IT security specialists and communication experts is dedicated to delivering high-quality services and support.
                            </p>
                            <p>
                                We value innovation, reliability and customer satisfaction, ensuring that our solutions align perfectly with your business needs.
                            </p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <TeamCarousel />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page