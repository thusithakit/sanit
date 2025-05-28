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
                    { delay: 3500, stopOnInteraction: false,stopOnMouseEnter: true }
                ),
            ]}
            orientation="vertical"
        >
            <CarouselContent className="h-[500px] lg:h-[590px]">
                <CarouselItem>
                    <Card className='w-full lg:w-[447px] rounded-none h-full'>
                        <CardContent>
                            <Image src={expert} alt='Team of Experts' className='mb-[27px] lg:mb-10 lg:w-full' />
                            <h2 className='text-[#323E59] text-[20px] lg:text-[28px] mb-2.5'>Tailored Tech, Customer-First</h2>
                            <p className='lg:text-[18px] text-[#677187]'>
                                Deliver customer-centric solutions through expert system integration and the future ready technology.
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className='w-full lg:w-[447px] rounded-none h-full'>
                        <CardContent>
                            <Image src={cost} alt='Team of Experts' className='mb-[27px] lg:mb-10 lg:w-full' />
                            <h2 className='text-[#323E59] text-[20px] lg:text-[28px] mb-2.5'>Speed & Agility</h2>
                            <p className='lg:text-[18px] text-[#677187]'>
                                Efficiency that saves you time and budget - without compromising quality.
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className='w-full lg:w-[447px] rounded-none h-full'>
                        <CardContent>
                            <Image src={support} alt='Team of Experts' className='mb-[27px] lg:mb-10 lg:w-full' />
                            <h2 className='text-[#323E59] text-[20px] lg:text-[28px] mb-2.5'>Scalability & Seamless Integration</h2>
                            <p className='lg:text-[18px] text-[#677187]'>
                                We go beyond setup offering expert support to keep your systems optimized and always on.
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className='w-full lg:w-[447px] rounded-none h-full'>
                        <CardContent>
                            <Image src={expert} alt='Team of Experts' className='mb-[27px] lg:mb-10 lg:w-full' />
                            <h2 className='text-[#323E59] text-[20px] lg:text-[28px] mb-2.5'>Brand Trust, Backed by Expertise</h2>
                            <p className='lg:text-[18px] text-[#677187]'>
                                With years of experience and a track record of success, our team has built strong client trust through reliable, expert-driven solutions.
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className='w-full lg:w-[447px] rounded-none h-full'>
                        <CardContent>
                            <Image src={cost} alt='Team of Experts' className='mb-[27px] lg:mb-10 lg:w-full' />
                            <h2 className='text-[#323E59] text-[20px] lg:text-[28px] mb-2.5'>Exceptional Talent. Results-Driven Culture.</h2>
                            <p className='lg:text-[18px] text-[#677187]'>
                                Powered by top talent and a culture of efficiency, we help you achieve more—on time and on budget.
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
            </CarouselContent>
        </Carousel>

    )
}

export default CarouselCard