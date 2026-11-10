import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionIntro } from "./section-intro"
import { brandLogoUrl } from "./projects"

const experience = [
  {
    period: "2021 — actualidad",
    role: "Diseño y fabricación de productos para escalada",
    organization: "Emprendimiento independiente",
    detail: "Desarrollo y comercialización de productos de madera para escalada, con soluciones atornillables y resistentes a la intemperie.",
  },
  {
    period: "",
    role: "Encargado de Laboratorio Fotomecánica",
    organization: "Medio gráfico regional",
    detail: "Coordinación de procesos, trabajo con proveedores y capacitación del personal.",
  },
  {
    period: "2009 — 2012",
    role: "Asesor de atención al cliente",
    organization: "Empresa de informática",
    detail: "Asesoramiento sobre productos y servicios, y soporte técnico de nivel 1.",
  },
]

const education = [
  {
    period: "2024 — en curso",
    role: "Especialización en Frontend",
    organization: "Formación profesional",
  },
  {
    period: "2022 — 2024",
    role: "Formación en desarrollo de software",
    organization: "Formación técnica",
  },
  {
    period: "2018 — 2019 · incompleta",
    role: "Ingeniería en Informática",
    organization: "Estudios universitarios",
  },
  {
    period: "Incompleta",
    role: "Ingeniería Mecánica Electricista",
    organization: "Estudios universitarios",
  },
]

export function AboutSection() {
  return (
    <section className="section-wrap about-section" id="sobre-mi" aria-labelledby="about-heading">
      <Reveal>
        <SectionIntro
          eyebrow="UN POCO SOBRE MÍ"
          title="Una trayectoria técnica con mirada creativa."
          description=""
          id="about-heading"
        />
      </Reveal>
      <div className="about-layout">
        <Reveal className="about-visual-wrap">
          <figure className="about-visual about-logo-card">
            <Image
              className="about-logo-image"
              src={brandLogoUrl}
              alt="Símbolo circular en blanco y negro con trazos curvos"
              width={280}
              height={280}
              sizes="(max-width: 760px) 55vw, 22vw"
            />
            <figcaption>Identidad visual del portfolio</figcaption>
          </figure>
        </Reveal>
        <div className="about-copy">
          <Reveal>
            <p className="about-lead">Combino formación técnica, desarrollo frontend y una trayectoria independiente creando productos para escalada.</p>
            <p className="about-body">Con más de 15 años de experiencia profesional, hoy profundizo en HTML, CSS, JavaScript y React. Me interesa crear herramientas digitales claras y útiles, con una mirada práctica construida entre la ingeniería, el soporte técnico y la coordinación de procesos.</p>
            <div className="about-actions">
              <a className="text-link" href="#contacto">Hablemos <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </Reveal>
          <div className="profile-history-grid">
            <section className="profile-history-group" aria-labelledby="experience-heading">
              <h3 id="experience-heading">Experiencia</h3>
              <ol className="profile-history-list">
                {experience.map((item) => (
                  <li key={`${item.organization}-${item.role}`}>
                    {item.period ? <span className="profile-history-period">{item.period}</span> : null}
                    <h4>{item.role}</h4>
                    <p className="profile-history-org">{item.organization}</p>
                    <p>{item.detail}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section className="profile-history-group" aria-labelledby="education-heading">
              <h3 id="education-heading">Formación</h3>
              <ul className="profile-history-list">
                {education.map((item) => (
                  <li key={`${item.organization}-${item.role}`}>
                    <span className="profile-history-period">{item.period}</span>
                    <h4>{item.role}</h4>
                    <p className="profile-history-org">{item.organization}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
