import React from 'react'
import {UseProductContext} from '../context/ProductContext'
import ProductCard from './ProductCard'
const Feature = () => {
    const {Featured}= UseProductContext()
    // console.log(Featured)
  return (
    <div className="flex justify-center gap-5 my-10 flex-wrap">
      {Featured.map((product)=>(
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default Feature
