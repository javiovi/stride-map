/** @install mapbox-gl react-map-gl */

"use client"

import "mapbox-gl/dist/mapbox-gl.css"
import Map, { NavigationControl } from "react-map-gl"

export default function MapInitTest() {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{ longitude: -58.437, latitude: -34.6037, zoom: 13 }}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      <NavigationControl position="top-right" />
    </Map>
  )
}
