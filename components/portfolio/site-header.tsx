"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { brandLogoUrl } from "./projects"

const navigation = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const applyTheme = (dark: boolean) => {
      root.classList.toggle("dark", dark)
      root.classList.toggle("light", !dark)
      setIsDark(dark)
    }
    const followSystemTheme = (event: MediaQueryListEvent) => applyTheme(event.matches)

    applyTheme(media.matches)
    media.addEventListener("change", followSystemTheme)
    return () => media.removeEventListener("change", followSystemTheme)
  }, [])

  function toggleTheme() {
    const nextTheme = !isDark
    document.documentElement.classList.toggle("dark", nextTheme)
    document.documentElement.classList.toggle("light", !nextTheme)
    setIsDark(nextTheme)
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Volver al inicio">
          <Image className="brand-logo" src={brandLogoUrl} alt="" aria-hidden="true" width={40} height={40} />
          <span>Portfolio<span className="brand-period">/</span></span>
        </a>

        <nav
          id="primary-nav"
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <span className="availability"><span aria-hidden="true" />Disponible</span>
          <Button
            className="theme-toggle"
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
            aria-pressed={isDark}
            title={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
          >
            {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </Button>
          <Button
            className="menu-toggle"
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
