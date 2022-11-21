import React from 'react'
// import { useParams } from 'react-router-dom'
import { UseProductContext } from '../context/ProductContext'

const SingleProduct = () => {
  const {singleProduct}= UseProductContext()
  console.log(singleProduct);
  return (
    <div>
      
    </div>
  )
}

export default SingleProduct
