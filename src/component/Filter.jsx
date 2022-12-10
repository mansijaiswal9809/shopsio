import React from "react";
import { useFilterContext } from "../context/filterContext";
import { UseProductContext } from "../context/ProductContext";
import { uniqueValue } from "../utils/constant";
const Filter = ({ minPrice, maxPrice, price }) => {
  const { Category } = UseProductContext();

  const { filter,sort, clearFilters, updateFilter, updateSort  } = useFilterContext();
  // console.log(Category)

  // console.log(minPrice, maxPrice, price)

  const brands = uniqueValue(Category, "brand");
  //   console.log(colors);
  return (
    <div>
      <select name="sort" id="sort" value={sort} onChange={updateSort}>
        <option value="lowToHigh">Price-Low to High</option>
        <option value="highToLow">Price-High to Low</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* <button>all</button> */}
        <div>Select Your preferred brand</div>
        {brands.map((brand, ind) => (
          <button style={{borderBottom:`${filter.brand===brand?"4px solid purple":"none"}`}} key={ind} name="brand" onClick={updateFilter}>
            {brand}
          </button>
        ))}
      </div>
      <div>
        <div>Price range</div>
        <input
          onChange={updateFilter}
          type="range"
          min={minPrice}
          max={maxPrice}
          value={price}
          name="price"
        />
      </div>
      <div>
        <button onClick={clearFilters}>Clear Filters</button>
      </div>
    </div>
  );
};

export default Filter;
