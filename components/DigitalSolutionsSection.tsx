import LearnMoreCard from "./LearnMoreCard"

const DigitalSolutionsSection = () => {
    return (
        <section className="bg-linear-to-t from-white from-50% to-[#F0F5FD] py-14 lg:py-[185px]">
            <div className="container">
                <h1 className="lg:w-[550px] lg:mb-[76px] mb-7">Building Better <span>Digital Solutions</span></h1>
                <div className="grid lg:grid-cols-2">
                    <LearnMoreCard cardTitle="Network Solutions" cardContent="We offer end-to-end network infrastructure solutions to keep your business connected at all times." href="/learn" className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-t-0 lg:border-l-0" />
                    <LearnMoreCard cardTitle="PAX Systems" cardContent="Our Private Automatic Branch Exchange (PABX) Systems help businesses enhance communication." href="/learn" className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-t-0 lg:border-r-0" />
                    <LearnMoreCard cardTitle="Wi-Fi Solutions" cardContent="We provide customized wireless networking solutions to improve coverage, speed and security for businesses and public spaces." href="/learn" className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-b-0 lg:border-l-0" />
                    <LearnMoreCard cardTitle="Firewall Solutions" cardContent="Protect your business from cyber threats with next-generation firewall security solutions." href="/learn" className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-b-0 lg:border-r-0" />
                </div>
            </div>
        </section>
    )
}

export default DigitalSolutionsSection