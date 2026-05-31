import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-4xl font-bold text-foreground">
              Datenschutzerklärung
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Zuletzt aktualisiert: Januar 2024
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    1. Datenerhebung
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Wir erheben nur minimale Daten, die für den Betrieb der Website 
                    notwendig sind. Dazu gehören technische Daten wie IP-Adressen 
                    und Browser-Informationen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    2. Kontaktformular
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Wenn du das Kontaktformular nutzt, werden dein Name, deine 
                    E-Mail-Adresse und deine Nachricht gespeichert. Diese Daten 
                    verwenden wir ausschließlich zur Beantwortung deiner Anfrage.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    3. Cookies
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Diese Website verwendet keine Tracking-Cookies. Es werden nur 
                    technisch notwendige Cookies verwendet, die für die Funktion 
                    der Website erforderlich sind.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    4. Externe Links
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Unsere Website enthält Links zu externen Websites wie GitHub 
                    und Discord. Für die Datenschutzpraktiken dieser Websites 
                    sind wir nicht verantwortlich.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    5. Deine Rechte
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Du hast das Recht auf Auskunft, Berichtigung und Löschung 
                    deiner Daten. Kontaktiere uns bei Fragen zum Datenschutz.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    6. Kontakt
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Bei Fragen zum Datenschutz kannst du uns über das Kontaktformular 
                    oder Discord erreichen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
