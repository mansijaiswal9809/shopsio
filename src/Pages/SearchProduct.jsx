import React from 'react'
import ProductCard from '../component/ProductCard'
import { useFilterContext } from '../context/filterContext'

const SearchProduct = () => {
    const {searchProducts}= useFilterContext()
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
      {searchProducts.map((Product)=>{
        return <ProductCard key={Product.id} {...Product}/>
      })}
    </div>
    </div>
  )
}

export default SearchProduct
