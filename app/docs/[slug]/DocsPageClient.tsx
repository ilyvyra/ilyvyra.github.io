'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Copy, Check } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { scripts } from '@/lib/data';
import Link from 'next/link';
import { useLanguage } from '@/components/providers';

export default function DocsPageClient({ slug }: { slug: string }) {
  const script = scripts.find((s) => s.slug === slug);
  const [activeTab, setActiveTab] = useState('description');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { t } = useLanguage();

  if (!script || !script.docs) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">{t('docsNotFound')}</h1>
          <p className="text-muted-foreground mb-8">{t('docsNotFoundDesc')}</p>
          <Link href="/scripts" className="text-primary hover:underline">
            {t('backToScripts')}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const tabs = [
    { id: 'description', label: t('description'), content: script.docs.description },
    { id: 'configuration', label: t('configuration'), content: script.docs.configuration },
    { id: 'usage', label: t('usage'), content: script.docs.usage },
    { id: 'troubleshooting', label: t('troubleshooting'), content: script.docs.troubleshooting },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12 pt-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
          <Link href="/scripts" className="hover:text-foreground transition-colors">
            {t('scripts')}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/scripts/${script.slug}`} className="hover:text-foreground transition-colors">
            {script.name}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{t('documentation')}</span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">{script.name}</h1>
          <p className="text-lg text-muted-foreground">{script.shortDescription}</p>
          <div className="flex gap-4 mt-6">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm border border-border">
              v{script.version}
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm border border-border">
              {script.category}
            </span>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="border-b border-border mb-12">
          <div className="flex gap-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 text-sm font-medium transition-colors relative whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeDocTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTabData && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-12 mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground">{activeTabData.content.title}</h2>

            {activeTabData.content.sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>

                {section.code && (
                  <div className="relative bg-muted border border-border p-4 mt-4 overflow-x-auto">
                    <pre className="text-sm text-muted-foreground font-mono">
                      <code>{section.code}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(section.code!, `code-${idx}`)}
                      className="absolute top-4 right-4 p-2 bg-secondary hover:bg-secondary/80 border border-border transition-colors"
                      title="Copy code"
                    >
                      {copiedCode === `code-${idx}` ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-secondary border border-border p-8 mt-16"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">{t('moreResources')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href={script.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-background border border-border hover:border-primary transition-colors group"
            >
              <div>
                <p className="font-medium text-foreground">{t('githubRepo')}</p>
                <p className="text-sm text-muted-foreground">{t('viewSourceCode')}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            {script.demoUrl && (
              <a
                href={script.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-background border border-border hover:border-primary transition-colors group"
              >
                <div>
                  <p className="font-medium text-foreground">{t('liveDemo')}</p>
                  <p className="text-sm text-muted-foreground">{t('testScript')}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            )}

            <Link
              href="/contact"
              className="flex items-center justify-between p-4 bg-background border border-border hover:border-primary transition-colors group"
            >
              <div>
                <p className="font-medium text-foreground">{t('support')}</p>
                <p className="text-sm text-muted-foreground">{t('askQuestions')}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
