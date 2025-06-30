import LearnMoreCard from "./LearnMoreCard"
import { PiPlugsConnected } from "react-icons/pi";
import { BsChatLeftQuote } from "react-icons/bs";

const DigitalProductsSection = () => {
    return (
        <section className="bg-linear-to-t from-white from-50% to-[#F0F5FD] py-14 lg:py-[85px]">
            <div className="container">
                <h1 className="lg:w-[550px] lg:mb-[40px] mb-7">Next in <span>Line</span></h1>
                <div className="grid lg:grid-cols-2">
                    <LearnMoreCard cardTitle="Integrated Booking & Channel Manager" cardContent="" icon={<PiPlugsConnected size={65} />} className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-t-0 lg:border-b-0 lg:border-l-0 hover:bg-[#4e5d80]" itemClass="group-hover:text-[#4e5d80]" />
                    <LearnMoreCard cardTitle="AI-Powered Customer Service Platforms" cardContent="(e.g., GPT-integrated chatbots)" icon={<BsChatLeftQuote size={65} />} className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-t-0 lg:border-b-0 lg:border-r-0" />
                </div>
            </div>
        </section>
    )
}

export default DigitalProductsSection