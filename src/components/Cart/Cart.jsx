import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useCart } from "../../Context/CartContext";
import CartItem from "../Cart/CartItem";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/system";

const Cart = () => {
  const { cart, clear, cartTotal } = useCart();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      {!cart.length ? (
        <Grid
          container
          spacing={{ xs: 1, sm: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="cardConteiner"
          sx={{ textAlign: "center" }}
          style={{ backgroundColor: "#8bc34a" }}
        >
          <Card sx={{ m: 9 }} elevation={7} style={{ backgroundColor: "#8bc34a" }}>
            <CardActionArea onClick={() => navigate("/")}>
              <Typography gutterBottom variant="h3" component="div">
                Tu carrito esta vacio!
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                Click aqui para ver nuestros productos
              </Typography>
              <CardMedia
                component="img"
                image="./pngkey.com-carrito-de-compras-png-4119504.png"
                alt="technology"
              />
              <CardContent></CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ) : (
        <Box>
          {cart.map((cart) => (
            <CartItem key={cart.id} cart={cart} />
          ))}
          <div className="cardConteiner">
            <h1>Total: ${cartTotal()}</h1>
            <Stack direction="row" spacing={2} margin={2}>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                size="medium"
                onClick={() => clear()}
              >
                Vaciar carrito
              </Button>
              <Button variant="contained" color="success" onClick={() => navigate("/checkout")}>
                Terminar Compra
              </Button>
            </Stack>
            <Stack direction="row" margin={2} marginBottom={4}>
              <Button variant="contained" color="info" onClick={handleNavigate}>
                Volver
              </Button>
            </Stack>
          </div>
        </Box>
      )}
    </div>
  );
};

export default Cart;
