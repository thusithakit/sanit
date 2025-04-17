import CommonHeader from "@/components/CommonHeader";
import ContactUs from "@/components/ContactUs";
import { serviceDetails } from "@/utils/data";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: Promise<{ service: string }> }) => {
    const { service } = await params;
    const serviceData = serviceDetails.find((item) => item.pageUrl === `/${service}`);
    if (!serviceData) {
        redirect('/not-found');
    }
    return (
        <div className="pt-24">
            <CommonHeader data={serviceData.pageDetails} />
            <ContactUs />
        </div>
    )
}

export default page