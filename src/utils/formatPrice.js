const localeMap = {
  de: 'de-DE',
  en: 'en-IE',
  ru: 'ru-RU',
}

export const formatPrice = (amount, language = 'de') => {
  if (amount === null || amount === undefined) return null
  return new Intl.NumberFormat(localeMap[language] ?? 'de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)
}
