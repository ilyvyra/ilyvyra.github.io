"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Code2,
  Github,
  Sun,
  Moon,
  Monitor,
  Globe,
} from "lucide-react";
import { useTheme, useLanguage } from "./providers";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t('home') },
    { href: "/scripts", label: t('scripts') },
    { href: "/docs", label: t('docs') },
    { href: "/faq", label: t('faq') },
    { href: "/about", label: t('about') },
    { href: "/contact", label: t('contact') },
  ];

  const themeOptions = [
    { value: 'light' as const, label: 'Light', icon: Sun },
    { value: 'dark' as const, label: 'Dark', icon: Moon },
    { value: 'system' as const, label: 'System', icon: Monitor },
  ];

  const languageOptions = [
    { value: 'de' as const, label: 'Deutsch', flag: 'DE' },
    { value: 'en' as const, label: 'English', flag: 'EN' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-foreground" />
          <span className="text-lg font-semibold text-foreground">
            FiveM<span className="text-muted-foreground">Scripts</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {/* Theme Switcher */}
          <div className="relative">
            <button
              onClick={() => {
                setShowThemeMenu(!showThemeMenu);
                setShowLangMenu(false);
              }}
              className="flex items-center justify-center w-9 h-9 border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
            <AnimatePresence>
              {showThemeMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 w-36 border border-border bg-background shadow-lg"
                >
                  {themeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setTheme(option.value);
                        setShowThemeMenu(false);
                      }}
                      className={`flex items-center gap-2 w-full px-3 py-2 text-sm transition-colors hover:bg-secondary ${
                        theme === option.value ? 'text-foreground bg-secondary' : 'text-muted-foreground'
                      }`}
                    >
                      <option.icon className="h-4 w-4" />
                      {option.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => {
                setShowLangMenu(!showLangMenu);
                setShowThemeMenu(false);
              }}
              className="flex items-center justify-center gap-1 h-9 px-3 border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Change language"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-medium">{language.toUpperCase()}</span>
            </button>
            <AnimatePresence>
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 w-36 border border-border bg-background shadow-lg"
                >
                  {languageOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setLanguage(option.value);
                        setShowLangMenu(false);
                      }}
                      className={`flex items-center gap-2 w-full px-3 py-2 text-sm transition-colors hover:bg-secondary ${
                        language === option.value ? 'text-foreground bg-secondary' : 'text-muted-foreground'
                      }`}
                    >
                      <span className="text-xs font-bold w-6">{option.flag}</span>
                      {option.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground ml-2"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Discord
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border" />
              
              {/* Mobile Theme & Language */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Theme:</span>
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setTheme(option.value)}
                    className={`p-2 border border-border transition-colors ${
                      theme === option.value ? 'bg-secondary text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    <option.icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">{language === 'de' ? 'Sprache' : 'Language'}:</span>
                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setLanguage(option.value)}
                    className={`px-3 py-2 text-sm border border-border transition-colors ${
                      language === option.value ? 'bg-secondary text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {option.flag}
                  </button>
                ))}
              </div>
              
              <hr className="border-border" />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground px-4 py-2 text-center text-sm font-medium text-background"
              >
                Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
