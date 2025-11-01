// src/context/CartContext.jsx
import { createContext, useContext, useState } from "react";

// Crear el Context
const CartContext = createContext();

// Hook para consumirlo más fácil
export const useCart = () => useContext(CartContext);

// Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (pizza) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === pizza.id);
      if (item) {
        // Si ya existe, aumentar cantidad
        return prev.map((i) =>
          i.id === pizza.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // Si no existe, agregar con quantity 1
      return [...prev, { ...pizza, quantity: 1 }];
    });
  };

  // Aumentar cantidad
  const increase = (id) =>
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );

  // Disminuir cantidad (y eliminar si llega a 0)
  const decrease = (id) =>
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );

  // Calcular total del carrito
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increase, decrease, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
