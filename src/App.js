import React from "react";
import "./App.css";
import ItemListConteiner from "./components/ItemListConteiner";
import ItemCount from "./components/ItemCount";
import Swal from 'sweetalert2'


import NavBar from "./components/NavBar";

function App() { 
  const stock = 6
  const initial = 1  
  const onAdd = (contador) => {
    Swal.fire(
      `Agregaste ${contador} productos al carrito`,
      "",
      "success"
    );
    
  }

  return (
    <>
      <NavBar />
      <ItemListConteiner />
      <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
      
    </>
  );
}

export default App;
