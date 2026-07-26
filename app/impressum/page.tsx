import Link from "next/link"

export default function Impressum() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-12 text-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-primary hover:text-primary/80 transition-colors mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif font-light">Impressum</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Kontaktdaten</h2>
            <p>
              Betreiber der Website: <br />
              Maik Reinhardt <br />
              E-Mail: info@maretyui.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Haftungsausschluss / Disclaimer</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für
              den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Haftung für Inhalte</h2>
            <p>
              Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
              Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Urheberrecht</h2>
            <p>
              Die durch die Betreiber dieser Website erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Information gemäß § 36 VSBG</h2>
            <p>
             Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die alternative Streitbeilegung in Verbrauchersachen) erklärt der Betreiber dieser Website:
Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
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
