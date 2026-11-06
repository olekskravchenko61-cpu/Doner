import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations, defaultLanguage } from './translations'

const STORAGE_KEY = 'berlin-doener-language'

const I18nContext = createContext(null)

const readStoredLanguage = () => {
  if (typeof window === 'undefined') return defaultLanguage
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored && translations[stored] ? stored : defaultLanguage
  } catch {
    return defaultLanguage
  }
}

const getValue = (obj, path) =>
  path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj)

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(readStoredLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // localStorage unavailable (private browsing etc.) — ignore
    }
  }, [language])

  const setLanguage = useCallback((lang) => {
    if (translations[lang]) setLanguageState(lang)
  }, [])

  const t = useCallback(
    (key, vars) => {
      const value = getValue(translations[language], key) ?? getValue(translations[defaultLanguage], key)
      if (value === undefined) return key
      if (typeof value === 'string' && vars) {
        return Object.entries(vars).reduce(
          (str, [k, v]) => str.replaceAll(`{{${k}}}`, v),
          value
        )
      }
      return value
    },
    [language]
  )

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
