import React from 'react'
import ProductCard from '../component/ProductCard'
import { UseProductContext } from '../context/ProductContext'
const Product = () => {
 const {Category}= UseProductContext()
//  console.log(Category)
  return (
    <div style={{display:'grid', gridTemplateColumns:"repeat(3, 1fr)"}}>
      {Category.map((Product)=>{
        return <ProductCard key={Product.id} {...Product} style={{display:'flex', justifyContent:"center"}}/>
      })}
    </div>
  )
}

export default Product
