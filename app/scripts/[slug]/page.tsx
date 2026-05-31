"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Package,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { scripts } from "@/lib/data";

const tabs = ["Beschreibung", "Features", "Changelog", "Installation", "Docs"] as const;

export default function ScriptDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const script = scripts.find((s) => s.slug === slug);
  const [activeTab, setActiveTab] = useState<string>("Beschreibung");

  if (!script) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="border-b border-border py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link
              href="/scripts"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zu Scripts
            </Link>
          </div>
        </section>

        <section className="border-b border-border py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="aspect-video border border-border bg-card"
              >
                <div className="flex h-full items-center justify-center">
                  <div className="text-muted-foreground/50">
                    <svg
                      className="h-20 w-20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <span className="bg-card px-3 py-1 text-sm font-medium text-foreground border border-border">
                    {script.category}
                  </span>
                  <span className="bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
                    FREE & OPEN SOURCE
                  </span>
                </div>

                <h1 className="mt-6 text-4xl font-bold text-foreground">
                  {script.name}
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                  {script.shortDescription}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Package className="h-4 w-4" />
                    <span>Version {script.version}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      Update:{" "}
                      {new Date(script.lastUpdate).toLocaleDateString("de-DE")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Download className="h-4 w-4" />
                    <span>{script.downloads.toLocaleString()} Downloads</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Tag className="h-4 w-4" />
                    <span>{script.category}</span>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <a
                    href={script.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    <Github className="h-4 w-4" />
                    Download auf GitHub
                  </a>
                  {script.demoUrl && (
                    <a
                      href={script.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex gap-1 border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "border-b-2 border-foreground text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="py-8">
              {activeTab === "Beschreibung" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {script.description}
                  </p>
                </motion.div>
              )}

              {activeTab === "Features" && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-3 md:grid-cols-2"
                >
                  {script.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 bg-foreground" />
                      {feature}
                    </li>
                  ))}
                </motion.ul>
              )}

              {activeTab === "Changelog" && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {script.changelog.map((entry, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-muted-foreground" />
                      {entry}
                    </li>
                  ))}
                </motion.ul>
              )}

              {activeTab === "Installation" && (
                <motion.ol
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {script.installation.map((step, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 text-muted-foreground"
                    >
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center border border-border bg-card text-xs font-medium text-foreground">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </motion.ol>
              )}

              {activeTab === "Docs" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {script.docs ? (
                    <div>
                      <p className="text-muted-foreground mb-6">
                        Vollständige Dokumentation mit detaillierten Erklärungen, Konfigurationsanleitungen und Fehlerbehebung.
                      </p>
                      <Link
                        href={`/docs/${script.slug}`}
                        className="inline-flex items-center justify-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Zur vollständigen Dokumentation
                      </Link>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">
                      Dokumentation für dieses Script ist noch nicht verfügbar.
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
