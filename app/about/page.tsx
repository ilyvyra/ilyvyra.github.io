"use client";

import { motion } from "framer-motion";
import { Github, Users, Target, Code2 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const values = [
  {
    icon: Code2,
    title: "Open Source",
    description:
      "Alle unsere Scripts sind unter der MIT Lizenz veröffentlicht. Der Code ist transparent, frei nutzbar und modifizierbar.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Wir entwickeln für die Community, mit der Community. Feedback und Contributions sind immer willkommen.",
  },
  {
    icon: Target,
    title: "Qualität",
    description:
      "Jedes Script wird sorgfältig entwickelt und getestet. Performance und Stabilität haben oberste Priorität.",
  },
];

export default function AboutPage() {
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
              <h1 className="text-4xl font-bold text-foreground">Über uns</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Erfahre mehr über unser Projekt und unsere Mission
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-foreground">
                  Wer wir sind
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Wir sind eine Gruppe von FiveM-Entwicklern, die ihre Scripts 
                  kostenlos mit der Community teilen. Unser Ziel ist es, 
                  hochwertige, professionelle Scripts für jeden zugänglich zu machen - 
                  unabhängig vom Budget.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Was als kleines Hobby-Projekt begann, ist mittlerweile zu einer 
                  aktiven Community gewachsen. Hunderte Server nutzen unsere Scripts 
                  und täglich helfen sich Mitglieder gegenseitig auf Discord.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-foreground">
                  Unsere Mission
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Wir glauben, dass gute FiveM Scripts nicht teuer sein müssen. 
                  Deshalb stellen wir all unsere Arbeit als Open Source zur Verfügung. 
                  Jeder kann die Scripts nutzen, anpassen und verbessern.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Unser Fokus liegt auf Qualität statt Quantität. Jedes Script wird 
                  sorgfältig entwickelt, dokumentiert und auf Performance optimiert. 
                  Wir setzen auf sauberen Code und Best Practices.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-foreground">
                Unsere Werte
              </h2>
              <p className="mt-4 text-muted-foreground">
                Was uns antreibt und wie wir arbeiten
              </p>
            </motion.div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-border bg-card p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-border bg-background">
                    <value.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 text-center"
            >
              <p className="text-muted-foreground">
                Möchtest du Teil unserer Community werden?
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Discord beitreten
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
