import About from '@/sections/About'
import Experience from '@/sections/Experience'
import Hero from '@/sections/Hero'
import Navbar from '@/sections/Navbar'
import { Inter, Raleway, JetBrains_Mono, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })
const jetBrains_mono = JetBrains_Mono({ subsets: ['latin'] })

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800']
})



export default function Home() {
    return (
        <div className={`${montserrat.className} fixed w-screen h-screen grid place-items-center`}>
            <div className="w-[90%] h-[90vh] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                <Navbar />
                <div className='relative'>
                    <div className='h-full w-[1px] z-[-2] bg-white-secondary absolute top-0 right-[25%]' />
                    <div className='h-full w-[1px] z-[-2] bg-white-secondary absolute top-0 right-[50%]' />
                    <div className='h-full w-[1px] z-[-2] bg-white-secondary absolute top-0 right-[75%]' />

                    <Hero />
                    <About />
                    <Experience />
                </div>
            </div>

        </div>
    )
}
