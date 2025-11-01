import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Simulación de login exitoso (a futuro podrías conectar un backend real)
    setMessage("✅ ¡Login exitoso!");
    setEmail("");
    setPassword("");
  };

  return (
    <main className="container my-5">
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
          <button type="submit" className="btn btn-success">
            Iniciar sesión
          </button>
        </form>

        {message && (
          <p className="text-center mt-3 fw-bold text-primary">{message}</p>
        )}
      </div>
    </main>
  );
}
