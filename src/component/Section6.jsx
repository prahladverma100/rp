import React from 'react'
import bedroom1 from '../assets/image/png/bedroom1.png'
import charming_yellow from '../assets/image/png/charming_yellow.png'
import line4 from '../assets/image/png/line4.png'
import gradient_img from '../assets/image/png/gradient_img.png'

const Section6 = () => {
    return (
        <div className='bg_img5 bg-no-repeat bg-cover lg:pt-48 pt-0 pb-2 z-10 relative'>
          
            <div className=' absolute top-[-2px] w-full'>
                <img className='w-full' src={line4} alt="" />
            </div>
            <div className=' absolute right-[12px] bottom-[12px] z-[-1]'>
                <img src={gradient_img} alt="" />
            </div>
            <div className='container mx-auto px-4'>
                <div className='lg:flex flex-wrap items-center  pt-24 pb-11'>
                    <div className=' w-full lg:w-3/12'>
                        <div className=' text-center flex justify-center'>
                            <img className='lg:w-full w-96 ' src={bedroom1} alt="" />
                        </div>
                    </div>
                    <div className=' w-full lg:w-6/12 '>
                        <h4 className=' ff_Poppins font-bold lg:leading-[80px] leading-[35px] px-6 sm:leading-[60px] lg:text-start text-center text-white lg:text-[42px] text-[20px] sm:text-[30px]'>Creating a Warm,
                            <span className='flex lg:justify-end justify-center '>  Welcoming Home </span></h4>

                    </div>
                    <div className=' w-full lg:w-3/12 flex justify-center'>
                        <img className=' w-90 lg:mt-[-60px] mt-0' src={charming_yellow} alt="" />

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Section6