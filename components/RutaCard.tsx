import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { Badge } from "./ui/badge"

// Tipos para las propiedades del componente
export interface RutaCardProps {
  id: string
  nombre: string
  distancia: string
  superficie: string
  dificultad: "Fácil" | "Moderada" | "Difícil"
  origen: "Sugerida" | "Usuario"
  imagen?: string
  className?: string
}

export default function RutaCard({
  id,
  nombre,
  distancia,
  superficie,
  dificultad,
  origen,
  imagen,
  className,
}: RutaCardProps) {
  // Determinar el color del badge según la dificultad
  const dificultadColor = {
    Fácil:
      "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    Moderada:
      "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
    Difícil: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
  }[dificultad]

  // Determinar el color del badge según el origen
  const origenColor = {
    Sugerida: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
    Usuario:
      "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20 dark:bg-[#10B981]/20 dark:text-[#34D399] dark:border-[#10B981]/30",
  }[origen]

  // Íconos para cada categoría
  const iconos = {
    distancia: "🏃",
    superficie: "🌱",
    dificultad: "⚠️",
  }

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 w-full md:w-[320px] ${className}`}
    >
      {/* Imagen o placeholder */}
      <div className="h-40 relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
        {imagen ? (
          <img
            src={imagen || "/placeholder.svg"}
            alt={`Vista previa de la ruta ${nombre}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin size={40} className="text-gray-400 dark:text-gray-500" />
          </div>
        )}

        {/* Badge de origen */}
        <div className="absolute top-3 right-3">
          <Badge className={`${origenColor} border`}>
            {origen === "Sugerida" ? "Ruta sugerida" : "Creada por usuario"}
          </Badge>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4">
        <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100 mb-3">{nombre}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <span className="mr-2" aria-hidden="true">
              {iconos.distancia}
            </span>
            <span className="font-medium mr-1">Distancia:</span> {distancia}
          </div>

          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <span className="mr-2" aria-hidden="true">
              {iconos.superficie}
            </span>
            <span className="font-medium mr-1">Superficie:</span> {superficie}
          </div>

          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <span className="mr-2" aria-hidden="true">
              {iconos.dificultad}
            </span>
            <span className="font-medium mr-1">Dificultad:</span>
            <Badge className={`${dificultadColor} border ml-1`}>{dificultad}</Badge>
          </div>
        </div>

        {/* Botón para ver detalles */}
        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
          <Link
            href={`/ruta/${id}`}
            className="w-full flex items-center justify-center bg-gradient-to-r from-[#3B82F6] to-[#10B981] dark:from-[#60A5FA] dark:to-[#34D399] text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300 font-medium"
            aria-label={`Ver detalles de la ruta ${nombre}`}
          >
            Ver ruta
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}
