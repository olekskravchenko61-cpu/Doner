import { ShoppingBag } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { useCartContext } from '../context/CartContext'
import { getItemById } from '../data/menu'
import { formatPrice } from '../utils/formatPrice'
import './CartBar.css'

export default function CartBar() {
  const { t, language } = useI18n()
  const { lines, itemCount, openCart } = useCartContext()

  if (itemCount === 0) return null

  const total = lines.reduce((sum, line) => sum + (getItemById(line.itemId)?.price ?? 0) * line.quantity, 0)

  return (
    <button type="button" className="cart-bar" onClick={openCart}>
      <ShoppingBag size={18} aria-hidden="true" />
      <span>
        {t('order.viewCart')} ({itemCount})
      </span>
      <strong>{formatPrice(total, language)}</strong>
    </button>
  )
}
