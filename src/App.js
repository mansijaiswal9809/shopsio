import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Error from "./Pages/Error";
import PrivateRoute from "./Pages/PrivateRoute";
import Checkout from "./Pages/Checkout";
import SearchProduct from "./Pages/SearchProduct";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/products" element={<Product/>} />
          <Route exact path="/searchproducts" element={<SearchProduct/>} />
          <Route exact path="/SingleProduct" element={<SingleProduct/>} />
          <Route exact path="/cart" element={<Cart/>} />
           <Route exact path='/checkout' element={ <PrivateRoute><Checkout/></PrivateRoute>}/>
          <Route exact path="*" element={<Error/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
