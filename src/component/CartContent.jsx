import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

const CartContent = () => {
    const { cart, clearCart } = useCartContext()
  return (
    <div>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <CartTotal/>
      <div style={{display:"flex", gap:"40px", justifyContent:"center"}}>
        <Link to='/products' style={{
          margin:"25px 0 25px 0",
          padding:"5px 10px",
          backgroundColor:"purple",
          color:'white'
        }}>
          Continue shopping
        </Link>
        <button
          type='button'
          onClick={clearCart}
          style={{
            margin:"25px 0 25px 0",
            padding:"5px 10px",
            backgroundColor:"purple",
            color:'white'
          }}
        >
          Clear shopping cart
        </button>
      </div>
    </div>
  )
}

export default CartContent
