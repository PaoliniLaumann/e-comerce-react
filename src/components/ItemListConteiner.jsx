import React from "react";
import "../App.css";

const ItemListConteiner = (props) => {
  const { mensaje, mensaje2 } = props;
  

  return (
    <div className="estilo">
      <h1 >{mensaje}</h1>
      <h2>{mensaje2}</h2>
    </div>
  );
};
export default ItemListConteiner;
