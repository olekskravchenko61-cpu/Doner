import { useI18n } from '../../i18n/I18nContext'

export default function Unconfirmed() {
  const { t } = useI18n()
  return <span className="unconfirmed-tag">{t('status.unconfirmed')}</span>
}
