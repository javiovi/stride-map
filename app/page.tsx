"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload } from "lucide-react"
import Image from "next/image"
import { SAMPLE_ROUTES } from "@/data/routes"
import type { Route } from "@/data/routes"
import MapWrapper from "@/components/MapWrapper"
import Navbar from "@/components/Navbar"

export default function Home() {
  const [selectedRoute, setSelectedRoute] = useState<Route>(SAMPLE_ROUTES[0])

  // Animaciones para elementos
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-[#F9FAFB] pt-20">
        {/* Hero Section */}
        <motion.section
          className="w-full py-16 px-4 md:px-8 flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.h1 className="text-4xl md:text-5xl font-semibold text-[#111827] mb-4" variants={fadeUp}>
            Descubrí y compartí rutas para correr
          </motion.h1>

          <motion.p className="text-xl text-[#111827]/80 mb-8 max-w-2xl" variants={fadeUp}>
            Agregá spots, rutas y unite a la comunidad
          </motion.p>

          <motion.button
            className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white px-8 py-3 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Explorar rutas sugeridas"
          >
            Explorar rutas sugeridas
          </motion.button>
        </motion.section>

        {/* Map Section */}
        <motion.section
          className="w-full max-w-6xl px-4 md:px-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="bg-white p-4 rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-wrap gap-4 mb-4">
              {SAMPLE_ROUTES.map((route) => (
                <button
                  key={route.id}
                  onClick={() => setSelectedRoute(route)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedRoute.id === route.id
                      ? "bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  aria-label={`Ver ruta ${route.name}`}
                >
                  {route.name} ({route.distance})
                </button>
              ))}
            </div>

            <div className="h-[500px] rounded-xl overflow-hidden">
              <MapWrapper selectedRoute={selectedRoute} height={500} useStaticMap={true} />
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">{selectedRoute.name}</h3>
              <div className="flex gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <span className="font-medium">Distancia:</span> {selectedRoute.distance}
                </span>
                <span className="flex items-center gap-1">
                  <span className="font-medium">Dificultad:</span> {selectedRoute.difficulty}
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Secondary CTA */}
        <motion.section
          className="w-full max-w-6xl px-4 md:px-8 mb-20 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#10B981] to-[#3B82F6] text-white px-8 py-4 rounded-xl font-medium text-lg shadow-lg flex items-center gap-2 hover:shadow-xl transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#10B981]/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Subir tu propia ruta"
          >
            <Upload size={20} />
            Subí tu propia ruta
          </motion.button>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="w-full bg-white py-16 px-4 md:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12 text-[#111827]">¿Por qué usar Stridemap?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#F9FAFB] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#3B82F6] text-2xl">🏃</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Descubrí nuevas rutas</h3>
                <p className="text-[#111827]/70">
                  Explora rutas verificadas por la comunidad en tu zona o en cualquier lugar del mundo.
                </p>
              </div>

              <div className="bg-[#F9FAFB] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#10B981] text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Compartí tus spots</h3>
                <p className="text-[#111827]/70">
                  Sube tus rutas favoritas y ayuda a otros corredores a descubrir nuevos lugares.
                </p>
              </div>

              <div className="bg-[#F9FAFB] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6]/10 to-[#10B981]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-2xl">
                    👥
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Unite a la comunidad</h3>
                <p className="text-[#111827]/70">
                  Conecta con otros corredores, participa en eventos y mejora tu experiencia.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="w-full bg-gray-50 py-8 px-4 md:px-8 mt-auto">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative h-8 w-8 mr-2">
                <Image
                  src="/images/logo-stride.png"
                  alt="Stridemap Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                Stridemap
              </span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Stridemap. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
