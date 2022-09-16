import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

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
        <p>Cargando...</p>
      ) : (
        <ItemDetail productDetail={productDetail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;

/* useEffect(() => {
  fetch(mock)      
    .then((res) => setProductDetail(mock[id]))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
},[id]); */
