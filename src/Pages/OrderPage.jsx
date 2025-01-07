import React from 'react'
import Order from '../component/Order'
import { Link } from 'react-router-dom'

const OrderPage = () => {
  return (
    <>
    <Link to='/OrderPage'><Order /></Link>
    </>
  )
}

export default OrderPage