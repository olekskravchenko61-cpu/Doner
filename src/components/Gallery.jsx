import { useI18n } from '../i18n/I18nContext'
import { images } from '../assets/images'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './ui/SectionHeading'
import Picture from './ui/Picture'
import './Gallery.css'

const GALLERY_ITEMS = [
  { key: 'doner', span: 'wide' },
  { key: 'donerPrep', span: 'tall' },
  { key: 'pizza', span: 'normal' },
  { key: 'salad', span: 'tall' },
  { key: 'burger', span: 'normal' },
  { key: 'drinks', span: 'tall' },
  { key: 'pizzaMargherita', span: 'wide' },
]

function GalleryTile({ item }) {
  const { t } = useI18n()
  const [ref, isVisible] = useScrollReveal()
  const image = images[item.key]
  return (
    <div ref={ref} className={`gallery-tile gallery-tile--${item.span} reveal ${isVisible ? 'is-visible' : ''}`}>
      <span className="photo-tag">{t('photo.sample')}</span>
      <Picture image={image} alt={t(image.altKey)} sizes="(max-width: 720px) 50vw, 33vw" />
    </div>
  )
}

export default function Gallery() {
  const { t } = useI18n()

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <SectionHeading eyebrow={t('gallery.eyebrow')} title={t('gallery.title')} subtitle={t('gallery.subtitle')} />
        <div className="gallery__grid">
          {GALLERY_ITEMS.map((item) => (
            <GalleryTile key={item.key} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
