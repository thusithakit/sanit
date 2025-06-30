import LearnMoreCard from "./LearnMoreCard"
import { BsWifi,BsPciCardNetwork, BsTv } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";
import { MdHub } from "react-icons/md";
import { AiOutlineSecurityScan } from "react-icons/ai";
const DigitalSolutionsSection = () => {
    return (
        <section className="bg-linear-to-t from-white from-50% to-[#F0F5FD] py-10 lg:py-[85px]">
            <div className="container">
                <h1 className="lg:w-[550px] lg:mb-[40px] mb-7">Building Better <span>Solutions</span></h1>
                <div className="grid lg:grid-cols-2">
                    <LearnMoreCard cardTitle="Network Infrastructure Solutions" cardContent="Enable communication and connectivity within your organization ensuring secure, reliable, and efficient data transmission, scalability, and high availability for users and devices across the network." href="/services/network-solutions" className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-t-0 lg:border-l-0 hover:bg-[#4e5d80]" itemClass="group-hover:text-[#4e5d80]" icon={<BsPciCardNetwork size={65} />} />
                    <LearnMoreCard cardTitle="Wi-Fi Solutions" cardContent="Wireless internet connectivity enabling seamless and reliable internet access ensuring strong signal coverage, security, and easy network management." href="/services/wifi-solutions" className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-t-0 lg:border-r-0" icon={<BsWifi size={65} />} />
                    <LearnMoreCard cardTitle="IPTV Solutions" cardContent="Delivering television contents over IP networks, providing users with on-demand and live streaming services. Set-top boxes, streaming servers, and software manage and deliver high-quality video content to TVs, computers, and mobile devices." href="/services/iptv-solutions" className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-l-0" icon={<BsTv size={65} />} />
                    <LearnMoreCard cardTitle="Firewall Solutions" cardContent="Protect networks against modern cyber threats using combine advanced security features such as deep packet inspection, intrusion prevention, and application controls." href="/services/firewall-solutions" className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-r-0 hover:bg-[#4e5d80]" itemClass="group-hover:text-[#4e5d80]" icon={<AiOutlineSecurityScan size={65} />} />
                    <LearnMoreCard cardTitle="PABX Solutions" cardContent="Manage internal and external calls within an organization by connecting multiple phone lines, route calls, provide extensions, and enable features such as call forwarding, voicemail, and conference calling." href="/services/pabx-systems" className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-t-0 lg:border-l-0 hover:bg-[#4e5d80] lg:border-b-0" itemClass="group-hover:text-[#4e5d80]" icon={<MdHub size={65} />} />
                    <LearnMoreCard cardTitle="SD-WAN Solutions" cardContent="Uses software to optimize, route and control traffic across multiple internet base connections, improving performance, security, and reducing costs." href="/services/sdwan-solutions" className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-t-0 lg:border-r-0 lg:border-b-0" icon={<BiNetworkChart size={65} />} />
                </div>
            </div>
        </section>
    )
}

export default DigitalSolutionsSection