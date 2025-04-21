import Card from "@/components/Card";
import ParticlesClientWrapper from "@/components/client/ParticlesClientWrapper";
import PrimaryButton from "@/components/PrimaryButton";
import { Badge } from "@/components/ui/badge";
import { companySocialMediaLinks } from "@/utils/data";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const CarouselCard = dynamic(() => import("@/components/CarouselCard"));
const Numbers = dynamic(() => import("@/components/Numbers"));
const SocialIcons = dynamic(() => import("@/components/SocialIcons"));
const DigitalSolutionsSection = dynamic(() => import('@/components/DigitalSolutionsSection'));
const DigitalProductsSection = dynamic(() => import('@/components/DigitalProductsSection'));


export default function Home() {
  return (
    <>
      <section className="main">
        <ParticlesClientWrapper className="right-0 top-0 mask-l-from-0% mask-b-from-50%" />
        <div className="container flex flex-col justify-center h-[880px] w-[1100px] mx-auto">
          <h1 className="max-w-[544px] mb-5">
            Ensuring Your <span>Connectivity</span>
          </h1>
          <p className="max-w-[352px] mb-10 text-2xl text-[#748099]">
            Your trusted partner in seamless system intergration
          </p>
          <div className="flex items-center gap-4 z-10">
            <PrimaryButton href="/services">
              Our Services
            </PrimaryButton>
            <Link href="" className="border border-[#D7E2F5] px-8 py-4 text-[#304E7E] font-[600] text-[18px] rounded-[100px] bg-white hover:animate-pulse hover:bg-[#304E7E] hover:text-white duration-300">Why SANIT?</Link>
          </div>
        </div>
      </section>
      <section className="bg-linear-to-t from-white to-[#F0F5FD]">
        <div className="flex items-center justify-center container gap-8 py-20">
          <p className="flex-1/3 text-xl text-[#323E59] pr-12">
            This proves that we are the best at what we do...
          </p>
          <Numbers number={14} slug="Years of Experience" className="flex flex-1/6" />
          <Numbers number={20} slug="Technology Partners" className="flex flex-1/6" />
          <Numbers number={200} slug="Finished Projects" className="flex flex-1/6" />
          <Numbers number={147} slug="Happy Customers" className="flex flex-1/6" />
        </div>
      </section>
      <section className="bg-white">
        <div className="container border border-[#E0EAFF] border-l-0 border-r-0 flex justify-center items-center">
          <Card cardTitle="Enterprise Solutions" cardContent="Weather you are SME or Enterprise, Government or BFSI, we have the solution for your IT needs." />
          <Card className="border border-[#E0EAFF] border-t-0 border-b-0" cardTitle="Managed Services" cardContent="Agile & Flexible approach to managing your IT infrastructure seamlessly. Discuss with our sales team now." />
          <Card cardTitle="IT Consultancy" cardContent="We have the expertise to help you define a game plan, to overcome any IT related support you required." />
        </div>
      </section>
      <section>
        <div className="container pt-[150px] pb-[126px] flex justify-between items-center gap-24">
          <div>
            <h1 className="mb-5 w-[448px]">Why Sanit <span>Stands Out?</span></h1>
            <p className="text-[#748099] text-2xl w-[352px]">Your trusted partner in seamless system intergration</p>
          </div>
          <CarouselCard />
        </div>
      </section>
      <DigitalSolutionsSection />
      <DigitalProductsSection />
      <section className="relative bg-linear-to-t from-[#F0F5FD] from-80% to-white pt-16 mask-b-from-70%">
        <ParticlesClientWrapper className="left-0 top-0 mask-r-from-0% z-0" />
        <div className="container flex justify-start items-center gap-10">
          <Image src="/ensure.png" alt="Ensuring Your Connectivity" width={523} height={554} className="bottom-0 left-0 z-10 block relative" />
          <div>
            <Badge variant="outline" className="text-xs text-[#323E59] font-normal py-2.5 px-4 rounded-[100px]">14+ Years of Experience</Badge>
            <h1 className="w-[480px] mb-2">Ensuring Your <span>Connectivity</span></h1>
            <p className="text-2xl text-[#748099] mb-9">Let’s get connected</p>
            <div className="flex items-center justify-start gap-2">
              <p className="text-[18px] text-[#748099] mr-1">Follow us:</p>
              <SocialIcons className="bg-white" data={companySocialMediaLinks} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
