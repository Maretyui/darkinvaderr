import Link from "next/link"

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-12 text-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-primary hover:text-primary/80 transition-colors mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif font-light">Datenschutzerklärung</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Allgemeine Hinweise</h2>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie über
              die Erhebung, Verarbeitung und Nutzung Ihrer Daten auf dieser Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist: <br />
              Maik Reinhardt <br />
              E-Mail: info@maretyui.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Erhebung personenbezogener Daten</h2>
            <p>
              Personenbezogene Daten werden nur erhoben, wenn Sie diese freiwillig, z. B. über Kontaktformulare oder
              Newsletter-Anmeldungen, angeben. Dazu zählen z. B. Name, E-Mail-Adresse oder andere Kontaktdaten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">4. Nutzung und Weitergabe</h2>
            <p>
              Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfragen oder zur Bereitstellung unserer Dienste
              genutzt. Eine Weitergabe an Dritte erfolgt nicht, außer dies ist gesetzlich vorgeschrieben oder zur
              Erfüllung unserer Dienstleistungen notwendig.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">5. Cookies und Tracking</h2>
            <p>
              Diese Website kann Cookies oder Tracking-Technologien verwenden, um die Benutzerfreundlichkeit zu verbessern.
              Sie können die Speicherung von Cookies in Ihrem Browser deaktivieren; dies kann jedoch die Funktionalität
              der Website einschränken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">6. Analyse-Tools</h2>
            <p>
              Es werden keine Analyse-Tools wie Google Analytics oder Matomo ohne Ihre Einwilligung verwendet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">7. Rechte der betroffenen Personen</h2>
            <p>
              Sie haben das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Widerspruch und Datenübertragbarkeit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">8. Kontakt</h2>
            <p>
              Bei Fragen oder Anliegen zum Datenschutz wenden Sie sich bitte an: <br />
              Maik Reinhardt <br />
              E-Mail: info@maretyui.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">9. Änderungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an aktuelle rechtliche Anforderungen oder
              Änderungen der Website anzupassen.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <p className="text-sm">Last updated: Dezember 2025</p>
        </div>
      </div>
    </main>
  )
}
