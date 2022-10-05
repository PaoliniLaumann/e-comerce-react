import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../Context/CartContext";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const CartItem = ({ cart }) => {
  const { removeItems, plusItemInCart, dashItemInCart } = useCart();
  return (
    <div>
      <Grid
        container
        item
        xs={12}
        sm={4}
        md={12}
        spacing={2}
        rowSpacing={3}
        className="cardConteiner"
      >
        <Grid item md={3} sx={{ m: 2 }}>
          <CardMedia
            component="img"
            image={cart.image}
            alt="technology"
            style={{ width: "20rem" }}
          />
        </Grid>
        <Grid item md={3}>
          <Card elevation={4} sx={{ m: 2, textAlign: "center" }}>
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
              <Stack spacing={2} direction="row" size="medium" m={2}  className="cardConteiner">
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => plusItemInCart(cart.id)}
                >
                  +
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => dashItemInCart(cart.id)}
                >
                  -
                </Button>
              </Stack>
              <Typography gutterBottom variant="h7" component="div">
                Stock: {cart.stock}
              </Typography>
            </CardContent>
            <IconButton
              aria-label="delete"
              size="large"
              color="warning"
              onClick={() => removeItems(cart.id)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartItem;
