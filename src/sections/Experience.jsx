import Link from 'next/link';
import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion';
import { RiExternalLinkLine } from 'react-icons/ri'
import { MdOutlinePlayArrow } from 'react-icons/md'
import { GrCertificate } from 'react-icons/gr'

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

    const certificates = [
        {
            link: 'https://dicoding.com/certificates/0LZ0161RRP65',
            title: 'Belajar Dasar Pemrograman Web',
            course: 'Dicoding',
            date: '13 June 2022 - 13 Juni 2025'
        },
        {
            link: 'https://dicoding.com/certificates/0LZ0161RRP65',
            title: 'Belajar Dasar Pemrograman JavaScript',
            course: 'Dicoding',
            date: '28 June 2022 - 28 June 2025'
        },
        {
            link: 'https://dicoding.com/certificates/6RPND7VDRZ2M',
            title: 'Belajar Membuat Front-End Web untuk Pemula',
            course: 'Dicoding',
            date: '21 Juli 2022 - 21 Juli 2025'
        },
        {
            link: 'https://dicoding.com/certificates/L4PQ4Y964XO1',
            title: 'Belajar Membuat Aplikasi Web dengan React',
            course: 'Dicoding',
            date: '06 August 2022 - 06 August 2025'
        },
    ]


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

            <div className='my-[40vh]'>
                <div className='flex justify-center items-center gap-8'>
                    <div className='bg-white-primary w-[10%] h-[2px] z-[20]' />
                    <h2 className='text-2xl font-semibold text-center uppercase font-space'>My Certification</h2>
                    <div className='bg-white-primary w-[10%] h-[2px] z-[20]' />
                </div>

                <div className='w-full h-full mt-[5rem] border-2 border-white-secondary relative'>
                    <div className='w-[10rem] h-[4rem] border-blue-primary border-l-[5px] border-t-[5px] absolute top-[-3px] left-[-3px]' />
                    <div className='w-[10rem] h-[4rem] border-blue-primary border-r-[5px] border-b-[5px] absolute bottom-[-3px] right-[-3px]' />

                    <div className='grid grid-cols-3 gap-6 p-[3rem] h-max'>
                        {
                            certificates.map((certificate, i) => (
                                <div key={i} className='h-[15rem] hover:-mt-3 hover:duration-300 duration-300 flex flex-col justify-start gap-8 w-full bg-white-secondary p-8'>
                                    <div className='flex items-center justify-between text-white-primary'>
                                        <GrCertificate className='custom-color text-3xl' />
                                        <Link href={certificate.link} target='_blank'>
                                            <RiExternalLinkLine className='hover:text-blue-primary duration-300 text-2xl' />
                                        </Link>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-xl font-medium'>{certificate.title}</p>
                                        <span className='font-semibold opacity-60'>{certificate.course}</span>
                                        <span className='text-sm mt-4 text-blue-primary'>{certificate.date}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
