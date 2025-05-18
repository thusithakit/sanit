import LearnMoreCard from "./LearnMoreCard"
import { BsPciCardNetwork, BsHeadset, BsBroadcastPin, BsShieldLockFill } from "react-icons/bs";

const DigitalProductsSection = () => {
    return (
        <section className="bg-linear-to-t from-white from-50% to-[#F0F5FD] py-14 lg:py-[185px]">
            <div className="container">
                <h1 className="lg:w-[550px] lg:mb-[76px] mb-7">Building Better <span>Digital Products</span></h1>
                <div className="grid lg:grid-cols-2">
                    <LearnMoreCard cardTitle="Network Equipment" cardContent="Enhance your IT infrastructure with our range of networking hardware." href="/products/network-equipment" icon={<BsPciCardNetwork size={65} />} className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-t-0 lg:border-l-0 hover:bg-[#4e5d80]" itemClass="group-hover:text-[#4e5d80]" />
                    <LearnMoreCard cardTitle="Communication Devices" cardContent="Upgrade your office communication with our reliable telephony devices." href="/products/communication-devices" icon={<BsHeadset size={65} />} className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-t-0 lg:border-r-0" />
                    <LearnMoreCard cardTitle="Wireless Solutions" cardContent="Boost your wireless coverage with top-quality Wi-Fi devices." href="/products/wireless-solutions" icon={<BsBroadcastPin size={65} />} className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-b-0 lg:border-l-0" />
                    <LearnMoreCard cardTitle="Security Appliances" cardContent="Protect your digital assets with our advanced security solutions." href="/products/security-appliances" icon={<BsShieldLockFill size={65} />} className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-b-0 lg:border-r-0 hover:bg-[#4e5d80]" itemClass="group-hover:text-[#4e5d80]" />
                </div>
            </div>
        </section>
    )
}

export default DigitalProductsSection