"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FAQAccordion } from "@/components/faq-accordion";
import { faqData } from "@/lib/data";

export default function FAQPage() {
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
              <h1 className="text-4xl font-bold text-foreground">
                Häufig gestellte Fragen
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Antworten auf die wichtigsten Fragen zu unseren Scripts
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <FAQAccordion items={faqData} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
