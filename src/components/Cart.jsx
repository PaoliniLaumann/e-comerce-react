import React from 'react'
import { useCart } from '../Context/CardContext'

const Cart = () => {
    const {cart} = useCart()
    console.log(`carrito`, cart)
  return (
    <div>
      Cart
    </div>
  )
}

export default Cart
