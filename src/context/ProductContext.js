import React from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import ProductReducer from '../reducer/ProductReducer'
import { useContext } from "react";

const productContext = createContext();
const initialState = {
  Product_loading:false,
  Featured:[],
  All:[],
  Category:[],
  singleProduct:{}
};
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const getAllProducts = async () => {
    dispatch({type:'loading'})
    try {
      const data = await fetch("data.json").then((res) => res.json());
    
      dispatch({type:'GET_PRODUCTS_SUCCESS',payload:data})
    } catch (error) {
        dispatch({type:'ERROR_IN_GETTING_PRODUCTS'})
    }
  };
  // console.log(state.All)
   const getSingleProduct=(id)=>{
      dispatch({type:"Single", payload:id})
   }
  useEffect(() => {
    getAllProducts();
  }, []);

  return <productContext.Provider value={{...state, dispatch, getSingleProduct}}>{children}</productContext.Provider>;
};

export const UseProductContext=()=>{
    return useContext(productContext)
}

