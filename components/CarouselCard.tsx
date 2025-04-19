import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'

const CarouselCard = () => {
    return (
        <Carousel
            opts={{
                align: 'start',
                loop: true,
            }}
            orientation="vertical"
        >
            <CarouselContent className="-mt-1 h-[510px]">
                <CarouselItem>
                    <Card className='w-[447px] rounded-none'>
                        <CardContent>
                            <Image src="/team-of-experts.png" alt='Team of Experts' width={445} height={261} className='mb-10' />
                            <h2 className='text-[#323E59] text-[28px] mb-2.5'>Experienced Team of Experts</h2>
                            <p className='text-[18px] text-[#748099]'>
                                Our team comprises seasoned professionals with extensive expertise in system integration and a deep understanding of the latest technologies.
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className='w-[447px] rounded-none'>
                        <CardContent>
                            <Image src="/team-of-experts.png" alt='Team of Experts' width={445} height={261} className='mb-10' />
                            <h2 className='text-[#323E59] text-[28px] mb-2.5'>Experienced Team of Experts</h2>
                            <p className='text-[18px] text-[#748099]'>
                                Our team comprises seasoned professionals with extensive expertise in system integration and a deep understanding of the latest technologies.
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className='w-[447px] rounded-none'>
                        <CardContent>
                            <Image src="/team-of-experts.png" alt='Team of Experts' width={445} height={261} className='mb-10' />
                            <h2 className='text-[#323E59] text-[28px] mb-2.5'>Experienced Team of Experts</h2>
                            <p className='text-[18px] text-[#748099]'>
                                Our team comprises seasoned professionals with extensive expertise in system integration and a deep understanding of the latest technologies.
                            </p>
                        </CardContent>
                    </Card>
                </CarouselItem>
            </CarouselContent>
        </Carousel>

    )
}

export default CarouselCard