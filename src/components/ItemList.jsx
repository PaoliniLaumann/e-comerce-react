import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((item) => (
        <div key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </>
  );
};

export default ItemList;
