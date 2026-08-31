type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <div>
        <span className="section-eyebrow">{eyebrow}</span>
        <h2 id={id}>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </header>
  )
}
