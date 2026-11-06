import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { business } from '../data/business'
import { getWhatsappContactUrl } from '../utils/whatsapp'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  const { t } = useI18n()
  const [isVisible, setIsVisible] = useState(false)
  const url = getWhatsappContactUrl(business.whatsapp.e164)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 480)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!url) return null

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-fab ${isVisible ? 'is-visible' : ''}`}
      aria-label={`WhatsApp — ${t('nav.orderNow')}`}
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  )
}
