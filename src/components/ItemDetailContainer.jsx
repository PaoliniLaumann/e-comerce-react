import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import mock from "../mock/products.json";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const{id}=useParams();

  useEffect(() => {
    fetch(mock)      
      .then((res) => setProductDetail(mock[id]))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  },[id]);
  

  return (
    <div>
      {loading ? <p>Cangando...</p> :  <ItemDetail productDetail={productDetail} /> }     
    </div>
  );
};

export default ItemDetailContainer;
