import { ArrowDown } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { images } from '../assets/images'
import Picture from './ui/Picture'
import Button from './ui/Button'
import './Hero.css'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <span className="photo-tag">{t('photo.sample')}</span>
        <Picture image={images.doner} alt={t('alt.doner')} loading="eager" fetchPriority="high" sizes="(max-width: 900px) 100vw, 60vw" />
      </div>
      <div className="container hero__inner">
        <div className="hero__content animate-slide-up">
          <span className="eyebrow">Berlin Döner · Barntrup</span>
          <h1 className="hero__title">
            <span>{t('hero.titleLine1')}</span>
            <span className="hero__title-accent">{t('hero.titleLine2')}</span>
          </h1>
          <p className="hero__subtitle">{t('hero.subtitle')}</p>
          <div className="hero__actions">
            <Button as="a" href="#menu" variant="outline-light">
              {t('hero.ctaMenu')}
            </Button>
            <Button as="a" href="#menu" variant="primary">
              {t('hero.ctaOrder')}
            </Button>
          </div>
        </div>
      </div>
      <a href="#offers" className="hero__scroll-hint">
        <span>{t('hero.scrollHint')}</span>
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  )
}
