// src/pages/Pizza.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error("Error al cargar pizza:", err));
  }, [id]);

  if (!pizza) return <p className="text-center mt-5">Cargando pizza...</p>;

  return (
    <main className="container mt-5 text-center">
      <div className="card mx-auto shadow-sm" style={{ maxWidth: "400px" }}>
        <img
          src={pizza.img || "https://via.placeholder.com/400x300"}
          alt={pizza.name}
          className="card-img-top"
        />
        <div className="card-body">
          <h2 className="card-title">{pizza.name}</h2>
          <p className="fw-bold text-success">
            Precio: ${pizza.price.toLocaleString()}
          </p>

          <h5 className="mt-3">Ingredientes:</h5>
          <ul className="list-unstyled">
            {pizza.ingredients.map((i, idx) => (
              <li key={idx}>🍕 {i}</li>
            ))}
          </ul>

          <button
            className="btn btn-primary mt-3"
            onClick={() => addToCart(pizza)}
          >
            Añadir al carrito 🛒
          </button>
        </div>
      </div>
    </main>
  );
}
