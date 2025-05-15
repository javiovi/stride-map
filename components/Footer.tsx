import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Moon, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#F3F4F6] py-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="relative h-8 w-8 mr-2">
                <Image
                  src="/images/logo-stride.png"
                  alt="StrideMap Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                StrideMap
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Descubre, crea y comparte rutas para correr en cualquier parte del mundo.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="#" label="Facebook" />
              <SocialIcon icon={<Twitter size={18} />} href="#" label="Twitter" />
              <SocialIcon icon={<Instagram size={18} />} href="#" label="Instagram" />
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Explorar</h3>
            <ul className="space-y-2">
              <FooterLink href="/explorar">Rutas populares</FooterLink>
              <FooterLink href="/explorar">Rutas cercanas</FooterLink>
              <FooterLink href="/explorar">Eventos</FooterLink>
              <FooterLink href="/explorar">Comunidad</FooterLink>
            </ul>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Compañía</h3>
            <ul className="space-y-2">
              <FooterLink href="/sobre-nosotros">Sobre nosotros</FooterLink>
              <FooterLink href="/contacto">Contacto</FooterLink>
              <FooterLink href="/privacidad">Política de privacidad</FooterLink>
              <FooterLink href="/terminos">Términos de uso</FooterLink>
            </ul>
          </div>

          {/* Configuración */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Configuración</h3>
            <div className="space-y-4">
              <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <Globe size={18} className="mr-2" />
                <span>Español (ES)</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <Moon size={18} className="mr-2" />
                <span>Modo oscuro</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} StrideMap. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">Hecho con ❤️ para corredores de todo el mundo</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-gray-600 hover:text-[#3B82F6] transition-colors">
        {children}
      </Link>
    </li>
  )
}

function SocialIcon({ icon, href, label }) {
  return (
    <a href={href} aria-label={label} className="text-gray-500 hover:text-[#3B82F6] transition-colors">
      {icon}
    </a>
  )
}
