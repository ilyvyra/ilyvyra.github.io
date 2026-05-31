"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scripts } from "@/lib/data";
import { ScriptCard } from "./script-card";

export function PopularScripts() {
  const popularScripts = scripts.slice(0, 4);

  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              Beliebte Scripts
            </h2>
            <p className="mt-4 text-muted-foreground">
              Die am häufigsten heruntergeladenen Scripts unserer Community
            </p>
          </div>
          <Link
            href="/scripts"
            className="group hidden items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground md:flex"
          >
            Alle Scripts
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularScripts.map((script, index) => (
            <ScriptCard key={script.id} script={script} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/scripts"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            Alle Scripts ansehen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
