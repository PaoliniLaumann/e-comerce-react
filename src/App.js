import React from "react";
import "./App.css";
import ItemListContainer from "./components/Cards/ItemListContainer";
import NavBar from "./components/NavBar/NavBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { CartProvider } from "./Context/CartContext";
import Checkout from "../src/components/Cart/Checkout.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
