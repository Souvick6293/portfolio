import { aboutInfo } from '@/Data/data'
import Image from 'next/image';
import React from 'react'
import { HiAcademicCap } from "react-icons/hi";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className='lg:h-[100vh] pt-12 bg-[#282828] flex lg:items-center' id='about'>
            <div className='container'>
                <div className="flex flex-col md:flex-row gap-15 items-center">
                    <motion.div
                        className="w-full md:w-1/3"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }} 
                        transition={{ duration: 1 }}
                    >
                        <Image src='/assets/about.png' width={1200} height={1200} alt='about'/>
                    </motion.div>
                    <motion.div
                        className="w-full md:w-2/3"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold pb-5">About Me</h2>
                        <p className='text-base md:text-lg'>{aboutInfo.description}</p>
                        <div className="flex flex-col md:flex-row gap-4 text-center py-5">
                            <motion.div
                                className="w-full md:w-1/3"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}  
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                <span className='font-bold text-2xl w-[50px] h-[50px] bg-gradient-to-br from-[#a14eaa] to-[#4c1d95] flex justify-center items-center rounded-full mx-auto'>
                                    {aboutInfo.experience}
                                </span>
                                <p className='text-base md:text-lg pt-3'>Years of experience in freelancing for HTML developer.</p>
                            </motion.div>
                            <motion.div
                                className="w-full md:w-1/3"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }} 
                                transition={{ duration: 1, delay: 0.6 }}
                            >
                                <span className='font-bold text-2xl w-[50px] h-[50px] bg-gradient-to-br from-[#a14eaa] to-[#4c1d95] flex justify-center items-center rounded-full mx-auto'>
                                    {aboutInfo.project}
                                </span>
                                <p className='text-base md:text-lg pt-3'>Projects Completed</p>
                            </motion.div>
                            <motion.div
                                className="w-full md:w-1/3"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }} 
                                transition={{ duration: 1, delay: 0.9 }}
                            >
                                <span className='font-bold text-2xl md:text-3xl w-[50px] h-[50px] bg-gradient-to-br from-[#a14eaa] to-[#4c1d95] flex justify-center items-center rounded-full mx-auto'>
                                    <HiAcademicCap />
                                </span>
                                <p className='text-base md:text-lg pt-3'>Professional Training From Webskitters Academy.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About;
