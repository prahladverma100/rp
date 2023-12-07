import React from 'react'
import house_img1 from '../assets/image/png/house_img1.png'
import line from '../assets/image/png/line.png'
import line1 from '../assets/image/png/line1.png'
import color_sample from '../assets/image/png/color_sample.png'
import slider_img from '../assets/image/png/slider_img.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hov_img from '../assets/image/png/hov_img.png'
import Slider from "react-slick";

const Section3 = () => {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    centerPadding: "0px",
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,

        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

    ]
  };
  return (
    <div className='section_bg_img3 bg-no-repeat bg-cover relative'>
      <div className=' absolute w-full top-[-1px]'>
        <img className='w-full' src={line} alt="" />
      </div>
      <div className=' absolute bottom-[-1px] w-full'>
        <img className=' w-full' src={line1} alt="" />
      </div>
      <div className=' container mx-auto xl:px-36 px-4'>
        <div className='lg:pt-60 lg:pb-72 pt-20 pb-20'>
          <Slider {...settings}>

            <div className='w-4/12 flex justify-center'>
              <div className=' lg:px-10 mx-3 box px-6 py-9  bg-white   rounded-[15px] border-[#888]'>
                <p className=' ff_Poppins font-bold text-xl text-curnt text-[#888888]'>Exterior </p>
                <img className=' w-full slider-img' src={house_img1} alt="" />
                <div className='slider-btn1'>
                  <button className=' lg:pt-3 curnt-btn pt-1 bg-[#888]  lg:pb-2 pb-1  ff_poppins font-bold text-sm text-white mt-3 lg:mt-5  lg:ps-6 ps-5 rounded-[100px] lg:pe-6 pe-5'>MORE</button>
                </div>
              </div>
            </div>
            <div className='w-4/12 flex justify-center'>
              <div className=' lg:px-10 mx-3 box px-6 py-9  bg-white  rounded-[15px] border-[#888]'>
                <p className=' ff_Poppins font-bold text-xl text-curnt  text-[#888888]'>Interior </p>
                <img className='  w-full slider-img' src={slider_img} alt="" />
                <div className='slider-btn1'>
                  <button className=' lg:pt-3 curnt-btn  pt-1 bg-[#888]  lg:pb-2 pb-1 ff_poppins font-bold text-sm text-white mt-3 lg:mt-5  lg:ps-6 ps-5 rounded-[100px] lg:pe-6 pe-5'>MORE</button>
                </div>
              </div>
            </div>
            <div className='w-4/12 flex justify-center'>
              <div className=' lg:px-10 box mx-3 px-6 py-9 bg-white rounded-[15px] border-[#888]'>
                <p className=' ff_Poppins font-bold text-xl text-curnt text-[#888888]'>your perfect color </p>
                <img className=' w-full slider-img' src={color_sample} alt="" />
                <div className='slider-btn1'>
                  <button className=' lg:pt-3 curnt-btn pt-1 bg-[#888] hover:btn_color1 lg:pb-2 pb-1 ff_poppins font-bold text-sm text-white mt-3 lg:mt-5  lg:ps-6 ps-5 rounded-[100px] lg:pe-6 pe-5'>MORE</button>
                </div>
              </div>
            </div>
            <div className='w-4/12 flex justify-center'>
              <div className=' lg:px-10 box mx-3 px-6 py-9  bg-white rounded-[15px] border-[#888]'>
                <p className=' ff_Poppins font-bold text-xl text-curnt text-[#888888]'>Exterior </p>
                <img className=' w-full slider-img' src={house_img1} alt="" />
                <div className='slider-btn1'>
                  <button className=' lg:pt-3 curnt-btn pt-1 bg-[#888]  lg:pb-2 pb-1 ff_poppins font-bold text-sm text-white mt-3 lg:mt-5  lg:ps-6 ps-5 rounded-[100px] lg:pe-6 pe-5'>MORE</button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Section3