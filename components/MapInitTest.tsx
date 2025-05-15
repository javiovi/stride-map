/** @install mapbox-gl react-map-gl */

"use client"
import "mapbox-gl/dist/mapbox-gl.css"
import Map from "react-map-gl/dist/esm/components/map"
import NavigationControl from "react-map-gl/dist/esm/components/navigation-control"
import { useMapboxToken } from "@/hooks/useMapboxToken"

export default function MapInitTest() {
  const { token, loading, error } = useMapboxToken()

  if (loading) {
    return (
      <div className="h-[400px] w-full bg-gray-100 rounded-xl flex items-center justify-center">
        <p className="text-gray-500">Cargando mapa...</p>
      </div>
    )
  }

  if (error || !token) {
    return (
      <div className="h-[400px] w-full bg-gray-100 rounded-xl flex items-center justify-center">
        <p className="text-red-500">Error al cargar el mapa</p>
      </div>
    )
  }

  return (
    <Map
      mapboxAccessToken={token}
      initialViewState={{ longitude: -58.437, latitude: -34.6037, zoom: 13 }}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      <NavigationControl position="top-right" />
    </Map>
  )
}
