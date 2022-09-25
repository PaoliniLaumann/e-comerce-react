import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";
import Swal from "sweetalert2";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [buttonOff, setButtonOff] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const [idPurchase, setIdPurchase] = useState("");

  const { cart, cartTotal, clear } = useCart();  
 

  const endPurchase = () => {
    
    if (name.length < 6 || phone === "" || email === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor completa todos los campos",
      });
      return;
    }
    setButtonOff(true);

    let orderPurchase = {
      buyer: { name: name, phone: phone, email: email },
      items: cart,
      Total: cartTotal(),
      date: Timestamp.fromDate(new Date())
    };

    const db = getFirestore();
    const myCollection = collection(db, `orders`);
    addDoc(myCollection, orderPurchase).then(({ id }) => {
      setIdPurchase(id);
      clear();
    });
  };

  if (idPurchase) {
    return (
      <div className="cardConteiner" style={{margin:"10rem"}}>
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
    <Box
      className="formStyle"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 4, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    ><div>
      <h1>Completa el formulario con tu datos</h1>
    </div>
      
      <div>
        <TextField
          required
          id="outlined-required"
          label="Nombre y Apellido"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Telefono"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        />
        <br />
        <TextField
          required
          id="outlined-password-input"
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Stack direction="column" margin={3}>
        {!buttonOff &&
        <Button
          variant="contained"
          onClick={endPurchase}
          endIcon={<SendIcon />}       
          >
          Terminar Compra
        </Button>
        }
        
      </Stack>
      <Button variant="contained" color="info" onClick={handleNavigate}>
        Volver
      </Button>
    </Box>
  );
};

export default Checkout;
