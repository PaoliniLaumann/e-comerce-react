import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useCart } from "../../Context/CartContext";
import { addDoc, collection, getFirestore, Timestamp, documentId, getDocs, query, where, writeBatch,} from "firebase/firestore";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Grid, Paper, Typography } from "@mui/material";
import { CheckoutFail } from "../helpers/alerts/CheckoutFail";
const Checkout = () => {
  const [buttonOff, setButtonOff] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    endPurchase(data);
  };
  const [idPurchase, setIdPurchase] = useState("");

  const { cart, cartTotal, clear } = useCart();

  const endPurchase = async (data) => {
    setButtonOff(true);

    let orderPurchase = {
      buyer: data,
      items: cart,
      Total: cartTotal(),
      date: Timestamp.fromDate(new Date()),
    };

    const db = getFirestore();
    const myCollection = collection(db, `orders`);
    const batch = writeBatch(db);
    const productsRef = collection(db, "products");
    const q = query(
      productsRef,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );
    const products = await getDocs(q);

    const outOfStock = [];

    products.docs.forEach((doc) => {
      const itemToUpdate = cart.find((item) => item.id === doc.id);
      const dataStock = doc.data().stock;

      if (dataStock >= itemToUpdate.quantity) {
        batch.update(doc.ref, {
          stock: dataStock - itemToUpdate.quantity,
        });
      } else {
        outOfStock.push(itemToUpdate);
      }
    });
    if (outOfStock.length === 0) {
      batch.commit();
      addDoc(myCollection, orderPurchase).then(({ id }) => {
        setIdPurchase(id);
        clear();
      });
    } else {
      CheckoutFail();
    }
  };

  if (idPurchase) {
    return (
      <div className="cardConteiner" style={{ margin: "10rem" }}>
        <h2>
          Gracias por tu compra. Tu numero de seguimiento es: {idPurchase}
        </h2>
        <Stack direction="row" margin={2} marginBottom={4}>
          <Button
            variant="contained"
            color="info"
            onClick={() => navigate("/")}
          >
            Volver
          </Button>
        </Stack>
      </div>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "10vh 0",
          textAlign: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Paper elevation={6}>
          <Grid sx={{ padding: "5vh 10vh" }}>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ fontSize: 30, fontWeight: "bold", paddingBottom: "4vh" }}
            >
              Completa el Formulario
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <TextField
                  id="outlined-required"
                  label="Nombre y Apellido"
                  type="text"
                  error={errors.name}
                  helperText={errors.name ? "Ingrese un apellido valido" : ""}
                  {...register("name", {
                    required: true,
                    minLength: 6,
                    maxLength: 40,
                    pattern: /^[a-z A-Z]+$/,
                  })}
                />
              </Box>
              <br />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <TextField
                  label="Telefono"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  helperText={errors.phone ? "Ingrese un teléfono valido" : ""}
                  error={errors.phone}
                  {...register("phone", {
                    required: "Ingrese un telefono valido",
                    minLength: 8,
                    maxLength: 20,
                    pattern: /^(0|[0-9]\d*)(\.\d+)?$/,
                  })}
                />
              </Box>
              <br />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <TextField
                  id="outlined-password-input"
                  label="E-mail"
                  type="text"
                  helperText={errors.email ? "Ingrese un email valido" : ""}
                  {...register("email", {
                    required: true,
                    maxLength: 50,
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Email no valido",
                    },
                  })}
                />
              </Box>

              <Stack direction="column" margin={3}>
                {!buttonOff && (
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    type="submit"
                    color="success"
                    sx={{ color: "white" }}
                  >
                    Terminar Compra
                  </Button>
                )}
              </Stack>
              <Button variant="contained" color="info" onClick={handleNavigate}>
                Volver
              </Button>
            </form>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Checkout;
