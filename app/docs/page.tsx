'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { scripts } from '@/lib/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/providers';

export default function DocsIndexPage() {
  const scriptsWithDocs = scripts.filter((script) => script.docs);
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="border-b border-border px-4 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                {t('documentation')}
              </div>
              <h1 className="text-4xl font-bold md:text-6xl text-pretty">
                {t('availableDocs')}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {t('docsPageDesc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Docs Grid */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            {scriptsWithDocs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {language === 'de' ? 'Noch keine Dokumentationen verfügbar.' : 'No documentation available yet.'}
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {scriptsWithDocs.map((script, index) => (
                  <motion.div
                    key={script.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/docs/${script.slug}`}>
                      <div className="group border border-border p-6 transition-colors hover:border-foreground hover:bg-card/50">
                        <div className="space-y-4">
                          {/* Header */}
                          <div className="space-y-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-xl font-semibold">
                                  {script.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {script.category}
                                </p>
                              </div>
                              <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {script.shortDescription}
                          </p>

                          {/* Sections Preview */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {script.docs?.description && (
                              <span className="text-xs bg-muted px-2 py-1 text-muted-foreground">
                                {language === 'de' ? 'Überblick' : 'Overview'}
                              </span>
                            )}
                            {script.docs?.configuration && (
                              <span className="text-xs bg-muted px-2 py-1 text-muted-foreground">
                                {t('configuration')}
                              </span>
                            )}
                            {script.docs?.usage && (
                              <span className="text-xs bg-muted px-2 py-1 text-muted-foreground">
                                {t('usage')}
                              </span>
                            )}
                            {script.docs?.troubleshooting && (
                              <span className="text-xs bg-muted px-2 py-1 text-muted-foreground">
                                {t('support')}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="border-t border-border px-4 py-20 bg-card">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-6"
            >
              <h2 className="text-2xl font-bold">
                {language === 'de' ? 'Brauchst du mehr Hilfe?' : 'Need more help?'}
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border border-border hover:bg-background transition-colors"
                >
                  {language === 'de' ? 'FAQ lesen' : 'Read FAQ'}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  {language === 'de' ? 'Kontakt aufnehmen' : 'Contact us'}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
