import Link from 'next/link';
import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion';
import { RiExternalLinkLine } from 'react-icons/ri'
import { MdKeyboardArrowDown, MdOutlinePlayArrow } from 'react-icons/md'
import { GrCertificate } from 'react-icons/gr'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames'

export default function Experience() {
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        const transformSelected = () => {
            const underline = document.querySelector(".underline");
            underline.style.top = `${selected * 3.5}rem`;
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

    const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
        <Accordion.Item
            className={classNames(
                'mt-px overflow-hidden first:mt-0 focus-within:relative focus-within:z-10',
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            {children}
        </Accordion.Item>
    ));

    const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
        <Accordion.Header className="flex text-base py-4 px-3 bg-white-secondary data-[state=open]:border-l-[3px] data-[state=open]:border-blue-primary data-[state=open]:bg-transparent data-[state=open]:bg-gradient-to-r data-[state=open]:from-white-secondary data-[state=open]:to-transparent">
            <Accordion.Trigger
                className={classNames(
                    'group flex justify-between items-center w-full',
                    className
                )}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <ChevronDownIcon
                    className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] scale-105 transition-transform duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden
                />
            </Accordion.Trigger>
        </Accordion.Header>
    ));

    const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
        <Accordion.Content
            className={classNames(
                'data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden',
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            <div className="py-[15px] px-3">{children}</div>
        </Accordion.Content>
    ));

    return (
        <section className='py-[5rem] text-white-primary'>
            <div className='px-0 xl:px-[3rem]'>
                <div className='flex flex-col xl:flex-row justify-start items-start xl:items-center gap-8'>
                    <h2 className='text-2xl md:text-4xl font-semibold uppercase font-space'>My Experience</h2>
                    <div className='bg-white-primary w-[25%] h-[2px] z-[20]' />
                </div>

                {/* =============== Dekstop =============== */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-[3fr_8fr] xl:grid-cols-[2fr_8fr] gap-2 xl:gap-[3rem] mt-[5rem]">

                    <ul className="exp-slider relative h-max before:absolute before:left-0 before:content-[''] before:h-full before:w-[3px] before:bg-white-secondary">
                        <div className="underline bg-blue-primary absolute top-0 h-[3.5rem] w-[3px] duration-300 ease-in-out"></div>
                        {
                            experiences.map((experience, i) => (
                                <li key={i} className={`exp-slider-item duration-300 h-[3.5rem] py-0 px-6 flex align-middle cursor-pointer w-full group hover:bg-white-secondary 
                            ${i === selected && 'exp-slider-item-selected text-blue-primary bg-gradient-to-r from-white-secondary to-transparent'}`}
                                    onClick={() => setSelected(i)}
                                >
                                    <span className='flex justify-center items-center text-base group-hover:text-blue-primary'>{experience.name}</span>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="exp-details h-[40vh] w-full xl:w-[40vw]">
                        <div className="exp-details-position">
                            <h3 className='text-xl md:text-2xl font-semibold'>
                                <span>{experiences[selected].role}</span>
                                <span className='exp-details-position-company text-blue-primary'>
                                    &nbsp;@&nbsp;
                                    <Link
                                        className='link'
                                        target='_blank'
                                        href={experiences[selected].url}
                                    >
                                        {experiences[selected].name}
                                    </Link>
                                </span>
                            </h3>

                            <p className="exp-details-range mb-6 text-sm md:text-base">
                                {experiences[selected].start} - {experiences[selected].end}
                            </p>

                            <ul className="exp-details-list flex flex-col gap-6 overflow-hidden">
                                {experiences[selected].shortDescription.map((description, i) => (
                                    <li key={i} className='grid grid-cols-[1rem_90%] gap-4'>
                                        <MdOutlinePlayArrow className='text-blue-primary text-2xl' />
                                        <div className='exp-details-list-item break-words text-sm md:text-lg'>{description}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                {/* ============== Mobile ================= */}
                <div className='md:hidden mt-10'>
                    <Accordion.Root type="single" defaultValue="item-1" collapsible>
                        {
                            experiences.map((experience, i) => (
                                <AccordionItem key={i} value={`item-${i + 1}`}>
                                    <AccordionTrigger onClick={() => setSelected(i)} >
                                        <span>{experience.name}</span>
                                    </AccordionTrigger>

                                    <AccordionContent>
                                        <div className="exp-details h-full w-full mb-[3rem]">
                                            <div className="exp-details-position">
                                                <h3 className='text-xl md:text-2xl font-semibold'>
                                                    <span>{experiences[selected].role}</span>
                                                    <span className='exp-details-position-company text-blue-primary'>
                                                        &nbsp;@&nbsp;
                                                        <Link
                                                            className='link'
                                                            target='_blank'
                                                            href={experiences[selected].url}
                                                        >
                                                            {experiences[selected].name}
                                                        </Link>
                                                    </span>
                                                </h3>

                                                <p className="exp-details-range mb-6 text-sm md:text-base">
                                                    {experiences[selected].start} - {experiences[selected].end}
                                                </p>

                                                <ul className="exp-details-list flex flex-col gap-6 overflow-hidden">
                                                    {experiences[selected].shortDescription.map((description, i) => (
                                                        <li key={i} className='grid grid-cols-[1rem_90%] gap-4'>
                                                            <MdOutlinePlayArrow className='text-blue-primary text-2xl' />
                                                            <div className='exp-details-list-item break-words text-sm md:text-lg'>{description}</div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion.Root>
                </div>



                <div className='mt-[20vh] md:mt-[20vh] xl:mt-[40vh] mb-[5rem]'>
                    <div className='flex justify-center items-center gap-8'>
                        <div className='bg-white-primary w-[10%] h-[2px] z-[20]' />
                        <h2 className='text-xl xl:text-2xl font-semibold text-center uppercase font-space'>My Certification</h2>
                        <div className='bg-white-primary w-[10%] h-[2px] z-[20]' />
                    </div>

                    <div className='w-full h-full mt-[5rem] border-2 border-white-secondary relative'>
                        <div className='w-[10rem] h-[4rem] border-blue-primary border-l-[5px] border-t-[5px] absolute top-[-3px] left-[-3px]' />
                        <div className='w-[10rem] h-[4rem] border-blue-primary border-r-[5px] border-b-[5px] absolute bottom-[-3px] right-[-3px]' />

                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-5 xl:p-[3rem] h-max'>
                            {
                                certificates.map((certificate, i) => (
                                    <div key={i} className='h-[15rem] backdrop-blur-sm corner-cut-3 hover:scale-105 hover:duration-300 duration-300 flex flex-col justify-between w-full bg-white-secondary p-8'>
                                        <div className='flex items-center justify-between text-white-primary'>
                                            <GrCertificate className='custom-color text-3xl' />
                                            <Link href={certificate.link} target='_blank'>
                                                <RiExternalLinkLine className='hover:text-blue-primary duration-300 text-2xl' />
                                            </Link>
                                        </div>

                                        <div className='flex flex-col'>
                                            <p className='text-xl font-medium'>{certificate.title}</p>
                                            <span className='font-semibold opacity-60'>{certificate.course}</span>
                                        </div>

                                        <span className='text-sm mt-4 text-blue-primary'>{certificate.date}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-4 px-0'>
                <div></div>
                <div></div>
                <div className='border-r-[1px] border-white-primary h-[30vh] xl:h-[50vh] flex flex-col gap-3 justify-end items-end'>
                    {[...Array(5).keys()].map((i) => (
                        <div key={i} className='w-5 aspect-square bg-blue-primary mr-4'></div>
                    ))}
                </div>

                <div></div>
            </div>
        </section>
    )
}
