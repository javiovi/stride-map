"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ExplorarRutas from "@/components/ExplorarRutas"
import { motion } from "framer-motion"
import { MapPin, Filter, Search } from "lucide-react"

export default function ExplorarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section más pequeño */}
        <section className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Explorá rutas para correr en{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981] dark:from-[#60A5FA] dark:to-[#34D399]">
                  todo el mundo
                </span>
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Descubrí recorridos populares, compartí tus rutas favoritas y conectá con otros corredores.
              </motion.p>

              {/* Estadísticas */}
              <motion.div
                className="flex flex-wrap justify-center gap-8 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#3B82F6] dark:text-[#60A5FA]">500+</p>
                  <p className="text-gray-600 dark:text-gray-400">Rutas disponibles</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#10B981] dark:text-[#34D399]">50+</p>
                  <p className="text-gray-600 dark:text-gray-400">Ciudades</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#F97316] dark:text-[#FB923C]">10k+</p>
                  <p className="text-gray-600 dark:text-gray-400">Corredores activos</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Componente ExplorarRutas */}
        <ExplorarRutas />

        {/* Sección de Mapa Interactivo (Próximamente) */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Mapa interactivo próximamente
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Estamos trabajando en un mapa interactivo que te permitirá visualizar todas las rutas disponibles,
                  filtrar por distancia, dificultad y mucho más.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <MapPin className="h-5 w-5 mr-2 text-[#3B82F6] dark:text-[#60A5FA]" />
                    <span>Visualización de rutas</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Filter className="h-5 w-5 mr-2 text-[#10B981] dark:text-[#34D399]" />
                    <span>Filtros avanzados</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Search className="h-5 w-5 mr-2 text-[#F97316] dark:text-[#FB923C]" />
                    <span>Búsqueda por ubicación</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] dark:from-[#60A5FA] dark:to-[#34D399] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                  Suscribirse para novedades
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-lg dark:shadow-gray-900/50 bg-gradient-to-br from-[#3B82F6]/10 to-[#10B981]/10 dark:from-[#60A5FA]/20 dark:to-[#34D399]/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-sm">
                      <MapPin size={40} className="mx-auto mb-3 text-[#3B82F6] dark:text-[#60A5FA]" />
                      <p className="text-gray-800 dark:text-gray-200 font-medium">Mapa interactivo</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Próximamente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Tenés una ruta para compartir?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Compartí tus rutas favoritas con la comunidad y ayudá a otros corredores a descubrir nuevos lugares para
              entrenar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] dark:from-[#60A5FA] dark:to-[#34D399] text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300">
                Subir una ruta
              </button>
              <button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                Ver tutoriales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
