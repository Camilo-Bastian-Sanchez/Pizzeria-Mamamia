# Pizzería Mamma Mía - Hito 4

Proyecto React (Vite) desarrollado para el curso de Desafío Latam. Este Hito implementa el consumo de una API externa con `fetch` y el hook `useEffect`.

## Historial de Hitos

- **Hito 1:** estructura base de la aplicación (Navbar, Home, CardPizza, Footer) con datos escritos a mano.
- **Hito 2:** formularios de `Register` y `Login` con manejo de estado, eventos y validaciones.
- **Hito 3:** renderización dinámica de pizzas desde un array local y creación del componente `Cart`.
- **Hito 4 (actual):** consumo de la API de pizzas con `useEffect` y `fetch`, y creación del componente `Pizza` para mostrar el detalle de una pizza.

## Requisito para ver las pizzas: levantar el backend

Las pizzas se obtienen desde un backend que corre en `http://localhost:5000`. Sin el backend corriendo, la aplicación mostrará un mensaje de error en lugar de las pizzas.

1. Descargar el "Material de apoyo - Backend Pizzas" y descomprimirlo.
2. Entrar a la carpeta del backend (la que contiene `package.json`).
3. Instalar dependencias y levantar el servidor:

```bash
npm install
npm start
```

4. Verificar en el navegador que `http://localhost:5000/api/pizzas` muestre el listado de pizzas.

El servidor debe mantenerse corriendo mientras se usa la aplicación.

### Endpoints utilizados

- `GET http://localhost:5000/api/pizzas`: devuelve un array con todas las pizzas (usado en `Home`).
- `GET http://localhost:5000/api/pizzas/p001`: devuelve una pizza por su id (usado en `Pizza`, con id fijo por ahora).

## Componentes

- `Navbar`: menú de navegación (Home, Login/Register o Profile/Logout según `token`, y Total).
- `Header`: título y descripción, llamado desde `Home`.
- `Home`: consume la API de pizzas con `useEffect` y `fetch`, guarda el resultado en un estado y renderiza un `CardPizza` por cada pizza. Muestra un mensaje si el backend no está disponible.
- `CardPizza`: muestra nombre, precio, imagen y la lista de ingredientes de una pizza, recibidos por props.
- `Pizza`: consume la API para obtener una sola pizza (`p001`) con `useEffect` y `fetch`, y muestra su nombre, precio, ingredientes, imagen y descripción. El botón de añadir al carrito aún no tiene funcionalidad.
- `Cart`: simula un carrito de compras a partir del array `pizzaCart`. Permite aumentar/disminuir la cantidad de cada pizza (eliminándola si llega a 0) y calcula el total.
- `Register`: formulario de registro con validaciones. *Comentado en `App.jsx`, se usará en hitos futuros.*
- `Login`: formulario de inicio de sesión con validaciones. *Comentado en `App.jsx`, se usará en hitos futuros.*
- `Footer`: pie de página.

## Estado actual de `App.jsx`

Siguiendo las instrucciones del Hito, `App.jsx` muestra el componente `Pizza`. Los componentes `Home`, `Cart`, `Register` y `Login` están comentados y se activarán en hitos futuros. Para ver las 6 tarjetas consumidas desde la API, basta con comentar `<Pizza />` y descomentar `<Home />` (y su importación).

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar/
│   ├── Header/
│   ├── Home/
│   ├── CardPizza/
│   ├── Pizza/
│   ├── Cart/
│   ├── Register/
│   ├── Login/
│   └── Footer/
├── data/
│   └── pizzas.js        (el array pizzaCart sigue usándose en Cart)
├── utils/
│   └── format.js
├── App.jsx
└── main.jsx
```

## Cómo correr el proyecto

Con el backend ya levantado (ver sección anterior):

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

> Nota: la versión publicada en GitHub Pages solo mostrará las pizzas si quien la visita tiene el backend corriendo en su propio computador (`localhost:5000`).
