import { GrCertificate } from 'react-icons/gr'
import { RiExternalLinkLine } from 'react-icons/ri'

import Link from 'next/link'

const certificates = [
    {
        link: 'https://dicoding.com/certificates/JLX1GW02NZ72',
        title: 'Belajar Dasar Pemrograman Web',
        course: 'Dicoding',
        date: '13 June 2022 - 13 June 2025'
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
        date: '21 July 2022 - 21 July 2025'
    },
    {
        link: 'https://dicoding.com/certificates/L4PQ4Y964XO1',
        title: 'Belajar Membuat Aplikasi Web dengan React',
        course: 'Dicoding',
        date: '06 August 2022 - 06 August 2025'
    },
]

export default function Certification() {
    return (
        <div className='mt-[20vh] xl:mt-[30vh] mb-[5rem]'>
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
    )
}
