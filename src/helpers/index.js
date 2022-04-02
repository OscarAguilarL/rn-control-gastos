export const formatCurrency = amount =>
  Number(amount).toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });

export const generarID = () => {
  const random = Math.random().toString(36).substring(2, 11);
  const fecha = Date.now().toString(36);
  return random + fecha;
};

export const formatDate = date => {
  const fechaNueva = new Date(date);
  const opciones = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };
  return fechaNueva.toLocaleDateString('es-ES', opciones);
};
