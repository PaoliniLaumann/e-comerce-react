import React from "react";
import "./App.css";
import ItemListConteiner from "./components/ItemListConteiner";
import ItemCount from "./components/ItemCount";
import Promesas from "./test/Promesas";

import NavBar from "./components/NavBar";

function App() {
  const mensaje = "Mi primer E-comerce con React";
  const mensaje2 = "German Paolini";
  const stock = 6
  const initial = 1  
  const onAdd = (contador) => {
    alert (JSON.stringify(contador));
    
  }

  return (
    <>
      <NavBar />
      <ItemListConteiner mensaje={mensaje} mensaje2={mensaje2} />
      <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
      
    </>
  );
}

export default App;
