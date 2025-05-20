import CommonHeader from '@/components/CommonHeader'
import ContactUs from '@/components/ContactUs'
import React from 'react'

const page = () => {
    const nextPageDetails = {
        pageDetails: {
            heading: "Next in Line",
            description: "Backed by proven expertise and driven by innovation something powerful is launching soon",
            videoUrl: "https://youtube.com/embed/ggWh_2cYkiw?si=lIgfuUGoWB5JgqGZ",
            cardDetails: [
                {
                    cardDescription: "Guest Engagement Platform",
                },
                {
                    cardDescription: "Guest Engagement Platform",
                },
                {
                    cardDescription: "Integrated Booking & Channel Manager",
                },
                {
                    cardDescription: "AI-Powered Customer Service Platforms (e.g., GPT-integrated chatbots)",
                },
                {
                    cardDescription: "Smart Manufacturing Platforms / Industrial IoT (IIoT) Systems",
                },
                {
                    cardDescription: "Digital Health & Telemedicine Platforms",
                },
                {
                    cardDescription: "AgriTech Platforms (Precision Farming Software)",
                },
                {
                    cardDescription: "ESG & Sustainability Management Software (Environmental, Social, and Governance)",
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