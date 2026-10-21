import { useState } from "react";
import "./Cart.css";
import { pizzaCart } from "../../data/pizzas";
import { formatPrice } from "../../utils/format";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const aumentar = (id) => {
    const nuevoCarrito = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setCart(nuevoCarrito);
  };

  const disminuir = (id) => {
    const nuevoCarrito = cart
      .map((pizza) => {
        if (pizza.id === id) {
          return { ...pizza, count: pizza.count - 1 };
        }
        return pizza;
      })
      .filter((pizza) => pizza.count > 0);
    setCart(nuevoCarrito);
  };

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].count;
  }

  return (
    <section className="cart container">
      <h5 className="cart__title">Detalles del pedido:</h5>

      {cart.length === 0 && <p>Tu carrito está vacío.</p>}

      {cart.map((pizza) => (
        <div className="cart__item" key={pizza.id}>
          <img className="cart__img" src={pizza.img} alt={pizza.name} />
          <span className="cart__name">{pizza.name}</span>
          <span className="cart__price">${formatPrice(pizza.price)}</span>

          <div className="cart__controls">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => disminuir(pizza.id)}
            >
              -
            </button>
            <span className="cart__count">{pizza.count}</span>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => aumentar(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h3 className="cart__total">Total: ${formatPrice(total)}</h3>
      <button className="btn btn-dark">Pagar</button>
    </section>
  );
};

export default Cart;