import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductProvider } from "./context/ProductContext";
// import { CategoryProductProvider } from "./context/categoryProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    {/* <CategoryProductProvider> */}
      <ChakraProvider>
        <App />
      </ChakraProvider>
    {/* </CategoryProductProvider> */}
  </ProductProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
