import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import StockFail from "../helpers/alerts/StockFail";



const ItemCount = ({ initial, stock, onAdd, count, setCount }) => {
  return (
    <div>
      <h1>Cant: {count} </h1>
      <Stack spacing={2} direction="row" size="medium" m={2}>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            if (count < stock) {
              setCount(count + 1);
            }
          }}
        >
          +
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            if (count > initial) {
              setCount(count - 1);
            }
          }}
        >
          -
        </Button>
      </Stack>
      <Button
        variant="contained"
        size="small"
        disableElevation
        onClick={() => {(stock < 1) ? StockFail() 
        : onAdd(count);
          setCount(initial);              
        }}
      >
        Agregar al Carrito
      </Button>
     
      <br />
    </div>
  );
};

export default ItemCount;
