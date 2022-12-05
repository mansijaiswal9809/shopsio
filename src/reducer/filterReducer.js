const filterReducer = (state, action) => {
  if (action.type === "Load_PRODUCTS") {
    let maxPriceArr = action.payload.map((item) => item.price);
    let maxPrice = Math.max(...maxPriceArr);
    return {
      ...state,

      filter: { ...state.filter, maxPrice: maxPrice, price: maxPrice },
      filteredProduct: action.payload,
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
  if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;
    return { ...state, filter: { ...state.filter, [name]: value } };
  }
  if (action.type === "filter") {
    const { brand, color, price } = state.filter;
    let temp = [...action.payload];
    if (brand !== "all") {
      temp = temp.filter((item) => item.brand === brand);
    }
    if (color !== "all") {
      temp = temp.filter((item) => item.colors.includes(color));
      // console.log(temp)
    }
    temp = temp.filter((item) => item.price <= price);
    return { ...state, filteredProduct: temp };
  }
  if (action.type === "CLEAR_FILTERS") {
    let maxPriceArr = action.payload.map((item) => item.price);
    let maxPrice = Math.max(...maxPriceArr);
    return {
      ...state,
      filter: {
        brand: "all",
        color: "all",
        minPrice: 0,
        maxPrice: maxPrice,
        price: maxPrice,
      },
    };
  }
  return state;
};

export default filterReducer;
