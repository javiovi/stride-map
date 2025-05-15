// Configuración centralizada de variables de entorno
// Solo para uso en el servidor

export const serverEnv = {
  // Token de Mapbox (solo disponible en el servidor)
  mapboxToken: process.env.MAPBOX_TOKEN || "",
}
