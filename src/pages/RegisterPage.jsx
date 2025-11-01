import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("⚠️ Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("⚠️ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("⚠️ Las contraseñas no coinciden.");
      return;
    }

    setMessage("✅ ¡Registro exitoso!");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <main className="container text-center my-5">
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4">Registro</h2>

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
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary mt-2">
            Registrarse
          </button>
        </form>

        {message && <p className="mt-3 fw-bold">{message}</p>}
      </div>
    </main>
  );
}
