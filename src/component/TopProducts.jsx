import React from 'react'
import image1 from '../assets/images/topimg1.png'
import image2 from '../assets/images/topimg2.png'
import image3 from '../assets/images/topimg3.png'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const productsData = [
    {
        id:1,
        img:image1,
        title:'Casual Wear',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:2,
        img:image2,
        title:'Printed Tshirt',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:3,
        img:image3,
        title:'Women Tshirt',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    }
]
const TopProducts = () => {
  return (
    <>
    <div>
        <div className="container">
      {/* Header Section */}
      <div className='text-left mb-24 ml-10'>
                <p data-aos='fade-up' className='text-xl text-orange-600'>Top Rated Products for you</p>
                <h1 data-aos='fade-up' className='text-3xl font-bold'>Best Products</h1>
                <p data-aos='fade-up' className='text-x5 text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus labore ratione natus!
                </p>
               </div>
      {/* Body Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28
      md:gap-5 place-items-center'>
        {   productsData.map((data)=>(
                <div
                data-aos='zoom-in'
                className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80
                dark:hover:bg-orange-300 hover:text-white relative shadow-xl duration-300
                group max-w-[300px]'
                >
                    {/* image Section */}
                    <div className='h-[100px]'>
                      <img src={data.img} alt="" 
                      className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105
                      duration-300 drop-shadow-md'
                      />
                    </div>
                    {/* Details Section */}
                    <div className='p-4 text-center'>
                   {/* star rating */}
                   <div className='w-full flex items-center justify-center gap-1'>
                     <FaStar className='text-yellow-500' />
                     <FaStar className='text-yellow-500' />
                     <FaStar className='text-yellow-500' />
                     <FaStar className='text-yellow-500' />
                   </div>
                   <h1 className='text-xl font-bold'>{data.title}</h1>
                   <p className='text-gray-500 group-hover:text-white duration-300
                   text-sm line-clamp-2'>{data.description}</p>

                   <Link to='/OrderPage'>
                   <button
                   className='bg-orange-300 hover:scale-105 duration-300 text-white
                   py-1 px-4 rounded-full mt-4 group-hover:bg-orange-700 group-hover:text-primray'
                //    onClick={handleOrderPopup}
                   
                   >Order Now</button>
                   </Link>
                    </div>
                </div>
            ))
        }
      </div>
        </div>
    </div>
    </>
  )
}

export default TopProducts