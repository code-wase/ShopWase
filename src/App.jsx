import './App.css'
import Datafetch from './component/Datafetch'
import Loader from './component/Loader'
import Login from './component/Login'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Products from './component/Products'
import AOS from 'aos'
import React from 'react'
import 'aos/dist/aos.css'
import Footer from './component/Footer'
import {Routes, Route } from 'react-router-dom'
import OurProducts from './component/OurProducts'
import HomePage from './Pages/HomePage'
import MensPage from './Pages/MensPage'
import WomenPage from './Pages/WomenPage'
import KidsPage from './Pages/KidsPage'
import ContactPage from './Pages/ContactPage'
import OrderPage from './Pages/OrderPage'

function App() {
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:100
    });
    AOS.refresh();
  },[])

  return (
    <div className='focus:scroll-auto'>
    <Navbar />
    <Routes>
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/OurProducts" element={<OurProducts />} />
      <Route path="/Mens" element={<MensPage />} />
      <Route path="/Womens" element={<WomenPage />} />
      <Route path="/Kids" element={<KidsPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/OrderPage" element={<OrderPage />} />
    </Routes>
    <Footer />
    {/* <OrderPage /> */}


     {/* <Datafetch></Datafetch> */}

     {/* <Login /> */}
    </div>
  )
}

export default App
