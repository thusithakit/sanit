import { CommonCardProps } from "@/utils/types";
import Image from "next/image"


const CommonHeader = ({ data }: { data: CommonCardProps }) => {
    const { heading, description, videoUrl, cardDetails } = data;
    return (
        <div className="bg-gradient-to-b from-[#F0F5FD] to-90%-white">
            <div className="container">
                <div className="pt-32 flex items-center justify-start gap-4 mb-8">
                    <h2 className="text-[#92ABD6] text-[72px] w-xl common-header-title">{heading}</h2>
                    <p className="text-[#323E59] text-2xl w-[544px]">{description}</p>
                </div>
                {videoUrl && <iframe src={videoUrl} allowFullScreen width={1120} height={600} className="border border-[#E5EDFF]" />}
                <div className="grid auto-grid">
                    {cardDetails && cardDetails.map((card, i) => (
                        <div key={i} className="border border-[#E5EDFF] rounded-sm px-6 pt-6 pb-8 bg-white">
                            {card.cardImage && (
                                <Image src={card.cardImage} alt={heading} width={315} height={300} className="object-cover mb-3" />
                            )}
                            {card.cardTitle && <h3 className="text-[#323E59] text-[28px] mb-2.5">{card.cardTitle}</h3>}
                            <p className="text-2xl text-[#323E59]">{card.cardDescription}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CommonHeader