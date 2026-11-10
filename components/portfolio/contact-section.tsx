import { ShieldCheck } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionIntro } from "./section-intro"

export function ContactSection() {
  return (
    <section className="contact-section" id="contacto" aria-labelledby="contact-heading">
      <div className="section-wrap contact-layout">
        <Reveal className="contact-copy">
          <SectionIntro
            eyebrow="CONTACTO"
            title="Los datos de contacto, más adelante."
            description="Por ahora, este portfolio no muestra nombres personales, correos ni perfiles sociales."
            id="contact-heading"
          />
        </Reveal>
        <Reveal className="contact-note-wrap" delay={100}>
          <div className="contact-private-note" role="status">
            <ShieldCheck aria-hidden="true" />
            <div>
              <h3>Contacto desactivado temporalmente</h3>
              <p>Los canales de contacto se añadirán cuando quieras compartirlos.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
