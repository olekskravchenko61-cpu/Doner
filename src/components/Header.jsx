import { useCallback, useEffect, useState } from 'react'
import { Menu, ShoppingBag } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { useCartContext } from '../context/CartContext'
import { NAV_ITEMS } from '../data/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import MobileMenu from './MobileMenu'
import Button from './ui/Button'
import './Header.css'

export default function Header() {
  const { t } = useI18n()
  const { itemCount, openCart } = useCartContext()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), [])

  return (
    <>
      <a href="#main" className="skip-link">
        {t('common.skipToContent')}
      </a>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <a href="/" className="header__logo" aria-label={t('a11y.home')}>
            <span className="header__logo-mark">B</span>
            <span className="header__logo-word">
              Berlin<span>Döner</span>
            </span>
          </a>

          <nav className="header__nav" aria-label={t('a11y.mainNav')}>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{t(item.key)}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <div className="header__lang">
              <LanguageSwitcher variant="dark" />
            </div>
            <button
              type="button"
              className="header__cart-btn"
              onClick={openCart}
              aria-label={`${t('common.cartLabel')}${itemCount ? `, ${itemCount}` : ''}`}
            >
              <ShoppingBag size={20} aria-hidden="true" />
              {itemCount > 0 && <span className="header__cart-badge">{itemCount}</span>}
            </button>
            <div className="header__order-btn">
              <Button as="a" href="/#menu" variant="primary" size="sm">
                {t('nav.orderNow')}
              </Button>
            </div>
            <button
              type="button"
              className="header__burger"
              aria-label={t('common.menuOpen')}
              aria-haspopup="true"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  )
}
