import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'

const Navbar = () => {

    const[isScroll, setIsScroll] = React.useState(false);
    const sideMenuref = React.useRef();
    const openMenu = () => {
        sideMenuref.current.style.transform = 'translateX(0rem)';
    }
    const closeMenu = () => {
        sideMenuref.current.style.transform = 'translateX(16rem)';
    }
    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if(scrollY > 50) {
                setIsScroll(true);
                
            }
            else {
                setIsScroll(false);
            }
        }
        )}, []);
        
  return (
    <>
        <div className='fixed top-0 right-0  w-11/12 -z-50 translate-y-[-80%]'>
            <Image src={assets.header_bg_color} alt="" className='w-full'/>
        </div>

        <nav className={`w-full fixed  px-5 lg:px-8 xl:px-[8%]  py-4 flex items-center  justify-between z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : ''}`}>
            
            <a href="#top" className="logo">
                <Image src={assets.logo} alt='Logo' className='w-28 cursor-pointer mr-14' />
            </a>

            <ul className={`hidden md:flex items-center gap-5 lg:gap-6 rounded-full px-10 py-3 ${isScroll?"":"bg-white shadow-sm bg-opacity-50"} `}>
                <li><a className='font-Ovo text-base' href="#top">Home</a></li>
                <li><a className='font-Ovo text-base' href="#about">About Me</a></li>
                <li><a className='font-Ovo text-base' href="#project">Projects</a></li>
                <li><a className='font-Ovo text-base' href="#contact">Contact</a></li>
            </ul>
            
            <div className='flex items-center gap-4 ' >
                <button >
                    <Image src={assets.moon_icon} alt='' className='w-6' />
                </button>
                
                <a  href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo'>Contact <Image src={assets.arrow_icon} alt='' className='w-3' /></a>

                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu_black} alt='' className='w-7 ' />
                </button>
            </div>

            {/* ------ ---- mobile view ---- ---- --- --- */}

            <ul ref={sideMenuref} className='flex md:hidden flex-col gap-4 py-10 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={assets.close_black } alt='' className='w-5 cursor-pointer' />
                </div>

                <li><a className='font-Ovo text-lg' href="#top" onClick={closeMenu}>Home</a></li>
                <li><a className='font-Ovo text-lg' href="#about" onClick={closeMenu}>About Me</a></li>
                <li><a className='font-Ovo text-lg' href="#project" onClick={closeMenu}>Projects</a></li>
                <li><a className='font-Ovo text-lg' href="#contact" onClick={closeMenu}>Contact Us</a></li>
            </ul>


        </nav>
    </>
  )
}

export default Navbar