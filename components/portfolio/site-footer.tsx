import { ArrowUpRight, Mail } from "lucide-react"
import { contactEmail } from "./projects"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <a className="brand footer-brand" href="#top" aria-label="Ukemi, volver al inicio">
          <span className="brand-mark" aria-hidden="true">u.</span>
          <span>ukemi<span className="brand-period">/</span></span>
        </a>
        <p>Diseñado y construido con intención<span aria-hidden="true">.</span></p>
        <nav className="footer-links" aria-label="Redes sociales y contacto">
          <a href={`mailto:${contactEmail}`} aria-label="Enviar un correo"><Mail aria-hidden="true" /><span className="sr-only">Email</span></a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" aria-label="GitHub, perfil de muestra">
            <span className="social-mark social-mark-github" aria-hidden="true">GH</span>
          </a>
          <a href="https://www.linkedin.com/in/tu-usuario/" target="_blank" rel="noreferrer" aria-label="LinkedIn, perfil de muestra">
            <span className="social-mark social-mark-linkedin" aria-hidden="true">in</span>
          </a>
          <span className="footer-links-placeholder">Perfiles de muestra</span>
        </nav>
        <span className="footer-copyright">© {new Date().getFullYear()} Ukemi</span>
      </div>
    </footer>
  )
}
