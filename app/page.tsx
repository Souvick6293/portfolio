"use client";
import React, { useState, useEffect } from 'react';
import Banner from '@/components/banner/Banner';
import About from '@/components/about/About';
import Services from '@/components/services/Services';
import Skill from '@/components/skill/Skill';
import ContactUs from '@/components/contact-us/ContactUs';
import LoadingScreen from '@/components/loader/LoadingScreen';
import Project from '@/components/project/Project';
import Journey from '@/components/journey/Journey';


const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Banner />
      <About />
      <Journey/>
      <Services />
      <Skill />
      <Project/>
      <ContactUs />
    </div>
  );
};

export default HomePage;
