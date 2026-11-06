import { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { useCartContext } from '../context/CartContext'
import { getItemById } from '../data/menu'
import { business } from '../data/business'
import { formatPrice } from '../utils/formatPrice'
import { buildOrderMessage, getWhatsappOrderUrl } from '../utils/whatsapp'
import { useModalDialog } from '../hooks/useModalDialog'
import Unconfirmed from './ui/Unconfirmed'
import './Cart.css'

export default function Cart() {
  const { t, language } = useI18n()
  const { lines, increment, decrement, removeItem, clear, isOpen, closeCart } = useCartContext()
  const [orderType, setOrderType] = useState('pickup')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [notes, setNotes] = useState('')
  const [showErrors, setShowErrors] = useState(false)
  const { panelRef, initialFocusRef } = useModalDialog(isOpen, closeCart)

  const resolvedLines = useMemo(
    () =>
      lines
        .map((line) => ({ ...line, item: getItemById(line.itemId) }))
        .filter((line) => line.item && line.item.price !== null),
    [lines]
  )

  if (!isOpen) return null

  const total = resolvedLines.reduce((sum, line) => sum + line.item.price * line.quantity, 0)
  const message = buildOrderMessage({
    items: resolvedLines.map((line) => ({
      name: line.item.number && !line.item.includes ? `Nr. ${line.item.number} ${line.item.name.de}` : line.item.name.de,
      quantity: line.quantity,
    })),
    total,
    name: name.trim(),
    orderType,
    address: address.trim(),
    notes: notes.trim(),
  })
  const whatsappUrl = getWhatsappOrderUrl(business.whatsapp.e164, message)
  const nameMissing = !name.trim()
  const addressMissing = orderType === 'delivery' && !address.trim()

  const handleSend = (event) => {
    if (nameMissing || addressMissing) {
      event.preventDefault()
      setShowErrors(true)
    }
  }

  return createPortal(
    <div className="cart-drawer">
      <button type="button" className="cart-drawer__backdrop" aria-label={t('common.close')} onClick={closeCart} tabIndex={-1} />
      <div className="cart-drawer__panel" role="dialog" aria-modal="true" aria-label={t('cart.title')} ref={panelRef}>
        <div className="cart-drawer__header">
          <h2>{t('cart.title')}</h2>
          <button type="button" className="cart-drawer__close" onClick={closeCart} aria-label={t('common.close')} ref={initialFocusRef}>
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        {resolvedLines.length === 0 ? (
          <div className="cart-drawer__empty">
            <ShoppingBag size={40} aria-hidden="true" />
            <p>{t('cart.empty')}</p>
            <span>{t('cart.emptyHint')}</span>
          </div>
        ) : (
          <>
            <ul className="cart-drawer__lines">
              {resolvedLines.map((line) => {
                const itemName = line.item.name[language]
                return (
                  <li key={line.itemId} className="cart-line">
                    <div className="cart-line__info">
                      <span className="cart-line__name">{itemName}</span>
                      <span className="price">{formatPrice(line.item.price, language)}</span>
                    </div>
                    <div className="cart-line__controls">
                      <button type="button" onClick={() => decrement(line.itemId)} aria-label={`${t('a11y.decrease')}: ${itemName}`}>
                        <Minus size={14} aria-hidden="true" />
                      </button>
                      <span aria-live="polite">{line.quantity}</span>
                      <button type="button" onClick={() => increment(line.itemId)} aria-label={`${t('a11y.increase')}: ${itemName}`}>
                        <Plus size={14} aria-hidden="true" />
                      </button>
                    </div>
                    <button type="button" className="cart-line__remove" onClick={() => removeItem(line.itemId)} aria-label={`${t('cart.remove')}: ${itemName}`}>
                      <Trash2 size={16} aria-hidden="true" />
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="cart-drawer__total">
              <span>{t('cart.total')}</span>
              <span className="price">{formatPrice(total, language)}</span>
            </div>
            <p className="cart-drawer__status">
              <Unconfirmed /> {t('status.source')}
            </p>

            <div className="cart-drawer__field">
              <span className="cart-drawer__label">{t('cart.orderType')}</span>
              <div className="cart-drawer__toggle">
                {['pickup', 'delivery'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={orderType === type ? 'is-active' : ''}
                    onClick={() => setOrderType(type)}
                    aria-pressed={orderType === type}
                  >
                    {type === 'pickup' ? t('cart.pickup') : t('cart.deliveryOption')}
                  </button>
                ))}
              </div>
            </div>

            <div className="cart-drawer__field">
              <label htmlFor="cart-name" className="cart-drawer__label">{t('cart.nameLabel')}</label>
              <input
                id="cart-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('cart.namePlaceholder')}
                aria-invalid={showErrors && nameMissing}
              />
              {showErrors && nameMissing && <p className="cart-drawer__error" role="alert">{t('order.nameError')}</p>}
            </div>

            {orderType === 'delivery' && (
              <div className="cart-drawer__field">
                <label htmlFor="cart-address" className="cart-drawer__label">{t('order.addressLabel')}</label>
                <input
                  id="cart-address"
                  type="text"
                  autoComplete="street-address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={t('order.addressPlaceholder')}
                  aria-invalid={showErrors && addressMissing}
                />
                {showErrors && addressMissing && <p className="cart-drawer__error" role="alert">{t('order.addressError')}</p>}
              </div>
            )}

            <div className="cart-drawer__field">
              <label htmlFor="cart-notes" className="cart-drawer__label">{t('cart.notesLabel')}</label>
              <textarea id="cart-notes" rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={t('cart.notesPlaceholder')} />
            </div>

            <div className="cart-drawer__actions">
              {whatsappUrl ? (
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleSend} className="btn btn-primary cart-drawer__send">
                  {t('cart.sendWhatsapp')}
                </a>
              ) : (
                <>
                  <p className="cart-drawer__unavailable">{t('cart.whatsappUnavailable')}</p>
                  <details className="cart-drawer__preview">
                    <summary>{t('order.preview')}</summary>
                    <pre>{message}</pre>
                  </details>
                </>
              )}
              <p className="cart-drawer__hint">{t('cart.sendHint')}</p>
              <button type="button" className="cart-drawer__clear" onClick={clear}>{t('cart.clear')}</button>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  )
}
