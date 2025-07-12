import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt="Footer Background" className='w-36 mx-auto mb-2' />
            <div className='w-max flex items-center gap-2 mx-auto '>
                <Image src={assets.mail_icon} alt="" className='w-6' />
                priyanshagarwal05@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Priyansh Agarwal. All rights reserved</p>
            <ul className='flex items-center justify-center gap-10 sm:mt-0'>
                <li><a href='https://github.com/agarwalpriyansh' >Git Hub</a></li>
                <li><a href='https://www.linkedin.com/in/priyansh-agarwal-b180b52b0/'></a>Linkden</li>
                <li><a href='https://leetcode.com/u/Priyanshh_agarwal/'></a>Leetcode</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer