import { UseProductContext } from "../context/ProductContext";

const filterReducer = (state, action) => {
  const { Category } = UseProductContext();
//   console.log(Category)
  if (action.type === "Load_PRODUCTS") {
    let maxPrice = Category.map((item) => item.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      maxPrice: maxPrice,
      price: maxPrice,
      filteredProduct: [...Category],
    };
  }
  if (action.type === "sort") {
    return {
      ...state,
      sort: action.payload,
    };
  }
  if (action.type === "sort_products") {
    const { sort, filteredProduct } = state;
    let temp = [...filteredProduct];
    if (sort === "lowToHigh") {
      temp = temp.sort((a, b) => a.price - b.price);
    }
    if (sort === "highToLow") {
      temp = temp.sort((b, a) => a.price - b.price);
    }
    if (sort === "A-Z") {
      temp = temp.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "Z-A") {
      temp = temp.sort((b, a) => a.name.localeCompare(b.name));
    }
    return { ...state, filteredProduct: [...temp] };
  }
  if(action.type==="UPDATE_FILTERS"){
    const { name, value } = action.payload
    return { ...state, filter: { ...state.filter, [name]: value }}
  }
  if (action.type === "filter") {
    const {brand, color, price} = state.filter
    let temp=[...Category]
    if(brand!=="all"){
        temp= temp.filter((item)=>item.brand===brand)
    }
    if(color!=="all"){
        temp=temp.filter((item)=>item.colors.includes(color))
    }
    temp=temp.filter((item)=>item.price<=price)
    return {...state, filteredProduct:temp}
  }
};

export default filterReducer;
