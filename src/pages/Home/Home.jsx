import { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import CardPizza from "../../components/CardPizza/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        if (!response.ok) {
          throw new Error("Respuesta no válida del servidor");
        }
        const data = await response.json();
        setPizzas(data);
      } catch (err) {
        console.error("Error al obtener las pizzas:", err);
        setError(true);
      }
    };

    getPizzas();
  }, []);

  return (
    <main>
      <Header />

      {error && (
        <p className="text-center text-danger mt-4">
          No se pudieron cargar las pizzas. Verifica que el backend esté
          corriendo en el puerto 5000.
        </p>
      )}

      <section className="pizza-list">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;