import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductProvider } from "./context/ProductContext";
import { FilterProvider } from "./context/filterContext";
import { CartProvider } from "./context/cartContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="shopsio.us.auth0.com"
    clientId="peI2vHtzsA1UUtJw7S1SQ5iIMKiucDE1"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductProvider>
        <FilterProvider>
          <CartProvider>
            <ChakraProvider>
              <App />
            </ChakraProvider>
          </CartProvider>
        </FilterProvider>
      </ProductProvider>
    </UserProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
