import { useI18n } from '../i18n/I18nContext'
import { business } from '../data/business'
import { imageCredits } from '../assets/images'
import LegalLayout from './LegalLayout'

export default function Impressum() {
  const { t } = useI18n()

  return (
    <LegalLayout title={t('legal.impressumTitle')}>
      <p className="legal-page__lang-note" style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>
        Rechtliche Angaben werden in deutscher Sprache bereitgestellt. / Legal information is provided in German.
      </p>

      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          <span className="legal-page__placeholder">
            {business.legal.ownerName ?? '[Name und Rechtsform des Betreibers erforderlich]'}
          </span>
          <br />
          {business.address.street}
          <br />
          {business.address.postalCode} {business.address.city}
          <br />
          {business.address.country}
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: <span className="legal-page__placeholder">{business.phone.verified ? business.phone.display : '[zu bestätigen]'}</span>
          <br />
          E-Mail: <span className="legal-page__placeholder">[zu bestätigen]</span>
        </p>
      </section>

      <section>
        <h2>Vertretungsberechtigte Person</h2>
        <p className="legal-page__placeholder">[Name der vertretungsberechtigten Person erforderlich]</p>
      </section>

      <section>
        <h2>Registereintrag / Umsatzsteuer-ID</h2>
        <p className="legal-page__placeholder">
          {business.legal.registerInfo ?? '[Handelsregisternummer, falls vorhanden, erforderlich]'}
          <br />
          {business.legal.vatId ?? '[Umsatzsteuer-Identifikationsnummer, falls vorhanden, erforderlich]'}
        </p>
      </section>

      <section>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p className="legal-page__placeholder">[Name und Anschrift des Verantwortlichen erforderlich]</p>
      </section>

      <section>
        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen. <span className="legal-page__placeholder">[vom Betreiber zu bestätigen]</span>
        </p>
      </section>

      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich. Diese Website ist eine Demonstrationsversion; alle Inhalte sind vor
          Veröffentlichung durch den Betreiber zu prüfen und zu bestätigen.
        </p>
      </section>

      <section id="bildnachweise">
        <h2>Bildnachweise</h2>
        <p>Alle Fotos sind Symbolbilder aus Wikimedia Commons und Pexels und zeigen nicht die Speisen von Berlin Döner.</p>
        <ul>
          {imageCredits.map((credit) => (
            <li key={credit.key}>
              <a href={credit.url} target="_blank" rel="noopener noreferrer">{credit.title}</a> – {credit.author},{' '}
              <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer">{credit.license}</a>, {credit.edit ?? 'verkleinert'}
            </li>
          ))}
        </ul>
        <p>
          Auf der Website können die Fotos zusätzlich beschnitten und mit Text oder Farbverlauf überlagert dargestellt
          werden. Bearbeitete Fassungen stehen unter derselben Lizenz wie das jeweilige Original.
        </p>
      </section>
    </LegalLayout>
  )
}
