import React from 'react'
import { FaRegFolder } from "react-icons/fa6";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Link from 'next/link'

const otherWorks = [
    {
        title: 'Portfolio Website Jakarta Creative Hub',
        review: 'This website is also for promoting the Jakarta Creative Hub to the public. It provide some information such as Event, information about the place, and article.',
        tech: [
            'Wordpress',
            'CSS'
        ],
        linkweb: 'https://jakartacreativehub.jakarta.go.id',
        linkgit: ''
    },
    {
        title: 'Slicing Website Furniture from Figma Design',
        review: 'This website is used the train my skill in Frontend development. I get this design from <a href="https://www.arshakir.com/">AR Shakir</a> website, and try to convert it from Figma design to a Website.',
        tech: [
            'React JS (Vite)',
            'TailwindCSS'
        ],
        linkweb: 'https://furniture-shop-nu.vercel.app/',
        linkgit: 'https://github.com/alvinirwanto/furniture-app-react'
    },
    {
        title: 'Youtube Clone',
        review: 'I train my knowledge about web development by create this youtube clone. In this project, I consume the API and turn it into website that ready to use.',
        tech: [
            'React JS (Vite)',
            'Rapid API',
            'Axios',
            'TailwindCSS'
        ],
        linkweb: 'https://youtube-clone-eight-rho.vercel.app/',
        linkgit: 'https://github.com/alvinirwanto/youtube-clone'
    }
]

export default function OtherWork() {
    return (
        <div className='mt-[10rem]'>
            <div className='flex justify-center items-center gap-8'>
                <div className='bg-white-primary w-[10%] h-[2px] z-[20]' />
                <h2 className='text-base md:text-xl xl:text-2xl font-semibold text-center uppercase font-space'>Other Noteworthy Project</h2>
                <div className='bg-white-primary w-[10%] h-[2px] z-[20]' />
            </div>

            <div className='w-full h-full mt-[5rem] relative'>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:p-5 h-max'>
                    {
                        otherWorks.map((work, i) => (
                            <div key={i} className='h-[18rem] md:h-[20rem] backdrop-blur-[10px] corner-cut-3 hover:mt-[-1rem] hover:duration-300 duration-300 flex flex-col gap-5 xl:gap-8 w-full bg-white-secondary p-8'>
                                <div className='flex items-center justify-between text-white-primary'>
                                    <FaRegFolder className='text-blue-primary text-2xl xl:text-4xl' />
                                    <div className='flex gap-4'>
                                        {
                                            work.linkgit && (
                                                <Link href='' target='_blank'>
                                                    <FiGithub className='hover:text-blue-primary duration-300 text-xl md:text-2xl' />
                                                </Link>
                                            )
                                        }

                                        {
                                            work.linkweb && (
                                                <Link href='' target='_blank'>
                                                    <FiExternalLink className='hover:text-blue-primary duration-300 text-xl md:text-2xl' />
                                                </Link>
                                            )
                                        }
                                    </div>
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <h4 className='text-base md:text-lg xl:text-2xl font-semibold h-[3rem] xl:h-[4rem]'>{work.title}</h4>
                                    <p className='opacity-60 text-xs md:text-sm text-justify' dangerouslySetInnerHTML={{ __html: work.review }}></p>
                                    <div className='w-full flex gap-2 xl:gap-3 text-blue-primary'>
                                        {
                                            work.tech.map((t, i) => (
                                                <span key={i} className='text-xs xl:text-sm'>{t}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
