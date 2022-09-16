import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

const CartWidget = ({ cant }) => {
  const navegate = useNavigate();
  return (
    <>
    
    <Button>
       <AddShoppingCartIcon onClick={() => navegate(`/Cart`)}/>            
      <p>{cant}</p>
      
    </Button>
     
    </>
  );
};

export default CartWidget;
