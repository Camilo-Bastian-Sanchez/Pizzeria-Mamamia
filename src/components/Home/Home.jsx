import "./Home.css";
import Header from "../Header/Header";
import CardPizza from "../CardPizza/CardPizza";

const Home = () => {
  return (
    <main>
      <Header />

      <section className="pizza-list">
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://commons.wikimedia.org/wiki/Special:FilePath/Margherita_Pizza.jpg?width=400"
        />
        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="https://commons.wikimedia.org/wiki/Special:FilePath/Cheese%20Pizza.jpg?width=400"
        />
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="https://commons.wikimedia.org/wiki/Special:FilePath/Pepperoni%20pizza.jpg?width=400"
        />
      </section>
    </main>
  );
};

export default Home;
