"use client"
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import expert from '@/public/team-of-experts.webp'
import cost from '@/public/cost-effectiveness.webp'
import support from '@/public/support.webp'
import shake from '@/public/shake.webp'
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
                    { delay: 3500, stopOnInteraction: false,stopOnMouseEnter: true }
                ),
            ]}
            orientation="vertical"
        >
            <CarouselContent className="h-[500px] lg:h-[590px]">
                <CarouselItem>
                    <Card className='w-full lg:w-[447px] rounded-none h-full'>
                        <CardContent>
                            <Image src={cost} alt='Team of Experts' className='mb-[27px] lg:mb-10 lg:w-full' />
                            <h2 className='text-[#323E59] text-[20px] lg:text-[28px] mb-2.5'>Speed & Agility</h2>
                            <p className='lg:text-[18px] text-[#677187]'>
                                One-minute costs millions, efficiency matters, thus we are agile on what we do
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className='w-full lg:w-[447px] rounded-none h-full'>
                        <CardContent>
                            <Image src={support} alt='Team of Experts' className='mb-[27px] lg:mb-10 lg:w-full' />
                            <h2 className='text-[#323E59] text-[20px] lg:text-[28px] mb-2.5'>Adoptive Technology and Bespoke Solutions</h2>
                            <p className='lg:text-[18px] text-[#677187]'>
                                Our solutions remain best for the want, why we trust our bespoke solution
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className='w-full lg:w-[447px] rounded-none h-full'>
                        <CardContent>
                            <Image src={expert} alt='Team of Experts' className='mb-[27px] lg:mb-10 lg:w-full' />
                            <h2 className='text-[#323E59] text-[20px] lg:text-[28px] mb-2.5'>Brand Trust and Customer Loyalty</h2>
                            <p className='lg:text-[18px] text-[#677187]'>
                                Our long-standing commitment to excellence and reliable service have fostered enduring client loyalty.
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className='w-full lg:w-[447px] rounded-none h-full'>
                        <CardContent>
                            <Image src={shake} alt='Team of Experts' className='mb-[27px] lg:mb-10 lg:w-full' />
                            <h2 className='text-[#323E59] text-[20px] lg:text-[28px] mb-2.5'>Exceptional Talent. Result Driven Culture.</h2>
                            <p className='lg:text-[18px] text-[#677187]'>
                                Our strength is our exceptional talent and our belief is our result driven culture
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
            </CarouselContent>
        </Carousel>

    )
}

export default CarouselCard