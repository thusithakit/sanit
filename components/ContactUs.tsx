// import ParticlesBackground from "./ParticlesBckground"
import dynamic from "next/dynamic";
import PrimaryButton from "./PrimaryButton"
const ParticlesBackground = dynamic(() => import('@/components/ParticlesBckground'));

const ContactUs = () => {
    return (
        <section className="py-44 relative">
            <ParticlesBackground className="right-0 top-0 mask-l-from-0% mask-b-from-20% mask-t-from-80%" />
            <div className="container">
                <h1 className="max-w-4xl mb-6"><span>Have questions?</span><br />
                    Need a custom IT solution for your business?</h1>
                <p className="text-[#748099] max-w-2xl text-2xl mb-9">Contact us today and let’s discuss how we can help your business thrive in a connected world!</p>
                <PrimaryButton href="/contact">
                    Contact Us
                </PrimaryButton>
            </div>
        </section>
    )
}

export default ContactUs