import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CartWidget = ({ cant }) => {
  return (
    <>
      <AddShoppingCartIcon />
      <p>{cant}</p>
    </>
  );
};

export default CartWidget;
