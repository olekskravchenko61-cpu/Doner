import { Info } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { images } from '../assets/images'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './ui/SectionHeading'
import Picture from './ui/Picture'
import './About.css'

export default function About() {
  const { t } = useI18n()
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section section--alt about" id="about">
      <div className="container about__inner">
        <div className="about__media">
          <span className="photo-tag">{t('photo.sample')}</span>
          <Picture image={images.donerPrep} alt={t('alt.prep')} />
        </div>
        <div ref={ref} className={`about__content reveal ${isVisible ? 'is-visible' : ''}`}>
          <SectionHeading eyebrow={t('about.eyebrow')} title={t('about.title')} />
          <p className="about__body">{t('about.body')}</p>
          <div className="about__placeholder-note">
            <Info size={16} aria-hidden="true" />
            <span>{t('about.placeholderNote')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
