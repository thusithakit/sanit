import CommonHeader from "@/components/CommonHeader";
import ContactUs from "@/components/ContactUs";
import { productDetails } from "@/utils/data";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: Promise<{ product: string }> }) => {
    const { product } = await params;
    const productData = productDetails.find((item) => item.pageUrl === `/${product}`);
    if (!productData) {
        redirect('/not-found');
    }
    return (
        <div className="pt-24">
            <CommonHeader data={productData.pageDetails} />
            <ContactUs />
        </div>
    )
}

export default page