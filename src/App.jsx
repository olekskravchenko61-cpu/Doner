import { useEffect, useRef } from 'react'
import { BrowserRouter, Navigate, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { I18nProvider, useI18n } from './i18n/I18nContext'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import CartBar from './components/CartBar'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './pages/HomePage'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

function DocumentMeta() {
  const { t } = useI18n()

  useEffect(() => {
    document.title = t('meta.title')
    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) descriptionTag.setAttribute('content', t('meta.description'))
  }, [t])

  return null
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()
  const previousPath = useRef(null)

  useEffect(() => {
    const isFirstRender = previousPath.current === null
    const pathChanged = previousPath.current !== pathname
    previousPath.current = pathname
    // Plain section links on the same page arrive as POP; the browser already scrolls them smoothly.
    if (!pathChanged && navigationType === 'POP') return

    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else if (!isFirstRender) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, navigationType])

  return null
}

export default function App() {
  return (
    <I18nProvider>
      <CartProvider>
        <BrowserRouter>
          <DocumentMeta />
          <ScrollManager />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
          <CartBar />
          <Cart />
          <WhatsAppButton />
        </BrowserRouter>
      </CartProvider>
    </I18nProvider>
  )
}
