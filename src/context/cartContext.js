import { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";

const cartContext= createContext();
const getLocalStorage=()=>{
    return JSON.parse(localStorage.getItem("cart"))||[]
}
const initialstate={
    cart:getLocalStorage(),
    totalAmount:0,
    totalItems:0,
    shippingFee:99
}
export const CartProvider=({children})=>{
    const [state,dispatch]= useReducer(cartReducer, initialstate)
    useEffect(()=>{
        dispatch({type:"CountCartItems"})
        localStorage.setItem("cart", JSON.stringify(state.cart))
    },[state.cart])

    const addToCart=(id,count,color,size, product)=>{
        dispatch({type:"addToCart", payload:{id,count,color,size, product}})
    }
    const removeItem=(id)=>{
        dispatch({type:"removeItem", payload:id})
    }
    const toggleAmount=(id,value)=>{
        dispatch({type:"togglelAmount",payload:{id,value}})
    }
    const clearCart=()=>{
        dispatch({type:"clearCart"})
    }
return(
    <cartContext.Provider value={{...state, addToCart, removeItem, clearCart, toggleAmount}}>
        {children}
    </cartContext.Provider>
)
}
 export const useCartContext=()=>useContext(cartContext)