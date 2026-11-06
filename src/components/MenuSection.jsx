import { useState } from 'react'
import { UtensilsCrossed, Sandwich, LayoutGrid, Pizza, Beef, Salad, CupSoda } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { categories, menu } from '../data/menu'
import SectionHeading from './ui/SectionHeading'
import MenuCategory from './MenuCategory'
import Unconfirmed from './ui/Unconfirmed'
import './MenuSection.css'

const ICONS = { UtensilsCrossed, Sandwich, LayoutGrid, Pizza, Beef, Salad, CupSoda }

export default function MenuSection() {
  const { t, language } = useI18n()
  // Menüs first: the Döner tab has no confirmed standalone prices yet.
  const [activeId, setActiveId] = useState('menues')
  const active = categories.find((category) => category.id === activeId)

  return (
    <section className="section menu-section" id="menu">
      <div className="container">
        <SectionHeading eyebrow={t('menu.eyebrow')} title={t('menu.title')} subtitle={t('menu.subtitle')} />

        <div className="menu-section__tabs" role="group" aria-label={t('menu.eyebrow')}>
          {categories.map((category) => {
            const Icon = ICONS[category.icon]
            const isActive = category.id === activeId
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                className={`menu-tab ${isActive ? 'menu-tab--active' : ''}`}
                onClick={() => setActiveId(category.id)}
              >
                <Icon size={18} aria-hidden="true" />
                {category.label[language]}
              </button>
            )
          })}
        </div>

        <MenuCategory category={active} items={menu[activeId]} />

        <p className="menu-section__note">
          <Unconfirmed /> {t('menu.menuIncompleteNote')}
        </p>
      </div>
    </section>
  )
}
