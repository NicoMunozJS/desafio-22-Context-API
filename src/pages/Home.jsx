// src/pages/Home.jsx
import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import CardPizza from "../components/CardPizza.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart(); // Consumimos el CartContext

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error("Error al cargar pizzas:", err));
  }, []);

  if (pizzas.length === 0) {
    return <p className="text-center my-5">Cargando pizzas...</p>;
  }

  return (
    <main className="container my-4">
      <Header />
      <section className="d-flex flex-wrap gap-3 justify-content-center mt-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img || "https://via.placeholder.com/150"}
            addToCart={() => addToCart(pizza)} // Pasamos la función al card
          />
        ))}
      </section>
    </main>
  );
}
