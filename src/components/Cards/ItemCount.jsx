import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import StockFail from "../helpers/alerts/StockFail";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ initial, stock, onAdd, count, setCount }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>Cant: {count} </h1>
      <Stack spacing={3} direction="row" size="medium" m={2}>
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
        onClick={() => {
          stock < 1 ? StockFail() : onAdd(count);
          setCount(initial);
        }}
      >
        Agregar al Carrito
      </Button>
      <br />
      <Button 
        sx={{m:2}}
        variant="contained" 
        color="info" 
        onClick={handleNavigate}>
        Volver
      </Button>
    </div>
  );
};

export default ItemCount;
