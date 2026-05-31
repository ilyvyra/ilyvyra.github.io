"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Server nutzen unsere Scripts" },
  { value: "50+", label: "Open Source Scripts" },
  { value: "100%", label: "Kostenlos" },
  { value: "5000+", label: "Downloads" },
];

export function StatisticsSection() {
  return (
    <section className="border-b border-border bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-foreground lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
