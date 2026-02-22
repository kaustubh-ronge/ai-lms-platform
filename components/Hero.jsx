'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {
    const imageRef = useRef(null);
    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled")
            }
            else {
                imageElement.classList.remove("scrolled");
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className='pb-20 px-4'>
            <div className='container mx-auto text-center'>
                <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>Unlock Your Potential <br /> with AI-Powered Learning</h1>
                <p className='text-xl text-gray-400 mb-8 max-w-2xl mx-auto'>
                    An AI-powered LMS platform that helps you create, manage, and deliver engaging online courses with real-time insights.
                </p>
                <div className='flex justify-center space-x-4'>
                    <Link href='/workspace'>
                        <Button size='lg' className='px-8'>Get Started</Button>
                    </Link>
                </div>
                <div className='hero-image-wrapper'>
                    <div ref={imageRef} className='hero-image'>

                        <Image src={'/banner.jpeg'} alt='LMS Banner' height={720} width={1280} priority className='rounded-lg shadow-2xl border border-gray-800 mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection