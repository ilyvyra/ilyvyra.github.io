"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ExternalLink, Github } from "lucide-react";
import type { Script } from "@/lib/data";

interface ScriptCardProps {
  script: Script;
  index?: number;
}

export function ScriptCard({ script, index = 0 }: ScriptCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group border border-border bg-card transition-colors hover:border-muted-foreground/50"
    >
      <div className="aspect-video bg-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-muted-foreground/50">
            <svg
              className="h-12 w-12"
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
        <div className="absolute top-3 left-3">
          <span className="bg-background/90 px-2 py-1 text-xs font-medium text-foreground">
            {script.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-green-500/20 px-2 py-1 text-xs font-medium text-green-400">
            FREE
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground">{script.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {script.shortDescription}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            {script.downloads.toLocaleString()}
          </span>
          <span>v{script.version}</span>
        </div>

        <div className="mt-5 flex gap-3">
          <a
            href={script.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            <Github className="h-4 w-4" />
            Download
          </a>
          <Link
            href={`/scripts/${script.slug}`}
            className="flex items-center justify-center gap-2 border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <ExternalLink className="h-4 w-4" />
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
