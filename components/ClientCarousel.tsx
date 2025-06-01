"use client"
import { clientLogos } from "@/utils/data"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const ClientCarousel = () => {
  return (
    <div className="lg:mb-20">
        <p className="text-center lg:mb-12 mb-5 text-[#748099] text-[12px]">SOFTWARE BUILT FOR AND TRUSTED BY 250+ BRANDS</p>
        <div className="grid-cols-5 relative hidden lg:grid">
            {clientLogos.map((logo,index)=>(
                <div key={index} className="grid place-items-center py-15 px-10 border border-[#e0eaff60]">
                    <Image width={100} height={100} src={logo} alt={`Client Logo ${index + 1}`} />
                </div>
            ))}
            <span className="absolute w-full h-full border border-white"></span>
        </div>
        <Carousel
            opts={{
                align: "center",
                loop: true,
            }}
            plugins={[
                Autoplay(
                    { delay: 1000, stopOnInteraction: false,stopOnMouseEnter: true }
                ),
            ]}
            className="lg:hidden pb-10"
            orientation="horizontal"
        >
            <CarouselContent className="h-[100px]">
                    {clientLogos.map((logo, index) => (
                        <CarouselItem key={index} className="md:basis-1/5 basis-1/3">
                            <Image width={100} height={100} src={logo} alt={`Client Logo ${index + 1}`} />
                        </CarouselItem>
                    ))}
            </CarouselContent>
        </Carousel>
    </div>
  )
}

export default ClientCarousel
