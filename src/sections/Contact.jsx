import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

import { slideIn, showText, staggerAnimation, staggerItems } from '../../utils/motion'
// import TektikLogo from '../public/horizontal/tektik-white.png'

import { FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill, RiGithubFill } from 'react-icons/ri'


export default function Contact() {
    return (
        <footer name='contact' className='bg-white-secondary backdrop-blur-[10px] text-white pt-[7rem] pb-8 px-3 md:px-8 xl:px-[7rem] relative overflow-hidden'>

            <motion.hr
                variants={slideIn('right', 0.5, 0.8)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className='bg-white border-none outline-none opacity-30 w-[60rem] h-[.5px] absolute right-[40%] top-[50%]' />

            <motion.hr
                variants={slideIn('up', 0.5, 0.8)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className='bg-[#ffffff4b] md:bg-white md:opacity-30 h-[30rem] w-[1px] absolute left-[20%] xl:left-[40%] top-[15%]' />


            <div className='grid grid-cols-1 px-3 md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_1.5fr] justify-end'>
                <div></div>
                <div className='flex flex-col gap-4 items-end'>
                    <div className='flex flex-col gap-6'>
                        <div className="overflow-hidden">
                            <motion.h2
                                variants={showText(0.3, 0.5)}
                                initial='hidden'
                                whileInView='show'
                                viewport={{ once: true }}
                                className='text-2xl font-semibold text-blue-primary'>Contact Me</motion.h2>
                        </div>

                        <div className="overflow-hidden">
                            <motion.p
                                variants={showText(0.5, 0.5)}
                                initial='hidden'
                                whileInView='show'
                                viewport={{ once: true }}
                                className='text-9xl font-bold'>Let's Talk</motion.p>
                        </div>
                    </div>

                    <div className='grid grid-cols-[3fr_1fr] xl:grid-cols-[1.5fr_1fr] gap-8 items-center'>
                        <motion.hr
                            variants={slideIn('left', 0.6, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true }}
                            className='bg-blue-primary border-none w-[10rem] h-1 hidden xl:block justify-self-end' />

                        <motion.p
                            variants={slideIn('down', 0.6, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true }}
                            className='text-xl'>I am looking forward to start a great project with you.</motion.p>
                    </div>

                    <motion.div
                        variants={slideIn('down', 0.6, 0.5)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                    >
                        <Image
                            src='/long-arrow.svg'
                            width={500}
                            height={500}
                            className='h-[10rem] w-auto object-contain mt-8'
                        />
                    </motion.div>
                </div>

                <div className='flex flex-col gap-2 mt-[5rem]'>
                    <motion.p
                        variants={slideIn('left', 0.5, 0.8)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                        className='text-2xl mt-8 font-bold'>
                        My Location
                    </motion.p>

                    <motion.p
                        variants={slideIn('left', 0.5, 0.8)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                        className='xl:max-w-[400px]'>Kunciran Indah, Pinang, Kota Tangerang, Banten, Indonesia. 15144</motion.p>

                    <motion.div
                        variants={staggerAnimation()}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                        className='flex justify-between md:justify-start items-center gap-4 text-blue-primary mt-[3rem] xl:mt-4'>
                        <motion.div
                            variants={staggerItems('left')}
                        >
                            <Link
                                href='https://github.com/alvinirwanto'
                                className='duration-200 hover:opacity-60'
                            >
                                <RiGithubFill className='text-3xl xl:text-2xl' />
                            </Link>
                        </motion.div>


                        <motion.div
                            variants={staggerItems('left')}
                        >
                            <Link
                                href='https://www.instagram.com/alvinirwanto/'
                                className='duration-200 hover:opacity-60'
                            >
                                <RiInstagramFill className='text-3xl xl:text-2xl' />
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={staggerItems('left')}
                        >
                            <Link
                                href='https://www.linkedin.com/in/alvin-irwanto/'
                                className='duration-200 hover:opacity-60'
                            >
                                <FaLinkedin className='text-3xl xl:text-2xl' />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                <div></div>
            </div>

            <p className='text-center text-white mb-[5rem]'>© Copyright {new Date().getFullYear()} Alvin Irwanto  |  All Rights Reserved</p>
        </footer>
    )
}