import React from 'react'
import { useCartContext } from '../context/cartContext'

const CartTotal = () => {
    const { totalAmount, shippingFee } = useCartContext()
  return (
    <div  style={{display:"flex", justifyContent:"flex-end",padding:"40px 0",color:"white", backgroundColor:"purple"}}>
      
   <div  style={{display:"flex", flexDirection:"column", alignItems:"flex-start", width:"200px"}}>
      <div>Subtotal:</div>
      <div>Shipping Charges:</div>
      <div>Order Total:</div>
    </div>
    <div  style={{display:"flex", flexDirection:"column", alignItems:"flex-start", width:"200px"}}>
      <div>Rs {totalAmount}</div>
      <div>Rs {shippingFee}</div>
      <div>Rs {totalAmount+shippingFee}</div>
    </div>
    </div>
  )
}

export default CartTotal
