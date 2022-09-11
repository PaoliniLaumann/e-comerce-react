import React from "react";
import ItemCount from "./ItemCount";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CardContext";

const ItemDetail = ({ productDetail }) => {
  const navegate = useNavigate();
  const [count, setCount] = useState(1);
  const [buy, setBuy] = useState(false);
  const { id, name, detail, price, stock, image, image1, image2, image3 } =
    productDetail;
  const {addItem} = useCart()

  const onAdd = () => {
   let purchase = {
    id,
    name,                                      
    price,
    stock,
    image,
    quantity:count
   }
    setBuy(true);
    addItem(purchase)
  };
  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 1, sm: 1, md: 2, xl: 2 }}
        columns={{ xs: 4, sm: 8, md: 10 }}
        className="cardConteiner"
      >
        <Grid item xs={0} sm={4} md={2}>
          <div sx={{ m: 3, textAlign: "center" }}>
            <CardMedia
              component="img"
              image={image1}
              alt="technology"
              style={{ width: "10rem" }}
            />
          </div>
          <div sx={{ m: 3, textAlign: "center" }}>
            <CardMedia
              component="img"
              image={image2}
              alt="technology"
              style={{ width: "10rem" }}
            />
          </div>
          <div sx={{ m: 3, textAlign: "center" }}>
            <CardMedia
              component="img"
              image={image3}
              alt="technology"
              style={{ width: "10rem" }}
            />
          </div>
          <Card sx={{ m: 2 }}></Card>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <div sx={{ m: 3, textAlign: "center" }}>
            <CardMedia component="img" image={image} alt="technology" />
          </div>
          <Card sx={{ m: 2 }}></Card>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Card sx={{ m: 1, textAlign: "center" }}>
            <CardContent>
              <Typography variant="h3" component="div">
                {name}
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                $ {price}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {detail}
              </Typography>
              <Typography variant="body1" color="bold">
                Stock: {stock}
              </Typography>
            </CardContent>
            <CardActions className="cardConteiner">
              {!buy ? (
                <ItemCount
                  stock={stock}
                  initial={1}
                  onAdd={onAdd}
                  count={count}
                  setCount={setCount}
                />
              ) : (
                <div>
                  <Stack spacing={2} direction="column" size="medium" m={2}>
                    <Button
                      variant="contained"
                      size="small"
                      color="success"
                      onClick={() => navegate(`/`)}
                    >
                      Seguir Comprando
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => navegate(`/Cart`)}
                    >
                      Ir al Carrito
                    </Button>
                  </Stack>
                </div>
              )}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
