import React from 'react'
import image1 from '../assets/images/img4.png'
import image2 from '../assets/images/img2.png'
import image3 from '../assets/images/img3.png'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
const ImageList = [
    {
        id:1,
        img:image1,
        title:'Upto 50% off on all Mens Wear'
    },
    {
        id:2,
        img:image2,
        title:'Upto 30% off on all Wonens Wear'
    },
    {
        id:3,
        img:image3,
        title:'Upto 70% off on all Products Sale'
    }
]

const Home = () => {

  var setting = {
    dots:false,
    Infinite:true,
    speed:800,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed: 4000,
    cssEase:'ease-in-out',
    pauseOnHover:false,
    pauseOnFocus:true
  }

  return (
    <>
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px]
    bg-gray-200 flex justify-center items-center dark:bg-gray-950
    dark:text-white duration-200'>
   {/* Background Pattern */}
       <div className='h-[500px] w-[700px] bg-orange-200 -z-10 absolute -top-1/2
       right-80 rounded-3xl rotate-45 -z-9'>

       </div>

       {/* Hero Section */}
       <div className='container pb-8 sm:pb-0'>

        <Slider {...setting}>

            {ImageList.map((data)=>(
<div>
<div className='grid grid-cols-1 sm:grid-cols-2'>
    {/* text Containent section */}
       <div className='flex flex-col justify-center gap-5 pt-12
       sm:pt-10 text-center sm:text-left order-2 sm:order-1 mx-5
       z-10'>
        <h1 
        data-aos='zoom-out'
        data-aos-duration='500'
        data-aos-once='true'
        className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
        <p 
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-delay='100'
        className='text-sm'>
            {data.description}
            </p>
        <div
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-delay='300'
        >
            <Link to='/OrderPage'>
            <button
            className='bg-gradient-to-tr from-orange-600 hover:scale-105
            duration-200 text-white py-2 px-4 rounded-full'
            >Order Now</button>
            </Link>
        </div>
       </div>

    {/* Image section */}

    <div className='order-1 sm:order-2'>
        <div 
        data-aos='zoom-in'
        data-aos-once='true'
        className='relative z-10'>
            <img src={data.img} alt=""
            className='w-[300px] h-[300px] sm:h-[425px] sm:w-[425px] 
            sm:scale-150 object-contain mx-auto'
            />
        </div>
    </div>

</div>
</div>

            ))}

       
         
          </Slider>
       </div>

    </div>
    </>
  )
}

export default Home