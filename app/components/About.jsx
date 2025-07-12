import { assets, infoList,toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-15'>
        <h4 className='text-center mb-2 text-lg font-Ovo' >
            Introduction
        </h4>
        <h2 className='text-center text-5xl font-Ovo'>
            About Me
        </h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 mt-7 mb-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt="" className='w-full rounded-3xl' />
            </div>
            <div className=''>
                <p className='mb-7 max-w-2xl font-Ovo'>
                     Passionate and self-driven Computer Science student with a strong foundation in full-stack web development. Skilled in JavaScript, React, Node.js, MongoDB, and Tailwind CSS. I enjoy building clean, responsive applications and constantly learning new technologies. Currently focused on improving my DSA skills and exploring backend architecture, AI, and cloud computing.
                </p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon,icon_dark,title,description},index) => (
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'
                             key={index} >
                                <Image src={icon} alt={title} className='w-7 mt-1' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p>{description}</p>
                        </li>
                    ))}
                </ul>

                <h4 className='my-2 text-gray-700 font-Ovo'>Tools I use</h4>

                <ul className='flex items-center gap-3 sm:gap-5 '>
                    {toolsData.map((tool,index) => (
                        <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    </div>
  )
}

export default About