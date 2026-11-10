import { ArrowDown, ArrowUpRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="hero section-wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="availability-dot" aria-hidden="true" />
          DESARROLLO FRONTEND · EXPERIENCIA TÉCNICA
        </p>
        <h1 id="hero-title">
          Aprender a caer,
          <br />
          <span className="hero-accent">aprender a levantarse</span>
        </h1>
        <p className="hero-description">
          Desarrollo frontend con una mirada práctica, formada entre la ingeniería, el soporte técnico y el trabajo independiente.
        </p>
        <div className="hero-actions">
          <a className={buttonVariants({ className: "button-primary" })} href="#proyectos">
            Ver proyectos <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
          </a>
          <a className="text-link" href="#contacto">Contacto <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-meta">
          <span>HTML · CSS · JavaScript · React</span>
          <span className="meta-divider" aria-hidden="true" />
          <span>Experiencia técnica e industrial</span>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="hero-orbit hero-orbit-outer" />
        <div className="hero-orbit hero-orbit-inner" />
        <div className="hero-disc">
          <span className="hero-disc-word">hacer<br />con intención</span>
          <span className="hero-disc-star" />
        </div>
        <div className="hero-note hero-note-top">IDEAS QUE<br />CONECTAN</div>
        <div className="hero-note hero-note-bottom">DISEÑO CON<br />PROPÓSITO</div>
        <span className="hero-index">01 — 06</span>
      </div>

      <a className="scroll-cue" href="#proyectos" aria-label="Desplazarse a proyectos">
        <span>Desliza para explorar</span><ArrowDown aria-hidden="true" />
      </a>
    </section>
  )
}
