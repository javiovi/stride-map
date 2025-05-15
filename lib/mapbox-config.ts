// Configuración para Mapbox
export const MAPBOX_CONFIG = {
  // Estilos disponibles: streets-v12, outdoors-v12, light-v11, dark-v11, satellite-v9, satellite-streets-v12
  defaultStyle: "streets-v12",

  // Opciones para las rutas
  routeOptions: {
    lineColor: "#3B82F6",
    lineWidth: 4,
    lineOpacity: 0.8,
  },

  // Colores para los marcadores
  markerColors: {
    start: "#10B981", // Verde
    end: "#EF4444", // Rojo
    waypoint: "#F97316", // Naranja
  },

  // Opciones de navegación
  navigationControl: {
    position: "top-right",
    showCompass: true,
    showZoom: true,
  },

  // Opciones de visualización
  displayOptions: {
    fitBoundsPadding: 50,
    defaultZoom: 13,
  },
}
