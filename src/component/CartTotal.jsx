import React from 'react'

const CartTotal = () => {
    const { totalAmount, shippingFee } = useCartContext()
  return (
    <div>
      <div>subTotal:{totalAmount}</div>
      <div>shipping Charges:{shippingFee}</div>
      <div>order Total:{totalAmount+shippingFee}</div>
    </div>
  )
}

export default CartTotal
