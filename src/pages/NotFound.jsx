import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container text-center my-5">
      <div className="card p-5 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
        <h1 className="display-4 text-danger">404</h1>
        <h2 className="mb-3">Página no encontrada</h2>
        <p className="text-muted">
          Lo sentimos, la página que estás buscando no existe o fue movida.
        </p>
        <Link to="/" className="btn btn-primary mt-3">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
