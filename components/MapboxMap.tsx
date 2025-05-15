/** @install mapbox-gl react-map-gl */

"use client"

import { useState, useEffect } from "react"
import Map, { Source, Layer, NavigationControl, Marker } from "react-map-gl"
import { MapPin } from "lucide-react"
import "mapbox-gl/dist/mapbox-gl.css"
import type { Route } from "@/data/routes"

// Props para el componente
interface MapboxMapProps {
  selectedRoute: Route
  height?: number
}

// Estilos para las rutas en el mapa
const routeLayer = {
  id: "route",
  type: "line",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "#3B82F6",
    "line-width": 4,
    "line-opacity": 0.8,
  },
}

export default function MapboxMap({ selectedRoute, height = 400 }: MapboxMapProps) {
  const [viewState, setViewState] = useState({
    longitude: selectedRoute.coordinates[0][0],
    latitude: selectedRoute.coordinates[0][1],
    zoom: 13,
  })

  const [mapLoaded, setMapLoaded] = useState(false)

  // Actualizar la vista cuando cambia la ruta seleccionada
  useEffect(() => {
    if (selectedRoute.coordinates.length > 0) {
      setViewState({
        longitude: selectedRoute.coordinates[0][0],
        latitude: selectedRoute.coordinates[0][1],
        zoom: 13,
      })
    }
  }, [selectedRoute])

  // Convertir coordenadas al formato GeoJSON
  const routeData = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: selectedRoute.coordinates,
    },
  }

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      onLoad={() => setMapLoaded(true)}
      style={{ width: "100%", height }}
    >
      <NavigationControl position="top-right" />

      {mapLoaded && (
        <Source id="route-data" type="geojson" data={routeData}>
          <Layer {...(routeLayer as any)} />
        </Source>
      )}

      {/* Marcadores de inicio y fin */}
      {mapLoaded && selectedRoute.coordinates.length > 0 && (
        <>
          {/* Marcador de inicio */}
          <Marker
            longitude={selectedRoute.coordinates[0][0]}
            latitude={selectedRoute.coordinates[0][1]}
            anchor="bottom"
          >
            <MapPin size={24} className="text-green-500" />
          </Marker>

          {/* Marcador de fin */}
          <Marker
            longitude={selectedRoute.coordinates[selectedRoute.coordinates.length - 1][0]}
            latitude={selectedRoute.coordinates[selectedRoute.coordinates.length - 1][1]}
            anchor="bottom"
          >
            <MapPin size={24} className="text-red-500" />
          </Marker>
        </>
      )}
    </Map>
  )
}
