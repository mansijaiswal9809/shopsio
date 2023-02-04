import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import { UseProductContext } from "../context/ProductContext";

const CartItem = ({ id, image, name, color, size, price, count, max }) => {
  // console.log(color)
  const { removeItem, toggleAmount } = useCartContext();
  const { getSingleProduct } = UseProductContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <div className="flex items-center gap-7 max-w-[100vw] w-[100vw] justify-around flex-wrap">
      <div className="flex items-center gap-7">
        <div>
          <div className="min-w-40">
            <img
              src={image}
              alt={name}
              width="200px"
              className="min-w-[160px]"
              onClick={() => getSingleProduct(id)}
            />
          </div>
        </div>
        <div className="flex items-center gap-7 flex-wrap">
          <div className="name">Product:{name}</div>
          <div className="flex items-center gap-3">
            color :{" "}
            <div
              className="rounded-full w-4 h-4"
              style={{
                backgroundColor: color,
              }}
            ></div>
          </div>
          <p>
            size : <span>{size}</span>
          </p>
          <div>Price: Rs {price}</div>
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
      <button type="button" onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
