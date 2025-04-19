import Card from '@/components/Card'
import TeamCarousel from '@/components/TeamCarousel'



const page = () => {
    return (
        <div className="pt-24 bg-gradient-to-b from-[#F0F5FD] to-10%-white">
            <div className="container">
                <div className="grid grid-cols-2 py-[156px] border border-x-0 border-t-0 border-b-[#E0EAFF] gap-8">
                    <h1 className='w-[544px]'>Company <span>Overview</span></h1>
                    <div className='w-[544px] text-2xl text-[#748099]'>
                        <p className='mb-7'>
                            Sanit Technologies is a premier provider of networking, telecommunication and security solutions in Sri Lanka.
                        </p>
                        <p>
                            With a team of industry experts and years of experience, we deliver innovative IT infrastructure solutions that enhance connectivity, security and efficiency for business across various industries.
                        </p>
                    </div>
                </div>
                <div className='py-36 border border-x-0 border-t-0 border-b-[#E0EAFF]'>
                    <h1 className='mb-20'>Our <span>Vision</span> and <span>Mission</span></h1>
                    <div className="grid grid-cols-2 gap-8">
                        <Card className='bg-white border border-[#E5EDFF] pb-[41px]' cardTitle='Our Vision' cardContent='To provide businesses with seamless and secure networking and communication solutions, ensuring efficiency and reliability in an ever-evolving digital landscape.' />
                        <Card className='bg-white border border-[#E5EDFF] pb-[41px]' cardTitle='Our Mission' cardContent='To be the leading IT solutions provider in Sri Lanka, revolutionizing business communication and security with cutting-edge technology.' />
                    </div>
                </div>
                <div className='py-44 border border-x-0 border-t-0 border-b-[#E0EAFF]'>
                    <div className='grid grid-cols-2 gap-8 mb-[86px]'>
                        <h1 className='text-[52px]'><span>Meet the Experts</span> Behind Sanit Technologies</h1>
                        <div className='w-[544px] text-2xl text-[#748099]'>
                            <p className='mb-7'>
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