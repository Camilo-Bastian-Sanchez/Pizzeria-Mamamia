import { useState, useEffect } from "react";
import "./Pizza.css";
import { formatPrice } from "../../utils/format";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        if (!response.ok) {
          throw new Error("Respuesta no válida del servidor");
        }
        const data = await response.json();
        setPizza(data);
      } catch (err) {
        console.error("Error al obtener la pizza:", err);
        setError(true);
      }
    };

    getPizza();
  }, []);

  if (error) {
    return (
      <p className="pizza-message text-danger">
        No se pudo cargar la pizza. Verifica que el backend esté corriendo en
        el puerto 5000.
      </p>
    );
  }

  if (!pizza) {
    return <p className="pizza-message">Cargando pizza...</p>;
  }

  return (
    <section className="pizza-detail">
      <img className="pizza-detail__img" src={pizza.img} alt={pizza.name} />

      <div className="pizza-detail__info">
        <h2 className="pizza-detail__name">Pizza {pizza.name}</h2>
        <p className="pizza-detail__desc">{pizza.desc}</p>

        <h5>Ingredientes:</h5>
        <ul className="pizza-detail__ingredients">
          {pizza.ingredients.map((ingredient, i) => (
            <li key={i}>🍕 {ingredient}</li>
          ))}
        </ul>

        <p className="pizza-detail__price">
          Precio: ${formatPrice(pizza.price)}
        </p>
        <button className="btn btn-dark">Añadir 🛒</button>
      </div>
    </section>
  );
};

export default Pizza;