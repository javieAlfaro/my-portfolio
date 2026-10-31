export function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string
  label: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span className="text-accent">{number}</span>
        <span className="eyebrow-line" />
        {label}
      </p>
      <h2 id={`${label.toLowerCase()}-heading`}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
