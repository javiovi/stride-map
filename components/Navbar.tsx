"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MapPin, User, Search, LogIn } from "lucide-react"
import { motion } from "framer-motion"

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
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <Image
                src="/images/logo-stride.png"
                alt="Stridemap Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
              Stridemap
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/explorar" icon={<MapPin size={18} />}>
              Explorar
            </NavLink>
            <NavLink href="/buscar" icon={<Search size={18} />}>
              Buscar
            </NavLink>
            <NavLink href="/perfil" icon={<User size={18} />}>
              Mi Perfil
            </NavLink>
            <button className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all duration-300">
              <LogIn size={18} />
              Ingresar
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/explorar" icon={<MapPin size={18} />}>
                Explorar
              </MobileNavLink>
              <MobileNavLink href="/buscar" icon={<Search size={18} />}>
                Buscar
              </MobileNavLink>
              <MobileNavLink href="/perfil" icon={<User size={18} />}>
                Mi Perfil
              </MobileNavLink>
              <button className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 w-full">
                <LogIn size={18} />
                Ingresar
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}

// Componente para enlaces de navegación en desktop
function NavLink({ href, children, icon }) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-[#3B82F6] transition-colors duration-300 flex items-center gap-1"
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
      className="text-gray-700 hover:text-[#3B82F6] transition-colors duration-300 flex items-center gap-2 py-2"
    >
      {icon}
      {children}
    </Link>
  )
}
