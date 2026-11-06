import { useCallback, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'berlin-doener-cart'

const readStoredCart = () => {
  if (typeof window === 'undefined') return []
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    const parsed = stored ? JSON.parse(stored) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function useCart() {
  const [lines, setLines] = useState(readStoredCart)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      // storage unavailable — ignore
    }
  }, [lines])

  const addItem = useCallback((itemId) => {
    setLines((prev) => {
      const existing = prev.find((line) => line.itemId === itemId)
      if (existing) {
        return prev.map((line) =>
          line.itemId === itemId ? { ...line, quantity: line.quantity + 1 } : line
        )
      }
      return [...prev, { itemId, quantity: 1 }]
    })
  }, [])

  const increment = useCallback((itemId) => {
    setLines((prev) =>
      prev.map((line) => (line.itemId === itemId ? { ...line, quantity: line.quantity + 1 } : line))
    )
  }, [])

  const decrement = useCallback((itemId) => {
    setLines((prev) =>
      prev
        .map((line) => (line.itemId === itemId ? { ...line, quantity: line.quantity - 1 } : line))
        .filter((line) => line.quantity > 0)
    )
  }, [])

  const removeItem = useCallback((itemId) => {
    setLines((prev) => prev.filter((line) => line.itemId !== itemId))
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const itemCount = useMemo(() => lines.reduce((sum, line) => sum + line.quantity, 0), [lines])

  return { lines, addItem, increment, decrement, removeItem, clear, itemCount }
}
