import "./CardPizza.css";
import { formatPrice } from "../../utils/format";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card-pizza">
      <img
        src={img}
        alt={name}
        className="card-pizza__img"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x300/e9ecef/6c757d?text=Pizza+" + name;
        }}
      />
      <div className="card-pizza__body">
        <h3 className="card-pizza__name">Pizza {name}</h3>

        <p className="card-pizza__ingredients-label">Ingredientes:</p>
          <ul className="card-pizza__ingredients">
            {ingredients.map((ingredient, i) => (
              <li key={i}>🍕 {ingredient}</li>
            ))}
          </ul>

        <p className="card-pizza__price">Precio: ${formatPrice(price)}</p>

        <div className="card-pizza__actions">
          <button className="btn btn-outline-secondary btn-sm">Ver Más 👀</button>
          <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
