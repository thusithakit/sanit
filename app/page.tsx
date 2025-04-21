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
        <ParticlesClientWrapper className="right-0 top-0 mask-l-from-0% mask-b-from-50% w-full" />
        <div className="container flex flex-col justify-center lg:h-[880px] lg:w-[1100px] mx-auto w-full h-auto">
          <h1 className="max-w-[544px] lg:mb-5 w-full mb-6">
            Ensuring Your <span>Connectivity</span>
          </h1>
          <p className="max-w-[352px] lg:mb-10 lg:text-2xl text-[#748099] mb-4">
            Your trusted partner in seamless system intergration
          </p>
          <div className="flex items-center gap-4 z-10">
            <PrimaryButton href="/services">
              Our Services
            </PrimaryButton>
            <Link href="/about" className="border border-[#D7E2F5] px-5 py-3 rounded-full lg:px-8 lg:py-4 text-[#304E7E] font-[600] text-[18px] lg:rounded-[100px] bg-white hover:animate-pulse hover:bg-[#304E7E] hover:text-white duration-300">Why SANIT?</Link>
          </div>
        </div>
      </section>
      <section className="bg-linear-to-t from-white to-[#F0F5FD]">
        <div className="flex flex-col items-center justify-center container lg:gap-8 lg:py-20 gap-5 py-10 lg:flex-row">
          <p className="flex-1/3 text-xl text-[#323E59] lg:pr-12">
            This proves that we are the best at what we do...
          </p>
          <div className="lg:flex lg:gap-8 grid grid-cols-2 lg:flex-2/3 lg:grid-cols-4">
            <Numbers number={14} slug="Years of Experience" className="flex border border-t-0 border-l-0 border-[#748099] lg:border-none p-2.5 lg:p-0" />
            <Numbers number={20} slug="Technology Partners" className="flex border border-t-0 border-r-0 border-[#748099] lg:border-none p-2.5 lg:p-0" />
            <Numbers number={200} slug="Finished Projects" className="flex border border-b-0 border-l-0 border-[#748099] lg:border-none p-2.5 lg:p-0" />
            <Numbers number={147} slug="Happy Customers" className="flex border border-b-0 border-r-0 border-[#748099] lg:border-none p-2.5 lg:p-0" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container border border-[#E0EAFF] border-l-0 border-r-0 flex justify-center items-center flex-wrap lg:flex-nowrap w-fit">
          <Card cardTitle="Enterprise Solutions" cardContent="Weather you are SME or Enterprise, Government or BFSI, we have the solution for your IT needs." />
          <Card className="border border-[#E0EAFF] border-x-0 lg:border-x lg:border-t-0 lg:border-b-0" cardTitle="Managed Services" cardContent="Agile & Flexible approach to managing your IT infrastructure seamlessly. Discuss with our sales team now." />
          <Card cardTitle="IT Consultancy" cardContent="We have the expertise to help you define a game plan, to overcome any IT related support you required." />
        </div>
      </section>
      <section>
        <div className="container py-16 lg:pt-[150px] lg:pb-[126px] flex flex-col justify-center gap-10 lg:justify-between lg:flex-row items-center lg:gap-24">
          <div>
            <h1 className="lg:mb-5 lg:w-[448px]">Why Sanit <span>Stands Out?</span></h1>
            <p className="text-[#748099] lg:text-2xl lg:w-[352px]">Your trusted partner in seamless system intergration</p>
          </div>
          <CarouselCard />
        </div>
      </section>
      <DigitalSolutionsSection />
      <DigitalProductsSection />
      <section className="relative bg-linear-to-t from-[#F0F5FD] from-80% to-white lg:pt-16 mask-b-from-70%">
        <ParticlesClientWrapper className="left-0 top-0 mask-r-from-0% z-0" />
        <div className="container no-border flex flex-col-reverse lg:flex-row justify-center lg:justify-start items-center gap-10">
          <Image src="/ensure.png" alt="Ensuring Your Connectivity" width={523} height={554} className="bottom-0 left-0 z-10 block relative" />
          <div>
            <Badge variant="outline" className="text-xs text-[#323E59] font-normal py-2.5 px-4 rounded-[100px]">14+ Years of Experience</Badge>
            <h1 className="lg:w-[480px] mb-2">Ensuring Your <span>Connectivity</span></h1>
            <p className="lg:text-2xl text-[#748099] lg:mb-9">Let’s get connected</p>
            <div className="flex items-center justify-start lg:gap-2">
              <p className="lg:text-[18px] text-[#748099] mr-1">Follow us:</p>
              <SocialIcons className="bg-white" data={companySocialMediaLinks} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
