"use client"

import RutaCard from "@/components/RutaCard"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Datos de ejemplo para las rutas
const RUTAS_EJEMPLO = [
  {
    id: "bosques-palermo",
    nombre: "Bosques de Palermo",
    distancia: "4.8 km",
    superficie: "Tierra y césped",
    dificultad: "Moderada",
    origen: "Sugerida",
  },
  {
    id: "costanera-sur",
    nombre: "Costanera Sur",
    distancia: "6.2 km",
    superficie: "Asfalto",
    dificultad: "Fácil",
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

export default function RutasEjemploPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-8">Ejemplos de RutaCard</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Grid Layout</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RUTAS_EJEMPLO.slice(0, 6).map((ruta) => (
                <RutaCard
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
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Scroll Horizontal</h2>
            <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6">
              {RUTAS_EJEMPLO.slice(0, 6).map((ruta) => (
                <RutaCard
                  key={ruta.id}
                  id={ruta.id}
                  nombre={ruta.nombre}
                  distancia={ruta.distancia}
                  superficie={ruta.superficie}
                  dificultad={ruta.dificultad as any}
                  origen={ruta.origen as any}
                  className="flex-shrink-0"
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Ruta Individual</h2>
            <div className="flex justify-center">
              <RutaCard
                id="bosques-palermo"
                nombre="Bosques de Palermo"
                distancia="4.8 km"
                superficie="Tierra y césped"
                dificultad="Moderada"
                origen="Sugerida"
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
