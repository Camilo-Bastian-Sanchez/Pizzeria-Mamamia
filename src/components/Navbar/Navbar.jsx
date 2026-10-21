import { Link } from "react-router-dom";
import "./Navbar.css";
import { formatPrice } from "../../utils/format";

const Navbar = () => {
  const total = 25000;

  return (
    <nav className="navbar navbar-dark bg-dark px-3 py-2 navbar-custom">
      <span className="navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>

      <div className="navbar-buttons">
        <Link to="/" className="btn btn-outline-light btn-sm">
          🍕 Home
        </Link>
        <Link to="/login" className="btn btn-outline-light btn-sm">
          🔐 Login
        </Link>
        <Link to="/register" className="btn btn-outline-light btn-sm">
          🔐 Register
        </Link>
        <Link to="/profile" className="btn btn-outline-light btn-sm">
          🔓 Profile
        </Link>
        <Link to="/cart" className="btn btn-warning btn-sm fw-bold">
          🛒 Total: ${formatPrice(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
