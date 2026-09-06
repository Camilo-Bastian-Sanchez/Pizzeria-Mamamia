# Pizzería Mamma Mía - Hito 1

Proyecto React (Vite) desarrollado para el Hito 1 del curso de Desafío Latam.

## Componentes
- `Navbar`: menú de navegación (Home, Login/Register o Profile/Logout según `token`, y Total).
- `Header`: título y descripción, llamado desde `Home`.
- `Home`: contiene el `Header` y llama 3 veces a `CardPizza`.
- `CardPizza`: muestra nombre, precio, ingredientes e imagen de una pizza.
- `Footer`: pie de página.

## Cómo correr el proyecto
\`\`\`bash
npm install
npm run dev
\`\`\`

## Cómo generar el build
\`\`\`bash
npm run build
\`\`\`
