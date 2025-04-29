import Image from "next/image"
import { Card } from "./ui/card"
import { TeamMemberDetails } from "@/utils/types";
import SocialIcons from "./SocialIcons";

const TeamMemberCard = ({ data }: { data: TeamMemberDetails }) => {
    return (
        <Card className="rounded-sm border border-[#E5EDFF] p-0">
            <Image src={data.profileImage || "/branch_background.webp"} alt={`picture of ${data.name}`} width={352} height={338} className="object-cover w-full mask-b-from-60% border border-b-white" />
            <div className="lg:p-8 p-5 pt-2 lg:pt-3">
                <h2 className="lg:text-2xl text-[20px] mb-1.5">{data.name}</h2>
                <p className="text-[#677187] text-sm lg:text-[16px] mb-5">{data.position}</p>
                <div className="w-fit">
                    <SocialIcons data={data.contact} />
                </div>
            </div>
        </Card>
    )
}

export default TeamMemberCard