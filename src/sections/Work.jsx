import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { RiExternalLinkLine, RiGithubLine } from 'react-icons/ri'

const works = [
    {
        image: '/work/pd-mercubuana.png',
        title: 'Pangkalan Data Universitas Mercu Buana',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique asperiores magnam amet fugiat possimus facere quos autem vero laudantium, porro laboriosam id ipsa cum voluptatem labore ullam, voluptates, enim modi.',
        tech: [
            'MongoDB',
            'ExpressJS',
            'ReactJS',
            'NodeJS',
            'Redux'
        ],
        linkweb: '',
        linkgit: ''
    },

    {
        image: '/work/pd-mercubuana.png',
        title: 'Pangkalan Data Universitas Mercu Buana',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique asperiores magnam amet fugiat possimus facere quos autem vero laudantium, porro laboriosam id ipsa cum voluptatem labore ullam, voluptates, enim modi.',
        tech: [
            'MongoDB',
            'ExpressJS',
            'ReactJS',
            'NodeJS',
            'Redux'
        ],
        linkweb: '',
        linkgit: ''
    },

    {
        image: '/work/pd-mercubuana.png',
        title: 'Pangkalan Data Universitas Mercu Buana',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique asperiores magnam amet fugiat possimus facere quos autem vero laudantium, porro laboriosam id ipsa cum voluptatem labore ullam, voluptates, enim modi.',
        tech: [
            'MongoDB',
            'ExpressJS',
            'ReactJS',
            'NodeJS',
            'Redux'
        ],
        linkweb: '',
        linkgit: ''
    }
]

export default function Work() {
    return (
        <section className='text-white-primary px-3 md:px-0 xl:px-[3rem] py-[5rem] relative'>
            <div className='absolute right-[50%] top-[25%] border-r-[3px] border-white-primary h-[130vh] z-[-1]'></div>

            <div className='flex justify-start items-center gap-8'>
                <h2 className='text-3xl md:text-4xl font-semibold uppercase font-space'>My Work</h2>
                <div className='bg-white-primary w-[25%] h-[2px] z-[20]' />
            </div>
            <div className='flex justify-end text-end'>
                <p className='max-w-[10vw] text-blue-primary'>Here are the projects I've developed in my role as a Frontend Web Developer:</p>
            </div>


            <div className="flex flex-col gap-[10rem] mt-[5rem] z-[70]">
                {
                    works.map((work, i) => (
                        <div key={i} className={`grid grid-cols-10 place-items-center ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                            <div className={`${i % 2 === 0 ? 'col-start-1 xl:col-start-2 col-end-7' : 'col-start-5 col-end-11 xl:col-end-10'} relative grid-rows-1 row-start-1 bg-white-secondary min-h-[45vh] rounded-lg w-full z-10`}>
                                <Image
                                    height={700}
                                    width={700}
                                    src={work.image}
                                    className='object-cover w-full h-full absolute bg-clip-content p-8 border-2 border-blue-primary rounded-lg'
                                />
                                <div className={`w-full h-full ${i % 2 === 0 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#61dcfb4b] to-transparent absolute rounded-lg`}></div>
                            </div>
                            <div className={`${i % 2 === 0 ? 'col-start-5 col-end-11 items-end' : 'col-start-1 col-end-7 items-start'} grid-rows-1 row-start-1 flex flex-col gap-4 z-20`}>
                                <h3 className='text-2xl xl:text-3xl font-semibold'>{work.title}</h3>
                                <p className={`${i % 2 === 0 ? 'corner-cut-2' : 'corner-cut-3'} shadow-2xl bg-white-primary text-black-primary p-6 font-medium text-lg`}>{work.review}</p>
                                <div className='flex gap-5 font-medium text-lg mt-4 flex-wrap text-blue-primary'>
                                    {
                                        work.tech.map((t, i) => (
                                            <span key={i}>{t}</span>
                                        ))
                                    }
                                </div>

                                <div className='flex gap-4'>
                                    <Link href='' target='_blank'>
                                        <RiGithubLine className='hover:text-blue-primary duration-300 text-3xl' />
                                    </Link>

                                    <Link href='' target='_blank'>
                                        <RiExternalLinkLine className='hover:text-blue-primary duration-300 text-3xl' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
