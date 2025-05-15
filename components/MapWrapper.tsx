"use client"
import StaticMap from "./StaticMap"
import type { Route } from "@/data/routes"

interface MapWrapperProps {
  selectedRoute: Route
  height?: number
}

export default function MapWrapper({ selectedRoute, height = 400 }: MapWrapperProps) {
  // Siempre usamos StaticMap, que es nuestra solución más confiable
  return <StaticMap selectedRoute={selectedRoute} height={height} />
}
