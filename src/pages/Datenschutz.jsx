import { useI18n } from '../i18n/I18nContext'
import LegalLayout from './LegalLayout'

export default function Datenschutz() {
  const { t } = useI18n()

  return (
    <LegalLayout title={t('legal.datenschutzTitle')}>
      <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>
        Rechtliche Angaben werden in deutscher Sprache bereitgestellt. / Legal information is provided in German.
      </p>

      <section>
        <h2>1. Verantwortlicher</h2>
        <p className="legal-page__placeholder">
          [Name, Anschrift und Kontaktdaten des Verantwortlichen gemäß Art. 4 Nr. 7 DSGVO erforderlich]
        </p>
      </section>

      <section>
        <h2>2. Hosting</h2>
        <p>
          Diese Website wird derzeit als Demonstrationsversion bereitgestellt. Angaben zum endgültigen Hosting-Anbieter
          und zur Verarbeitung von Server-Logdateien werden vor Veröffentlichung ergänzt.
        </p>
      </section>

      <section>
        <h2>3. Lokale Speicherung im Browser (localStorage)</h2>
        <p>
          Diese Website speichert Ihre Spracheinstellung und den Inhalt Ihres Warenkorbs lokal in Ihrem Browser
          (localStorage). Diese Daten verlassen Ihr Gerät nicht, werden nicht an einen Server übertragen und können
          jederzeit über die Browsereinstellungen gelöscht werden.
        </p>
      </section>

      <section>
        <h2>4. Google Maps</h2>
        <p>
          Im Bereich „Kontakt &amp; Anfahrt" kann eine Karte des Dienstes Google Maps (Google Ireland Limited) geladen
          werden. Die Karte wird erst geladen, wenn Sie dies per Klick bestätigen; erst dann wird Ihre IP-Adresse an
          Google übertragen. Weitere Informationen finden Sie in
          der Datenschutzerklärung von Google:{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>5. Kontaktaufnahme per WhatsApp</h2>
        <p>
          Wenn Sie über WhatsApp bestellen oder uns kontaktieren, werden die von Ihnen übermittelten Daten
          (z. B. Name, Bestellinhalt, Telefonnummer) über die Dienste von WhatsApp Ireland Limited (Meta) verarbeitet.
          Es gelten die Datenschutzhinweise von WhatsApp. Die Bestellung wird erst nach Ihrer Bestätigung in der
          WhatsApp-App gesendet.
        </p>
      </section>

      <section>
        <h2>6. Schriftarten</h2>
        <p>Die verwendeten Schriftarten werden lokal von dieser Website geladen. Es besteht keine Verbindung zu Servern von Google Fonts.</p>
      </section>

      <section>
        <h2>7. Ihre Rechte</h2>
        <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
      </section>

      <section>
        <h2>8. Kontakt für Datenschutzanfragen</h2>
        <p className="legal-page__placeholder">[E-Mail-Adresse für Datenschutzanfragen erforderlich]</p>
      </section>
    </LegalLayout>
  )
}
