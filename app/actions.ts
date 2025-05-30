"use server"
import { resend } from '@/lib/resend';
import { contactFormSchema } from "@/lib/schems";
import EmailTemplate from "@/components/EmailTemplate";

export const handleContactFormSubmit = async (prevState: {success:boolean;errors:Record<string,string>}, formData: FormData) => {
    const parsed = contactFormSchema.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
    })
    if(!parsed.success){
        const errors: Record<string, string> = {};
        parsed.error.issues.forEach(issue => {
        errors[issue.path[0] as string] = issue.message;
        });

        return { success: false, errors };
    }
    const { firstName, lastName, email, phone, message } = parsed.data;
    try{
      await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['thusithakit3@gmail.com'],
      subject: `${firstName} ${lastName} sent you a new message!`,
      react: EmailTemplate({ firstName: firstName, lastName: lastName, email: email,phone:phone, message: message }),
    });
    return { success: true, errors: {} };
    } catch (err){
        console.error('Error sending email:', err);
        return {
      success: false,
      errors: { general: 'Failed to send email. Please try again.' },
    };
    }
}