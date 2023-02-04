import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import { UseProductContext } from "../context/ProductContext";


const SingleProduct = () => {
  const { singleProduct } = UseProductContext();
  const {addToCart}= useCartContext()
  const {
    name,
    description,
    price,
    colors,
    images,
    brand,
    id,
    ratings,
    reviews,
    size,
    stock,
  } = singleProduct;
  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedColor, setCokor] = useState(colors[0]);
  const [selectedSize, setSize] = useState(size[0]);
  const [count, setCount] = useState(1);
  // console.log(singleProduct);
  
  return (
    <div className="flex justify-center gap-10 flex-wrap">
      <div className="images min-w-[300px]">
        <div>
          <img
            src={mainImage}
            alt={name}
            width="300px"
            className="mb-3"
          />
        </div>
        <div className="flex">
          {images.map((image, ind) => (
            <div
              key={ind}
              onClick={() => setMainImage(image)}
              style={{
                border: `${mainImage === image ? "1px solid grey" : "none"}`,
              }}
            >
              <img src={image} alt={name} width="75px" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[60vw] p-6">
        <h3 className="font-bold">{name}</h3>
        <h6>{description}</h6>
        <h6>{brand}</h6>
        <h5 className="font-bold">Rs{price}</h5>
        <div>
          {size.map((s, i) => (
            <button
            onClick={()=>setSize(s)}
            className="border-2 border-solid border-black px-1 rounded-sm"
              style={{
                borderColor:`${selectedSize===s?"black":"grey"}`
              }}
              key={i}
            >
              {s}
            </button>
          ))}
        </div>
        <div>
        {reviews} Reviews
        </div>
        <div lassName="flex gap-3">
          {colors.map((color,ind) => (
            <div key={ind}
            className="h-4 w-4 rounded-full"
              onClick={() => setCokor(color)}
              style={{
                backgroundColor: color,
                opacity: `${selectedColor === color ? "1" : "0.3"}`,
              }}
            ></div>
          ))}
        </div>
      <button disabled={count===1} onClick={()=>setCount(count-1)}>-</button>{count}<button disabled={count===stock} onClick={()=>setCount(count+1)}>+</button>
      <br />
      {stock && <Link to="/cart" className="px-2 py-1 bg-pur rounded-sm text-white" onClick={()=>addToCart(id,count,selectedColor,selectedSize, singleProduct)}>Add to Cart</Link>}
      </div>
    </div>
  );
};

export default SingleProduct;
