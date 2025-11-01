import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { cart, increase, decrease, total } = useCart();

  if (cart.length === 0) {
    return <p className="text-center mt-5">Tu carrito está vacío 🍕</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🛒 Carrito de Compras</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center justify-content-between border rounded p-3 mb-3"
        >
          <img
            src={item.img || "https://via.placeholder.com/80"}
            alt={item.name}
            width="80"
            className="rounded"
          />
          <h5 className="m-0 flex-grow-1 text-start ps-3">{item.name}</h5>
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => decrease(item.id)}
            >
              −
            </button>
            <span>{item.quantity}</span>
            <button
              className="btn btn-outline-success btn-sm"
              onClick={() => increase(item.id)}
            >
              +
            </button>
          </div>
          <p className="fw-bold m-0">
            ${(item.price * item.quantity).toLocaleString()}
          </p>
        </div>
      ))}

      <hr />
      <h4 className="text-end">Total: ${total.toLocaleString()}</h4>

      <div className="text-end">
        <button className="btn btn-primary mt-3">Pagar</button>
      </div>
    </div>
  );
}
