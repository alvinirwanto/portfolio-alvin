import Background from '@/components/Background'
import About from '@/sections/About'
import Article from '@/sections/Article'
import Experience from '@/sections/Experience'
import Hero from '@/sections/Hero'
import Navbar from '@/components/Navbar'
import Work from '@/sections/Work'

import { Montserrat } from 'next/font/google'
import Contact from '@/sections/Contact'
import ToasterProvider from '@/components/ToasterProvider'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800']
})



export default function Home() {
    return (
        <div className={`${montserrat.className} h-screen grid place-items-center`}>
            <Background />
            <ToasterProvider />
            <div className="w-[95%] h-[95vh] md:w-[90%] xl:h-[90vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                <Navbar />
                <div className='relative'>
                    {/* <div className='h-full w-[1px] z-[-2] bg-white-secondary absolute top-0 right-[25.05%]' />
                    <div className='h-full w-[1px] z-[-2] bg-white-secondary absolute top-0 right-[50%]' />
                    <div className='h-full w-[1px] z-[-2] bg-white-secondary absolute top-0 right-[75%]' /> */}

                    <div className='grid grid-cols-4 absolute top-0 z-[-2] h-full w-full'>
                        <div className='border-r-[1px] border-white-secondary h-full'></div>
                        <div className='border-r-[1px] border-white-secondary h-full'></div>
                        <div className='border-r-[1px] border-white-secondary h-full'></div>
                    </div>

                    <Hero />
                    <About />
                    <Experience />
                    <Work />
                    <Article />
                    <Contact />
                </div>
            </div>
        </div>
    )
}
