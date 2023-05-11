import Link from 'next/link';
import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion';
import { RiArrowRightSFill } from 'react-icons/ri';
import { MdOutlineDoubleArrow, MdOutlinePlayArrow } from 'react-icons/md'

export default function Experience() {
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        const transformSelected = () => {
            const underline = document.querySelector(".underline");
            underline.style.top = `${selected * 3}rem`;
        };
        transformSelected();
    }, [selected]);

    const experiences = [
        {
            name: "Tektik Group",
            role: "Web Developer",
            url: "https://www.tektik.id",
            start: "January 2023",
            end: "Present",
            shortDescription: [
                "Created a website for showing the dashboard for client data",
                "Maintaining and Editing client website that already exist.",
                "I've also experience managed a small team that includes Frontend Developers, Designer, and Content Writer in Creative Team."
            ],
        },
        {
            name: "Instagram",
            role: "Content Creator",
            url: "https://www.mxindonesia.com",
            start: "May 2023",
            end: "Present",
            shortDescription: [
                "Upon graduating in 2021, I began creating content on YouTube, with the aim of enhancing my skills and working with the latest technologies, specifically React and Node.",
                "Over time, I have developed and shared over 50 projects using React on my channel.",
                "As a result, my channel has gained a substantial following, with over 11,000 subscribers to date. I have also had the pleasure of collaborating with various brands throughout my journey.",
            ],
        },
        {
            name: "PT Max Solution Indonesia",
            role: "Web Developer [Intern]",
            url: "https://www.mxindonesia.com",
            start: "April 2022",
            end: "Desember 2022",
            shortDescription: [
                "Upon graduating in 2021, I began creating content on YouTube, with the aim of enhancing my skills and working with the latest technologies, specifically React and Node.",
                "Over time, I have developed and shared over 50 projects using React on my channel.",
                "As a result, my channel has gained a substantial following, with over 11,000 subscribers to date. I have also had the pleasure of collaborating with various brands throughout my journey.",
            ],
        },
        {
            name: "Perpustakaan UMB",
            role: "Data Entry [Intern]",
            url: "https://lib.mercubuana.ac.id/id",
            start: "January 2022",
            end: "June 2022",
            shortDescription: [
                "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
                "Additionally, I secured sponsorships from reputable brands to support our events.",
                "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
            ],
        },
        {
            name: "Jakarta Creative Hub",
            role: "Web Developer [Intern]",
            url: "https://jakartacreativehub.jakarta.go.id/",
            start: "November 2019",
            end: "November 2020",
            shortDescription: [
                "Write modern, performant, maintainable code for a diverse array of client and internal projects",
                "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
                "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
            ],
        }
    ];


    return (
        <section className='py-[5rem] text-white-primary px-[3rem]'>
            <div className='flex justify-start items-center gap-8'>
                <h2 className='text-4xl font-semibold uppercase font-space'>My Experience</h2>
                <div className='bg-white-primary w-[25%] h-[2px] z-[20]' />
            </div>


            <div className="container grid grid-cols-[2fr_8fr] gap-[3rem] mt-[5rem]">
                <ul className="exp-slider relative h-max before:absolute before:left-0 before:content-[''] before:h-full before:w-[3px] before:bg-white-secondary">
                    <div className="underline bg-blue-primary absolute top-0 h-[3rem] w-[3px] duration-300 ease-in-out"></div>
                    {
                        experiences.map((experience, i) => (
                            <li key={i} className={`exp-slider-item duration-300 h-[3rem] py-0 px-6 flex align-middle cursor-pointer w-full group hover:bg-white-secondary 
                            ${i === selected && 'exp-slider-item-selected text-blue-primary bg-gradient-to-r from-white-secondary to-transparent'}`}
                                onClick={() => setSelected(i)}
                            >
                                <span className='flex justify-center items-center text-base group-hover:text-blue-primary'>{experience.name}</span>
                            </li>
                        ))
                    }
                </ul>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="exp-details h-[40vh] w-[40vw]">
                    <div className="exp-details-position">
                        <h3 className='text-2xl font-semibold'>
                            <span>{experiences[selected].role}</span>
                            <span className='exp-details-position-company text-blue-primary'>
                                &nbsp;@&nbsp;
                                <Link
                                    className='link'
                                    target='_blank'
                                    href={experiences[selected].url}
                                >{experiences[selected].name}</Link>
                            </span>
                        </h3>

                        <p className="exp-details-range mb-6">
                            {experiences[selected].start} - {experiences[selected].end}
                        </p>

                        <ul className="exp-details-list flex flex-col gap-6">
                            {experiences[selected].shortDescription.map((description, i) => (
                                <li className='grid grid-cols-[1rem_100%] gap-4'>
                                    <MdOutlinePlayArrow className='text-blue-primary text-2xl' />
                                    <div key={i} className='exp-details-list-item'>{description}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
