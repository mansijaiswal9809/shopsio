import React from 'react'
import Filter from '../component/Filter'
import ProductCard from '../component/ProductCard'
import { useFilterContext } from '../context/filterContext'
// import { UseProductContext } from '../context/ProductContext'
const Product = () => {
 const {filteredProduct, filter: { minPrice, maxPrice, price }}= useFilterContext()
//  console.log(filteredProduct)
  return (
    <div style={{display:"flex"}}>
      <Filter minPrice={minPrice} maxPrice={maxPrice} price={price} />
    <div style={{display:'grid', gridTemplateColumns:"repeat(3, 1fr)", width:"70vw"}}>
      {filteredProduct.map((Product)=>{
        return <ProductCard key={Product.id} {...Product}/>
      })}
    </div>
    </div>
  )
}

export default Product
