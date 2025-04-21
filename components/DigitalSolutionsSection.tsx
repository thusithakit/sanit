import LearnMoreCard from "./LearnMoreCard"

const DigitalSolutionsSection = () => {
    return (
        <section className="bg-linear-to-t from-white from-50% to-[#F0F5FD] py-[185px]">
            <div className="container">
                <h1 className="w-[550px] mb-[76px]">Building Better <span>Digital Solutions</span></h1>
                <div className="grid grid-cols-2">
                    <LearnMoreCard cardTitle="Network Solutions" cardContent="We offer end-to-end network infrastructure solutions to keep your business connected at all times." href="/learn" className="border border-[#E0EAFF] border-t-0 border-l-0" />
                    <LearnMoreCard cardTitle="PAX Systems" cardContent="Our Private Automatic Branch Exchange (PABX) Systems help businesses enhance communication." href="/learn" className="border border-[#E0EAFF] border-t-0 border-r-0" />
                    <LearnMoreCard cardTitle="Wi-Fi Solutions" cardContent="We provide customized wireless networking solutions to improve coverage, speed and security for businesses and public spaces." href="/learn" className="border border-[#E0EAFF] border-b-0 border-l-0" />
                    <LearnMoreCard cardTitle="Firewall Solutions" cardContent="Protect your business from cyber threats with next-generation firewall security solutions." href="/learn" className="border border-[#E0EAFF] border-b-0 border-r-0" />
                </div>
            </div>
        </section>
    )
}

export default DigitalSolutionsSection