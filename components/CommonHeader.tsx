import { CommonCardProps } from "@/utils/types";
import Image from "next/image"


const CommonHeader = ({ data }: { data: CommonCardProps }) => {
    const { heading, description, videoUrl, cardDetails } = data;
    return (
        <div className="bg-gradient-to-b from-[#F0F5FD] to-90%-white">
            <div className="container">
                <div className="md:pt-32 flex items-center justify-start md:gap-4 md:mb-8 pt-2 flex-col md:flex-row gap-7 mb-5">
                    <h2 className="text-[#92ABD6] md:text-[72px] md:w-xl common-header-title text-[52px]">{heading}</h2>
                    <p className="text-[#323E59] md:text-2xl md:w-[544px] text-[20px]">{description}</p>
                </div>
                {videoUrl && <iframe src={videoUrl} allowFullScreen width={1120} height={600} className="border border-[#E5EDFF] w-full h-[300px] md:h-[600px]" />}
                <div className="grid auto-grid">
                    {cardDetails && cardDetails.map((card, i) => (
                        <div key={i} className="border border-[#E5EDFF] rounded-sm px-6 pt-6 pb-8 bg-white">
                            {card.cardImage && (
                                <Image src={card.cardImage} alt={heading} width={315} height={300} className="object-cover mb-3" />
                            )}
                            {card.cardTitle && <h3 className="text-[#323E59] md:text-[28px] mb-2.5 text-2xl">{card.cardTitle}</h3>}
                            <p className="md:text-2xl text-[#323E59] text-[20px]">{card.cardDescription}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CommonHeader