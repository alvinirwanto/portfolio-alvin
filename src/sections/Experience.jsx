import Link from 'next/link';
import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion';
import { MdKeyboardArrowDown, MdOutlinePlayArrow } from 'react-icons/md'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames'
import Certification from './Certification';

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
            name: "MX Indonesia",
            role: "Full-Stack Web Developer",
            url: "https://www.mxindonesia.com",
            start: "January 2023",
            end: "December 2023",
            shortDescription: [
                "Created frontend of the website based on the UI/UX",
                "Connected the Frontend and the Backend using API",
                "Created the backend using NextJS, Prisma, MySQL, Axios, Zustand, and React Hook Form",
                "Deploying the website to the VM in the server using Docker",
                "Maintaining and Editing client website that already exist.",
                "I've also experience managed a small team that includes Frontend Developers, Designer, and Content Writer in Creative Team."
            ],
        },
        // {
        //     name: "Instagram",
        //     role: "Content Creator",
        //     url: "https://www.mxindonesia.com",
        //     start: "May 2023",
        //     end: "Present",
        //     shortDescription: [
        //         "Upon graduating in 2021, I began creating content on YouTube, with the aim of enhancing my skills and working with the latest technologies, specifically React and Node.",
        //         "Over time, I have developed and shared over 50 projects using React on my channel.",
        //         "As a result, my channel has gained a substantial following, with over 11,000 subscribers to date. I have also had the pleasure of collaborating with various brands throughout my journey.",
        //     ],
        // },
        {
            name: "MX Indonesia",
            role: "Web Developer [Intern]",
            url: "https://www.mxindonesia.com",
            start: "April 2022",
            end: "Desember 2022",
            shortDescription: [
                "Created the website using Wordpress based on the UI/UX",
                "Maintaining and Editing client website that already exist.",
                "I also created the website using ReactJS and NodeJS",
                "Deploying the website to the VM in the server using Docker",
                "And as a intern, i learn more about the latest technology for website"
            ],
        },
        {
            name: "UMB Library",
            role: "Data Entry [Intern]",
            url: "https://lib.mercubuana.ac.id/id",
            start: "January 2022",
            end: "June 2022",
            shortDescription: [
                "Help to input the Student thesis file to the system based on the requirement of the library",
                "Help to maintain the book in the library",
                "To make my work faster, I create program to semi-automatically input the system using Python"
            ],
        },
        {
            name: "Jakarta Creative Hub",
            role: "Web Developer [Intern]",
            url: "https://jakartacreativehub.jakarta.go.id/",
            start: "November 2019",
            end: "November 2020",
            shortDescription: [
                "Brainstorming with the designer about how the website look like",
                "Created the website using Wordpress",
                "Deploying the website to the server"
            ],
        }
    ];

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
        <section className='xl:pt-[10rem] text-white-primary' name='experience' id='experience'>
            <div className='px-0 xl:px-[3rem]'>
                <div className='flex flex-col xl:flex-row justify-start items-start xl:items-center gap-8'>
                    <h2 className='text-2xl md:text-3xl xl:text-4xl font-semibold uppercase font-space'>My Experience</h2>
                    <div className='bg-white-primary w-[25%] h-[2px] z-[20]' />
                </div>

                <div className='grid grid-cols-1 xl:grid-cols-[2fr_1fr] my-10'>
                    <p className='text-justify'>I am a firm believer in the philosophy of learning by doing, especially when it comes to web development. My approach to mastering this field is a blend of consistent practice, continuous learning, and immediate application of newly acquired knowledge to real-world projects. Until now, I have amassed considerable experience in creating websites and having the opportunities to work with several companies. This hands-on experience in the professional realm has not only honed my technical skills but also enriched my understanding of the industry's dynamics and demands. My journey so far has been both challenging and rewarding, and I look forward to further growth and accomplishments in my career. Below are the highlights of my professional career in the field of web development:</p>
                    <div></div>
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

                    <div className="exp-details  w-full xl:w-[40vw]">
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

                <Certification />

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
