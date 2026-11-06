import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { useModalDialog } from '../hooks/useModalDialog'
import { NAV_ITEMS } from '../data/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import Button from './ui/Button'
import './MobileMenu.css'

export default function MobileMenu({ isOpen, onClose }) {
  const { t } = useI18n()
  const { panelRef, initialFocusRef } = useModalDialog(isOpen, onClose)

  if (!isOpen) return null

  return createPortal(
    <div className="mobile-menu" id="mobile-menu">
      <button
        type="button"
        className="mobile-menu__backdrop"
        aria-label={t('common.menuClose')}
        onClick={onClose}
        tabIndex={-1}
      />
      <div className="mobile-menu__panel" role="dialog" aria-modal="true" aria-label={t('a11y.mobileNav')} ref={panelRef}>
        <div className="mobile-menu__header">
          <span className="mobile-menu__logo">
            Berlin<span>Döner</span>
          </span>
          <button
            type="button"
            className="mobile-menu__close"
            onClick={onClose}
            aria-label={t('common.menuClose')}
            ref={initialFocusRef}
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <nav className="mobile-menu__nav" aria-label={t('a11y.mobileNav')}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={onClose}>
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu__footer">
          <LanguageSwitcher variant="inline" />
          <Button as="a" href="/#menu" variant="primary" onClick={onClose} className="mobile-menu__cta">
            {t('nav.orderNow')}
          </Button>
        </div>
      </div>
    </div>,
    document.body
  )
}
