import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Stars from "../component/Stars";
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
    <div style={{ padding: "40px 180px", display: "flex", gap: "50px" }}>
      <div className="images" style={{ width: "30vw" }}>
        <div>
          <img
            src={mainImage}
            alt={name}
            width="300px"
            style={{ marginBottom: "10px" }}
          />
        </div>
        <div className="small" style={{ display: "flex" }}>
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
      <div style={{ width: "60vw" }}>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h1>{brand}</h1>
        <h1>Rs{price}</h1>
        <div>
          {size.map((s, i) => (
            <button
            onClick={()=>setSize(s)}
              style={{
                border: "1px solid black",
                padding: "0 5px",
                borderRadius: "3px",
                borderColor:`${selectedSize===s?"black":"grey"}`
              }}
              key={i}
            >
              {s}
            </button>
          ))}
        </div>
        <div>
          <Stars ratings={ratings} /> {reviews} reviews{" "}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {colors.map((color,ind) => (
            <div key={ind}
              onClick={() => setCokor(color)}
              style={{
                height: "15px",
                width: "15px",
                borderRadius: "50%",
                backgroundColor: color,
                opacity: `${selectedColor === color ? "1" : "0.3"}`,
              }}
            ></div>
          ))}
        </div>
      <button disabled={count===1} onClick={()=>setCount(count-1)}>-</button>{count}<button disabled={count===stock} onClick={()=>setCount(count+1)}>+</button>
      {stock && <Link to="/cart" onClick={()=>addToCart(id,count,selectedColor,selectedSize, singleProduct)}>Add to Cart</Link>}
      </div>
    </div>
  );
};

export default SingleProduct;
