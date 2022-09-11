import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import {CartProvider} from "./Context/CardContext"

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />  
          <Route path="/category/:categoryId" element={<ItemListContainer />} />        
         <Route path="/product/:id" element={<ItemDetailContainer />} /> 
         <Route path="/Cart" element={<Cart />} />
        </Routes>        
      </BrowserRouter>
    </CartProvider>
      
    </>
  );
}

export default App;
