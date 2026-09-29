# Pizzería Mamma Mía - Hito 3

Proyecto React (Vite) desarrollado para el curso de Desafío Latam. Este Hito implementa la renderización dinámica de componentes a partir de un array de datos.

## Historial de Hitos

- **Hito 1:** estructura base de la aplicación (Navbar, Home, CardPizza, Footer) con datos escritos a mano.
- **Hito 2:** formularios de `Register` y `Login` con manejo de estado, eventos y validaciones.
- **Hito 3 (actual):** renderización dinámica de pizzas desde un array de datos, y creación del componente `Cart` para simular un carrito de compras.

## Componentes

- `Navbar`: menú de navegación (Home, Login/Register o Profile/Logout según `token`, y Total).
- `Header`: título y descripción, llamado desde `Home`.
- `Home`: contiene el `Header` y recorre el array `pizzas` (desde `src/data/pizzas.js`) para renderizar dinámicamente un `CardPizza` por cada pizza.
- `CardPizza`: muestra nombre, precio, imagen y la lista de ingredientes (renderizada dinámicamente) de una pizza, recibidos por props.
- `Cart`: simula un carrito de compras a partir del array `pizzaCart`. Permite aumentar/disminuir la cantidad de cada pizza (eliminándola si llega a 0) y calcula el total de la compra.
- `Register`: formulario de registro con validaciones (campos obligatorios, largo mínimo de contraseña, confirmación de contraseña). *Comentado en `App.jsx`, se usará en hitos futuros.*
- `Login`: formulario de inicio de sesión con validaciones (campos obligatorios, largo mínimo de contraseña). *Comentado en `App.jsx`, se usará en hitos futuros.*
- `Footer`: pie de página.

## Datos

- `src/data/pizzas.js`: exporta dos arrays de datos:
  - `pizzas`: información completa de 6 pizzas (id, nombre, precio, ingredientes, imagen, descripción).
  - `pizzaCart`: simula un carrito de compras inicial (3 pizzas con cantidad).

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar/
│   ├── Header/
│   ├── Home/
│   ├── CardPizza/
│   ├── Cart/
│   ├── Register/
│   ├── Login/
│   └── Footer/
├── data/
│   └── pizzas.js
├── utils/
│   └── format.js
├── App.jsx
└── main.jsx
```

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

## Cómo generar el build

```bash
npm run build
```

## Cómo hacer deploy (GitHub Pages)

```bash
npm run deploy
```
