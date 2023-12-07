import React from 'react'
import colors_img from '../assets/image/png/colors_img.png'


const Section2 = () => {
    return (
        <div className=''>


            <div className=' container lg:pt-20 pt-9 mx-auto px-4'>
                <div className=' lg:flex flex-row items-center'>
                    <div className=' z-10 lg:w-1/2 w-full pe-9' data-aos="fade-right">
                        <img className=' w-full cursor-pointer' src={colors_img} alt="" />
                    </div>
                    <div className=' lg:w-1/2 w-full pe' data-aos="fade-left">
                        <h6 className=' text-3xl ff_poppins bg_gradient font-bold leading-[65px]'>Welcome to RP</h6>
                        <p className='max-w-2xl font-normal ff_Poppins text-base lg:pt-7 pt-2 lg:leading-10 leading-7'>A family-run business, with our own factory nestled in India, we are producing a complete range of traditional and modern paints. We formulate high performance paint, blended with the best ingredients. Our company includes interior and exterior paints, oil-based paints, floor paints and a special range of antimicrobial paints.
                            With a color palette you can easily mix the colors together to expand the range. The numbers of creating different textures, finishes and shades are unlimited.  </p>
                        <button className='btn_color -translate-x-0.5 rounded-[100px] px-14 py-3 text-base ff_poppins text-white font-bold mt-7'>MORE</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section2