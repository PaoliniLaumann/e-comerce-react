import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((item) => (
        <div>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
