import React from 'react'
import image1 from '../assets/images/p1.png'
import image2 from '../assets/images/p2.png'
import image3 from '../assets/images/p3.png'
import image4 from '../assets/images/p4.png'
import image5 from '../assets/images/p5.png'
import {FaStar} from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const productsData = [
    {
        id:1,
        img:image1,
        title:'Women Ethnic',
        rating:5.0,
        author:'White',
        aosDelay:'0'
    },
    {
        id:2,
        img:image2,
        title:'Women Western',
        rating:4.5,
        author:'Red',
        aosDelay:'200'
    },
    {
        id:3,
        img:image3,
        title:'Goggles',
        rating:4.7,
        author:'Brown',
        aosDelay:'400'
    },
    {
        id:4,
        img:image4,
        title:'Printed T-Shirt',
        rating:4.4,
        author:'Yellow',
        aosDelay:'600'
    },
    {
        id:5,
        img:image5,
        title:'Fashin T-Shirt',
        rating:4.5,
        author:'Pink',
        aosDelay:'800'
    }
]
const Products = () => {
  return (
    <>
    <div className='mt-28 mb-12'>
        <div className='container'>
            {/* Header section */}

               <div className='text-center mb-12 max-w-[600px] mx-auto'>
                <p data-aos='fade-up' className='text-[19px] text-orange-600'>Top Selling Products for you</p>
                <h1 data-aos='fade-up' className='text-3xl font-bold'>Products</h1>
                <p data-aos='fade-up' className='text-x5 text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus labore ratione natus!
                </p>
               </div>

            {/* Body section */}

               <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4
                lg:grid-cols-5 place-items-center gap-5'>

                     {/* card Section */}

                    {
                        productsData.map((data)=>(
                            <div
                            data-aos='fade-up'
                            data-aos-delay={data.aosDelay}
                            key={data.id} className='space-y-3'>
                                <img src={data.img} alt="" 
                                className='h-[220px] w-[150px] object-cover rounded-md '
                                />
                                <div>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <p className='text-sm text-gray-600'>{data.author}</p>
                                    <div className='flex item-center gap-1'>
                                        <FaStar className='text-yellow-400' />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                {/* view all buttons */}
                <div className='flex justify-center'>
                    <Link to='/OurProducts'>
                    <button className='text-center mt-10 cursor-pointer
                    bg-orange-400 text-white py-1 px-5 rounded-md'>View All Products</button>
                    </Link>
                </div>
               </div>

        </div>
    </div>
    </>
  )
}

export default Products