import { Badge } from "./ui/badge"
import { MapPin, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export interface RouteCardProps {
  id: string
  name: string
  type: "Urbana" | "Trail" | "Mixta"
  distance: string
  difficulty: "Fácil" | "Moderado" | "Difícil"
  origin: "OSM" | "Usuario"
  location?: string
  creator?: string
  href?: string
}

export default function RouteCard({
  id,
  name,
  type,
  distance,
  difficulty,
  origin,
  location = "Buenos Aires",
  creator = "StrideMap",
  href = "#",
}: RouteCardProps) {
  // Determinar el color de la insignia de dificultad
  const difficultyColor = {
    Fácil: "bg-green-100 text-green-800",
    Moderado: "bg-yellow-100 text-yellow-800",
    Difícil: "bg-red-100 text-red-800",
  }[difficulty]

  // Determinar el color de la insignia de tipo
  const typeColor = {
    Urbana: "bg-blue-100 text-blue-800",
    Trail: "bg-emerald-100 text-emerald-800",
    Mixta: "bg-purple-100 text-purple-800",
  }[type]

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="h-40 bg-gray-100 relative">
        {/* Placeholder para la imagen o mapa estático */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <span className="text-sm">Mapa de vista previa</span>
        </div>

        {/* Badges flotantes */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge className={typeColor}>{type}</Badge>
          <Badge className={difficultyColor}>{difficulty}</Badge>
        </div>

        {/* Origen */}
        <div className="absolute bottom-3 right-3">
          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
            {origin === "OSM" ? "OpenStreetMap" : "Creada por usuarios"}
          </Badge>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{name}</h3>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
          <span className="mx-2">•</span>
          <span>{distance}</span>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <User size={14} className="mr-1" />
            <span>{creator}</span>
          </div>

          <Link href={href} className="text-[#3B82F6] hover:text-[#2563EB] font-medium text-sm flex items-center">
            Ver detalles
            <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
