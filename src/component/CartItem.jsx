import React from 'react'
import { FaTrash } from 'react-icons/fa'

const CartItem = ({ id, image, name, color, size,price, count,max }) => {
    const { removeItem, toggleAmount } = useCartContext()
    const increase = () => {
        toggleAmount(id, 'inc')
      }
      const decrease = () => {
        toggleAmount(id, 'dec')
      }
  return (
    <div>
      <div className='title'>
        <img src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            color : <span style={{ background: color, borderRadius:"50%", width:"15px", height:"15px" }}></span>
          </p>
          <p>
            size : <span>{size}</span>
          </p>
          <h5 className='price-small'>{price}</h5>
        </div>
      </div>
      <h5 className='price'>{price}</h5>
      {/* <AmountButtons count={count} increase={increase} decrease={decrease} />
       */}
        <button disabled={count===1} onClick={decrease}>-</button>{count}<button disabled={count===max} onClick={increase}>+</button>
      <h5 className='subtotal'>{price * count}</h5>
      <button
        type='button'
        className='remove-btn'
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </div>
  )
}

export default CartItem
