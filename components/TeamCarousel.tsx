"use client"
import TeamMemberCard from '@/components/TeamMemberCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { teamMembersDetails } from '@/utils/data'
import Autoplay from "embla-carousel-autoplay"

const TeamCarousel = () => {
    return (
        <Carousel
            opts={{
                align: "center",
                loop: true,
            }}
            plugins={[
                Autoplay(
                    { delay: 2000, stopOnMouseEnter: true }
                ),
            ]}
            className="w-full"
        >
            <CarouselContent>
                {teamMembersDetails.map((member, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <TeamMemberCard data={member} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default TeamCarousel