import React from 'react'
import { useState } from 'react'
import rp_logo from '../assets/image/png/rp_logo.png'
import house_img from '../assets/image/png/house_img.png'
import hero_section_line from '../assets/image/png/hero_section_line.png'
import img1 from '../assets/image/png/img1.png'

const Hero_section = () => {
    const [open, setOpen] = useState(false);
    if (open === true) {
        document.body.classList.add("overflow-hidden")
    }
    else {
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <div className=' hero_img bg_img3 bg-no-repeat bg-cover relative'>
            <div className=' absolute bottom-[17%] left-0' >
                <img className=' w-40 sm:w-52 md:w-64 lg:w-80 xl:w-96   z-10  ' src={house_img} alt="" />
            </div>
            <div className=' absolute right-0 bottom-[7%]'>
                <img className='w-40 sm:w-52 md:w-64 lg:w-80 xl:w-96  z-10' src={img1} alt="" />
            </div>
            <div className=' absolute bottom-[-1px] w-full'>
                <img className=' w-full  left-0' src={hero_section_line} alt="#" />
            </div>
            <div className='container mx-auto'>
                <div className='w-full top-0 left-0'>
                    <div className='lg:flex items-center justify-between  bg-transpent lg:px-10 px-3'>
                        <span className='cursor-pointer'> <img src={rp_logo} alt="#" className='z-[11] max-w-[160px] lg:max-w-[210px] w-full relative top-[12px]' /></span>
                        <div onClick={() => setOpen(!open)} className='text-4xl text-white absolute right-10 top-7 cursor-pointer lg:hidden z-[11]'>
                            <button name={open ? 'close' : 'menu'}>&#x2630;</button>
                        </div>
                        <ul className={` flex justify-center items-center fixed flex-col lg:flex-row h-full lg:gap-11  gap-11 lg:pb-0  lg:static bg-[#57297c] lg:bg-transparent lg:z-auto z-[9] left-0 w-full lg:h-auto lg:w-auto   text-center lg:text-start  transition-all duration-500 ease-in ${open ? 'top-0 opacity-100' : 'top-[-390%]'} `}>

                            <li onClick={() => setOpen(!open)} className="relative after:absolute after:bottom-[-2px] after:left-[20px] after:h-[3px] after:rounded-full after:ease-in-out after:duration-300 after:w-0 after:hover:w-[22px] after:bg-[#CC33D9]"><a className="text-white ff_Poppins font-bold text-[21px]" href="">Home</a></li>
                            <li onClick={() => setOpen(!open)} className="relative after:absolute after:bottom-[-2px] after:left-[20px] after:h-[3px] after:rounded-full after:ease-in-out after:duration-300 after:w-0 after:hover:w-[22px] after:bg-[#CC33D9]"><a className="text-white ff_Poppins font-bold text-[21px]" href="">About Us</a></li>
                            <li onClick={() => setOpen(!open)} className="relative after:absolute after:bottom-[-2px] after:left-[20px] after:h-[3px] after:rounded-full after:ease-in-out after:duration-300 after:w-0 after:hover:w-[22px] after:bg-[#CC33D9]"><a className="text-white ff_Poppins font-bold text-[21px]" href="">Gallery</a></li>
                            <li onClick={() => setOpen(!open)} className="relative after:absolute after:bottom-[-2px] after:left-[20px] after:h-[3px] after:rounded-full after:ease-in-out after:duration-300 after:w-0 after:hover:w-[22px] after:bg-[#CC33D9]"><a className="text-white ff_Poppins font-bold text-[21px]" href="">Contact Us</a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-4'>


                <div className=' flex flex-col lg:flex-row  justify-center'>
                    <div className=' pb-96 lg:pt-40 pt-11'>
                        <div className='flex justify-center text-center lg:text-start'>
                            <h1 className=' ff_poppins lg:text-5xl text-4xl font-semibold text-white max-w-lg z-[1] leading-10'>We Make Your Home More Beautiful</h1>
                        </div>
                        <div className=' text-center lg:text-start flex justify-center '>
                            <p className=' ff_poppins font-normal text-white text-xl max-w-[500px] z-[1]'>From choosing the right paint to getting an expert touch - leave it on us.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero_section