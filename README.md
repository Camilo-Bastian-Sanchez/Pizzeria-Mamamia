# Pizzería Mamma Mía - Hito 5

Proyecto React (Vite) desarrollado para el curso de Desafío Latam. Este Hito implementa el enrutamiento de la aplicación con React Router.

## Historial de Hitos

- **Hito 1:** estructura base de la aplicación (Navbar, Home, CardPizza, Footer) con datos escritos a mano.
- **Hito 2:** formularios de `Register` y `Login` con manejo de estado, eventos y validaciones.
- **Hito 3:** renderización dinámica de pizzas desde un array local y creación del componente `Cart`.
- **Hito 4:** consumo de la API de pizzas con `useEffect` y `fetch`, y creación del componente `Pizza`.
- **Hito 5 (actual):** enrutamiento con React Router, carpeta `pages` y nuevos componentes `Profile` y `NotFound`.

## Rutas

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `Home` | Listado de pizzas obtenido desde la API |
| `/register` | `Register` | Formulario de registro |
| `/login` | `Login` | Formulario de inicio de sesión |
| `/cart` | `Cart` | Carrito de compras |
| `/pizza/p001` | `Pizza` | Detalle de la pizza `p001` (id fijo por ahora) |
| `/profile` | `Profile` | Perfil del usuario (datos estáticos por ahora) |
| `/404` | `NotFound` | Página de error |
| cualquier otra | — | Redirige a `/404` |

## Requisito para ver las pizzas: levantar el backend

Las pizzas se obtienen desde un backend que corre en `http://localhost:5000`. Sin el backend corriendo, `Home` y `Pizza` mostrarán un mensaje de error.

1. Descomprimir el "Material de apoyo - Backend Pizzas".
2. Entrar a la carpeta que contiene su `package.json`.
3. Instalar dependencias y levantar el servidor:

```bash
npm install
npm start
```

4. Verificar que `http://localhost:5000/api/pizzas` muestre el listado de pizzas.

El servidor debe mantenerse corriendo mientras se usa la aplicación.

## Componentes

### Páginas (`src/pages`)

- `Home`: consume la API con `useEffect` y `fetch` y renderiza un `CardPizza` por cada pizza.
- `Pizza`: consume la API para obtener la pizza `p001` y muestra su nombre, precio, ingredientes, imagen y descripción.
- `Cart`: simula un carrito con el array `pizzaCart`; permite aumentar o disminuir cantidades (se elimina al llegar a 0) y calcula el total.
- `Register`: formulario de registro con validaciones.
- `Login`: formulario de inicio de sesión con validaciones.
- `Profile`: muestra el email de un usuario y un botón para cerrar sesión. Por ahora ambos son estáticos; la autenticación se implementará en hitos siguientes.
- `NotFound`: página 404 con un enlace de regreso a `/`.

### Componentes reutilizables (`src/components`)

- `Navbar`: menú de navegación con `Link` hacia Home, Login, Register y Profile. El botón "Total" redirige a `/cart`.
- `Header`: título y descripción, usado en `Home`.
- `CardPizza`: tarjeta con nombre, precio, imagen e ingredientes de una pizza, recibidos por props.
- `Footer`: pie de página.

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar/
│   ├── Header/
│   ├── CardPizza/
│   └── Footer/
├── pages/
│   ├── Home/
│   ├── Pizza/
│   ├── Cart/
│   ├── Register/
│   ├── Login/
│   ├── Profile/
│   └── NotFound/
├── data/
│   └── pizzas.js        (el array pizzaCart se usa en Cart)
├── utils/
│   └── format.js
├── App.jsx              (definición de rutas)
└── main.jsx             (BrowserRouter)
```

## Cómo correr el proyecto

Con el backend ya levantado:

```bash
npm install
npm run dev
```

Como el proyecto usa `base: '/Pizzeria-Mamamia/'`, la aplicación se abre en `http://localhost:5173/Pizzeria-Mamamia/`.

## Cómo generar el build

```bash
npm run build
```

## Cómo hacer deploy (GitHub Pages)

```bash
npm run deploy
```

> Nota: la versión publicada en GitHub Pages solo mostrará las pizzas si quien la visita tiene el backend corriendo en su propio computador (`localhost:5000`). Además, GitHub Pages no reconoce rutas internas al recargar la página o abrirlas directamente (por ejemplo `/cart`); la navegación mediante los botones de la aplicación funciona con normalidad.