import React from 'react'
import { Icon1 } from './Icon'
import { Facbook } from './Icon'
import { Tiwtter } from './Icon'
import { Insta } from './Icon'

const Last_section = () => {
    return (
        <div className='footer_img bg-no-repeat bg-cover lg:pt-16 pt-0 pb-10'>
            <div className='container px-4 mx-auto'>
                <div className='lg:flex flex-wrap justify-center lg:justify-start'>
                    <div className='w-full lg:w-4/12 pt-16'>
                        <p className='text-white ff_Poppins text-base font-bold text-center flex lg:justify-start justify-center'>RP</p>
                        <div className='text-center lg:text-start flex lg:justify-start justify-center'>
                            <p className=' text-white text-sm pb-1 font-normal max-w-[335px] leading-6 '>Painting with RP means never painting your house again! Our special paint coating comes with a 20 years warranty.</p>
                        </div>
                        <div className='flex gap-8 pt-5 justify-center lg:justify-start'>
                            <span className=' cursor-pointer'><Icon1 /></span>
                            <span className=' cursor-pointer'><Facbook /></span>
                            <span className=' cursor-pointer'> <Tiwtter /></span>
                            <span className=' cursor-pointer'><Insta /></span>

                        </div>

                    </div>
                    <div className='w-full lg:w-5/12 flex justify-center pt-8  gap-20'>
                        <ul>
                            <p className=' text-lg ff_Poppins text-white font-normal pb-9'>Links</p>
                            <li><a href="" className=' ff_Poppins text-[#CACACA] text-xs font-normal'>Home</a></li>
                            <li><a href="" className=' ff_Poppins text-[#CACACA] text-xs font-normal'>About Us</a></li>
                            <li><a href="" className=' ff_Poppins text-[#CACACA] text-xs font-normal'>Gallery</a></li>
                            <li><a href="" className=' ff_Poppins text-[#CACACA] text-xs font-normal'>Contact Us</a></li>
                        </ul>


                        <ul>
                            <p className=' text-lg ff_Poppins text-white font-normal pb-9'>Contact Us</p>
                            <li><a href="" className=' ff_Poppins text-[#CACACA] text-xs font-normal'>+91 1234567890</a></li>
                            <li><a href="" className=' ff_Poppins text-[#CACACA] text-xs font-normal'>XYZ@gmail.com Address </a></li>
                            <li><a href="" className=' ff_Poppins text-[#CACACA] text-xs font-normal'>Address </a></li>

                        </ul>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Last_section