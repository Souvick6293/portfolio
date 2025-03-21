"use client";

import { projectData } from '@/Data/data'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaEye, FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx";

interface Project {
    id: number;
    title: string;
    description: string;
    projectImage: string;
    technologies: string;
    projectGitLink: string;
    projectUrlLink: string;
}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [showAllProjects, setShowAllProjects] = useState<boolean>(false);

    const handleOpenModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const handleViewMore = () => {
        setShowAllProjects(!showAllProjects);
    };

    return (
        <section className='bg-[#000000] min-h-screen flex items-center py-10' id='my_project'>
            <div className='container mx-auto'>
                <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold pb-5 text-center text-white">
                    Projects
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
                    {projectData
                        .slice(0, showAllProjects ? projectData.length : 3)
                        .map((project: Project) => (
                            <motion.div
                                key={project.id}
                                className='group bg-gradient-to-br from-[#b1a7b2] to-[#4c1d95] relative cursor-pointer rounded-lg w-full overflow-hidden'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 1, delay: project.id * 0.2 }}
                            >
                                <div className='p-5'>
                                    <Image
                                        src={project.projectImage || '/assets/default-icon.png'}
                                        width={300}
                                        height={300}
                                        alt='project-image'
                                        className='w-full h-full object-cover'
                                        priority
                                    />
                                </div>

                                <div
                                    className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/70 to-transparent
                                    opacity-0 group-hover:opacity-100 translate-y-full 
                                    ${isModalOpen ? 'opacity-70 translate-y-0' : 'group-hover:translate-y-0'}
                                    transition-all duration-700 ease-in-out flex items-center justify-center`}
                                    
                                    onClick={() => handleOpenModal(project)}
                                    onTouchStart={() => handleOpenModal(project)}
                                    onFocus={() => handleOpenModal(project)}
                                >
                                    <FaEye className='text-white text-4xl cursor-pointer' />
                                </div>
                            </motion.div>
                        ))}
                </div>

                <div className='text-center mt-5'>
                    <button
                        className='common-btn mx-auto'
                        onClick={handleViewMore}
                    >
                        {showAllProjects ? 'View Less' : 'View More'}
                    </button>
                </div>

                {isModalOpen && selectedProject && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className='fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex items-center justify-center z-50'
                        onClick={handleCloseModal}
                    >
                        <div
                            className='bg-white rounded-lg max-w-xl w-full relative overflow-hidden'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className='bg-[#686363] p-5 flex items-center justify-center'>
                                <Image
                                    src={selectedProject.projectImage || '/assets/default-icon.png'}
                                    width={400}
                                    height={400}
                                    alt='modal-image'
                                   priority
                                />
                            </div>
                            <div className='p-3'>
                                <h3 className='text-xl font-bold mb-3 text-center text-black'>{selectedProject.title}</h3>
                                <p className='text-black mt-3'>{selectedProject.description}</p>
                                <p className='text-black my-2 text-lg'>
                                    <span className='font-bold text-blue-400'>Technologies: </span>
                                    {selectedProject.technologies}
                                </p>

                                <div className='flex gap-4 justify-center'>
                                    <a
                                        href={selectedProject.projectGitLink}
                                        target='_blank'
                                        className='flex items-center gap-2 text-white bg-[#047dff] px-3 py-1 rounded-2xl transition-transform duration-300 hover:scale-110'
                                    >
                                        <FaGithub /> GitHub
                                    </a>

                                    <a
                                        href={selectedProject.projectUrlLink}
                                        target='_blank'
                                        className='flex items-center gap-2 text-white bg-[#025e21] px-3 py-1 rounded-2xl transition-transform duration-300 hover:scale-110'
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                            <button
                                className='absolute top-2 right-2 text-white text-xl font-bold cursor-pointer w-8 h-8 bg-gradient-to-br from-[#b1a7b2] to-[#4c1d95] flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-110'
                                onClick={handleCloseModal}
                            >
                                <RxCross2 className='text-2xl' />
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default Project;
