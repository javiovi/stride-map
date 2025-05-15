"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { SAMPLE_ROUTES } from "@/data/routes"
import type { Route } from "@/data/routes"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ExplorarRutas from "@/components/ExplorarRutas"
import Link from "next/link"

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
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section Extendido */}
        <section className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                  variants={fadeUp}
                >
                  Trazá tu camino.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981] dark:from-[#60A5FA] dark:to-[#34D399]">
                    Dejá tu huella.
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
                  variants={fadeUp}
                >
                  Explorá, creá y compartí rutas para correr en cualquier parte del mundo.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                  variants={fadeUp}
                >
                  <Link href="/explorar">
                    <button className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] dark:from-[#60A5FA] dark:to-[#34D399] text-white px-8 py-3 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 dark:focus:ring-[#60A5FA]/50">
                      Explorar rutas
                    </button>
                  </Link>
                  <button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-8 py-3 rounded-xl font-medium text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700">
                    Crear cuenta
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-[#10B981]/10 dark:from-[#60A5FA]/20 dark:to-[#34D399]/20 flex items-center justify-center">
                    <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-sm">
                      <MapPin size={40} className="mx-auto mb-3 text-[#3B82F6] dark:text-[#60A5FA]" />
                      <p className="text-gray-800 dark:text-gray-200 font-medium">Mapa interactivo</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Próximamente</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sección de Explorar Rutas */}
        <ExplorarRutas />

        {/* Características */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              ¿Por qué usar StrideMap?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm dark:shadow-gray-900/50">
                <div className="w-12 h-12 bg-[#3B82F6]/10 dark:bg-[#60A5FA]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#3B82F6] dark:text-[#60A5FA] text-2xl">🏃</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Descubrí nuevas rutas</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explora rutas verificadas por la comunidad en tu zona o en cualquier lugar del mundo.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm dark:shadow-gray-900/50">
                <div className="w-12 h-12 bg-[#10B981]/10 dark:bg-[#34D399]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#10B981] dark:text-[#34D399] text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Compartí tus spots</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sube tus rutas favoritas y ayuda a otros corredores a descubrir nuevos lugares.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm dark:shadow-gray-900/50">
                <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6]/10 to-[#10B981]/10 dark:from-[#60A5FA]/20 dark:to-[#34D399]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981] dark:from-[#60A5FA] dark:to-[#34D399] text-2xl">
                    👥
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Unite a la comunidad</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Conecta con otros corredores, participa en eventos y mejora tu experiencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-[#3B82F6] to-[#10B981] dark:from-[#60A5FA] dark:to-[#34D399] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para empezar a correr?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Únete a miles de corredores que ya están descubriendo nuevas rutas cada día.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#3B82F6] dark:text-[#60A5FA] px-8 py-3 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Crear cuenta gratis
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-medium text-lg hover:bg-white/10 transition-all duration-300">
                Saber más
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
