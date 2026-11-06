import { useState } from 'react'
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import InstagramIcon from './ui/InstagramIcon'
import { useI18n } from '../i18n/I18nContext'
import { business, getMapsUrl, getPhoneHref } from '../data/business'
import { getWhatsappContactUrl } from '../utils/whatsapp'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import Unconfirmed from './ui/Unconfirmed'
import './Location.css'

export default function Location() {
  const { t } = useI18n()
  const [ref, isVisible] = useScrollReveal()
  const [mapLoaded, setMapLoaded] = useState(false)
  const phoneHref = getPhoneHref()
  const whatsappUrl = getWhatsappContactUrl(business.whatsapp.e164)
  const mapsUrl = getMapsUrl()
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(business.maps.query)}&output=embed`

  return (
    <section className="section location" id="contact">
      <div className="container">
        <SectionHeading eyebrow={t('location.eyebrow')} title={t('location.title')} />

        <div ref={ref} className={`location__grid reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="location__cards">
            <div className="location__card">
              <MapPin size={22} aria-hidden="true" />
              <div>
                <h3>{t('location.addressTitle')}</h3>
                <p>
                  {business.address.street}
                  <br />
                  {business.address.postalCode} {business.address.city}
                </p>
                {!business.address.verified && <Unconfirmed />}
                <br />
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="location__link">
                  {t('location.directionsCta')}
                </a>
              </div>
            </div>

            <div className="location__card">
              <Clock size={22} aria-hidden="true" />
              <div>
                <h3>{t('location.hoursTitle')}</h3>
                <p>
                  {t(business.hours.regular.dayKey)}: {business.hours.regular.time}
                  <br />
                  {t(business.hours.sunday.dayKey)}: {business.hours.sunday.time}
                </p>
                {!business.hours.verified && <Unconfirmed />}
              </div>
            </div>

            <div className="location__card">
              <Phone size={22} aria-hidden="true" />
              <div>
                <h3>{t('location.phoneTitle')}</h3>
                {phoneHref ? (
                  <a href={phoneHref} className="location__link">
                    {business.phone.display}
                  </a>
                ) : (
                  <p>
                    {business.phone.display} <Unconfirmed />
                  </p>
                )}
              </div>
            </div>

            <div className="location__quick-actions">
              {whatsappUrl && (
                <Button as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="primary" icon={MessageCircle} size="sm">
                  WhatsApp
                </Button>
              )}
              {business.social.instagram && (
                <Button as="a" href={business.social.instagram} target="_blank" rel="noopener noreferrer" variant="outline-dark" icon={InstagramIcon} size="sm">
                  {t('location.instagramCta')}
                </Button>
              )}
            </div>
          </div>

          <div className="location__map">
            {mapLoaded ? (
              <iframe src={mapEmbedSrc} title={t('a11y.mapTitle')} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            ) : (
              <div className="location__map-consent">
                <MapPin size={32} aria-hidden="true" />
                <p>{t('map.consent')}</p>
                <Button variant="dark" onClick={() => setMapLoaded(true)}>
                  {t('map.load')}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
