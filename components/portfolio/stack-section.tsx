import { Badge } from "@/components/ui/badge"
import { Reveal } from "./reveal"
import { SectionIntro } from "./section-intro"
import { technologyGroups } from "./projects"

export function StackSection() {
  return (
    <section className="stack-section" id="stack" aria-labelledby="stack-heading">
      <div className="section-wrap stack-inner">
        <Reveal>
          <SectionIntro
            eyebrow="HERRAMIENTAS Y MÉTODO"
            title="La herramienta correcta para cada idea."
            description="Tecnologías que uso para crear productos útiles, con una base sólida y una experiencia cuidada."
            id="stack-heading"
          />
        </Reveal>
        <div className="stack-grid">
          {technologyGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70}>
              <article className="stack-card">
                <span className="stack-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul className="stack-tags" aria-label={`Conocimientos de ${group.title}`}>
                  {group.items.map((item) => (
                    <li key={item}><Badge variant="outline">{item}</Badge></li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
