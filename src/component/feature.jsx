import React from 'react'
import {UseProductContext} from '../context/ProductContext'
import ProductCard from './ProductCard'
const Feature = () => {
    const {Featured}= UseProductContext()
    // console.log(Featured)
  return (
    <div style={{display:'flex', justifyContent:'center', gap:'20px', margin:'40px 0', flexWrap:'wrap'}}>
      {Featured.map((product)=>(
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default Feature
