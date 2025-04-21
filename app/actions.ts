"use server"

import { ContactFormState } from "@/utils/types";


export const handleContactFormSubmit = async (prevState: ContactFormState, formData: FormData): Promise<ContactFormState> => {
    const fName = formData.get('firstName');
    const lName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    if (!fName || !lName || !email || !phone || !message) {
        return { success: false, message: "Please fill all the fields!" };
    }
    return { success: true, message: "Your Message has been sent successfully!" };
}