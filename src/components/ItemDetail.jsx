import React from "react";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";


const ItemDetail = ({ productDetail }) => {
  const { name, detail, price, stock, image } = productDetail;
  console.log(productDetail);
  const onAdd = () => {
    Swal.fire(`Agregaste  productos al carrito`, "", "success");
  };
  return (
    <div>
      <img src={image} alt={name} />
      <h2>Este producto es {name}</h2>
      <h3>{detail}</h3>
      <h3>{price}</h3>
      <ItemCount stock={stock} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
