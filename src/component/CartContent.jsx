import React from 'react'
import { useCartContext } from '../context/cartContext'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

const CartContent = () => {
    const { cart, clearCart } = useCartContext()
  return (
    <div>
        <CartColumns/>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div>
        <Link to='/products'>
          continue shopping
        </Link>
        <button
          type='button'
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotal/>
    </div>
  )
}

export default CartContent
