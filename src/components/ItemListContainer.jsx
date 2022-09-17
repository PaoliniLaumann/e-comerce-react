import React, { useState, useEffect } from "react";
import "../App.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(``);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productos = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");
    getDocs(productos)
      .then((result) => {
        const lista = result.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });
        setProducts(lista);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div>
      <p>{loading ? `Loadin...` : null}</p>
      <p>{error ? `Error` : null}</p>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;


