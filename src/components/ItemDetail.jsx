import React from "react";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ItemDetail = ({ productDetail }) => {
  const { name, detail, price, stock, image, image1, image2, image3 } = productDetail;  
  const onAdd = () => {
    Swal.fire(`Agregaste  productos al carrito`, "", "success");
  };
  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 1, sm: 1, md: 2, xl: 1 }}
        columns={{ xs: 4, sm: 8, md: 10 }}
        className="cardConteiner"
      >
        <Grid item xs={0} sm={4} md={2}>
          <div sx={{ m: 5, textAlign: "center"}}>
            <CardMedia component="img" image={image1} alt="technology" style={{width:"10rem"}}/>
          </div>
          <div sx={{ m: 3, textAlign: "center" }}>
            <CardMedia component="img" image={image2} alt="technology" style={{width:"10rem"}}/>
          </div>
          <div sx={{ m: 3, textAlign: "center" }}>
            <CardMedia component="img" image={image3} alt="technology"style={{width:"10rem"}} />
          </div>
          <Card sx={{ m: 2 }}></Card>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <div sx={{ m: 2, textAlign: "center" }}>
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
              <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
