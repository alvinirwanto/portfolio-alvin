import Background from '@/components/Background'
import Image from 'next/image'
import React from 'react'

const techs = [
    {
        link: '/logo/html.png',
        name: 'html'
    },
    {
        link: '/logo/css.png',
        name: 'css'
    },
    {
        link: '/logo/javascript.png',
        name: 'javascript'
    },
    {
        link: '/logo/wordpress.png',
        name: 'wordpress'
    },
    {
        link: '/logo/sass-1.png',
        name: 'sass'
    },
    {
        link: '/logo/react.png',
        name: 'react'
    },
    {
        link: '/logo/figma.png',
        name: 'figma'
    },
    {
        link: '/logo/tailwind.png',
        name: 'tailwind'
    },
    {
        link: '/logo/nextjs-dark.png',
        link2: '/logo/nextjs.png',
        name: 'next js'
    },
    {
        link: '/logo/github-dark.png',
        link2: '/logo/github.png',
        name: 'github'
    },
    {
        link: '/logo/framer-motion-1.png',
        name: 'framer motion'
    },
    {
        link: '/logo/mongodb-1.png',
        name: 'mongodb'
    },
]

export default function About() {
    return (
        <section className='py-[5rem]'>
            <div className='text-white-primary relative grid grid-cols-4'>
                {/* <Background /> */}

                <div className='mt-9 md:mt-0 px-3 xl:px-[3rem] flex flex-col justify-end col-start-1 col-end-5 md:col-end-4 grid-rows-1 row-start-2 xl:row-start-1'>

                    <div className='flex justify-start items-center gap-2 md:gap-8'>
                        <h2 className='text-3xl md:text-5xl font-semibold uppercase font-space'>About Me</h2>
                        <div className='bg-white-primary w-[50%] md:w-[35%] h-[2px] z-[20]' />
                    </div>

                    <div className='indent-[3rem] text-base md:text-xl mt-8 text-justify xl:max-w-[60%]'>
                        <p>Hi! I am a person who love challenges and learn something new, especially in web development.
                            I have a previledge to worked at several space, such as co-working space, university, and a start up. My main focus these days is creating website, that not only beautiful in look, but also have a beautiful performance in it. So those website will not only make me happy, but also the client happy.</p>
                    </div>
                </div>

                <div className="group relative flex justify-center items-center col-start-1 md:col-start-2 xl:col-start-3 col-end-5 grid-rows-1 row-start-1 w-full h-[50vh] xl:h-[75vh] mb-[3rem] xl:mb-0 corner-cut-1 overflow-hidden bg-white-secondary">
                    <Image height={500} width={500} src="/Alvin_Irwanto.png" className='object-contain w-full h-full grayscale group-hover:grayscale-0' alt="" />
                    <div className="absolute top-0 flex justify-center items-center col-start-1 md:col-start-2 xl:col-start-3 col-end-5 grid-rows-1 row-start-1 w-full h-[50vh] xl:h-[75vh] mb-[3rem] xl:mb-0 corner-cut-1 overflow-hidden bg-blue-primary opacity-30 hover:opacity-0 duration-300"></div>
                </div>
            </div>


            <div className="grid grid-cols-4 mt-[10rem] xl:mt-[20rem] text-white">
                <div className='col-start-1 col-end-4 md:col-end-3 grid-rows-1 row-start-1 text-base md:text-xl mb-9'>
                    <p>Here a few technologies  i've been working recently</p>
                </div>

                <div className='col-start-1 col-end-4 text-xl'>
                    <div className='grid grid-cols-3 backdrop-blur-sm border-[1px] border-white-secondary'>
                        {
                            techs.map((tech, i) => (
                                <div key={i} className='group border-r-[1px] border-b-[1px] border-white-secondary py-8 flex justify-center items-center relative grayscale hover:grayscale-0 cursor-crosshair'>
                                    <Image
                                        className={`w-8 md:w-[3rem] aspect-square ${tech.name === 'next js' || tech.name === 'github' ? 'group-hover:hidden' : ''}`}
                                        height={500}
                                        width={500}
                                        src={tech.link}
                                    />

                                    {
                                        tech.name === 'next js' || tech.name === 'github' ?
                                            <Image
                                                className='w-8 md:w-[3rem] aspect-square hidden group-hover:block'
                                                height={300}
                                                width={300}
                                                src={tech.link2}
                                            /> : ''

                                    }

                                    <div className="absolute left-0 bottom-0 w-full h-0 bg-white-primary -z-10 duration-300 ease-in-out group-hover:h-full group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out"></div>
                                    <span className='absolute bottom-[1px] md:bottom-2 md:left-2 text-[9px] md:text-xs uppercase group-hover:text-black-primary group-hover:font-semibold'>{tech.name}</span>
                                </div>
                            ))
                        }
                    </div>

                    <div className='bg-black-primary h-4'></div>

                    <div className='corner-cut-2 w-full h-[4rem] xl:h-[6.5rem] bg-white-primary relative flex justify-center items-center'>
                        <div className='absolute corner-cut-2 w-[99.9%] h-[99%] bg-black-primary'>
                            <div className='w-full h-full bg-white-secondary'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 my-[5rem] md:my-[7rem]'>
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
