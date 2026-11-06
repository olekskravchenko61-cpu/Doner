import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useCart } from '../hooks/useCart'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const cart = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), [])

  const value = useMemo(
    () => ({ ...cart, isOpen, openCart, closeCart, toggleCart }),
    [cart, isOpen, openCart, closeCart, toggleCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCartContext must be used within CartProvider')
  return ctx
}
