import "./Navbar.css";
import { formatPrice } from "../../utils/format";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3 py-2 navbar-custom">
      <span className="navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>

      <div className="navbar-buttons">
        {/* Home y Total siempre se muestran, no dependen del token */}
        <button className="btn btn-outline-light btn-sm">🍕 Home</button>

        {token ? (
          <>
            <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
            <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light btn-sm">🔐 Login</button>
            <button className="btn btn-outline-light btn-sm">🔐 Register</button>
          </>
        )}

        <button className="btn btn-warning btn-sm fw-bold">
          🛒 Total: ${formatPrice(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
