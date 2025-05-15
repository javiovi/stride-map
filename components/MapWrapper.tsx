"use client"
import dynamic from "next/dynamic"
import StaticMap from "./StaticMap"
import type { Route } from "@/data/routes"

// Importación dinámica del componente MapboxMap
const MapboxMap = dynamic(() => import("./MapboxMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full bg-gray-100 rounded-xl flex items-center justify-center">
      <p className="text-gray-500">Cargando mapa...</p>
    </div>
  ),
})

interface MapWrapperProps {
  selectedRoute: Route
  height?: number
  useStaticMap?: boolean // Forzar el uso del mapa estático
}

export default function MapWrapper({ selectedRoute, height = 400, useStaticMap = true }: MapWrapperProps) {
  // En un entorno de producción, puedes cambiar esto a false para usar MapboxMap
  // Para V0, mantenemos useStaticMap en true

  return useStaticMap ? (
    <StaticMap selectedRoute={selectedRoute} height={height} />
  ) : (
    <MapboxMap selectedRoute={selectedRoute} height={height} />
  )
}
