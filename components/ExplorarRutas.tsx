"use client"

import { useState } from "react"
import { Search, Filter, ChevronDown, MapPin, Layers, Users, Grid, List } from "lucide-react"
import RutaCard from "./RutaCard"
import { motion } from "framer-motion"
import Link from "next/link"

// Datos de ejemplo para las rutas
const RUTAS_EJEMPLO = [
  {
    id: "bosques-palermo",
    nombre: "Bosques de Palermo",
    distancia: "4.8 km",
    superficie: "Tierra y césped",
    dificultad: "Fácil",
    origen: "Sugerida",
  },
  {
    id: "costanera-sur",
    nombre: "Costanera Sur",
    distancia: "6.2 km",
    superficie: "Asfalto",
    dificultad: "Moderada",
    origen: "Usuario",
  },
  {
    id: "reserva-ecologica",
    nombre: "Reserva Ecológica",
    distancia: "8.5 km",
    superficie: "Tierra compacta",
    dificultad: "Difícil",
    origen: "Sugerida",
  },
  {
    id: "parque-centenario",
    nombre: "Parque Centenario",
    distancia: "3.2 km",
    superficie: "Asfalto y tierra",
    dificultad: "Fácil",
    origen: "Usuario",
  },
  {
    id: "puerto-madero",
    nombre: "Puerto Madero",
    distancia: "5.5 km",
    superficie: "Asfalto",
    dificultad: "Moderada",
    origen: "Sugerida",
  },
  {
    id: "tigre-delta",
    nombre: "Delta del Tigre",
    distancia: "10.2 km",
    superficie: "Mixta",
    dificultad: "Difícil",
    origen: "Usuario",
  },
]

export default function ExplorarRutas() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Título y subtítulo */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explorá rutas destacadas
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubrí recorridos populares de la comunidad y empezá tu próximo entrenamiento.
          </p>
        </div>

        {/* Barra de búsqueda */}
        <div className="relative mb-8 max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] focus:border-transparent"
            placeholder="Buscar rutas por nombre o ubicación..."
          />
        </div>

        {/* Barra de filtros */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filtros
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#3B82F6]/10 dark:bg-[#60A5FA]/20 text-[#3B82F6] dark:text-[#60A5FA]"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                aria-label="Ver en cuadrícula"
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list"
                    ? "bg-[#3B82F6]/10 dark:bg-[#60A5FA]/20 text-[#3B82F6] dark:text-[#60A5FA]"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                aria-label="Ver en lista"
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Filtros en desktop */}
          <div className="hidden md:flex flex-wrap gap-3">
            <FilterButton icon={<MapPin size={16} />} label="Distancia">
              <span className="ml-1">5-10 km</span>
            </FilterButton>
            <FilterButton icon={<Layers size={16} />} label="Dificultad">
              <span className="ml-1">Fácil</span>
            </FilterButton>
            <FilterButton icon={<Layers size={16} />} label="Superficie">
              <span className="ml-1">Todas</span>
            </FilterButton>
            <FilterButton icon={<Users size={16} />} label="Fuente">
              <span className="ml-1">Todas</span>
            </FilterButton>
          </div>

          {/* Filtros en mobile (scroll horizontal) */}
          <div className="md:hidden flex overflow-x-auto pb-2 gap-3">
            <FilterButton icon={<MapPin size={16} />} label="Distancia">
              <span className="ml-1">5-10 km</span>
            </FilterButton>
            <FilterButton icon={<Layers size={16} />} label="Dificultad">
              <span className="ml-1">Fácil</span>
            </FilterButton>
            <FilterButton icon={<Layers size={16} />} label="Superficie">
              <span className="ml-1">Todas</span>
            </FilterButton>
            <FilterButton icon={<Users size={16} />} label="Fuente">
              <span className="ml-1">Todas</span>
            </FilterButton>
          </div>
        </div>

        {/* Grid de rutas */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RUTAS_EJEMPLO.map((ruta) => (
              <motion.div key={ruta.id} whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <RutaCard
                  id={ruta.id}
                  nombre={ruta.nombre}
                  distancia={ruta.distancia}
                  superficie={ruta.superficie}
                  dificultad={ruta.dificultad as any}
                  origen={ruta.origen as any}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          // Vista de lista
          <div className="space-y-4">
            {RUTAS_EJEMPLO.map((ruta) => (
              <RutaListItem
                key={ruta.id}
                id={ruta.id}
                nombre={ruta.nombre}
                distancia={ruta.distancia}
                superficie={ruta.superficie}
                dificultad={ruta.dificultad as any}
                origen={ruta.origen as any}
              />
            ))}
          </div>
        )}

        {/* Botón para ver más */}
        <div className="mt-10 text-center">
          <Link href="/explorar">
            <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#3B82F6] dark:text-[#60A5FA] font-medium px-6 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
              Ver más rutas
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Componente para los botones de filtro
function FilterButton({ icon, label, children }) {
  return (
    <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 whitespace-nowrap">
      <span className="flex items-center">
        {icon}
        <span className="ml-1">{label}:</span>
      </span>
      {children}
      <ChevronDown size={16} className="ml-1 text-gray-400" />
    </button>
  )
}

// Componente para la vista de lista
function RutaListItem({ id, nombre, distancia, superficie, dificultad, origen }) {
  // Determinar el color del badge según la dificultad
  const dificultadColor = {
    Fácil:
      "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    Moderada:
      "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
    Difícil: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
  }[dificultad]

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 p-4"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1">{nombre}</h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="flex items-center">
              <span className="mr-1" aria-hidden="true">
                🏃
              </span>
              {distancia}
            </span>
            <span className="flex items-center">
              <span className="mr-1" aria-hidden="true">
                🌱
              </span>
              {superficie}
            </span>
            <span className="flex items-center">
              <span className="mr-1" aria-hidden="true">
                ⚠️
              </span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${dificultadColor}`}>{dificultad}</span>
            </span>
          </div>
        </div>
        <a
          href={`/ruta/${id}`}
          className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] dark:from-[#60A5FA] dark:to-[#34D399] text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300 font-medium text-sm whitespace-nowrap flex items-center"
        >
          Ver ruta
        </a>
      </div>
    </motion.div>
  )
}
