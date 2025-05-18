import CommonHeader from '@/components/CommonHeader'
import ContactUs from '@/components/ContactUs'
import React from 'react'

const page = () => {
    const nextPageDetails = {
        pageDetails: {
            heading: "Next in Line",
            description: "",
            videoUrl: "https://youtube.com/embed/ggWh_2cYkiw?si=lIgfuUGoWB5JgqGZ",
            cardDetails: [
                {
                    cardDescription: "Structured Cabling for seamless data transmission",
                    cardImage: "/services/cabling.webp"
                },
                {
                    cardDescription: "LAN & WAN Setup for high-speed connectivity",
                    cardImage: "/services/lan.webp"
                },
                {
                    cardDescription: "Network Maintenance & Troubleshooting to ensure uninterrupted operations",
                    cardImage: "/services/maintenance.webp"
                }
            ]
        }
    }
    return (
        <div className="pt-24">
            <CommonHeader data={nextPageDetails.pageDetails} />
            <ContactUs />
        </div>
    )
}

export default page