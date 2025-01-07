import React from 'react'
import image1 from '../assets/images/men1.jpg'
import image2 from '../assets/images/men2.jpg'
import image3 from '../assets/images/men3.jpg'
import image4 from '../assets/images/men4.jpg'
import image5 from '../assets/images/men5.jpg'
import image6 from '../assets/images/men6.jpg'
import image7 from '../assets/images/men7.jpg'
import image8 from '../assets/images/men8.jpg'
import image9 from '../assets/images/men9.jpg'
import image10 from '../assets/images/topimg1.png'
import image11 from '../assets/images/men11.jpg'
import image12 from '../assets/images/men12.jpg'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const MensData = [
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
        title:'Men Black Tshirt',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:4,
        img:image4,
        title:'Men half Tshirt',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:5,
        img:image5,
        title:'Men fashion Tshirt',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:6,
        img:image6,
        title:'One Side Print Shart',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:7,
        img:image7,
        title:'Men White Shart',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:8,
        img:image8,
        title:'Man Color full Shart',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:9,
        img:image9,
        title:'Men White Jacket',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:10,
        img:image10,
        title:'Men Western Dress',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:11,
        img:image11,
        title:'Men Regular Dress',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:12,
        img:image12,
        title:'Men Fashion Dress',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    }
]


const Mens = () => {
  return (
    <>
        <div data-aos='zoom-in' className='mt-10 flex-wrap'>
            <h1 className='text-black font-bold text-3xl text-center'>Men's Collection Here</h1> <br /> <br />
            <p className='text-justify text-[18px] text-gray-500'>
            "Discover a curated selection of men's clothing designed for the modern gentleman. From classic essentials to contemporary trends, our collection features a diverse range of apparel to suit every style and occasion. Explore stylish shirts, tailored trousers, comfortable knitwear, and more. Find the perfect pieces to elevate your wardrobe and express your unique individuality."            </p>
        </div> <br /> <br />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28
              md:gap-36 place-items-center mt-28'>
                {   MensData.map((data)=>(
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
                    ),)
                }
              </div>
        </>
  )
}

export default Mens