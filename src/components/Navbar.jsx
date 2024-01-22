import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink, Events } from 'react-scroll';
import React, { useEffect, useState } from 'react'

import { IoShareSocialOutline, IoCloseSharp } from 'react-icons/io5'
import { RiInstagramLine, RiLinkedinFill, RiGithubLine } from 'react-icons/ri'
import { AiOutlineAppstore } from 'react-icons/ai'

export default function Navbar() {

    const sectionLinks = [
        {
            name: "About",
            link: "about",
            code: '0065'
        },
        {
            name: "Experience",
            link: 'experience',
            code: '0108'
        },
        {
            name: "Work",
            link: 'work',
            code: '0118'
        },
        {
            name: "Contact",
            link: 'contact',
            code: '0105'
        }
    ]

    const [openMenu, setOpenMenu] = useState(false)
    const [activeSection, setActiveSection] = useState('');

    return (
        <>
            <div className='fixed top-0 bg-black-primary w-full h-[3rem] z-[100]'></div>
            <div className='fixed bottom-0 bg-black-primary w-full h-[3rem] z-[100]'></div>

            <nav className='fixed w-[95%] xl:w-[90%] top-[3rem] z-[100] text-sm font-semibold grid grid-cols-[3fr_1fr] xl:grid-cols-2 text-white border-[0.5px] border-white-secondary'>
                <div className='bg-white-secondary backdrop-blur max-h-[4rem] md:max-h-full md:min-h-[4rem]'>
                    <ScrollLink
                        to='hero'
                        offset={-100}
                        activeClass='active'
                        spy={true}
                    >
                        <div className='h-full w-[6.1rem] xl:w-[5rem] bg-white-secondary cursor-pointer'>
                            <Image
                                src='/logo.svg'
                                height={500}
                                width={500}
                                alt='logo'
                                className='w-full h-full object-contain p-3 md:p-3 xl:p-5'
                            />
                        </div>
                    </ScrollLink>
                </div>

                <div className='flex justify-center items-center text-3xl text-white-primary px-6 backdrop-blur xl:hidden'>
                    <AiOutlineAppstore />
                </div>

                <div className='hidden xl:grid grid-cols-[1fr_1fr_1fr_1fr_2fr] min-h-[4rem] backdrop-blur place-items-center uppercase border-white-secondary'>
                    {
                        sectionLinks.map(({ name, link, code }) => (
                            <ScrollLink
                                to={link}
                                key={name}
                                onSetActive={setActiveSection}
                                onSetInactive={() => setActiveSection('')}
                                spy={true}
                                className='relative group w-full h-full grid place-items-center border-r-[0.5px] border-white-secondary cursor-pointer'
                            >
                                <span className={`group-hover:text-black-primary duration-300 ${activeSection === link ? 'text-black-primary' : ''}`}>
                                    {name}
                                </span>

                                <div className={`absolute left-0 bottom-0 w-full h-0 bg-white-primary -z-10 duration-300 ease-in-out group-hover:h-full group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out ${activeSection === link ? 'h-full' : ''}`}></div>

                                <span className={`absolute bottom-1 right-2 font-mono text-[11px] font-light group-hover:text-black-primary opacity-40 ${activeSection === link ? 'text-black-primary' : 'text-white-primary'}`}>{code}</span>
                            </ScrollLink>
                        ))
                    }
                    <div className='group relative w-full h-full cursor-pointer'>
                        <Link
                            target='_blank'
                            href="Frontend_Web Developer_Alvin Irwanto.pdf"
                            className='group-hover:text-black-primary duration-300 flex justify-center items-center w-full h-full'
                        >
                            MY CV
                        </Link>
                        <div className="absolute left-0 bottom-0 w-full h-0 bg-white-primary -z-10 duration-300 ease-in-out group-hover:h-full group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out"></div>
                        <span className='absolute bottom-1 right-2 font-mono text-[11px] font-light text-white-primary group-hover:text-black-primary opacity-40'>0110</span>
                    </div>
                </div>
            </nav>


            {/* Link Social Media */}
            <div className='fixed bottom-5 md:bottom-7 xl:bottom-[3rem] right-4 xl:right-20 2xl:right-24 z-[100]'>
                <div className={`${openMenu ? 'flex' : 'hidden'} flex-col gap-3`}>
                    <Link href='https://github.com/alvinirwanto' target='_blank'>
                        <div className='bg-white-secondary h-[3.5rem] aspect-square grid place-items-center cursor-pointer relative group'>
                            <RiGithubLine className='text-blue-primary text-2xl group-hover:text-black-primary duration-300' />
                            <div className="absolute left-0 bottom-0 w-full h-0 bg-blue-primary -z-10 duration-300 ease-in-out group-hover:h-full group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out"></div>
                        </div>
                    </Link>
                    <Link href='https://www.linkedin.com/in/alvin-irwanto/' target='_blank'>
                        <div className='bg-white-secondary h-[3.5rem] aspect-square grid place-items-center cursor-pointer relative group'>
                            <RiLinkedinFill className='text-blue-primary text-2xl group-hover:text-black-primary duration-300' />
                            <div className="absolute left-0 bottom-0 w-full h-0 bg-blue-primary -z-10 duration-300 ease-in-out group-hover:h-full group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out"></div>
                        </div>
                    </Link>
                    <Link href='https://www.instagram.com/alvinirwanto/' target='_blank'>
                        <div className='bg-white-secondary h-[3.5rem] aspect-square grid place-items-center cursor-pointer relative group'>
                            <RiInstagramLine className='text-blue-primary text-2xl group-hover:text-black-primary duration-300' />
                            <div className="absolute left-0 bottom-0 w-full h-0 bg-blue-primary -z-10 duration-300 ease-in-out group-hover:h-full group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out"></div>
                        </div>
                    </Link>
                </div>

                <div className={`${openMenu ? 'hidden' : 'flex'} flex-col gap-2 items-end`}>
                    <div className='bg-blue-primary h-5 aspect-square' />
                    <div className='bg-blue-primary h-5 aspect-square' />
                    <div className='bg-blue-primary h-5 aspect-square' />
                </div>

                <div
                    className={`group relative ${openMenu ? 'rotate-45 duration-300 ease-in-out bg-blue-primary' : ''} duration-300 ease-in-out bg-white-secondary mt-4 xl:mt-9 h-[3.5rem] aspect-square grid place-items-center cursor-pointer`}
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {
                        openMenu
                            ? <div>
                                <IoCloseSharp className='text-black-primary text-2xl rotate-45 duration-300' />
                                <div className="absolute left-0 bottom-0 w-full h-0 bg-white-primary -z-10 duration-300 ease-in-out group-hover:h-full group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out"></div>
                            </div>

                            : <div>
                                <IoShareSocialOutline className='text-blue-primary text-2xl group-hover:text-black-primary duration-300' />
                                <div className="absolute left-0 bottom-0 w-full h-0 bg-blue-primary -z-10 duration-300 ease-in-out group-hover:h-full group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out"></div>
                            </div>
                    }
                </div>
            </div>

            {/* Triangle */}
            <div className='fixed bottom-5 md:bottom-7 xl:bottom-[3rem] z-[100]'>
                <div className='triangle bg-white-secondary' />
            </div>
        </>
    )
}
