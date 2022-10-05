import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const CartWidget = () => {
  const navegate = useNavigate();
  const { cartQuantity } = useCart();
  return (
    <>
      <Button>
        <AddShoppingCartIcon fontSize="large" onClick={() => navegate(`/Cart`)} />
        <h2>{cartQuantity() || ""}</h2>
      </Button>
    </>
  );
};

export default CartWidget;
