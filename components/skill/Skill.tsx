"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/Data/data';

const Skill = () => {
    const [currentSkill, setCurrentSkill] = useState(skillsData[0]);
    const [animatedPercent, setAnimatedPercent] = useState(currentSkill.percent);

    useEffect(() => {
        let start = animatedPercent;
        const end = currentSkill.percent;
        if (start !== end) {
            const increment = start < end ? 1 : -1;
            const interval = setInterval(() => {
                start += increment;
                setAnimatedPercent(start);
                if (start === end) clearInterval(interval);
            }, 50);
        }
    });

    const radius = 120; 
    const smallRadius = 55; 
    const circumference = 2 * Math.PI * radius;
    const smallCircumference = 2 * Math.PI * smallRadius;

    return (
        <section className="w-full text-gray-100 bg-gray-900 min-h-screen py-12 flex items-center" id='skill'>
            <div className='container'>
                <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold pb-5 text-center">Skills & Technologies</h2>

                <div className='hidden lg:grid grid-cols-12 justify-center items-center gap-4'>
                    <div className="col-span-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {skillsData.map((skill, index) => (
                            <motion.button
                                key={skill.title}
                                onClick={() => setCurrentSkill(skill)}
                                className={`px-4 py-2 text-base transition bg-gradient-to-br from-[#a14eaa] to-[#4c1d95]  rounded-md hover:bg-blue-700 cursor-pointer 
                                ${currentSkill.title === skill.title && 'font-bold ring-2 ring-gray-100'}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                            >
                                {skill.title}
                            </motion.button>
                        ))}
                    </div>

                    <div className="col-span-5 flex items-center justify-center relative">
                        <div className='bg-[#3d304b] p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.8)]'>
                            <svg className="transform -rotate-90 w-72 h-72">
                                <circle
                                    cx="145" cy="145" r={radius}
                                    stroke="currentColor" strokeWidth="30" fill="transparent"
                                    className="text-white"
                                />

                                <motion.circle
                                    cx="145" cy="145" r={radius}
                                    stroke={currentSkill.progressColor || '#3b82f6'}
                                    strokeWidth="30" fill="transparent"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={circumference - (animatedPercent / 100) * circumference}
                                    initial={{ strokeDashoffset: circumference }}
                                    animate={{ strokeDashoffset: circumference - (animatedPercent / 100) * circumference }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                />
                            </svg>
                        </div>
                        <span className="absolute text-5xl font-bold">{animatedPercent}%</span>
                    </div>
                </div>

                <div className="lg:hidden flex flex-col items-center gap-12">
                    <div className='flex flex-wrap gap-3 justify-center w-full'>
                        {skillsData.map((skill, index) => (
                            <motion.button
                                key={skill.title}
                                onClick={() => setCurrentSkill(skill)}
                                className={`px-4 py-2 text-base transition bg-[#a14eaa] rounded-md hover:bg-blue-700 cursor-pointer 
                                ${currentSkill.title === skill.title && 'font-bold ring-2 ring-gray-100'}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                            >
                                {skill.title}
                            </motion.button>
                        ))}
                    </div>

                    <div className='bg-[#3d304b] p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.8)] flex items-center justify-center mx-auto'>
                        <svg className="transform -rotate-90 w-48 h-48">
                            <circle
                                cx="100" cy="100" r={smallRadius}
                                stroke="currentColor" strokeWidth="10" fill="transparent"
                                className="text-white"
                            />

                            <motion.circle
                                cx="100" cy="100" r={smallRadius}
                                stroke={currentSkill.progressColor || '#3b82f6'}
                                strokeWidth="10" fill="transparent"
                                strokeDasharray={smallCircumference}
                                strokeDashoffset={smallCircumference - (animatedPercent / 100) * smallCircumference}
                                initial={{ strokeDashoffset: smallCircumference }}
                                animate={{ strokeDashoffset: smallCircumference - (animatedPercent / 100) * smallCircumference }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            />
                        </svg>
                        <span className="absolute text-4xl font-bold">{animatedPercent}%</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
