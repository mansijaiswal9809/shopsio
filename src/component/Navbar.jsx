import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { UseProductContext } from "../context/ProductContext";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";
import { useFilterContext } from "../context/filterContext";
const Navbar = () => {
  const { loginWithRedirect, logout, myUser } = useUserContext();
  const {search}= useFilterContext()
  const { dispatch, All } = UseProductContext();
  const { cart } = useCartContext();
  const [val, setVal]=useState("")
  const SearchText=()=>{
    // console.log(val)
    
    if(val){
      search(val)
    }
  }

  return (
    <div
      style={{
        boxShadow: "rgba(132, 11, 132, 0.35) 0px 5px 15px",
        position: "sticky",
        top: 0,
        zIndex: 999,
        backgroundColor: "white",
      }}
    >
      <div
        className="nav-center"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="nav-header">
          <Link to="/">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.uYFsWIYbWLvJjqcaKSrLTwHaGl&pid=Api&P=0"
              width="90px"
              alt="shopsio"
            />
          </Link>
        </div>
        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            color: "purple",
            fontWeight: "650",
          }}
        >
          <button onClick={() => dispatch({ type: "All", payload: All })}>
            <Link to="/products">All</Link>
          </button>
          <button onClick={() => dispatch({ type: "Men", payload: All })}>
            <Link to="/products">Men</Link>
          </button>
          <button onClick={() => dispatch({ type: "Women", payload: All })}>
            <Link to="/products">Women</Link>
          </button>
          <button onClick={() => dispatch({ type: "Home", payload: All })}>
            <Link to="/products">Home & Decors</Link>
          </button>
          {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </div>
        <div>
          {!myUser ? (
            <button onClick={loginWithRedirect}>Login<FaUserPlus /></button>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("user");
                logout({ returnTo: window.location.origin });
              }}
            >
              <FaUserMinus />
            </button>
          )}
        </div>
        <div
          style={{
            display: "flex",
            height: "45px",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid purple",
            padding: "0 20px",
            width: "300px",
            borderRadius: "30px",
          }}
        >
          <input
            type="search"
            style={{ outline: "none" }}
            placeholder="Search"
            value={val}
            onChange={(e)=>setVal(e.target.value)}
          />
          <Link to="/searchproducts"><BsSearch color="purple"  onClick={SearchText}/></Link>
        </div>
        <Link
          to="/cart"
          style={{
            display: "flex",
            paddingRight: "30px",
            alignItems: "center",
          }}
        >
          <FaShoppingCart size="30px" color="purple" />
          <span>{cart.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
