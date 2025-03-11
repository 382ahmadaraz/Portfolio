import React from 'react'
import Image from 'next/image'
import Title from '@/app/components/title/Title'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import Link from 'next/link';

export default function Skills() {
    const logo = [
        { id: 1, name: "HTML5" , image: <FaHtml5/>  },
        { id: 2, name: "CSS3" , image: <FaCss3Alt/> },
        { id: 3, name: "Bootstrap" , image: <FaBootstrap/> },
        { id: 4, name: "Tailwind" , image: <RiTailwindCssFill/> },
        { id: 5, name: "Javascript" , image: <FaJsSquare/> },
        { id: 6, name: "React.js" , image: <FaReact/> },
        { id: 7, name: "Next.js" , image: <RiNextjsLine/> },
        { id: 8, name: "Firebase" , image: <SiFirebase/> },
        { id: 9, name: "MongoDB" , image: <BiLogoMongodb/> },
        { id: 10, name: "Github" , image: <FaGithub/> },

    ]

    return (
        <div id='skills' className='text-white h-fit text-center py-16 bg-dark '>
            <Title title1="My" title2="Skills" />
            <div className='w-[85%] m-auto flex flex-wrap items-center gap-8 justify-evenly p-3 mt-11  '>
                {logo.map((pic, id) => {
                    return (
                        <div key={id} className='[&>*]:w-[6rem] [&>*]:h-[6rem] border border-blue px-9 p-2 text-blue hover:text-white rounded-md cursor-pointer hover:bg-blue hover:shadow-effect'>
                            {pic.image} 
                            {pic.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
