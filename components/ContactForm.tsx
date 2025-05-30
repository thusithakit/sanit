"use client"
import { handleContactFormSubmit } from '@/app/actions'
import React, { useActionState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const initialState = {
    success: false,
    errors: {} as Record<string, string>,
};

const ContactForm = () => {
    const [state, action, isLoading] = useActionState(handleContactFormSubmit, initialState)
    return (
        <form action={action}>
            <div className='grid grid-cols-2 gap-4 lg:gap-y-8 gap-y-6'>
                <div>
                    <Input type="text" name="firstName" id="firstName" placeholder='First Name*' required className='inputs' />
                    {state.errors.firstName && <p className="text-red-500">{state.errors.firstName}</p>}
                </div>
                <div>
                    <Input type="text" name="lastName" id="lastName" placeholder='Last Name*' required className='inputs' />
                    {state.errors.lastName && <p className="text-red-500">{state.errors.lastName}</p>}
                </div>
                <div>
                    <Input type="email" name="email" id="email" placeholder='Email Address*' required className='inputs' />
                    {state.errors.email && <p className="text-red-500">{state.errors.email}</p>}
                </div>
                <div>
                    <Input type='tel' name="phone" id="phone" placeholder='Phone*' required className='inputs' />
                    {state.errors.phone && <p className="text-red-500">{state.errors.phone}</p>}
                </div>
            </div>
            <div>
                <Textarea name="message" id="message" placeholder='Type your message' required className='inputs lg:mb-12 mb-8 mt-6 lg:mt-8 h-40' rows={40} />
                {state.errors.message && <p className="text-red-500">{state.errors.message}</p>}
            </div>
            <div className='flex justify-between lg:items-center gap-4 mb-4 flex-col items-start lg:flex-row'>
                <Button type='submit' className='w-fit rounded-full text-primary bg-[#E0EAFF] font-[600] py-4 px-6 hover:text-white hover:bg-[#0C5ADB] transition-colors duration-300 ease-in-out cursor-pointer' disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Submit your enquiry'}
                </Button>
                <p className='text-sm'>*All fields are required</p>
            </div>
            {state.errors.general && <p className="text-red-500">{state.errors.general}</p>}
            {state.success && <p className="text-[#0C5ADB]">Message sent!</p>}  
        </form>
    )
}

export default ContactForm