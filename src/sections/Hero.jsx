import { Montserrat } from 'next/font/google'
import React from 'react'

import { CgArrowLongDown } from 'react-icons/cg'
import Background from '../components/Background'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800']
})

export default function Hero() {
    return (
        <section className={`${montserrat.className} relative w-full h-[calc(100vh_-_9rem)] flex justify-center items-center`}>
            <Background />

            <div className='text-white z-10'>
                <div className='flex justify-start items-center gap-4'>
                    <p className='text-xl font-mono min-w-[15rem]'>Hello, my name is</p>
                    <div className='bg-white-secondary w-[50%] h-1' />
                </div>
                <h2 className='text-8xl font-semibold pt-[3rem] pb-4'>Alvin Irwanto.</h2>
                {/* <h1 className='text-8xl font-semibold'>I Create a Beautiful Website</h1> */}
                <p className='text-2xl'>I'm a
                    <span className='font-semibold text-4xl text-blue-primary'> Frontend Web Developer</span>
                    <br /> but I can do the
                    <span className='font-semibold text-blue-primary'> UI/UX Design</span> too.
                </p>

                <div className='flex justify-end animate-pulse'>
                    <div className='flex flex-col justify-center items-center mt-9'>
                        <div className='h-[6rem] w-[2px] bg-white -mb-1' />
                        <div className="rotate-square bg-white w-6 h-7" />
                    </div>
                </div>
            </div>
        </section>
    )
}
