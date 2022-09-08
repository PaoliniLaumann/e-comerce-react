import React, { useState, useEffect } from "react";
import "../App.css";
import ItemList from "./ItemList";
import mock from "../mock/products.json";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  /* const [loading, setLoading] = useState(true); */
  const [products, setProducts] = useState([]);
  /* const [error, setError] = useState(``); */
  const { categoryId } = useParams();  

  
  useEffect(() => {
    categoryId ?  setProducts(mock.filter(products => products.category === categoryId)) : setProducts(mock) 
 
  }, [categoryId]); 

  return (
    <div>
     {/*  <p>{loading ? `Loadin...` : null}</p>
      <p>{error ? `Error` : null}</p> */}
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
