import { z } from "zod";
import validator from "validator";
export const contactFormSchema = z.object({
    firstName:z.string().min(3,"Firstname is required"),
    lastName:z.string().min(3,"Lastname is required"),
    email: z.string().email("Invalid email address"),
    phone:z.string().refine(validator.isMobilePhone,"Invalid phone number"),
    message: z.string().min(5, "Message is required"),
})