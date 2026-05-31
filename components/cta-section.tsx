"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-border bg-card p-12 text-center lg:p-20"
        >
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Bereit deinen Server auf das
            <br />
            nächste Level zu bringen?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Alle unsere Scripts sind kostenlos und Open Source. Lade sie herunter, 
            passe sie an und werde Teil unserer Community.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/scripts"
              className="group inline-flex items-center justify-center gap-2 bg-foreground px-8 py-4 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Scripts durchsuchen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
