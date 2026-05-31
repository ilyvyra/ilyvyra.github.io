"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScriptCard } from "@/components/script-card";
import { scripts } from "@/lib/data";

const categories = ["Alle", "ESX", "QBCore", "Standalone"] as const;

export default function ScriptsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Alle");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredScripts = useMemo(() => {
    return scripts.filter((script) => {
      const matchesCategory =
        selectedCategory === "Alle" || script.category === selectedCategory;
      const matchesSearch = script.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
              <h1 className="text-4xl font-bold text-foreground">Scripts</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Alle unsere Open Source Scripts - kostenlos zum Download
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-foreground text-background"
                        : "border border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Script suchen..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-border bg-background py-2 pl-10 pr-4 text-sm text-foreground placeholder-muted-foreground focus:border-muted-foreground focus:outline-none md:w-64"
                />
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredScripts.map((script, index) => (
                <ScriptCard key={script.id} script={script} index={index} />
              ))}
            </div>

            {filteredScripts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-muted-foreground">
                  Keine Scripts gefunden. Versuche eine andere Suche.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
