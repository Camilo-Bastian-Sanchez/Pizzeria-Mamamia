import "./Home.css";
import Header from "../Header/Header";
import CardPizza from "../CardPizza/CardPizza";
import { pizzas } from "../../data/pizzas";

const Home = () => {
  return (
    <main>
      <Header />

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