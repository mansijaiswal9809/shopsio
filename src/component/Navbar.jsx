import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaTrash,
  FaUserMinus,
  FaUserPlus,
} from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import { TiDelete } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { UseProductContext } from "../context/ProductContext";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";
import { useFilterContext } from "../context/filterContext";
const Navbar = () => {
  const { loginWithRedirect, logout, myUser } = useUserContext();
  const { search } = useFilterContext();
  const { dispatch, All } = UseProductContext();
  const { cart } = useCartContext();
  const [val, setVal] = useState("");
  const [menu, setMenu] = useState(false);
  const SearchText = () => {
    // console.log(val)

    if (val) {
      search(val);
    }
  };

  return (
    <div className="sticky top-0 z-20 bg-white shadow-sm shadow-violet-900 px-1  md:px-10 flex justify-center items-center w-full ">
      <div className="flex justify-between items-center w-11/12">
        <div className="nav-header">
          <Link to="/">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.uYFsWIYbWLvJjqcaKSrLTwHaGl&pid=Api&P=0"
              width="90px"
              alt="shopsio"
            />
          </Link>
        </div>
        <div className="relative flex h-11 items-center justify-between border-2 border-solid border-purple-900 px-5 md:w-[300px] w-[250px] rounded-full">
          <input
            type="search"
            className="outline-none"
            placeholder="Search"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <Link to="/searchproducts" className="absolute right-8">
            <BsSearch color="purple" onClick={SearchText} />
          </Link>
        </div>
        <div
          style={{ right: menu ? "0px" : "-500px" }}
          className=" md:gap-3 lg:gap-7 items-center text-pur font-semibold flex flex-col fixed top-0  h-[100vh] md:w-max md:h-auto md:flex-row md:flex md:static bg-white gap-10 p-10 shadow-md md:shadow-none md:p-0 transition-all duration-500"
        >
          <button className="md:hidden" onClick={() => setMenu(false)}>
            <TiDelete size="30px" />
          </button>
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
            <div>
              <Link to="/checkout">checkout</Link>
            </div>
          )}
          <Link to="/cart" className="flex  items-center">
            <FaShoppingCart size="30px" color="purple" />
            <span>{cart.length}</span>
          </Link>
          <div>
            {!myUser ? (
              <button
                className="text-pur flex gap-2 items-center"
                onClick={loginWithRedirect}
              >
                Login
                <FaUserPlus />
              </button>
            ) : (
              <button
                className="text-pur flex gap-2 items-center"
                onClick={() => {
                  localStorage.removeItem("user");
                  logout({ returnTo: window.location.origin });
                }}
              >
                <FaUserMinus />
                Logout
              </button>
            )}
          </div>
        </div>
        <button
          className="md:hidden flex"
          onClick={() => {
            console.log("d");
            setMenu(true);
          }}
        >
          <GrMenu color="purple" size="25px" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
