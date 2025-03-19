import { servicesData } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
    return (
        <div className='min-h-screen py-12 flex items-center' id='services'>
            <div className='container'>
                <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold pb-5 text-center">Services</h2>
                <div className="grid gap-x-4 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {
                        servicesData.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className='bg-[#3d3d3d] service-box relative cursor-pointer rounded-lg'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                            >
                                <div className='service-wrapper p-5 rounded-lg flex flex-col justify-center items-center text-center gap-2 '>
                                    <div className='bg-amber-50 w-[70px] h-[70px] p-2 rounded-full overflow-hidden flex justify-center items-center service-icon'>
                                        <Image
                                            src={service.icon || '/assets/default-icon.png'}
                                            width={50}
                                            height={50}
                                            alt='service-icon'
                                            style={{ width: 'auto', height: 'auto' }}
                                            priority
                                        />
                                    </div>

                                    <h4 className='text-xl font-bold'>{service.title}</h4>
                                    <p className='text-base leading-5'>{service.description}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services
