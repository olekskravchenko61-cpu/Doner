import { useScrollReveal } from '../../hooks/useScrollReveal'
import './SectionHeading.css'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  as: Heading = 'h2',
  className = '',
}) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`section-heading section-heading--${align} reveal ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Heading className="section-heading__title">{title}</Heading>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  )
}
