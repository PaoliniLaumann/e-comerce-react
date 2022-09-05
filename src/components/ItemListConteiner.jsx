import React, { useState, useEffect } from "react";
import "../App.css";
import ItemList from "./ItemList";
import mock from "../mock/products.json";


const ItemListConteiner = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProductos] = useState([]);
  const [error, setError] = useState(``);

  useEffect(() => {
    fetch(mock)    
       .then((json) => {
        setProductos(mock);
      })      
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  

  return (
    <div>
      <p>{loading ? `Loadin...` : null}</p>
      <p>{error ? `Error` : null}</p>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListConteiner;
