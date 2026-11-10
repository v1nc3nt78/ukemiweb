import Image from "next/image"
import { brandLogoUrl } from "./projects"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <a className="brand footer-brand" href="#top" aria-label="Volver al inicio">
          <Image className="brand-logo" src={brandLogoUrl} alt="" aria-hidden="true" width={32} height={32} />
          <span>Portfolio<span className="brand-period">/</span></span>
        </a>
        <p>Diseñado y construido con intención<span aria-hidden="true">.</span></p>
        <span className="footer-copyright">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
