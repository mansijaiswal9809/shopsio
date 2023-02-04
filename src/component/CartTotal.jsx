import React from 'react'
import { useCartContext } from '../context/cartContext'

const CartTotal = () => {
    const { totalAmount, shippingFee } = useCartContext()
  return (
    <div className="flex justify-end py-10 text-white bg-pur w-full box-border pr-4 gap-3">
      
   <div className="flex flex-col items-start">
      <div>Subtotal:</div>
      <div>Shipping Charges:</div>
      <div>Order Total:</div>
    </div>
    <div className="flex flex-col items-start">
      <div>Rs {totalAmount}</div>
      <div>Rs {shippingFee}</div>
      <div>Rs {totalAmount+shippingFee}</div>
    </div>
    </div>
  )
}

export default CartTotal
