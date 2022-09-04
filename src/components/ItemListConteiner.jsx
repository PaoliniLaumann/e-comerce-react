import React, { useState, useEffect } from "react";
import "../App.css";
import ItemList from "./ItemList";

const ItemListConteiner = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProductos] = useState([]);
  const [error, setError] = useState(``);

  useEffect(() => {
    fetch(`mock/products.json`)
      .then((res) => res.json())
      .then((json) => {
        setProductos(json);
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
