import { useI18n } from '../i18n/I18nContext'
import { images } from '../assets/images'
import Picture from './ui/Picture'
import MenuItem from './MenuItem'

export default function MenuCategory({ category, items }) {
  const { t, language } = useI18n()
  const image = images[category.image]

  return (
    <div className="menu-category">
      <div className="menu-category__media">
        <span className="photo-tag">{t('photo.sample')}</span>
        <Picture image={image} alt={t(image.altKey)} sizes="(max-width: 900px) 100vw, 40vw" />
        <h3 className="menu-category__title">
          {category.label[language]}
          {category.note && <span className="menu-category__size"> {category.note}</span>}
        </h3>
      </div>
      <ul className="menu-category__list">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}
