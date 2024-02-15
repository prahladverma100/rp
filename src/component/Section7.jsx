import React from 'react'

const Section7 = () => {
    return (
        <div>
            <div className='container mx-auto px-4'>
                <h5 className=' text-center ff_Poppins font-bold text-3xl lg:pt-44 pt-10 gradint_color'>Subscribe our newsletter</h5>
                <div className='  flex justify-center'>
                    <p className=' max-w-sm text-center text-base font-normal ff_Poppins leading-10 lg:pb-6 pb-4  lg:pt-10 pt-3'>Subscribe to our newsletter for daily/weekly update of our products and services.</p>


                </div>
                <div className='flex justify-center mb-10 gap-2 flex-col lg:pb-20 pb-2  md:flex-row items-center'>
                    <div className='pb-4 ps-3 pe-3 rounded-[100px]  flex border border-violet-500 pt-4 md:w-96 w-full'>
                        <input className=' focus:outline-none placeholder: w-full  placeholder:text-[14px] placeholder:text-[#333] font-normal' type="text" placeholder='EMAIL' />
                    </div>
                    <button className=' ff_Poppins  font-bold text-white bg_gradient_color text-[14px] rounded-[100px] py-4 px-10'>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Section7