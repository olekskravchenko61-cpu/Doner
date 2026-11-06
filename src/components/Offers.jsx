import { useI18n } from '../i18n/I18nContext'
import { offers, getTodayOfferId } from '../data/offers'
import { images } from '../assets/images'
import { formatPrice } from '../utils/formatPrice'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './ui/SectionHeading'
import Picture from './ui/Picture'
import Unconfirmed from './ui/Unconfirmed'
import './Offers.css'

function OfferRow({ offer, isToday }) {
  const { t, language } = useI18n()
  const [ref, isVisible] = useScrollReveal()
  const image = images[offer.image]

  return (
    <article ref={ref} className={`offer reveal ${isVisible ? 'is-visible' : ''}`}>
      <div className="offer__media">
        <span className="photo-tag">{t('photo.sample')}</span>
        <Picture image={image} alt={t(image.altKey)} />
      </div>
      <div className="offer__body">
        <p className="offer__day">
          {offer.day[language]}
          {isToday && offer.verified && <span className="offer__today">{t('offers.today')}</span>}
        </p>
        <h3 className="offer__label">{offer.label[language]}</h3>
        <p className="offer__item">{offer.item[language]}</p>
        <p className="offer__price">{formatPrice(offer.price, language)}</p>
        <p className="offer__terms">
          {offer.permanent && <span>{t('offers.permanent')}</span>}
          {offer.note && <span>{offer.note[language]}</span>}
          {!offer.verified && <Unconfirmed />}
        </p>
      </div>
    </article>
  )
}

export default function Offers() {
  const { t } = useI18n()
  const todayId = getTodayOfferId()

  return (
    <section className="section section--alt offers" id="offers">
      <div className="container">
        <SectionHeading eyebrow={t('offers.eyebrow')} title={t('offers.title')} subtitle={t('offers.subtitle')} />
        <div className="offers__list">
          {offers.map((offer) => (
            <OfferRow key={offer.id} offer={offer} isToday={offer.id === todayId} />
          ))}
        </div>
        <p className="offers__note">{t('status.source')}</p>
      </div>
    </section>
  )
}
