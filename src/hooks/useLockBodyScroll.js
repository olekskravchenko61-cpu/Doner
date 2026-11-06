import { useEffect } from 'react'

export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined

    const scrollY = window.scrollY
    const { body } = document
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    }

    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.width = '100%'
    body.style.overflow = 'hidden'
    body.classList.add('menu-open')

    return () => {
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.width = prev.width
      body.style.overflow = prev.overflow
      body.classList.remove('menu-open')
      // Must be instant: html has scroll-behavior: smooth, which would visibly replay the scroll from the top.
      window.scrollTo({ top: scrollY, behavior: 'instant' })
    }
  }, [locked])
}
