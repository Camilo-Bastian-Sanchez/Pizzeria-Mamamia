// Formatea un número como precio en pesos chilenos, con separador de miles.
// Ej: formatPrice(25000) -> "25.000"
export const formatPrice = (value) => {
  return value.toLocaleString("es-CL");
};
