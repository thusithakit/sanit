import ParticlesClientWrapper from "./client/ParticlesClientWrapper"
import PrimaryButton from "./PrimaryButton"

const ContactUs = ({customPara,customMid}:{customPara?:string,customMid?:string}) => {
    return (
        <section className="lg:py-30 lg:pt-15 py-8 relative">
            <ParticlesClientWrapper className="right-0 top-0 mask-l-from-0% mask-b-from-20% mask-t-from-80%" />
            <div className="container">
                <h1 className="lg:max-w-4xl mb-6 text-[36px] lg:text-[60px]"><span>Have questions?</span><br />
                    Need a custom {customMid || "IT solution"} for your business?</h1>
                <p className="text-[#677187] lg:max-w-2xl lg:text-[20px] mb-9 text-[16px]">
                    {customPara ? customPara : "Contact us today and let’s discuss how we can help your business thrive in a connected world!"}
                </p>
                <PrimaryButton href="/contact">
                    Contact Us
                </PrimaryButton>
            </div>
        </section>
    )
}

export default ContactUs