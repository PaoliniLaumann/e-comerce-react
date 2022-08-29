import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((item) => (
        <div>
          <Item item={item} />
        </div>
      ))}
    </>
  );
};

export default ItemList;
