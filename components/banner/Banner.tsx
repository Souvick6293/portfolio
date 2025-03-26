"use client";
import { BaseInfo } from '@/Data/data';
import React, { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { IoCall } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import Image from 'next/image';
import * as Icons from 'react-icons/fa';
import { socialLinks } from '@/Data/data';
import { motion } from 'framer-motion';

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='w-full lg:h-screen relative py-12' id='home'>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="assets/banner-bg.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen gap-4 sm:pt-32 pt-32">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [1, -0.55, 0.27, 1.55]
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold leading-11:leading-5 text-bg">
              <span className="text-2xl md:text-3xl lg:text-3xl text-white">
                Hello, its Me
              </span>
              <br />
              <span className="gradient-text">{BaseInfo.name}</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-3xl text-white">I am a </span>
              <span className="gradient-text">
                <Typewriter
                  words={BaseInfo.position}
                  loop={0}
                  cursor
                  cursorStyle={<span className="cursor-style">|</span>}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h1>
            <p className='text-base md:text-lg py-5'>{BaseInfo.introduction}</p>
            <div className='flex gap-4'>
              <button
                className='transparent-btn common-btn'
                onClick={() => window.location.href = 'tel:+918327671187'}
              >
                <IoCall /> Contact me
              </button>
              <button className='common-btn'>
                <a href="/assets/souvick-cv.pdf" download="Souvick_Panja_CV.pdf" className="flex items-center gap-2">
                  <FaDownload /> Download CV
                </a>
              </button>
            </div>

            <div className="flex gap-3 py-4">
              {socialLinks.map((link, index) => {
                const IconComponent = Icons[link.icon as keyof typeof Icons];
                return (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    className="p-3 rounded-full bg-gradient-to-br from-[#a14eaa] to-[#4c1d95] hover:hover:rotate-360 duration-500 transition text-white text-2xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 360 }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.2,
                      ease: [0.68, -0.55, 0.27, 1.55],
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <IconComponent />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              delay: 1,
              ease: [0.68, -0.55, 0.27, 1.55]
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="my-image-container">
              <Image
                src='/assets/my-photo.png'
                alt='Portfolio-Banner'
                width={1200}
                height={400}
                className='my-image'
                priority
              />
              <div>
                <div className="logo-slider-container">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    autoplay={{ delay: 2000 }}
                    modules={[Autoplay]}
                    loop={true}
                    className="mySwiper"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  >
                    {BaseInfo.skill.map((logo, index) => (
                      <SwiperSlide key={index} className="logo-slide">
                        <div className={`logo-item ${index === activeIndex || index === (activeIndex + 3) % BaseInfo.skill.length ? 'smooth-motion' : ''}`}>
                          {logo && (
                            <Image
                              src={logo}
                              width={100}
                              height={100}
                              alt={`Logo ${index + 1}`}
                              priority
                            />
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
