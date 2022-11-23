import React from "react";
import { useFilterContext } from "../context/filterContext";
import { UseProductContext } from "../context/ProductContext";
import { uniqueValue } from "../utils/constant";
const Filter = ({minPrice, maxPrice, price}) => {
  const { Category } = UseProductContext();
  // console.log(Category)
  const {
    clearFilters,
    updateFilter,
    updateSort,
  } = useFilterContext();
  const brands = uniqueValue(Category, "brand");
  const colors = uniqueValue(Category, "colors");
  //   console.log(colors);
  return (
    <div>
      <select name="sort" id="sort" onChange={updateSort}>
        <option value="lowToHigh">Price-Low to High</option>
        <option value="highToLow">Price-High to Low</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* <button>all</button> */}
        <div>Select Your preferred brand</div>
        {brands.map((brand, ind) => (
          <button key={ind} name="brand" onClick={updateFilter}>
            {brand}
          </button>
        ))}
      </div>
      <div>
        <div>Select your fovorite Color</div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {colors.map((color, ind) => {
            if (color === "all") {
              return (
                <div
                  name="color"
                  onClick={updateFilter}
                  key={ind}
                  data-color="All"
                >
                  All
                </div>
              );
            }
            return (
              <div
                name="color"
                onClick={updateFilter}
                style={{
                  height: "15px",
                  width: "15px",
                  borderRadius: "50%",
                  backgroundColor: color,
                }}
                key={ind}
                data-color={color}
              ></div>
            );
          })}
        </div>
        <div>
          <div>Price range</div>
          <input onChange={updateFilter}
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
    </div>
  );
};

export default Filter;
