import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import { UseProductContext } from "../context/ProductContext";

const CartItem = ({ id, image, name, color, size, price, count, max }) => {
  // console.log(color)
  const { removeItem, toggleAmount } = useCartContext();
  const {getSingleProduct}= UseProductContext()
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <div style={{display:"flex",alignItems:"center", gap:"30px", width:"100vw", justifyContent:"space-around"}}>
      <div className="title" style={{display:"flex",alignItems:"center", gap:"30px"}}>
        <Link to="/SingleProduct"><img src={image} alt={name} width="200px" onClick={()=>getSingleProduct(id)}/></Link>
        <div style={{display:"flex",alignItems:"center", gap:"30px"}}>
          <h5 className="name">Product:{name}</h5>
          <div className="color" style={{display:"flex",alignItems:"center", gap:"10px"}}>
            color :{" "}
            <div
              style={{
                backgroundColor: color,
                borderRadius: "50%",
                width: "15px",
                height: "15px",
              }}
            ></div>
          </div>
          <p>
            size : <span>{size}</span>
          </p>
          <h5 className="price-small">Price: Rs {price}</h5>
        </div>
      </div>
      <div>

      <button disabled={count === 1} onClick={decrease}>
        -
      </button>
      Quantity:{count}
      <button disabled={count === max} onClick={increase}>
        +
      </button>
      </div>
      SubTotal: Rs {price * count}
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
