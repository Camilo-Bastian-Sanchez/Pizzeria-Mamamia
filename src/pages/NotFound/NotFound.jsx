import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found">
      <p className="not-found__emoji">🍕</p>
      <h1 className="not-found__code">404</h1>
      <h2 className="not-found__title">¡Esta pizza no existe en nuestro menú!</h2>
      <p className="not-found__text">
        La página que buscas no está disponible o fue movida.
      </p>
      <Link to="/" className="btn btn-dark">
        Volver al inicio
      </Link>
    </section>
  );
};

export default NotFound;
