import Image from "next/image"
import { Card } from "./ui/card"
import { TeamMemberDetails } from "@/utils/types";
import SocialIcons from "./SocialIcons";

const TeamMemberCard = ({ data }: { data: TeamMemberDetails }) => {
    return (
        <Card className="rounded-sm border border-[#E5EDFF] p-0">
            <Image src={data.profileImage || "/branch_background.png"} alt={`picture of ${data.name}`} width={288} height={300} className="object-cover w-full" />
            <div className="p-8 pt-3">
                <h2 className="text-2xl mb-1.5">{data.name}</h2>
                <p className="text-[#748099] mb-5">{data.position}</p>
                <div className="w-fit">
                    <SocialIcons data={data.contact} />
                </div>
            </div>
        </Card>
    )
}

export default TeamMemberCard