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
                    cardDescription: "Integrated Booking & Channel Manager",
                },
                {
                    cardDescription: "AI-Powered Customer Service Platforms (e.g., GPT-integrated chatbots)",
                },
                {
                    cardDescription: "Digital Health & Telemedicine Platforms",
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