import { useEffect, useState } from 'react'
import { Check, Plus } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { useCartContext } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'

export default function MenuItem({ item }) {
  const { t, language } = useI18n()
  const { addItem } = useCartContext()
  const [justAdded, setJustAdded] = useState(false)

  useEffect(() => {
    if (!justAdded) return undefined
    const timer = setTimeout(() => setJustAdded(false), 1400)
    return () => clearTimeout(timer)
  }, [justAdded])

  const name = item.name[language]
  const hasPrice = item.price !== null && item.price !== undefined

  return (
    <li className={`menu-item ${item.includes ? 'menu-item--combo' : ''}`}>
      {item.number && (
        <span className="menu-item__number" aria-hidden={item.includes ? 'true' : undefined}>
          {item.number}
        </span>
      )}
      <div className="menu-item__text">
        <h4 className="menu-item__name">{name}</h4>
        {(item.includes ?? item.description) && (
          <p className="menu-item__includes">{(item.includes ?? item.description)[language]}</p>
        )}
      </div>
      {hasPrice ? (
        <>
          <span className="price">{formatPrice(item.price, language)}</span>
          <button
            type="button"
            className={`menu-item__add ${justAdded ? 'is-added' : ''}`}
            onClick={() => {
              addItem(item.id)
              setJustAdded(true)
            }}
            aria-label={`${justAdded ? t('menu.added') : t('menu.addToCart')}: ${name}`}
          >
            {justAdded ? <Check size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
          </button>
        </>
      ) : (
        <span className="menu-item__tbd">{t('menu.priceOnRequest')}</span>
      )}
    </li>
  )
}
