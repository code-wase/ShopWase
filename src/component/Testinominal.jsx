import React from 'react'
import Slider from 'react-slick'
import testi1 from '../assets/images/tsti1.png'
import testi2 from '../assets/images/testi2.png'
import testi3 from '../assets/images/testi3.png'
import testi4 from '../assets/images/testi4.png'
const TestimonialData = [
    {
        id:1,
        name:'Vector',
        Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, quidem.",
        img: testi1
    },
    {
        id:2,
        name:'Satya Nadella',
        Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, quidem.",
        img: testi2
    },
    {
        id:3,
        name:'Vikram pawar',
        Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, quidem.",
        img: testi3
    },
    {
        id:4,
        name:'Rohan Sarpatey',
        Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, quidem.",
        img: testi4
    }
]
const Testinominal = () => {
    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        //SlidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        cssEase:'linear',
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:2
                }, 
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            }
        ]
    }
  return (
    <>
    <div className='py-10 mb-10'>
        <div className='container '>
           {/* header Section */}

           <div className='text-center mb-12 max-w-[600px] mx-auto'>
                <p data-aos='fade-up' className='text-sm text-orange-600'>What Our Customers are saying</p>
                <h1 data-aos='fade-up' className='text-3xl font-bold'>Testimonial</h1>
                <p data-aos='fade-up' className='text-x5 text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus labore ratione natus!
                </p>
               </div>

               {/* Testinomial Cards Section */}

               <div data-aos='zoom-in'>
               <Slider {...settings}>{
                TestimonialData.map((data)=>(
                    <div className='my-6'>
                    <div
                    key={data.id}
                    className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
                    dark:bg-gray-800 bg-gray-100 relative'
                    > 
                       <div className='mb-4'>
                          <img src={data.img} alt="" className='rounded-full w-20 h-20'/>
                       </div>
                       <div className='flex flex-col items-center gap-4'>
                        <div className='space-y-3'>
                        <p className='text-xs text-gray-500'>{data.Text}</p>
                        <h1 className='text-xl font-bold text-black/80
                        dark:text-light'>{data.name}</h1>
                        </div>

                       </div>
                       <p
                       className='text-black/20 text-9xl font-serif absolute
                       top-0 right-0'
                       >
                        ,,
                       </p>
                    </div>
                    </div>
                ))
                }</Slider>
               </div>
        </div>
    </div>
    </>
  )
}

export default Testinominal