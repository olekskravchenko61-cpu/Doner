import { Link } from 'react-router-dom'
import { ArrowLeft, AlertTriangle } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import './LegalLayout.css'

export default function LegalLayout({ title, children }) {
  const { t } = useI18n()

  return (
    <div className="legal-page" id="main">
      <div className="container legal-page__inner">
        <Link to="/" className="legal-page__back">
          <ArrowLeft size={16} aria-hidden="true" />
          {t('legal.back')}
        </Link>

        <h1 className="legal-page__title">{title}</h1>

        <div className="legal-page__notice">
          <AlertTriangle size={18} aria-hidden="true" />
          <p>{t('legal.pendingNotice')}</p>
        </div>

        <div className="legal-page__content">{children}</div>
      </div>
    </div>
  )
}
