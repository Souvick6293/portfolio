"use client";

import { contactData } from '@/Data/data';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineAddIcCall, MdEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import * as Icons from 'react-icons/fa';
import { socialLinks } from '@/Data/data';
import { motion } from 'framer-motion';

type FormValues = {
    fullName: string;
    email: string;
    phone: string;
    message: string;
};

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        try {
            const response = await fetch('https://formspree.io/f/xldjezgv', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                alert('Your message has been sent successfully!');
                reset();
            } else {
                alert('There was an error sending your message. Please try again.');
            }
        } catch (error) {
           console.log(error)
        }
    };

    return (
        <section className='bg-[#282828] min-h-screen flex items-center py-10' id='contact'>
            <div className='container mx-auto px-4'>
                <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold pb-5 text-center text-white">
                    Contact Me
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-6 items-center'>
                    <motion.div 
                        className='lg:p-5 text-white'
                        initial={{ opacity: 0, x: -100 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className='md:text-md lg:text-2xl pb-8'>
                            {`Feel free to get in touch with me! Whether you have a project idea,
                            collaboration opportunity, or just a question, I'm always open to connecting.`}
                        </p>
                        <div className='flex items-center gap-4 py-2'>
                            <div className='bg-gradient-to-br from-[#a14eaa] via-[#8e44ad] to-[#4c1d95] w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-lg'>
                                <MdOutlineAddIcCall className="text-white text-xl" />
                            </div>
                            <div>
                                <h4 className='font-bold md:text-sm lg:text-lg'>Phone Number</h4>
                                <h5 className='md:text-sm lg:text-lg'>{contactData.phone}</h5>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 py-2'>
                            <div className='bg-gradient-to-br from-[#a14eaa] via-[#8e44ad] to-[#4c1d95] w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-lg'>
                                <MdEmail className="text-white text-xl" />
                            </div>
                            <div>
                                <h4 className='font-bold md:text-sm lg:text-lg'>Email</h4>
                                <h5 className='md:text-sm lg:text-lg'>{contactData.email}</h5>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 py-2'>
                            <div className='bg-gradient-to-br from-[#a14eaa] via-[#8e44ad] to-[#4c1d95] w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-lg'>
                                <FaRegAddressCard className="text-white text-xl" />
                            </div>
                            <div>
                                <h4 className='font-bold md:text-sm lg:text-lg'>Address</h4>
                                <h5 className='md:text-sm lg:text-lg'>{contactData.address}</h5>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='bg-[#3d3d3d] px-5 py-10 lg:px-20 lg:py-12 rounded-lg text-white'
                        initial={{ opacity: 0, x: 100 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.9 }}
                    >
                        <form 
                            action="https://formspree.io/f/xldjezgv" 
                            method="POST" 
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className='mb-8 relative'>
                                <label className='absolute left-5 -top-2.5 bg-[#a14eaa] px-2 rounded-xl text-sm'>Full Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter your name'
                                    {...register('fullName', {
                                        required: 'Full Name is required',
                                        minLength: { value: 3, message: 'Name must be at least 3 characters' }
                                    })}
                                    className='border w-full rounded-xl p-3 bg-[#282828] text-white'
                                />
                                {errors.fullName && (
                                    <p className='text-red-500'>{errors.fullName.message}</p>
                                )}
                            </div>

                            <div className='mb-8 relative'>
                                <label className='absolute left-5 -top-2.5 bg-[#a14eaa] px-2 rounded-xl text-sm'>Email</label>
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Invalid email format'
                                        }
                                    })}
                                    className='border w-full rounded-xl p-3 bg-[#282828] text-white'
                                />
                                {errors.email && (
                                    <p className='text-red-500'>{errors.email.message}</p>
                                )}
                            </div>

                            <div className='mb-8 relative'>
                                <label className='absolute left-5 -top-2.5 bg-[#a14eaa] px-2 rounded-xl text-sm'>Phone Number</label>
                                <input
                                    type='number'
                                    placeholder='Enter your phone number'
                                    {...register('phone', {
                                        required: 'Phone number is required',
                                        minLength: { value: 10, message: 'Phone number must be 10 digits' },
                                        maxLength: { value: 10, message: 'Phone number must be 10 digits' }
                                    })}
                                    className='border w-full rounded-xl p-3 bg-[#282828] text-white'
                                />
                                {errors.phone && (
                                    <p className='text-red-500'>{errors.phone.message}</p>
                                )}
                            </div>

                            <div className='mb-4 relative'>
                                <label className='absolute left-5 -top-2.5 bg-[#a14eaa] px-2 rounded-xl text-sm'>Message</label>
                                <textarea
                                    placeholder='Enter your message'
                                    {...register('message', {
                                        required: 'Message is required',
                                        minLength: { value: 10, message: 'Message must be at least 10 characters' }
                                    })}
                                    className='border w-full rounded-xl p-3 bg-[#282828] text-white resize-none h-28'
                                />
                                {errors.message && (
                                    <p className='text-red-500'>{errors.message.message}</p>
                                )}
                            </div>

                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='w-full bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 cursor-pointer'
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>

                            <div className="flex gap-3 pt-4 w-full justify-center">
                                {socialLinks.map((slink) => {
                                    const IconComponent = Icons[slink.icon as keyof typeof Icons];
                                    return (
                                        <a
                                            key={slink.id}
                                            href={slink.url}
                                            target="_blank"
                                            className="mt-2 px-2 rounded-full hover:rotate-360 duration-500 transition text-white text-3xl"
                                        >
                                            <IconComponent />
                                        </a>
                                    );
                                })}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
