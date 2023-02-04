import React, { useState } from "react";
import { useFilterContext } from "../context/filterContext";
import { UseProductContext } from "../context/ProductContext";
import { uniqueValue } from "../utils/constant";
import { TiDelete } from "react-icons/ti";
const Filter = ({
  minPrice,
  maxPrice,
  price,
  filterActive,
  setFilterActive,
}) => {
  const { Category } = UseProductContext();

  const { filter, sort, clearFilters, updateFilter, updateSort } =
    useFilterContext();
  console.log(filterActive);
  // console.log(Category)

  // console.log(minPrice, maxPrice, price)

  const brands = uniqueValue(Category, "brand");
  //   console.log(colors);
  return (
    <div
      style={{ left: filterActive ? "0px" : "-500px" }}
      className="p-5 shadow-lg md:static min-h-full absolute top-0 z-10 bg-white transition-all duration-500"
    >
      <button
        //
        className="block ml-48 mb-8 md:hidden"
        onClick={() => setFilterActive(false)}
      >
        <TiDelete size="30px" />
      </button>
      <select name="sort" id="sort" value={sort} onChange={updateSort}>
        <option value="lowToHigh">Price-Low to High</option>
        <option value="highToLow">Price-High to Low</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <div className="flex flex-col">
        <div>Select Your preferred brand</div>
        {brands.map((brand, ind) => (
          <button
            style={{
              borderBottom: `${
                filter.brand === brand ? "4px solid purple" : "none"
              }`,
            }}
            key={ind}
            name="brand"
            onClick={updateFilter}
          >
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
        <button className="p-2 bg-pur rounded-md text-white" onClick={clearFilters}>Clear Filters</button>
      </div>
    </div>
  );
};

export default Filter;
