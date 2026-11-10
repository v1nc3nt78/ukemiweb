"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { ArrowUpRight, Code2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { projects, type ProjectFilter, type PortfolioProject } from "./projects"
import { Reveal } from "./reveal"
import { SectionIntro } from "./section-intro"

const filters: { value: ProjectFilter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "React", label: "React" },
  { value: "Next.js", label: "Next.js" },
  { value: "Node.js", label: "Node.js" },
  { value: "Full-stack", label: "Full-stack" },
]

function ProjectLinks({ project }: { project: PortfolioProject }) {
  return (
    <div className="project-links">
      <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Ver demo de ${project.title}`}>
        Demo <ArrowUpRight aria-hidden="true" />
      </a>
      <a href={project.codeUrl} target="_blank" rel="noreferrer" aria-label={`Ver código de ${project.title}`}>
        <Code2 aria-hidden="true" /> Código
      </a>
    </div>
  )
}

function FeaturedProject({ project }: { project: PortfolioProject }) {
  return (
    <article className="featured-project">
      <a className="featured-image" href={project.demoUrl} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
        <Image src={project.image} alt="" fill sizes="(max-width: 760px) 100vw, 52vw" priority />
      </a>
      <div className="featured-content">
        <div className="project-meta-row">
          <Badge variant="secondary">{project.categoryLabel}</Badge>
          <span className="project-year">{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tech-list" aria-label={`Tecnologías de ${project.title}`}>
          {project.stack.map((item) => <li key={item}><Badge variant="outline">{item}</Badge></li>)}
        </ul>
        {project.breakdown ? (
          <dl className="featured-breakdown">
            {project.breakdown.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        <ProjectLinks project={project} />
      </div>
      <span className="featured-number" aria-hidden="true">01</span>
    </article>
  )
}

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <Reveal className="project-reveal" delay={(index % 2) * 90}>
      <article className="project-card">
        <a className="project-image" href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Ver demo de ${project.title}`}>
          <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 33vw" />
          <span className="image-arrow" aria-hidden="true"><ArrowUpRight /></span>
        </a>
        <div className="project-card-body">
          <div className="project-meta-row">
            <Badge variant="secondary">{project.categoryLabel}</Badge>
            <span className="project-year">{project.year}</span>
          </div>
          <div className="project-title-row">
            <h3>{project.title}</h3>
            <ProjectLinks project={project} />
          </div>
          <p className="project-description">{project.description}</p>
          <ul className="tech-list" aria-label={`Tecnologías de ${project.title}`}>
            {project.stack.map((item) => <li key={item}><Badge variant="outline">{item}</Badge></li>)}
          </ul>
        </div>
      </article>
    </Reveal>
  )
}

export function ProjectGallery() {
  const [filter, setFilter] = useState<ProjectFilter>("all")
  const filteredProjects = useMemo(
    () => projects.filter((project) => {
      if (filter === "all") return true
      if (filter === "Full-stack") return project.category === "fullstack"
      return project.stack.includes(filter)
    }),
    [filter],
  )
  const featuredProject = filteredProjects.find((project) => project.featured)
  const standardProjects = filteredProjects.filter((project) => !project.featured)

  return (
    <section className="section-wrap projects-section" id="proyectos" aria-labelledby="projects-heading">
      <Reveal>
        <div className="projects-heading-row">
          <SectionIntro
            eyebrow="TRABAJO SELECCIONADO"
            title="Proyectos con intención."
            description="Una selección de productos e interfaces. Los datos y enlaces son de muestra: cámbialos por tus proyectos reales."
            id="projects-heading"
          />
          <ToggleGroup
            value={[filter]}
            onValueChange={(value) => {
              const selected = value.at(-1)
              if (selected) setFilter(selected as ProjectFilter)
            }}
            variant="outline"
            size="sm"
            spacing={1}
            className="project-filters"
            aria-label="Filtrar proyectos por tecnología"
          >
            {filters.map((item) => (
              <ToggleGroupItem key={item.value} value={item.value} aria-label={item.label}>
                {item.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </Reveal>

      <p className="sr-only" aria-live="polite">{filteredProjects.length} proyectos</p>
      {featuredProject ? (
        <Reveal>
          <FeaturedProject project={featuredProject} />
        </Reveal>
      ) : null}
      {standardProjects.length > 0 ? (
        <div className="project-grid">
          {standardProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      ) : null}
      {filteredProjects.length === 0 ? <p className="empty-projects">Pronto habrá proyectos en esta tecnología.</p> : null}
    </section>
  )
}
