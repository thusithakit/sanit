import { CommonCardProps } from "@/utils/types";
import Image from "next/image"


const CommonHeader = ({ data }: { data: CommonCardProps }) => {
    const { heading, description, cardDetails } = data;
    return (
        <div className="bg-gradient-to-b from-[#F0F5FD] to-90%-white">
            <div className="container">
                <div className="lg:pt-32 flex items-center justify-start lg:gap-4 lg:mb-8 pt-2 flex-col lg:flex-row gap-7 mb-5">
                    <h2 className="text-[#92ABD6] lg:text-[65px] lg:w-xl common-header-title text-[52px]">{heading}</h2>
                    <p className="text-[#323E59] lg:text-2xl lg:w-[544px] text-[20px]">{description}</p>
                </div>
                <div className="grid auto-grid">
                    {cardDetails && cardDetails.map((card, i) => (
                        <div key={i} className="border border-[#E5EDFF] rounded-sm px-6 pt-6 pb-8 bg-white">
                            {card.cardImage && (
                                <Image src={card.cardImage} alt={heading} width={315} height={300} className="object-cover mb-3 w-full" />
                            )}
                            {card.cardTitle && <h3 className="text-[#323E59] lg:text-[28px] mb-2.5 text-2xl">{card.cardTitle}</h3>}
                            <p className="lg:text-[18px] text-[#323E59] text-[16px]">{card.cardDescription}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CommonHeader