import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios.");
      setIsError(true);
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      setIsError(true);
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      setIsError(true);
      return;
    }

    setMessage("¡Registro exitoso!");
    setIsError(false);
  };

  return (
    <div className="register-container container py-4">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>

        {message && (
          <p className={isError ? "text-danger mt-3" : "text-success mt-3"}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;