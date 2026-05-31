"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-foreground">Kontakt</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Hast du Fragen oder Feedback? Wir freuen uns von dir zu hören.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-foreground">
                  Schreib uns
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Nutze das Kontaktformular oder schreib uns direkt auf Discord. 
                  Wir antworten in der Regel innerhalb von 24 Stunden.
                </p>

                {isSubmitted ? (
                  <div className="mt-8 border border-green-500/30 bg-green-500/10 p-6">
                    <p className="text-green-400">
                      Danke für deine Nachricht! Wir melden uns bald bei dir.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-muted-foreground focus:outline-none"
                        placeholder="Dein Name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground"
                      >
                        E-Mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-muted-foreground focus:outline-none"
                        placeholder="deine@email.de"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground"
                      >
                        Nachricht
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="mt-2 w-full resize-none border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-muted-foreground focus:outline-none"
                        placeholder="Deine Nachricht..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                    >
                      <Send className="h-4 w-4" />
                      Nachricht senden
                    </button>
                  </form>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="border border-border bg-card p-8">
                  <div className="flex h-12 w-12 items-center justify-center border border-border bg-background">
                    <MessageSquare className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    Discord Community
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Der schnellste Weg, Hilfe zu bekommen, ist über unseren Discord 
                    Server. Dort findest du eine aktive Community und direkte Unterstützung 
                    von den Entwicklern.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-green-500" />
                      Support Channels für jedes Script
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-green-500" />
                      Aktive Community
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-green-500" />
                      Release Ankündigungen
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-green-500" />
                      Feature Requests
                    </li>
                  </ul>
                  <a
                    href="https://discord.gg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    Discord beitreten
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
