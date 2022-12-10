import { useEffect } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { UseProductContext } from "./ProductContext";
import filterReducer from "../reducer/filterReducer";

const filterContext = createContext();
const initialState = {
  searchProducts:[],
  filteredProduct: [],
  sort: "lowToHigh",
  filter: {
    brand: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
  },
};
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const { Category , All} = UseProductContext();
  //  console.log(Category)

  useEffect(() => {
    if (
      state.brand !== "all" ||
      state.color !== "all" ||
      state.maxPrice !== state.price
    ) {
      clearFilters();
    }
    dispatch({ type: "Load_PRODUCTS", payload: Category });
  }, [Category]);

  // console.log(state.filteredProduct)
  const search=(val)=>{
    dispatch({type:"search", payload:{val,All}})
  }
  useEffect(() => {
    dispatch({ type: "filter", payload: Category });
    dispatch({ type: "sort_products" });
  }, [Category, state.filter, state.sort]);

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: "sort", payload: value });
    // console.log(e.target.value)
  };

  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "brand") {
      value = e.target.textContent;
    }
    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS", payload: Category });
  };
  return (
    <filterContext.Provider
      value={{ ...state, updateFilter, updateSort, clearFilters, search }}
    >
      {children}
    </filterContext.Provider>
  );
};
export const useFilterContext = () => useContext(filterContext);
