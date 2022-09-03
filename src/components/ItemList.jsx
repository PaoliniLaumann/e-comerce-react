import React from "react";
import Item from "./Item";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

 

const ItemList = ({ products }) => { 
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 1, sm: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {products.map((item) => (
        <Grid  item xs={12} sm={4} md={3} key={item.id}>
          <Item item={item} />
        </Grid>
      ))}
    </Grid>
  </Box>
);
}
export default ItemList;


