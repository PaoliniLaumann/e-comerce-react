import { createContext, useContext, useState, useEffect } from "react";
import { useStorage } from "../hooks/useStorage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { saveStorage, getStorage, checkStorage } = useStorage();

  useEffect(() => {
    checkStorage();
    setCart(getStorage("cart"));
  }, [setCart]);

  const addItem = (item) => {
    let newData = [...cart, item];
    saveStorage("cart", newData);
    setCart(newData);
  };
  const plusItemInCart = (id) => {
    const valide = cart.find((prod) => prod.id === id);
    if (valide.quantity === valide.stock) {
    } else {
      valide.quantity++;
      setCart([...cart]);
      saveStorage("cart", cart);
    }
  };

  const dashItemInCart = (id) => {
    const valide = cart.find((prod) => prod.id === id);
    if (valide.quantity <= 1) {
      return;
    } else {
      valide.quantity--;
    }
    setCart([...cart]);
    saveStorage("cart", cart);
  };
  /*  const addItem = (item) => {
    const existsInCart = cart.find((prod) => prod.id === item.id);
    if (existsInCart) {
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + item.quantity };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, item]);
    }
  }; */

  const clear = () => {
    saveStorage("cart", []);
    setCart([]);
  };

  const removeItems = (id) => {
    let newData = cart.filter((prod) => prod.id !== id);
    saveStorage("cart", newData);
    setCart(newData);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  const cartTotal = () => {
    return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        clear,
        isInCart,
        removeItems,
        addItem,
        cartQuantity,
        cartTotal,
        dashItemInCart,
        plusItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
