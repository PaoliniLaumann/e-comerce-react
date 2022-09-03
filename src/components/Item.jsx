import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../App.css";

const Item = ({ item }) => {
  return (
    <Card sx={{ m: 2 }}>
      <CardMedia component="img" image={item.image} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Item: {item.id}
        </Typography>
        <Typography gutterBottom variant="h8" component="div">
          $ {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.detail}
        </Typography>
      </CardContent>
      <CardActions>        
        <Button size="small">Detalles del Producto</Button>
      </CardActions>
    </Card>
  );
};

export default Item;
