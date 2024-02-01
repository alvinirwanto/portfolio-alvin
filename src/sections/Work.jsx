import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { RiExternalLinkLine, RiGithubLine } from 'react-icons/ri'
import OtherWork from './OtherWork'

const works = [
    {
        image: '/work/pd-mercubuana.png',
        title: 'Pangkalan Data Universitas Mercu Buana',
        review: 'This website serves as a data resource for Universitas Mercu Buana, housing confidential data that is not readily disclosed. It features a robust User Authentication system, designed to assign roles and manage access rights. Additionally, it employs Iframe technology to seamlessly integrate PowerBI, thereby facilitating the display of data in a visually engaging and informative manner.',
        tech: [
            'MongoDB',
            'ExpressJS',
            'ReactJS',
            'NodeJS',
            'Redux'
        ],
        linkweb: 'https://pd.mercubuana.ac.id/',
        linkgit: ''
    },

    {
        image: '/work/umbcan.png',
        title: 'UMB Career & Alumni',
        review: 'This website provide information about the alumni of Universitas Mercu Buana. It provide content such as Job Vacancy, Event, and other program provide by the campus. In this project, I worked as a Frontend Developer.',
        tech: [
            'ReactJS',
            'React Bootstrap',
            'Material UI',
            'Axios',
            'React Hook Form'
        ],
        linkweb: 'https://umbcan.mercubuana.ac.id/',
        linkgit: ''
    },
    {
        image: '/work/mx-solution.png',
        title: 'Portfolio Website MX Solution',
        review: 'This website used to promote the product of PT Max Solution Indonesia, named MX Solution. This website provide information about the product, how to collaborate with the company, article, also there is a assessment for the client. This website also provide the admin page to handle the submission and control the article and the user.',
        tech: [
            'NextJS',
            'ReactJS',
            'Zustand',
            'TailwindCSS',
            'Framer Motion',
            'React Hook Form',
            'Prisma ORM',
            'MySQL',
        ],
        linkweb: 'https://mxindonesia.com/',
        linkgit: ''
    }
]

export default function Work() {
    return (
        <section className='text-white-primary px-3 md:px-0 xl:px-[3rem] pt-[10rem] xl:pt-[20rem] relative' name='work' id='work'>
            {/* <div className='absolute right-[50%] top-[11%] xl:top-[20%] border-r-[1px] xl:border-r-[3px] border-white-primary h-[450vh] xl:h-[300vh] z-[-1]'></div> */}

            <div className='flex justify-start items-center gap-8'>
                <h2 className='text-3xl xl:text-4xl font-semibold uppercase font-space'>My Work</h2>
                <div className='bg-white-primary w-[25%] h-[2px] z-[20]' />
            </div>
            <div className='flex justify-end text-end mt-8'>
                <p className='md:max-w-[40vw] xl:max-w-[10vw] text-blue-primary'>Here are the projects I've developed in my role as a Frontend Web Developer:</p>
            </div>


            <div className="flex flex-col gap-[10rem] xl:gap-[5rem] mt-[5rem] z-[70]">
                {
                    works.map((work, i) => (
                        <div key={i} className={`grid grid-cols-10 place-items-center ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>

                            <div className={`${i % 2 === 0 ? 'col-start-1 xl:col-start-2 col-end-11 md:col-end-8 xl:col-end-7' : 'col-start-1 md:col-start-4 xl:col-start-5 col-end-11 xl:col-end-10'} md:-mt-[7rem] xl:mt-0 relative md:grid-rows-1 md:row-start-1 bg-white-secondary min-h-[25vh] xl:min-h-[45vh] w-full z-10`}>
                                <Image
                                    height={700}
                                    width={700}
                                    src={work.image}
                                    className='object-cover w-full h-full absolute bg-clip-content p-4 xl:p-8 border-2 border-blue-primary'
                                />
                                <div className={`w-full h-full ${i % 2 === 0 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#61dcfb4b] to-transparent absolute`}></div>
                            </div>

                            <div className={`${i % 2 === 0 ? 'col-start-2 col-end-11 md:col-start-4 xl:col-start-5 md:col-end-11 items-end' : 'col-start-1 col-end-10 xl:col-start-1 md:col-end-8 xl:col-end-7 items-start'} md:grid-rows-1 md:row-start-1 flex flex-col gap-2 xl:gap-4 z-20 mt-8 xl:mt-0`}>

                                <div className='flex xl:hidden gap-4'>
                                    {
                                        work.linkgit && (
                                            <Link href='' target='_blank'>
                                                <RiGithubLine className='hover:text-blue-primary duration-300 text-xl' />
                                            </Link>
                                        )
                                    }

                                    {
                                        work.linkweb && (
                                            <Link href='' target='_blank'>
                                                <RiExternalLinkLine className='hover:text-blue-primary duration-300 text-2xl' />
                                            </Link>
                                        )
                                    }
                                </div>

                                <h3 className={`text-xl xl:text-3xl font-semibold max-w-full xl:max-w-[70%] px-4 ${i % 2 === 0 ? 'md:bg-gradient-to-r' : 'md:bg-gradient-to-l'} md:from-blue-primary xl:from-transparent to-transparent`}>{work.title}</h3>
                                <p className={`${i % 2 === 0 ? 'corner-cut-2' : 'corner-cut-3'} shadow-2xl bg-white-primary text-justify text-black-primary p-6 font-medium text-sm xl:text-lg`} dangerouslySetInnerHTML={{ __html: work.review }}></p>

                                <div className={`flex ${i % 2 === 0 ? 'justify-end' : 'justify-start'} gap-2 xl:gap-5 font-medium text-lg mt-2 xl:mt-4 flex-wrap text-blue-primary w-full xl:max-w-[70%]`}>
                                    {
                                        work.tech.map((t, i) => (
                                            <span key={i} className='text-sm xl:text-lg'>{t}</span>
                                        ))
                                    }
                                </div>

                                <div className='hidden xl:flex gap-4'>
                                    {
                                        work.linkgit && (
                                            <Link href='' target='_blank'>
                                                <RiGithubLine className='hover:text-blue-primary duration-300 text-3xl' />
                                            </Link>
                                        )
                                    }

                                    {
                                        work.linkweb && (
                                            <Link href='' target='_blank'>
                                                <RiExternalLinkLine className='hover:text-blue-primary duration-300 text-3xl' />
                                            </Link>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <OtherWork />

            <div className='grid grid-cols-4 pr-6 md:pr-0 xl:pr-[6rem] mt-[5rem]'>
                <div className='border-r-[1px] border-white-primary h-[30vh] xl:h-[50vh] flex flex-col gap-3 justify-end items-end'>
                    {[...Array(5).keys()].map((i) => (
                        <div key={i} className='w-5 aspect-square bg-blue-primary mr-4'></div>
                    ))}
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </section>
    )
}
