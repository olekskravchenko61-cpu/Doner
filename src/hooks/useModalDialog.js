import { useEffect, useRef } from 'react'
import { useLockBodyScroll } from './useLockBodyScroll'

const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, summary, [tabindex]:not([tabindex="-1"])'

export function useModalDialog(isOpen, onClose) {
  const panelRef = useRef(null)
  const initialFocusRef = useRef(null)

  useLockBodyScroll(isOpen)

  useEffect(() => {
    if (!isOpen) return undefined
    const previouslyFocused = document.activeElement
    initialFocusRef.current?.focus()
    return () => previouslyFocused?.focus?.({ preventScroll: true })
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return
      const focusable = panelRef.current.querySelectorAll(FOCUSABLE)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return { panelRef, initialFocusRef }
}
