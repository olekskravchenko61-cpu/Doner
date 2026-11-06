import { formatPrice } from './formatPrice'
import { translations } from '../i18n/translations'

// Always German, whatever the site language: the restaurant is the reader.
export const buildOrderMessage = ({ items, total, name, orderType, address, notes }) => {
  const de = translations.de
  const typeLabel = orderType === 'delivery' ? de.cart.deliveryOption : de.cart.pickup
  const lines = [de.whatsapp.greeting, '', de.whatsapp.intro, '']
  items.forEach((item) => lines.push(`${item.quantity}x ${item.name}`))
  lines.push('', `${de.whatsapp.total}: ${formatPrice(total, 'de')}`, '')
  if (name) lines.push(`${de.whatsapp.name}: ${name}`)
  lines.push(`${de.whatsapp.orderType}: ${typeLabel}`)
  if (orderType === 'delivery' && address) lines.push(`${de.order.addressLabel}: ${address}`)
  if (notes) lines.push(`Anmerkungen: ${notes}`)
  lines.push('', de.whatsapp.thanks)
  return lines.join('\n')
}

const digitsOnly = (phone) => phone.replace(/\D/g, '')

export const getWhatsappOrderUrl = (phoneE164, message) =>
  phoneE164 ? `https://wa.me/${digitsOnly(phoneE164)}?text=${encodeURIComponent(message)}` : null

export const getWhatsappContactUrl = (phoneE164) =>
  phoneE164 ? `https://wa.me/${digitsOnly(phoneE164)}` : null
