import Image from "next/image"
import { brandLogoUrl } from "./projects"

export function UnderConstruction() {
  return (
    <main className="construction-page">
      <div className="construction-content">
        <Image
          className="construction-logo"
          src={brandLogoUrl}
          alt="Símbolo circular negro de trazos curvos sobre fondo blanco"
          width={112}
          height={112}
          sizes="112px"
          priority
        />
        <h1>En construcción</h1>
        <p className="construction-copy">
          Estamos preparando este sitio. Volveremos pronto.
        </p>
      </div>
    </main>
  )
}
