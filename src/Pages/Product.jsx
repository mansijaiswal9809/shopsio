import React, { useState } from 'react'
import Filter from '../component/Filter'
import ProductCard from '../component/ProductCard'
import { useFilterContext } from '../context/filterContext'
import {AiFillFilter} from "react-icons/ai"
// import { UseProductContext } from '../context/ProductContext'
const Product = () => {
 const {filteredProduct, filter: { minPrice, maxPrice, price }}= useFilterContext()
 const [filterActive,setFilterActive]= useState(false)
//  console.log(filteredProduct)
  return (
    <div className="relative flex">
      <Filter minPrice={minPrice} maxPrice={maxPrice} price={price} filterActive={filterActive} setFilterActive={setFilterActive} />
      <button onClick={()=>setFilterActive(true)} className='md:hidden absolute top-2 left-2'><AiFillFilter size="30px" color='purple'/></button>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full md:w-3/4">
      {filteredProduct.map((Product)=>{
        return <ProductCard key={Product.id} {...Product}/>
      })}
    </div>
    </div>
  )
}

export default Product
