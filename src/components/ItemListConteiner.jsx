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
            image:
              "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30646_Notebook_Gamer_AORUS_XD_15.6__Core_I7_11800H_16GB__2x8GB__1TB_SSD_NVMe_RTX_3070_240Hz_W11_Home_316bec6c-grn.jpg",
          },
          {
            id: 2,
            name: "Notebook XPG",
            price: 470000,
            detail:
              "Notebook Gamer XPG XENIA 15.6 Core I7 11800H 32GB (2x16GB) 1TB SSD NVMe RTX 3070 165Hz W10",
            image:
              "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26535_Notebook_ASUS_ROG_ZEPHYRUS_14__WQHD_RYZEN_9_4900HS_16GB_1TB_SSD_NVMe_RTX_2060_b8ffd6ee-grn.jpg",
          },
          {
            id: 3,
            name: "Notebook Asus",
            price: 280000,
            detail:
              "Notebook ASUS UX5401 OLED 14 Core I5 1135G7 8GB 512GB SSD W10 Home ",
            image:
              "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30592_Notebook_ASUS_UX5401_OLED__14__Core_I5_1135G7_8GB_512GB_SSD_W10_Home_f059b8fd-grn.jpg",
          },
          {
            id: 4,
            name: "Notebook Aorus",
            price: 532000,
            detail:
              "Notebook Gamer AORUS XD 15.6 Core I7 11800H 16GB (2x8GB) 1TB SSD NVMe RTX 3070 240Hz W11 Home",
            image:
              "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30568_Notebook_Gamer_ASUS_ROG_ZEPHYRUS_G14_14__Ryzen_7_5800HS_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_W10_ANIME_MATRIX_5d444937-grn.jpg",
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
      <ItemList productos={productos} />
    </div>
  );
};
export default ItemListConteiner;
