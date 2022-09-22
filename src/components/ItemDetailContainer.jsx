import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const coleccionProductos = collection(db, "products");

    const referenciaDoc = doc(coleccionProductos, id);

    getDoc(referenciaDoc)
      .then((result) => {
        setProductDetail({
          id: result.id,
          ...result.data(),
        });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading ? (
        <Box
        sx={{
          alignItems: "center", display: "flex", justifyContent: "center", height: "60vh", width: "100vw"
        }}
      >
        <CircularProgress size={100} color={"success"} />
      </Box>
      ) : (
        <ItemDetail productDetail={productDetail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
