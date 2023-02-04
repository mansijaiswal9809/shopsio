import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
import { useUserContext } from '../context/userContext'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

const CartContent = () => {
    const { cart, clearCart } = useCartContext()
    const {myUser} =useUserContext()
  return (
    <div>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <CartTotal/>
      <div className="flex gap-3 sm:gap-10 justify-center" >
        <Link to='/products'className="text-white my-6 py-1 px-2 bg-pur ">
          Continue shopping
        </Link>
        <button
          type='button'
          onClick={clearCart}
         className="my-6 text-white py-1 px-2 bg-pur">
          Clear shopping cart
        </button>
        {myUser &&<Link to='/checkout' 
        className="my-6 text-white py-1 px-2 bg-pur">
          Buy Now
        </Link>}
      </div>
    </div>
  )
}

export default CartContent
