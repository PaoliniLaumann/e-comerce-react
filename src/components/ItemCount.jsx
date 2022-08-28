import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


const ItemCount = (props) => {
  const { stock, initial, onAdd } = props;
  

  const [contador, setContador] = useState(initial);

  return (
    <div>
      <Stack spacing={2} direction="row" size="medium" >
        <Button variant="contained" 
          onClick={() => {
            if (contador < stock){
              setContador(contador + 1);
            }            
          }}
        >
          +
        </Button>
        <h1>{contador}</h1>
        <Button
          variant="contained"
          onClick={() => {
            if (contador > initial) {
              setContador(contador - 1);
            }            
          }}
        >
          -
        </Button>
      </Stack>
      <br />
      <Button variant="contained" size="medium"  disableElevation onClick={() => {
            onAdd(contador);
            setContador(initial);
          }} >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default ItemCount;
