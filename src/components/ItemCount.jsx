import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ItemCount = (props) => {
  const { stock, initial, onAdd } = props;

  const [contador, setContador] = useState(initial);

  return (
    <div>
      <Stack spacing={2} direction="row" size="medium" m={2}>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            if (contador < stock) {
              setContador(contador + 1);
            }
          }}
        >
          +
        </Button>
        <h1>{contador}</h1>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            if (contador > initial) {
              setContador(contador - 1);
            }
          }}
        >
          -
        </Button>
        <Button
          variant="contained"
          size="small"
          disableElevation
          onClick={() => {
            onAdd(contador);
            setContador(initial);
          }}
        >
          Agregar al Carrito
        </Button>
      </Stack>

      <br />
    </div>
  );
};

export default ItemCount;
