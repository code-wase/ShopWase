import React from 'react'
import image1 from '../assets/images/Kids1.jpg'
import image2 from '../assets/images/Kids2.jpg'
import image3 from '../assets/images/Kids3.jpg'
import image4 from '../assets/images/Kids4.jpg'
import image5 from '../assets/images/Kids5.jpg'
import image6 from '../assets/images/Kids6.jpg'
import image7 from '../assets/images/Kids7.jpg'
import image8 from '../assets/images/Kids8.jpg'
import image9 from '../assets/images/Kids9.jpg'
import image10 from '../assets/images/Kids10.jpg'
import image11 from '../assets/images/Kids11.jpg'
import image12 from '../assets/images/Kids12.jpg'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const KidsData = [
    {
        id:1,
        img:image1,
        title:'Kids Ware',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:2,
        img:image2,
        title:'Kids Ware',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:3,
        img:image3,
        title:'Kids Ware',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:4,
        img:image4,
        title:'Kids Ware',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:5,
        img:image5,
        title:'Kids Ware',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:6,
        img:image6,
        title:'Kids Ware',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:7,
        img:image7,
        title:'Kids Ware',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:8,
        img:image8,
        title:'Kids Ware',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:9,
        img:image9,
        title:'Kids Ware',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:10,
        img:image10,
        title:'Kids Ware',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:11,
        img:image11,
        title:'Kids Ware',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:12,
        img:image12,
        title:'Kids Ware',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    }
]


const Kids = () => {
  return (
    <>
                <div data-aos='zoom-in' className='mt-10 flex-wrap'>
                    <h1 className='text-black font-bold text-3xl text-center'>Kids Collection Here</h1> <br /> <br />
                    <p className='text-justify text-[18px] text-gray-500'>
                    Kids' clothing collections are a delightful blend of fashion, comfort, and playfulness. From vibrant colors and playful prints to soft fabrics and practical designs, these collections cater to the unique needs and personalities of young ones. Whether it's adorable rompers for infants, stylish outfits for toddlers, or trendy clothes for older children, kids' collections offer a wide array of choices to express their individuality and enjoy their childhood adventures.</p>
                </div> <br /> <br />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28
                      md:gap-36 place-items-center mt-28'>
                        {   KidsData.map((data)=>(
                                <div
                                data-aos='zoom-in'
                                className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80
                                dark:hover:bg-orange-300 hover:text-white relative shadow-xl duration-300
                                group max-w-[300px]'
                                >
                                    {/* image Section */}
                                    <div className='h-[118px]'>
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
                            ),)
                        }
                      </div>
                </>
  )
}

export default Kids