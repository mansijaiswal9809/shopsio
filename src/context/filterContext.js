import { useEffect } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { UseProductContext } from "./ProductContext";
import filterReducer from "../reducer/filterReducer";

const filterContext = createContext();
const initialState = {
  filteredProduct: [],
  sort: "lowToHigh",
  filter: {
    brand: "all",
    color: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
  },
};
 export const FilterProvider = ({ children }) => {
     const [state, dispatch]= useReducer(filterReducer, initialState)
     const { Category } = UseProductContext();
    //  console.log(Category)
   
  useEffect(() => {
    dispatch({ type: "Load_PRODUCTS" })
}, [Category]);
// console.log(state.filteredProduct)
// useEffect(() => {
//     dispatch({ type: "filter" });
//     dispatch({type:"sort_products"})
//   }, [Category,state.filter,state.sort]);

  const updateSort = (e) => {
    dispatch({ type: "sort", payload: e.target.value });
  };
  const updateFilter=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    if(name==="color"){
        value=e.target.dataset.color
    }
    if(name==="price"){
        value=Number(value)
    }
    if(name==="brand"){
        // console.log(e.target.textContent)
        value=e.target.textContent;
    }
    dispatch({ type: 'UPDATE_FILTERS', payload: { name, value } })
  }
  const clearFilters=()=>{

  }
  return <filterContext.Provider value={{...state, updateFilter, updateSort,clearFilters}}>{children}</filterContext.Provider>;
};
 export const useFilterContext=()=>(
    useContext(filterContext)
 )