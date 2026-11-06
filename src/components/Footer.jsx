import { Link } from 'react-router-dom'
import InstagramIcon from './ui/InstagramIcon'
import Unconfirmed from './ui/Unconfirmed'
import { useI18n } from '../i18n/I18nContext'
import { business, getPhoneHref, getMapsUrl } from '../data/business'
import { NAV_ITEMS } from '../data/navigation'
import './Footer.css'

export default function Footer() {
  const { t } = useI18n()
  const phoneHref = getPhoneHref()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__logo">
            Berlin<span>Döner</span>
          </span>
          <p>{t('footer.tagline')}</p>
          {business.social.instagram && (
            <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
          )}
        </div>

        <div className="footer__col">
          <h4>{t('footer.navTitle')}</h4>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{t(item.key)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>{t('footer.contactTitle')}</h4>
          <ul>
            <li>
              {business.address.street}, {business.address.postalCode} {business.address.city}
            </li>
            {!business.address.verified && (
              <li>
                <Unconfirmed />
              </li>
            )}
            <li>
              <a href={getMapsUrl()} target="_blank" rel="noopener noreferrer">
                {t('location.directionsCta')}
              </a>
            </li>
            <li>
              {phoneHref ? <a href={phoneHref}>{business.phone.display}</a> : <>{business.phone.display} <Unconfirmed /></>}
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>{t('footer.hoursTitle')}</h4>
          <ul>
            <li>
              {t(business.hours.regular.dayKey)}: {business.hours.regular.time}
            </li>
            <li>
              {t(business.hours.sunday.dayKey)}: {business.hours.sunday.time}
            </li>
            {!business.hours.verified && (
              <li>
                <Unconfirmed />
              </li>
            )}
          </ul>
        </div>

        <div className="footer__col">
          <h4>{t('footer.legalTitle')}</h4>
          <ul>
            <li>
              <Link to="/impressum">{t('footer.impressum')}</Link>
            </li>
            <li>
              <Link to="/datenschutz">{t('footer.datenschutz')}</Link>
            </li>
            <li>
              <Link to="/impressum#bildnachweise">{t('photo.credits')}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} Berlin Döner Barntrup. {t('footer.rights')}
        </p>
        <p className="footer__demo-note">{t('footer.demoNote')}</p>
      </div>
    </footer>
  )
}
