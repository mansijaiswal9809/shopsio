import React from 'react'
import ProductCard from '../component/ProductCard'
import { useFilterContext } from '../context/filterContext'

const SearchProduct = () => {
    const {searchProducts}= useFilterContext()
  return (
    <div>
      <div style={{display:'grid', gridTemplateColumns:"repeat(3, 1fr)", width:"70vw"}}>
      {searchProducts.map((Product)=>{
        return <ProductCard key={Product.id} {...Product}/>
      })}
    </div>
    </div>
  )
}

export default SearchProduct
