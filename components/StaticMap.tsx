"use client"

import { useEffect, useRef } from "react"
import type { Route } from "@/data/routes"

interface StaticMapProps {
  selectedRoute: Route
  height?: number
}

export default function StaticMap({ selectedRoute, height = 400 }: StaticMapProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Crear el HTML para el iframe que carga Mapbox directamente
  useEffect(() => {
    if (!iframeRef.current) return

    // Centrar en el primer punto de la ruta
    const center = selectedRoute.coordinates[0]

    // Crear el contenido del iframe
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Mapa de ruta</title>
        <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css" rel="stylesheet">
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"></script>
        <style>
          body { margin: 0; padding: 0; }
          #map { position: absolute; top: 0; bottom: 0; width: 100%; }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          // Inicializar el mapa
          mapboxgl.accessToken = '${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}';
          const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [${center[0]}, ${center[1]}],
            zoom: 13
          });
          
          // Agregar controles de navegación
          map.addControl(new mapboxgl.NavigationControl());
          
          // Esperar a que el mapa cargue
          map.on('load', () => {
            // Agregar la ruta
            map.addSource('route', {
              'type': 'geojson',
              'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'LineString',
                  'coordinates': ${JSON.stringify(selectedRoute.coordinates)}
                }
              }
            });
            
            map.addLayer({
              'id': 'route',
              'type': 'line',
              'source': 'route',
              'layout': {
                'line-join': 'round',
                'line-cap': 'round'
              },
              'paint': {
                'line-color': '#3B82F6',
                'line-width': 4,
                'line-opacity': 0.8
              }
            });
            
            // Agregar marcadores de inicio y fin
            const startCoord = ${JSON.stringify(selectedRoute.coordinates[0])};
            const endCoord = ${JSON.stringify(selectedRoute.coordinates[selectedRoute.coordinates.length - 1])};
            
            // Marcador de inicio (verde)
            new mapboxgl.Marker({ color: '#10B981' })
              .setLngLat(startCoord)
              .addTo(map);
              
            // Marcador de fin (rojo)
            new mapboxgl.Marker({ color: '#EF4444' })
              .setLngLat(endCoord)
              .addTo(map);
              
            // Ajustar la vista para mostrar toda la ruta
            const bounds = new mapboxgl.LngLatBounds();
            ${JSON.stringify(selectedRoute.coordinates)}.forEach(coord => {
              bounds.extend(coord);
            });
            map.fitBounds(bounds, { padding: 50 });
          });
        </script>
      </body>
      </html>
    `

    // Establecer el contenido del iframe
    const blob = new Blob([html], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    iframeRef.current.src = url

    // Limpiar el URL del objeto cuando el componente se desmonte
    return () => {
      URL.revokeObjectURL(url)
    }
  }, [selectedRoute])

  return (
    <iframe
      ref={iframeRef}
      style={{ width: "100%", height, border: "none", borderRadius: "0.75rem" }}
      title="Mapa de ruta"
      sandbox="allow-scripts"
      loading="lazy"
    />
  )
}
