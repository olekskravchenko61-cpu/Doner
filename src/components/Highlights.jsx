import { useI18n } from '../i18n/I18nContext'
import { getItemById } from '../data/menu'
import { images } from '../assets/images'
import { formatPrice } from '../utils/formatPrice'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './ui/SectionHeading'
import Picture from './ui/Picture'
import Unconfirmed from './ui/Unconfirmed'
import './Highlights.css'

const HIGHLIGHT_IDS = ['menu-1', 'pizza-margherita', 'pizza-vegetarisch']

function Highlight({ item, index }) {
  const { t, language } = useI18n()
  const [ref, isVisible] = useScrollReveal()
  const image = images[item.image]

  return (
    <article ref={ref} className={`highlight highlight--${index + 1} reveal ${isVisible ? 'is-visible' : ''}`}>
      <div className="highlight__media">
        <span className="photo-tag">{t('photo.sample')}</span>
        <Picture image={image} alt={t(image.altKey)} />
      </div>
      <div className="highlight__caption">
        <h3>{item.name[language]}</h3>
        <span className="price">{formatPrice(item.price, language)}</span>
      </div>
      {(item.includes ?? item.description) && (
        <p className="highlight__includes">{(item.includes ?? item.description)[language]}</p>
      )}
    </article>
  )
}

export default function Highlights() {
  const { t } = useI18n()
  const items = HIGHLIGHT_IDS.map(getItemById)

  return (
    <section className="section section--dark highlights">
      <div className="container">
        <SectionHeading eyebrow={t('highlights.eyebrow')} title={t('highlights.title')} subtitle={t('highlights.subtitle')} />
        <div className="highlights__grid">
          {items.map((item, index) => (
            <Highlight key={item.id} item={item} index={index} />
          ))}
        </div>
        <p className="highlights__note">
          <Unconfirmed /> {t('status.source')}
        </p>
      </div>
    </section>
  )
}
