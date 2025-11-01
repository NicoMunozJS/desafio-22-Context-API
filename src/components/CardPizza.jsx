import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function CardPizza({ id, name, price, ingredients, img }) {
  const { addToCart } = useCart();

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img || "https://via.placeholder.com/150"} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{name}</h5>
        <p><b>Ingredientes:</b></p>
        <ul>
          {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>
        <p className="fw-bold">Precio: ${price.toLocaleString()}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/pizza/${id}`} className="btn btn-primary">
            Ver más
          </Link>
          <button 
            className="btn btn-success" 
            onClick={() => addToCart({ id, name, price, img })}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
}
