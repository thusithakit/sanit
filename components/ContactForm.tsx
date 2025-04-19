"use client"
import { handleContactFormSubmit } from '@/app/actions'
import React, { useActionState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const initialState = {
    success: false,
    message: '',
};

const ContactForm = () => {
    const [state, action, isLoading] = useActionState(handleContactFormSubmit, initialState)
    return (
        <form action={action}>
            <div className='grid grid-cols-2 gap-4 gap-y-8'>
                <Input type="text" name="firstName" id="firstName" placeholder='First Name*' required className='inputs' />
                <Input type="text" name="lastName" id="lastName" placeholder='Last Name*' required className='inputs' />
                <Input type="email" name="email" id="email" placeholder='Email Address*' required className='inputs' />
                <Input type='tel' name="phone" id="phone" placeholder='Phone*' required className='inputs' />
            </div>
            <Textarea name="message" id="message" placeholder='Type your message' required className='inputs mb-12 mt-8 h-40' rows={40} />
            <div className='flex justify-between items-center gap-4 mb-4'>
                <Button type='submit' className='w-fit rounded-full text-primary bg-[#E0EAFF] font-[600] py-4 px-6 hover:text-white hover:bg-[#0C5ADB] transition-colors duration-300 ease-in-out cursor-pointer' disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Submit your enquiry'}
                </Button>
                <p className='text-sm'>*All fields are required</p>
            </div>
            {state.message && <p className={`text-sm ${state.success ? 'text-[#0C5ADB]' : 'text-red-500'}`}>{state.message}</p>}
        </form>
    )
}

export default ContactForm