"use client"
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import expert from '@/public/team-of-experts.webp'
import cost from '@/public/cost-effectiveness.webp'
import support from '@/public/support.webp'
import Autoplay from 'embla-carousel-autoplay'

const CarouselCard = () => {
    return (
        <Carousel
            opts={{
                align: "center",
                loop: true,
            }}
            plugins={[
                Autoplay(
                    { delay: 3500, stopOnMouseEnter: true }
                ),
            ]}
            orientation="vertical"
        >
            <CarouselContent className="h-[500px] lg:h-[590px]">
                <CarouselItem>
                    <Card className='w-full lg:w-[447px] rounded-none h-full'>
                        <CardContent>
                            <Image src={expert} alt='Team of Experts' className='mb-[27px] lg:mb-10 lg:w-full' />
                            <h2 className='text-[#323E59] text-[20px] lg:text-[28px] mb-2.5'>Experienced Team of Experts</h2>
                            <p className='lg:text-[18px] text-[#677187]'>
                                Our team comprises seasoned professionals with extensive expertise in system integration and a deep understanding of the latest technologies.
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className='w-full lg:w-[447px] rounded-none h-full'>
                        <CardContent>
                            <Image src={cost} alt='Team of Experts' className='mb-[27px] lg:mb-10 lg:w-full' />
                            <h2 className='text-[#323E59] text-[20px] lg:text-[28px] mb-2.5'>Cost-Effective Solutions</h2>
                            <p className='lg:text-[18px] text-[#677187]'>
                                Our commitment to efficiency extends to your budget. We provide cost-effective solutions without compromising on quality, helping you achieve maximum ROI.
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className='w-full lg:w-[447px] rounded-none h-full'>
                        <CardContent>
                            <Image src={support} alt='Team of Experts' className='mb-[27px] lg:mb-10 lg:w-full' />
                            <h2 className='text-[#323E59] text-[20px] lg:text-[28px] mb-2.5'>Continuous Support and Maintenance</h2>
                            <p className='lg:text-[18px] text-[#677187]'>
                                Beyond implementation, we offer ongoing support and maintenance services to ensure that your systems operate at peak performance, minimizing downtime.
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
            </CarouselContent>
        </Carousel>

    )
}

export default CarouselCard