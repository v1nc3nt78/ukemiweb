type SectionIntroProps = {
  eyebrow: string
  title: string
  description?: string
  id: string
  className?: string
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  id,
  className = "",
}: SectionIntroProps) {
  return (
    <div className={`section-intro ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}
