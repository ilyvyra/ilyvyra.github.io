"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5">
              <span className="h-2 w-2 bg-green-500" />
              <span className="text-xs font-medium text-muted-foreground">
                Open Source & 100% Kostenlos
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Premium FiveM
              <br />
              <span className="text-muted-foreground">Scripts</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Professionelle Open Source Scripts für deinen FiveM Server. 
              Optimiert für Performance, Sicherheit und maximale Stabilität.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/scripts"
                className="group flex items-center justify-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Scripts durchsuchen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Discord beitreten
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-green-500" />
                <span>MIT Lizenz</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="h-3 w-3 border border-muted-foreground/50" />
                <div className="h-3 w-3 border border-muted-foreground/50" />
                <div className="h-3 w-3 border border-muted-foreground/50" />
                <span className="ml-2 text-xs text-muted-foreground">
                  advanced_garage.lua
                </span>
              </div>
              <div className="p-4 font-mono text-sm">
                <pre className="text-muted-foreground">
                  <code>
{`-- FiveM Script
local function InitGarage()
  CreateThread(function()
    while true do
      Wait(0)
      -- Optimized performance
      local coords = GetEntityCoords(
        PlayerPedId()
      )
      
      if IsNearGarage(coords) then
        ShowGarageUI()
      end
    end
  end)
end

RegisterNetEvent('garage:open')
AddEventHandler('garage:open', 
  function(garageId)
    OpenGarageMenu(garageId)
  end
)`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
