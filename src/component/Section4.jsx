import React from 'react'
import living from '../assets/image/png/living.png'
import dining from '../assets/image/png/dining.png'
import office from '../assets/image/png/office.png'
import bathroom from '../assets/image/png/bathroom.png'
import bedroom from '../assets/image/png/bedroom.png'


const Section4 = () => {
    return (
        <div className=' relative'>

            <div className=' container mx-auto  px-4'>
                <p className=' text-center text-gradient ff_Poppins font-bold text-[32px] mt-[-19px]'>Gallery</p>
                <div className='flex justify-center lg:pt-60 pt-10'>
                    <div className='lg:flex gap-24 flex-row'>

                        <div className='w-full lg:w-1/2 '>
                            <div className='flex flex-col'>
                                <div className=' flex  z-[1]'>
                                    <img className=' z-[1]' src={living} alt="" />
                                </div>
                                <div>
                                    <p className='flex ff_Poppins font-medium   text-black text-3xl pt-4 text-gradient'>Living Room</p>
                                </div>
                            </div>
                            <div className='flex justify-end lg:pt-40 pt-10 flex-col'>
                                <div className='flex'>
                                    <img className='' src={dining} alt="" />
                                </div>
                                <p className='flex ff_Poppins font-medium  pt-4 text-black text-3xl text-gradient'>Kitchen</p>
                            </div>

                        </div>

                        <div className='w-full lg:w-1/2 '>
                            <div className='flex justify-start flex-col lg:mt-[-150px] mt-[50px]'>
                                <img src={office} alt="" />
                                <p className='flex ff_Poppins font-medium pt-4  text-black text-3xl text-gradient'>Office</p>
                            </div>
                            <div className='flex justify-start  lg:mt-28 mt-10 lg:pb-10 pb-5 flex-col'>
                                <img src={bathroom} alt="" />
                                <p className='flex ff_Poppins font-medium pt-4  text-black text-3xl text-gradient'>Bath</p>
                            </div> <div className='flex justify-start lg:mt-28 mt-10 flex-col'>
                                <img src={bedroom} alt="" />
                                <p className='flex ff_Poppins font-medium pt-4  text-black text-3xl text-gradient'>Bed Room</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section4