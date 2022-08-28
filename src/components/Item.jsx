import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const Item = ({ item }) => {
  return (
       
        <Card sx={{ maxWidth: 280, m: 2 }}>
          <CardMedia
            component="img"
            height="160"
            image="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30646_Notebook_Gamer_AORUS_XD_15.6__Core_I7_11800H_16GB__2x8GB__1TB_SSD_NVMe_RTX_3070_240Hz_W11_Home_316bec6c-grn.jpg"
            alt="green iguana"
          />
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
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
       
  );
};

export default Item;
