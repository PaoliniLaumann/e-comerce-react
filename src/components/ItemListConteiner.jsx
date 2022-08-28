import React, { useState, useEffect } from "react";
import "../App.css";
import ItemList from "./ItemList";

const ItemListConteiner = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(``);

  useEffect(() => {
    let promesaProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          {
            id: 1,
            name: "Notebook Asus",
            price: 465000,
            detail:
              "Notebook ASUS ROG ZEPHYRUS 14 WQHD RYZEN 9 4900HS 16GB 1TB SSD NVMe RTX 2060",
          },
          {
            id: 2,
            name: "Notebook XPG",
            price: 470000,
            detail:
              "Notebook Gamer XPG XENIA 15.6 Core I7 11800H 32GB (2x16GB) 1TB SSD NVMe RTX 3070 165Hz W10",
          },
          {
            id: 3,
            name: "Notebook Asus",
            price: 280000,
            detail:
              "Notebook ASUS UX5401 OLED 14 Core I5 1135G7 8GB 512GB SSD W10 Home ",
          },
          {
            id: 4,
            name: "Notebook Aorus",
            price: 532000,
            detail:
              "Notebook Gamer AORUS XD 15.6 Core I7 11800H 16GB (2x8GB) 1TB SSD NVMe RTX 3070 240Hz W11 Home",
          },
        ]);
      }, 2000);
    });

    promesaProductos
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <p>{loading ? `Loadin...` : null}</p>
      <p>{error ? `Error` : null}</p>
      <ItemList productos= {productos} />
      
    </div>
  );
};
export default ItemListConteiner;
