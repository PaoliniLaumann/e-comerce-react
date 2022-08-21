import React from "react";
import "./App.css";
import ItemListConteiner from "./components/ItemListConteiner";

import NavBar from "./components/NavBar";

function App() {
  const mensaje = "Mi primer E-comerce con React";
  const mensaje2 = "German Paolini";

  return (
    <>
      <NavBar />
      <ItemListConteiner mensaje={mensaje} mensaje2={mensaje2} />
    </>
  );
}

export default App;
