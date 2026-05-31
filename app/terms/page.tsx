"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-4xl font-bold text-foreground">
              Nutzungsbedingungen
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
                    1. Allgemeines
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Alle auf dieser Website bereitgestellten Scripts sind Open Source 
                    und werden unter der MIT Lizenz veröffentlicht. Du darfst die Scripts 
                    frei verwenden, modifizieren und weitergeben.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    2. MIT Lizenz
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Die Scripts werden &quot;wie sie sind&quot; bereitgestellt, ohne jegliche 
                    Garantie. Du bist für die Nutzung und Anpassung der Scripts 
                    selbst verantwortlich.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    3. Haftungsausschluss
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Wir übernehmen keine Haftung für Schäden, die durch die Nutzung 
                    unserer Scripts entstehen. Du bist für das Testen und die 
                    sichere Implementierung auf deinem Server verantwortlich.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    4. Community Richtlinien
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Bei der Nutzung unserer Discord Community erwarten wir respektvolles 
                    Verhalten. Spam, Beleidigungen und illegale Inhalte sind nicht erlaubt.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    5. Änderungen
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Wir behalten uns vor, diese Nutzungsbedingungen jederzeit zu ändern. 
                    Änderungen werden auf dieser Seite veröffentlicht.
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
