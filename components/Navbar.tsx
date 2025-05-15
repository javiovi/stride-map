"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MapPin, Upload, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Detectar scroll para cambiar el estilo de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800/20 py-2"
          : "bg-white dark:bg-gray-900 py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <Image
                src="/images/logo-stride.png"
                alt="StrideMap Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] dark:from-[#60A5FA] dark:to-[#34D399] bg-clip-text text-transparent">
              StrideMap
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/explorar" icon={<MapPin size={18} />}>
              Explorar rutas
            </NavLink>
            <NavLink href="/subir" icon={<Upload size={18} />}>
              Subir ruta
            </NavLink>
            <NavLink href="/perfil" icon={<User size={18} />}>
              Mi perfil
            </NavLink>
            <ThemeToggle />
            <button className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] dark:from-[#60A5FA] dark:to-[#34D399] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all duration-300">
              Iniciar sesión
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Side Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-4/5 bg-white dark:bg-gray-900 shadow-xl dark:shadow-gray-800/20 z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b dark:border-gray-800">
                <div className="flex items-center">
                  <div className="relative h-8 w-8 mr-2">
                    <Image
                      src="/images/logo-stride.png"
                      alt="StrideMap Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] dark:from-[#60A5FA] dark:to-[#34D399] bg-clip-text text-transparent">
                    StrideMap
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  aria-label="Cerrar menú"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col p-6 space-y-6 flex-grow">
                <MobileNavLink href="/explorar" icon={<MapPin size={20} />}>
                  Explorar rutas
                </MobileNavLink>
                <MobileNavLink href="/subir" icon={<Upload size={20} />}>
                  Subir ruta
                </MobileNavLink>
                <MobileNavLink href="/perfil" icon={<User size={20} />}>
                  Mi perfil
                </MobileNavLink>
                <div className="mt-auto pt-6 border-t dark:border-gray-800">
                  <button className="w-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] dark:from-[#60A5FA] dark:to-[#34D399] text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300">
                    Iniciar sesión
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  )
}

// Componente para enlaces de navegación en desktop
function NavLink({ href, children, icon }) {
  return (
    <Link
      href={href}
      className="text-gray-700 dark:text-gray-200 hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors duration-300 flex items-center gap-1"
    >
      {icon}
      {children}
    </Link>
  )
}

// Componente para enlaces de navegación en mobile
function MobileNavLink({ href, children, icon }) {
  return (
    <Link
      href={href}
      className="text-gray-700 dark:text-gray-200 hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors duration-300 flex items-center gap-3 py-2 text-lg"
    >
      {icon}
      {children}
    </Link>
  )
}
