import ClientCarousel from "@/components/ClientCarousel"
import ClientDetailsCard from "@/components/ClientDetailsCard"
import { clientsDetails } from "@/utils/data"

const page = () => {
  return (
    <>
        <div className=" bg-gradient-to-b from-[#F0F5FD] to-10%-white lg:pt-20 pt-12">
            <div className="container">
            <div className="grid lg:grid-cols-2 pb-[30px] lg:py-[156px] border border-x-0 border-t-0 border-b-[#E0EAFF] lg:gap-8 gap-5">
                    <h1 className='lg:w-[544px]'>Brands That <span>Trust Us</span></h1>
                    <div className='lg:w-[544px] text-[16px] lg:text-[18px]'>
                        <p className='mb-5 text-[#677187]'>
                            We&apos;re proud to be the trusted technology partner for a diverse range of clients across industries.
                        </p>
                        <p className='text-[#677187]'>
                            From leading enterprises to dynamic startups, our clients rely on us to deliver secure, scalable, and innovative solutions that drive real results.
                        </p>
                    </div>
            </div>
        </div>
        </div>
        <div className="container no-pt">
            <ClientCarousel/>
            <div className="grid lg:grid-cols-2 pb-[30px] lg:py-[80px] lg:gap-8 gap-5">
                    <h1 className='lg:w-[544px]'>Real <span>Projects,</span> Real <span>Results</span></h1>
                    <div className='lg:w-[544px] text-[16px] lg:text-[18px]'>
                        <p className='mb-5 text-[#677187]'>
                            We take pride in turning challenges into success stories. Each project we undertake is a reflection of our commitment to quality, innovation, and client satisfaction.
                        </p>
                        <p className='text-[#677187]'>
                            Explore how our tailored IT solutions have delivered measurable impact across industries from seamless connectivity to secure infrastructure.
                        </p>
                    </div>
            </div>
            {clientsDetails && (
                <div className="py-8 lg:py-[40px] border border-x-0 border-t-0 border-b-[#E0EAFF]">
                {clientsDetails.map((client,i)=>(
                    <ClientDetailsCard key={i} clientDetails={client} index={i+1}/>
                ))}
            </div>
            )}
        </div>
    </>
  )
}

export default page
