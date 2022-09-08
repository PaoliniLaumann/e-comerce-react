import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../App.css";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {

  const navegate= useNavigate()

  return (
    <Card sx={{ m: 2 }}>
      <CardActionArea>
        <CardMedia component="img" image={product.image} alt="technology" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          $ {product.price}
          </Typography>          
          <Typography variant="body2" color="text.secondary">
            {product.detail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={() => navegate(`/product/${product.id}`)}>Detalles del Producto</Button>
      </CardActions>
    </Card>
  );
};

export default Item;
