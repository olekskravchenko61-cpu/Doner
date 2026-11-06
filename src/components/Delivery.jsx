import { MessageCircle, Phone, Truck, UtensilsCrossed } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { business, getPhoneHref } from '../data/business'
import { formatPrice } from '../utils/formatPrice'
import { images } from '../assets/images'
import SectionHeading from './ui/SectionHeading'
import Picture from './ui/Picture'
import Button from './ui/Button'
import Unconfirmed from './ui/Unconfirmed'
import './Delivery.css'

export default function Delivery() {
  const { t, language } = useI18n()
  const phoneHref = getPhoneHref()

  return (
    <section className="section section--red delivery" id="delivery">
      <div className="container delivery__inner">
        <div className="delivery__content">
          <Truck size={40} strokeWidth={1.75} aria-hidden="true" />
          <SectionHeading eyebrow={t('delivery.eyebrow')} title={t('delivery.title')} subtitle={t('delivery.subtitle')} />
          <table className="delivery__zones">
            <thead>
              <tr>
                <th scope="col">{t('delivery.areasLabel')}</th>
                <th scope="col">{t('delivery.minOrderLabel')}</th>
                <th scope="col">{t('delivery.feeLabel')}</th>
              </tr>
            </thead>
            <tbody>
              {business.delivery.zones.map((zone) => (
                <tr key={zone.areas}>
                  <td data-label={t('delivery.areasLabel')}>{zone.areas}</td>
                  <td data-label={t('delivery.minOrderLabel')}>{t('delivery.from')} {formatPrice(zone.minOrder, language)}</td>
                  <td data-label={t('delivery.feeLabel')}>{zone.fee === 0 ? t('delivery.free') : formatPrice(zone.fee, language)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!business.delivery.verified && (
            <p className="delivery__status">
              <Unconfirmed /> {t('status.source')}
            </p>
          )}
          <div className="delivery__actions">
            <Button as="a" href="#menu" variant="dark" icon={business.whatsapp.e164 ? MessageCircle : UtensilsCrossed}>
              {business.whatsapp.e164 ? t('delivery.whatsappCta') : t('hero.ctaMenu')}
            </Button>
            {phoneHref ? (
              <Button as="a" href={phoneHref} variant="outline-dark" icon={Phone}>
                {t('delivery.callCta')}
              </Button>
            ) : (
              <span className="delivery__phone-pending">
                <Phone size={16} aria-hidden="true" /> {business.phone.display} <Unconfirmed />
              </span>
            )}
          </div>
        </div>
        <div className="delivery__media">
          <span className="photo-tag">{t('photo.sample')}</span>
          <Picture image={images.pizzaMargherita} alt={t('alt.margherita')} />
        </div>
      </div>
    </section>
  )
}
