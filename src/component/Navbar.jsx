import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'
const Navbar = () => {

  return (
    <div className='d1'>
        <Link className='link-sec' to='/HomePage'><strong>Home</strong></Link>
        <Link className='link-sec' to='/OurProducts'><strong>Our Products</strong></Link>
        <Link className='link-sec' to='/Mens'><strong>Men's</strong></Link>
        <Link className='link-sec' to='/Womens'><strong>Women's</strong></Link>
        <Link className='link-sec' to='/Kids'><strong>Kids</strong></Link>
        <Link className='link-sec' to='/Contact'><strong>Contact Us</strong></Link>
    </div>
  )
}

export default Navbar