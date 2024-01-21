import { Montserrat } from 'next/font/google'
import React from 'react'
import Background from '../components/Background'

export default function Hero() {
    return (
        <section className='relative w-full h-[calc(100vh_-_9rem)] flex justify-center items-center' name='hero' id='hero'>
            {/* <Background /> */}

            <div className='text-white z-10'>
                <div className='flex justify-start items-center gap-4'>
                    <p className='text-base md:text-2xl md:min-w-[15rem]'>Hello, my name is</p>
                    <div className='bg-white-secondary w-[40%] md:w-[50%] h-[1px]' />
                </div>
                
                <h2 className='text-[2.3rem] leading-[3rem] md:text-7xl font-semibold pt-[3rem] pb-4 font-space uppercase'>Alvin Irwanto.</h2>
                <p className='text-base md:text-2xl text-right'>I'm a
                    <span className='font-semibold text-2xl md:text-4xl text-blue-primary'> Frontend Web Developer</span>
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
