"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scripts } from "@/lib/data";

interface StatsData {
  totalScripts: number;
  totalDownloads: number;
  free: string;
}

const fallbackStats = [
  { value: "100%", label: "Kostenlos" },
  {
    value: scripts.length.toLocaleString(),
    label: "Open Source Scripts",
  },
  {
    value: scripts
      .reduce((sum, script) => sum + script.downloads, 0)
      .toLocaleString(),
    label: "Downloads",
  },
];

export function StatisticsSection() {
  const [stats, setStats] = useState(fallbackStats);

  useEffect(() => {
    let isMounted = true;

    fetch("/data/stats.json", { cache: "no-store" })
      .then((response) => response.json() as Promise<StatsData>)
      .then((data) => {
        if (!isMounted) return;

        setStats([
          { value: data.free ?? "100%", label: "Kostenlos" },
          {
            value: (data.totalScripts ?? scripts.length).toLocaleString(),
            label: "Open Source Scripts",
          },
          {
            value: (data.totalDownloads ?? 0).toLocaleString(),
            label: "Downloads",
          },
        ]);
      })
      .catch(() => {
        if (isMounted) {
          setStats(fallbackStats);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="border-b border-border bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
