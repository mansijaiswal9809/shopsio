import React from "react";
import { useState } from "react";
import Stars from "../component/Stars";
// import { useParams } from 'react-router-dom'
import { UseProductContext } from "../context/ProductContext";

const SingleProduct = () => {
  const { singleProduct } = UseProductContext();
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
              style={{
                border: "1px solid black",
                padding: "0 5px",
                borderRadius: "3px",
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
          {colors.map((color) => (
            <div
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
      {stock && <button>Add to Cart</button>}
      </div>
    </div>
  );
};

export default SingleProduct;
