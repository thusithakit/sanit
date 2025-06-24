import Card from "@/components/Card";
import ParticlesClientWrapper from "@/components/client/ParticlesClientWrapper";
import PrimaryButton from "@/components/PrimaryButton";
import { Badge } from "@/components/ui/badge";
import { companySocialMediaLinks } from "@/utils/data";
import dynamic from "next/dynamic";
import Image from "next/image";
import HeroImg from "@/public/hero.webp";
import { BsFillBuildingsFill, BsDatabaseFillGear, BsFillLightbulbFill } from "react-icons/bs";
import LinkButton from "@/components/LinkButton";

const CarouselCard = dynamic(() => import("@/components/CarouselCard"));
const Numbers = dynamic(() => import("@/components/Numbers"));
const SocialIcons = dynamic(() => import("@/components/SocialIcons"));
const DigitalSolutionsSection = dynamic(() => import('@/components/DigitalSolutionsSection'));
const DigitalProductsSection = dynamic(() => import('@/components/DigitalProductsSection'));


export default function Home() {
  return (
    <>
      <section className="main overflow-hidden relative pt-20 lg:pt-0 lg:mask-b-from-70%">
        <ParticlesClientWrapper className="right-0 top-0 mask-l-from-0% mask-b-from-50% w-full" />
        <div className="container hero flex justify-between lg:h-[880px] lg:w-[1100px] mx-auto w-full h-auto">
          <div className=" flex flex-col justify-center">
            <h1 className="max-w-[544px] lg:mb-5 w-full mb-6">
              Ensure Your <span>Connectivity</span>
            </h1>
            <p className="max-w-[500px] text-[20px] lg:mb-10 lg:text-2xl text-[#677187] mb-4">
              &quot;Integrated Solutions, Trusted Partnership.&quot;
            </p>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 z-10">
              <PrimaryButton href="/services/network-solutions">
                Our Services
              </PrimaryButton>
              <LinkButton href="/about" classes="border border-[#D7E2F5] rounded-full text-[#304E7E] font-[600] text-[18px] lg:rounded-[100px] bg-white hover:bg-[#304E7E] hover:text-white duration-300 flex items-center justify-center py-2 pr-2 pl-8 lg:gap-4">Why SANIT</LinkButton>
            </div>
          </div>
          <Image src={HeroImg} width={544} height={700} alt="Hero Imge" className="hidden lg:block" />
        </div>
      </section>
      <section className="bg-linear-to-t from-white to-[#F0F5FD]">
        <div className="flex flex-col items-center justify-center container lg:gap-8 lg:py-20 gap-5 py-10 lg:flex-row">
          <p className="flex-1/3 text-xl text-[#323E59] lg:pr-12">
            This proves that we are the best at what we do...
          </p>
          <div className="lg:flex lg:gap-6 grid grid-cols-2 lg:flex-2/3 lg:grid-cols-4">
            <Numbers number={16} slug="Years of Experience" className="flex p-2.5 lg:p-0" />
            <Numbers number={20} slug="Technology Partners" className="flex p-2.5 lg:p-0" />
            <Numbers number={250} slug="Finished Projects" className="flex p-2.5 lg:p-0" />
            <Numbers number={200} slug="Delighted Customers" className="flex p-2.5 lg:p-0" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container border border-[#E0EAFF] border-l-0 border-r-0 flex justify-center items-center flex-wrap lg:flex-nowrap w-fit">
          <Card cardTitle="Enterprise Solutions" cardContent="Weather you are SME or Enterprise, Government or BFSI, we have the solution for your IT needs." icon={<BsFillBuildingsFill size={65} />} />
          <Card className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-t-0 lg:border-b-0 hover:bg-[#4e5d80]" cardTitle="Managed Services" cardContent="Agile & Flexible approach to manage your IT infrastructure seamlessly. Discuss with our sales team now." icon={<BsDatabaseFillGear size={65} />} />
          <Card cardTitle="IT Consultancy" cardContent="We have the expertise to help you define a game plan, to overcome any IT related support you required." icon={<BsFillLightbulbFill size={65} />} />
        </div>
      </section>
      <section>
        <div className="container py-16 lg:pt-[150px] lg:pb-[126px] flex flex-col justify-center gap-10 lg:justify-between lg:flex-row items-center lg:gap-24">
          <div>
            <h1 className="lg:mb-5 lg:w-[448px]">Why Sanit <span>Stands Out?</span></h1>
            <p className="text-[#677187] text-[20px] lg:text-2xl lg:w-[410px]">Smooth & Stable integration backed by people who are capable of</p>
          </div>
          <CarouselCard />
        </div>
      </section>
      <DigitalSolutionsSection />
      <DigitalProductsSection />
      <section className="relative bg-linear-to-t from-[#F0F5FD] from-95% to-white lg:pt-16 mask-b-from-70%">
        <ParticlesClientWrapper className="left-0 top-0 mask-r-from-0% z-0" />
        <div className="container no-border flex flex-col-reverse lg:flex-row justify-center lg:justify-start items-center gap-10">
          <Image src="/ensure.webp" alt="Ensure Your Connectivity" width={523} height={554} className="bottom-0 left-0 z-10 block relative" />
          <div className="lg:pb-20">
            <Badge variant="outline" className="text-xs text-[#323E59] font-normal py-2.5 px-4 rounded-[100px]">14+ Years of Experience</Badge>
            <h1 className="lg:w-[560px] mb-2">We&apos;re Just a <span>Message</span> Away!</h1>
            <p className="text-[20px] lg:text-2xl text-[#677187] my-4 lg:mt-5 mb-9">Connect with us</p>
            <PrimaryButton href="/contact" classes="bg-white mb-4 border border-[#D7E2F5] hover:bg-[#304E7E] hover:text-white">
              Contact Us
            </PrimaryButton>
            <div className="flex items-center justify-start lg:gap-2">
              <p className="lg:text-[18px] text-[#677187] mr-1">Follow us:</p>
              <SocialIcons className="bg-white" data={companySocialMediaLinks} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
