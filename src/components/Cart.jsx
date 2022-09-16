import React from "react";
import { useCart } from "../Context/CartContext";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { cart, removeItems, clear } = useCart();

  return (
    <Box>
      {cart.map((cart) => (
        <Grid
          container
          item
          xs={12}
          sm={4}
          md={12}
          key={cart.id}
          spacing={2}
          rowSpacing={3}
          className="cardConteiner"
        >
          <Grid item md={3}>
            <CardMedia
              component="img"
              image={cart.image}
              alt="technology"
              style={{ width: "20rem" }}
            />
          </Grid>
          <Grid item md={3}>
            <Card sx={{ m: 2, textAlign: "center" }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  color="#616161"
                  component="div"
                >
                  {cart.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Precio: $ {cart.price}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Cantidad: {cart.quantity}
                </Typography>
              </CardContent>
              <IconButton aria-label="delete" size="large" color="warning" onClick={() => removeItems(cart.id)}>               
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Card>
          </Grid>
        </Grid>
      ))}
      <div className="cardConteiner">
        <Button variant="contained" size="small" onClick={() => clear()}>
          Vaciar carrito
        </Button>
      </div>
    </Box>
  );
};

export default Cart;
