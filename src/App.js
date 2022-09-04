import React from "react";
import "./App.css";
import ItemListConteiner from "./components/ItemListConteiner";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />          
          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Routes>        
      </BrowserRouter>
    </>
  );
}

export default App;
