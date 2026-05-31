'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Language, translations, TranslationKey } from '@/lib/i18n';

// Theme Context
type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
  resolvedTheme: 'dark',
});

export function useTheme() {
  return useContext(ThemeContext);
}

// Language Context
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'de',
  setLanguage: () => {},
  t: (key: TranslationKey) => key,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

// Combined Provider
interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');
  const [language, setLanguageState] = useState<Language>('de');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Theme initialization
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setThemeState(savedTheme);
    }

    // Language initialization
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['de', 'en'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    } else {
      const browserLang = navigator.language.toLowerCase();
      setLanguageState(browserLang.startsWith('de') ? 'de' : 'en');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateResolvedTheme = () => {
      if (theme === 'system') {
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setResolvedTheme(systemDark ? 'dark' : 'light');
      } else {
        setResolvedTheme(theme);
      }
    };

    updateResolvedTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') updateResolvedTheme();
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
  }, [resolvedTheme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLang);
      document.documentElement.lang = newLang;
    }
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.de[key] || key;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
