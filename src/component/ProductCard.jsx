import React from "react";
import { Link } from "react-router-dom";
import { UseProductContext } from "../context/ProductContext";

const ProductCard = ({ id, name, price, description, mainImage, ratings }) => {
  const { getSingleProduct } = UseProductContext();
  return (
    <div className="flex justify-center my-5 ">
      <Link
        to="/SingleProduct"
        className='card w-60 sm:w-64 p-2 sm:p-4 bg-["rgb(216,191,216)"] group '
        onClick={() => getSingleProduct(id)}
      >
        <img
          className="group-hover:transition-all group-hover:scale-105"
          src={mainImage}
          alt={name}
          width="240px"
        />
        <div className="group-hover:scale-75 group-hover:transition-all flex justify-between">
          <h5>Rs {price}</h5>
          <h5>Ratings: {ratings}/5</h5>
        </div>
        <div>{description.substring(0, 60)}...</div>
      </Link>
    </div>
  );
};

export default ProductCard;
