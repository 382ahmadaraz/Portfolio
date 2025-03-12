"use client"
import React from 'react'
import Image from 'next/image'
import Title from '@/app/components/title/Title'
import ahmadOutline from "../../assets/outline1.png"
import { useState } from 'react'
import Subtitle from '@/app/components/subtitle/Subtitle'


export default function About() {

    const [extra, setExtra] = useState()

    return (
        <div id='about' className=' text-white h-fit py-11 bg-gray flex justify-evenly items-center'>
            <div className='h-[65% w-[40%]   '>
                <Image src={ahmadOutline} alt='ahmad' className='bg-gray   '></Image>
            </div>
            <div className='w-[40%] h-[85%]  '>
                <Title title1="About" title2="Me" />
                <Subtitle subtitle="Fronend Developer!" />
                <p className='my-4 text-slate-200'>
                    I am a MERN Stack Developer, but my expertise lies in Front-end Development. I specialize in React.js, Next.js, Tailwind CSS, and Firebase, focusing on creating modern, responsive, and visually appealing web applications.  familiar with  backend technologies (like Node.js, Express.js, and MongoDB) and React Native for mobile
                </p>
                {extra && (
                    <div>  <p className='my-2 text-slate-200'>I also participated in an AI international hackathon, as a Front-End Developer to enhance my skills and gain hands-on experience in integrating AI-driven solutions into web applications.</p></div>
                )}
                <Subtitle subtitle="Education" />
                <div className='text-slate-200'>
                    <li className='my-3'>Bachelor of Science in Computer Science (BSCS)</li>

                    {extra && (
                        <div>  <li className='my-3 '>MERN Stack development course at SMIT (2023-24)</li></div>
                    )}
                </div>

                <button onClick={() => setExtra(!extra)} className='p-2 px-4 my-7 hover:text-white shadow-blue shadow-effect bg-blue text-black rounded-full'>{extra ? "Show Less" : "Read More"}</button>

            </div>

        </div>
    )
}
