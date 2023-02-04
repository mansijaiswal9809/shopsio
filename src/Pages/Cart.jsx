import React from "react";
import { Link } from "react-router-dom";
import CartContent from "../component/CartContent";
import { useCartContext } from "../context/cartContext";

const Cart = () => {
  const { cart } = useCartContext();
  if (cart.length === 0) {
    return (
      <div className="p-10 text-xl">
        <div>Your Cart is Empty</div>
        <Link to="/products"> Get some items in the cart</Link>
      </div>
    );
  }
  return (
    <div>
      <CartContent/>
    </div>
  )
};

export default Cart;
