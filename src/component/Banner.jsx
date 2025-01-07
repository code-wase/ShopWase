import React from 'react'
import banner from '../assets/images/b1.png'
import {IoFastFood } from 'react-icons/io5'
import {GiFoodTruck} from 'react-icons/gi'
const Banner = () => {
  return (
    <>
    <div className='min-h[550] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
        {/* image Section */}
         <div data-aos='zoom-in'>
            <img src={banner} alt="" 
            className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgb(0,0,0,1)]
            object-cover mt-8'
            />
         </div>

        {/* Text Details Section */}

        <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 data-aos='fade-up'
            className='text-3xl sm:text-4xl font-bold'
            >
                Winter Sale Upto 50% Off</h1>
                <p data-aos='fade-up' className='text-sm text-gray-500 tracking-wide leading-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe qui porro debitis aut beatae expedita.
                </p>

                <div className='flex flex-col gap-4'>
                    <div data-aos='fade-up' className='flex items-center gap-4'>
                        
                        <div data-aos='fade-up' className='flex items-center gap-4'>
                            <IoFastFood 
                            className='text-4xl h-12 w-12 shadow-sm rounded-full bg-orange-100
                            dark:bg-orange-400'
                            />
                            <p>Fast Delivery</p>
                        </div>
                        <div data-aos='fade-up' className='flex items-center gap-4'>
                            <GiFoodTruck 
                            className='text-4xl h-12 w-12 shadow-sm rounded-full bg-orange-100
                            dark:bg-orange-400'
                            />
                            <p>Easy Payment method</p>
                        </div>
                        <div data-aos='fade-up' className='flex items-center gap-4'>
                            <GiFoodTruck 
                            className='text-4xl h-12 w-12 shadow-sm rounded-full bg-orange-100
                            dark:bg-orange-400'
                            />
                            <p>Get Offer</p>
                        </div>
                    </div>
                </div>
        </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Banner