import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const { total } = useCart();

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="d-flex gap-3">
        <Link to="/" className="navbar-brand">
          🍕 Pizzería Mamma Mía
        </Link>
        <Link to="/register" className="nav-link text-light">
          Registro
        </Link>
        <Link to="/login" className="nav-link text-light">
          Login
        </Link>
      </div>

      <Link to="/cart" className="btn btn-outline-light">
        🛒 Total: ${total.toLocaleString()}
      </Link>
    </nav>
  );
}
