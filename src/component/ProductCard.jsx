import React from 'react'
import { Link } from 'react-router-dom'
import './productcard.css'
import { UseProductContext } from '../context/ProductContext'

const ProductCard = ({id, name, price, description, mainImage, ratings }) => {
  const {getSingleProduct}= UseProductContext()
  return (
    <Link to='/SingleProduct' className='card' style={{width:'300px', padding:'20px', backgroundColor:'rgb(216,191,216)', borderRadius:"20px"}} onClick={()=>getSingleProduct(id)}>
    <img src={mainImage} alt={name} width='270px'/>
    <div style={{display:"flex", justifyContent:"space-between"}}>
        <h5>Rs {price}</h5>
        <h5>Ratings: {ratings}/5</h5>
    </div>
    <div>{description.substring(0,60)}...</div>
    </Link>
  )
}

export default ProductCard
