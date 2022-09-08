import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />  
          <Route path="/category/:categoryId" element={<ItemListContainer />} />        
         <Route path="/product/:id" element={<ItemDetailContainer />} /> 
        </Routes>        
      </BrowserRouter>
    </>
  );
}

export default App;
