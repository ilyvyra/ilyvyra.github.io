"use client";

import { motion } from "framer-motion";
import { Zap, Shield, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimierte Scripts mit minimalem Ressourcenverbrauch. Alle Scripts werden auf Performance getestet.",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Sauber geschriebener Code ohne unnötige Risiken. Open Source bedeutet transparenter Code.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description:
      "Aktive Community auf Discord. Hilfe von Entwicklern und anderen Nutzern.",
  },
];

export function FeaturesSection() {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground">
            Warum unsere Scripts?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Qualität und Community stehen bei uns an erster Stelle
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-border bg-card p-8 transition-colors hover:border-muted-foreground/50"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-border bg-background">
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
