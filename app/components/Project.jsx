import { assets, workData } from '../../assets/assets.js'
import Image from 'next/image'
import React from 'react'

const Project = () => {
  const projectUrls = {
    kovari: 'https://kovari.vercel.app',
    kashvi: 'https://kashvi-creation-psi.vercel.app/',
    blabber: 'https://blabber-0us3.onrender.com/login',
  }
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
      <div className="px-4 sm:px-6 lg:px-8 overflow-x-hidden mb-20 
                sm:translate-x-[5%] lg:translate-x-[13%]">
                 <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {workData.map(({ title, description, bgImage }, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-3 shadow-md"
            >
                             <div className="relative w-[105%] h-48 rounded-md overflow-hidden mb-3 -ml-[2.5%]">
                <img src={bgImage} alt={title} className="w-full h-full object-cover" />
              </div>

              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-gray-800">{title}</h3>
                {(() => {
                  const url = projectUrls[title.toLowerCase()] || '#'
                  return (
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`}>
                      <Image src={assets.send_icon} alt="open project" className="w-4 cursor-pointer" />
                    </a>
                  )
                })()}
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