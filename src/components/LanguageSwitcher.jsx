import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { languages } from '../i18n/translations'
import './LanguageSwitcher.css'

export default function LanguageSwitcher({ variant = 'dark' }) {
  const { language, setLanguage, t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined
    const handlePointer = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setIsOpen(false)
    }
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen])

  // A dropdown would be clipped at the bottom of the mobile panel, so the panel gets plain buttons.
  if (variant === 'inline') {
    return (
      <div className="lang-inline" role="group" aria-label={t('common.language')}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            type="button"
            lang={lang.code}
            aria-pressed={lang.code === language}
            className={lang.code === language ? 'is-active' : ''}
            onClick={() => setLanguage(lang.code)}
          >
            {lang.label}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="lang-switcher lang-switcher--dark" ref={rootRef}>
      <button
        type="button"
        className="lang-switcher__trigger"
        aria-expanded={isOpen}
        aria-label={`${t('common.language')}: ${language.toUpperCase()}`}
        onClick={() => setIsOpen((v) => !v)}
      >
        <Globe size={18} aria-hidden="true" />
        <span>{language.toUpperCase()}</span>
        <ChevronDown size={14} aria-hidden="true" className={isOpen ? 'is-open' : ''} />
      </button>
      {isOpen && (
        <ul className="lang-switcher__list">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                lang={lang.code}
                aria-pressed={lang.code === language}
                className="lang-switcher__option"
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
              >
                {lang.label}
                {lang.code === language && <Check size={16} aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
