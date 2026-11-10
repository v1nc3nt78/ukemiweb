import Image from "next/image"
import { ArrowDownToLine, ArrowUpRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "./reveal"
import { SectionIntro } from "./section-intro"

const principles = [
  { number: "01", title: "Menos ruido", text: "Cada decisión visual ayuda a entender qué hacer y por qué." },
  { number: "02", title: "Hecho para personas", text: "Accesible, responsive y agradable desde el primer uso." },
  { number: "03", title: "Listo para crecer", text: "Código cuidado que no se queda pequeño con la primera versión." },
]

export function AboutSection() {
  return (
    <section className="section-wrap about-section" id="sobre-mi" aria-labelledby="about-heading">
      <Reveal>
        <SectionIntro
          eyebrow="UN POCO SOBRE MÍ"
          title="Detrás de cada pantalla, una buena pregunta."
          description=""
          id="about-heading"
        />
      </Reveal>
      <div className="about-layout">
        <Reveal className="about-visual-wrap">
          <figure className="about-visual">
            <Image
              src="/ukemi-portrait.png"
              alt="Retrato ilustrativo de muestra, pensado para reemplazar por una fotografía personal"
              fill
              sizes="(max-width: 760px) 85vw, 36vw"
            />
            <figcaption>Retrato de muestra · sustituir por tu fotografía</figcaption>
          </figure>
          <span className="about-stamp" aria-hidden="true">UK<br />—<br />MI</span>
        </Reveal>
        <div className="about-copy">
          <Reveal>
            <p className="about-lead">Hola, soy Ukemi. Me gusta convertir ideas complejas en herramientas digitales simples, útiles y humanas.</p>
            <p className="about-body">Acompaño cada proyecto desde el primer boceto hasta la última línea de código. Me muevo entre diseño y desarrollo para que la experiencia se sienta coherente, funcione bien y tenga una razón de ser.</p>
            <div className="about-actions">
              <a className={buttonVariants({ className: "button-primary" })} href="/cv-ukemi.pdf" download>
                Descargar CV <ArrowDownToLine aria-hidden="true" data-icon="inline-end" />
              </a>
              <a className="text-link" href="#contacto">Hablemos <ArrowUpRight aria-hidden="true" /></a>
            </div>
            <p className="cv-note">CV de muestra editable: actualiza tus datos antes de compartirlo.</p>
          </Reveal>
          <div className="principles-list">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 65}>
                <article className="principle-row">
                  <span className="principle-number">{principle.number}</span>
                  <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
