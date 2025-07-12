import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <div id="project" className='w-full px-[12%] py-10 scroll-mt-15'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        My Portfolio
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        My Latest Work
      </h2>
      <p className='text-center max-w-2xl mx-auto mt-4 mb-12 font-Ovo'>
        Here are some of my recent projects that showcase my skills and creativity. Each project reflects my passion for web development and my commitment to delivering high-quality work.
      </p>
      <div className="px-4 sm:px-6 lg:px-8 overflow-x-hidden mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          {workData.map(({ title, description, bgImage }, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-3 shadow-md"
            >
              <div className="relative w-full h-48 rounded-md overflow-hidden mb-3">
                <img src={bgImage} alt={title} className="w-full h-full object-cover" />
              </div>

              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-gray-800">{title}</h3>
                <Image src={assets.send_icon} alt="arrow" className="w-4" />
              </div>

              <p className="text-base text-gray-600 leading-tight break-words">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project