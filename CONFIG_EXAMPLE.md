# FiveM Script Marketplace - Script Konfiguration

## Übersicht

Alle Scripts werden über die `lib/data.ts` Datei konfiguriert. Jedes Script hat folgende Eigenschaften:

## Script Template

```typescript
{
  id: "unique-id",
  name: "Script Name",
  slug: "script-name", // URL-freundlicher Name
  description: "Lange Beschreibung des Scripts",
  shortDescription: "Kurze Beschreibung für Listen",
  category: "ESX", // "ESX" | "QBCore" | "Standalone"
  version: "1.0.0",
  lastUpdate: "2024-01-15",
  downloads: 1250,
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3",
  ],
  changelog: [
    "v1.0.0 - Initial Release",
  ],
  installation: [
    "Schritt 1",
    "Schritt 2",
    "Schritt 3",
  ],
  images: ["/scripts/image1.jpg", "/scripts/image2.jpg"],
  githubUrl: "https://github.com/user/repo",
  demoUrl: "https://demo.example.com", // optional
  docs: {
    description: {
      title: "Was ist dieses Script?",
      sections: [
        {
          title: "Übersicht",
          content: "Beschreibung des Scripts...",
        },
      ],
    },
    configuration: {
      title: "Konfiguration",
      sections: [
        {
          title: "Config einrichten",
          content: "Wie man es konfiguriert...",
          code: "Config = {}\nConfig.Debug = false", // optional
          codeLanguage: "lua", // optional
        },
      ],
    },
    usage: {
      title: "Verwendung",
      sections: [
        {
          title: "Verwendungsbeispiel",
          content: "Wie man das Script nutzt...",
        },
      ],
    },
    troubleshooting: {
      title: "Fehlerbehebung",
      sections: [
        {
          title: "Problem XYZ",
          content: "Lösung für Problem XYZ...",
        },
      ],
    },
  },
}
```

## Eigenschaften erklärt

| Eigenschaft | Typ | Beschreibung |
|---|---|---|
| `id` | string | Eindeutige ID für das Script |
| `name` | string | Anzeigename des Scripts |
| `slug` | string | URL-freundlicher Name (z.B. "advanced-garage") |
| `description` | string | Lange Beschreibung (wird auf der Detail-Seite angezeigt) |
| `shortDescription` | string | Kurze Beschreibung (wird in Listen angezeigt) |
| `category` | "ESX" \| "QBCore" \| "Standalone" | Framework-Kategorie |
| `version` | string | Aktuelle Version (z.B. "2.1.0") |
| `lastUpdate` | string | Datum des letzten Updates (Format: "YYYY-MM-DD") |
| `downloads` | number | Download-Anzahl |
| `features` | string[] | Liste der Features |
| `changelog` | string[] | Verlauf der Änderungen |
| `installation` | string[] | Installationsschritte |
| `images` | string[] | Pfade zu Script-Bildern |
| `githubUrl` | string | Link zum GitHub Repository |
| `demoUrl` | string (optional) | Link zu einer Demo |
| `docs` | object | Dokumentation mit 4 Sektionen |

## Docs-Struktur

Jedes Script hat 4 Doc-Sektionen:

### 1. Description (Übersicht)
Erklärt, was das Script ist und was es macht.

```typescript
description: {
  title: "Was ist Advanced Garage?",
  sections: [
    {
      title: "Überblick",
      content: "Advanced Garage ist ein professionelles Garagen-Management System...",
    },
    {
      title: "Hauptfunktionen",
      content: "Das System unterstützt mehrere Garagen pro Spieler...",
    },
  ],
}
```

### 2. Configuration (Konfiguration)
Erklärt, wie man das Script konfiguriert.

```typescript
configuration: {
  title: "Konfiguration",
  sections: [
    {
      title: "Config.js einrichten",
      content: "Die Hauptkonfiguration erfolgt in der config.js Datei...",
      code: `Config = {}
Config.Debug = false
Config.Garages = {
  {
    id = "downtown",
    label = "Downtown Garage",
    x = 100.5,
    y = 200.3,
    z = 50.2,
  }
}`,
      codeLanguage: "lua",
    },
  ],
}
```

### 3. Usage (Verwendung)
Erklärt, wie man das Script nutzt.

```typescript
usage: {
  title: "Verwendung",
  sections: [
    {
      title: "Commands",
      content: "Hier sind die verfügbaren Commands...",
      code: "/garage - Öffnet die Garage\n/vehicle add - Fahrzeug hinzufügen",
    },
  ],
}
```

### 4. Troubleshooting (Fehlerbehebung)
Löst häufige Probleme.

```typescript
troubleshooting: {
  title: "Fehlerbehebung",
  sections: [
    {
      title: "Script wird nicht geladen",
      content: "Stellen Sie sicher, dass Sie 'ensure script-name' in der server.cfg haben...",
    },
  ],
}
```

## URLs für Bilder

Platziere alle Script-Bilder im `/public/scripts/` Ordner:

```
/public
├── scripts/
│   ├── garage-1.jpg
│   ├── garage-2.jpg
│   ├── mdt-1.jpg
│   └── ...
```

Verwende dann die Pfade:
```typescript
images: ["/scripts/garage-1.jpg", "/scripts/garage-2.jpg"]
```

## Slug Regeln

Der `slug` wird als URL verwendet. Beispiele:

- Script Name: "Advanced Garage" → slug: "advanced-garage"
- Script Name: "Police MDT" → slug: "police-mdt"
- Script Name: "Job Management" → slug: "job-management"

**Regeln:**
- Nur Kleinbuchstaben
- Bindestriche statt Leerzeichen
- Keine Sonderzeichen

## Datei-Struktur

```
/vercel/share/v0-project
├── lib/
│   └── data.ts          ← Hier bearbeitest du die Scripts
├── public/
│   └── scripts/         ← Hier kommen die Bilder hin
└── app/
    ├── scripts/
    │   ├── page.tsx     ← Script-Liste
    │   └── [slug]/
    │       └── page.tsx ← Script Detail-Seite
    └── docs/
        └── [slug]/
            └── page.tsx ← Script Dokumentation
```

## Neue Scripts hinzufügen

1. Öffne `lib/data.ts`
2. Füge ein neues Script-Objekt zum `scripts` Array hinzu
3. Speichern
4. Das Script erscheint automatisch überall:
   - In der Script-Liste (/scripts)
   - Mit Detail-Seite (/scripts/slug)
   - Mit Dokumentation (/docs/slug)

## Bild hinzufügen

1. Kopiere das Bild in `/public/scripts/`
2. Füge den Pfad im `images` Array ein:
   ```typescript
   images: ["/scripts/my-script-1.jpg"]
   ```

Das Bild wird automatisch auf der Detail-Seite angezeigt!

## Beispiel: Vollständiges Script

```typescript
{
  id: "2",
  name: "Police MDT",
  slug: "police-mdt",
  description:
    "Ein professionelles MDT (Mobile Data Terminal) System für Polizisten. Mit Report-System, Spieler-Management und Einsatz-Tracking.",
  shortDescription: "Professionelles MDT System für Polizisten",
  category: "ESX",
  version: "1.5.0",
  lastUpdate: "2024-01-20",
  downloads: 890,
  features: [
    "Report-System",
    "Spieler-Datenbank",
    "Einsatz-Tracking",
    "Moderne UI",
    "Vollständig konfigurierbar",
  ],
  changelog: [
    "v1.5.0 - UI Verbesserungen",
    "v1.0.0 - Initial Release",
  ],
  installation: [
    "Script in resources Ordner kopieren",
    "ensure police_mdt in server.cfg",
    "Datenbank importieren",
  ],
  images: ["/scripts/mdt-1.jpg"],
  githubUrl: "https://github.com/example/police-mdt",
  demoUrl: "https://demo.example.com/mdt",
  docs: {
    description: {
      title: "Was ist Police MDT?",
      sections: [
        {
          title: "Übersicht",
          content: "Police MDT ist ein vollständiges System für die Verwaltung von Polizeieinsätzen...",
        },
      ],
    },
    configuration: {
      title: "Konfiguration",
      sections: [
        {
          title: "Config einrichten",
          content: "Bearbeite die config.lua Datei...",
          code: "Config = {}\nConfig.Debug = false",
          codeLanguage: "lua",
        },
      ],
    },
    usage: {
      title: "Verwendung",
      sections: [
        {
          title: "MDT öffnen",
          content: "Drücke F8 um das MDT zu öffnen...",
        },
      ],
    },
    troubleshooting: {
      title: "Support",
      sections: [
        {
          title: "MDT wird nicht angezeigt",
          content: "Stelle sicher, dass das Script geladen ist...",
        },
      ],
    },
  },
}
```

## Hinweise

- **Bilder**: Das System sucht nach den Pfaden in `/public/scripts/`. Stelle sicher, dass die Bilder existieren.
- **URLs**: GitHub-URLs sollten auf den Release/Download-Bereich zeigen.
- **Slugs**: Müssen eindeutig sein! Verwende keine Duplikate.
- **Markdown in Description**: Einfache Formatierung möglich, aber nicht mit speziellen Zeichen.

Viel Erfolg beim Hinzufügen deiner Scripts!
