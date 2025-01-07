import React from 'react'
import image1 from '../assets/images/topimg1.png'
import image2 from '../assets/images/topimg2.png'
import image3 from '../assets/images/topimg3.png'
import image4 from '../assets/images/product_26.png'
import image5 from '../assets/images/product_28.png'
import image6 from '../assets/images/product_27.png'
import image7 from '../assets/images/product_14.png'
import image8 from '../assets/images/product_17.png'
import image9 from '../assets/images/product_19.png'
import image10 from '../assets/images/product_10.png'
import image11 from '../assets/images/product_9.png'
import image12 from '../assets/images/product_6.png'
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
    },
    {
        id:4,
        img:image4,
        title:'Kids Tshirt',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:5,
        img:image5,
        title:'kids fashion Tshirt',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:6,
        img:image6,
        title:'Color full Tshirt',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:7,
        img:image7,
        title:'Men Winter Jacket',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:8,
        img:image8,
        title:'Man Jeans Jacket',
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
        title:'Women Western Dress',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:11,
        img:image11,
        title:'Women Party Dress',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    },
    {
        id:12,
        img:image12,
        title:'Women Fashion Dress',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit."
    }
]

const OurProducts = () => {

    return (
    <>

    <div data-aos='zoom-in' className='mt-10 flex-wrap'>
        <h1 className='text-black font-bold text-3xl text-center'>Our Products</h1> <br /> <br />
        <p className='text-justify text-[18px] text-gray-500'>
            At [Your Company Name], we are passionate about creating innovative and high-quality products that enhance your life. Our commitment to excellence drives us to develop solutions that are both functional and stylish, designed to meet your unique needs and exceed your expectations,We offer a diverse range of products.
        </p>
    </div> <br /> <br />
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28
          md:gap-36 place-items-center mt-28'>
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
                ),)
            }
          </div>
    </>
  )
}

export default OurProducts