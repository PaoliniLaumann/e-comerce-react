import React from "react";
import "./App.css";
import ItemListConteiner from "./components/ItemListConteiner";
import ItemCount from "./components/ItemCount";
import Swal from "sweetalert2";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  const stock = 6;
  const initial = 1;
  const onAdd = (contador) => {
    Swal.fire(`Agregaste ${contador} productos al carrito`, "", "success");
  };

  return (
<>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/category/:id" element={<ItemListConteiner />}/>
          <Route path="/product/:id" element={<ItemListConteiner />}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
