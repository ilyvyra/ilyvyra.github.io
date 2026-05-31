export interface DocSection {
  title: string;
  sections: {
    title: string;
    content: string;
    code?: string;
    codeLanguage?: string;
  }[];
}

export interface Script {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: "ESX" | "QBCore" | "Standalone";
  version: string;
  lastUpdate: string;
  downloads: number;
  features: string[];
  changelog: string[];
  installation: string[];
  images: string[];
  videoUrl?: string;
  githubUrl: string;
  demoUrl?: string;
  docs?: {
    description: DocSection;
    configuration: DocSection;
    usage: DocSection;
    troubleshooting: DocSection;
  };
}

export const scripts: Script[] = [
  {
    id: "1",
    name: "Advanced Garage",
    slug: "advanced-garage",
    description:
      "Ein vollständiges Garagen-System mit modernem UI, Fahrzeugverwaltung und Multi-Location Support. Perfekt für jeden Server, der ein professionelles Fahrzeugsystem benötigt.",
    shortDescription: "Modernes Garagen-System mit Multi-Location Support",
    category: "ESX",
    version: "2.1.0",
    lastUpdate: "2024-01-15",
    downloads: 1250,
    features: [
      "Multi-Location Garagen",
      "Modernes NUI Interface",
      "Fahrzeug-Vorschau System",
      "Garage Levels & Kategorien",
      "Vollständig konfigurierbar",
      "Performance optimiert",
    ],
    changelog: [
      "v2.1.0 - Neues UI Design, Performance Verbesserungen",
      "v2.0.0 - Complete Rewrite mit React",
      "v1.5.0 - Multi-Location Support hinzugefügt",
      "v1.0.0 - Initial Release",
    ],
    installation: [
      "Script in resources Ordner kopieren",
      "ensure advanced_garage in server.cfg hinzufügen",
      "SQL Datei importieren",
      "Config nach Bedarf anpassen",
    ],
    images: ["/scripts/garage-1.jpg", "/scripts/garage-2.jpg"],
    githubUrl: "https://github.com/example/advanced-garage",
    demoUrl: "https://demo.example.com/garage",
    docs: {
      description: {
        title: "Was ist Advanced Garage?",
        sections: [
          {
            title: "Überblick",
            content:
              "Advanced Garage ist ein professionelles Garagen-Management System für FiveM Server. Es bietet eine vollständige Verwaltung von Fahrzeugen mit modernem UI, Multi-Location Support und erweiterten Funktionen für Spieler.",
          },
          {
            title: "Hauptfunktionen",
            content:
              "Das System unterstützt mehrere Garagen pro Spieler, Fahrzeug-Kategorien, Spawn-Positionen, Upgrade-System und detaillierte Fahrzeuginformationen. Alle Daten werden sicher in der Datenbank gespeichert.",
          },
        ],
      },
      configuration: {
        title: "Konfiguration",
        sections: [
          {
            title: "Config.js einrichten",
            content:
              "Die Hauptkonfiguration erfolgt in der config.js Datei. Dort kannst du Garagen-Positionen, Fahrzeug-Kategorien, Einstellungen und Preise anpassen.",
            code: `Config = {}
Config.Debug = false

Config.Garages = {
  {
    id = "downtown",
    label = "Downtown Garage",
    location = vec3(225.5, -934.2, 24.1),
    heading = 340.0,
    maxVehicles = 10,
    type = "public"
  },
  {
    id = "sandy",
    label = "Sandy Shores Garage",
    location = vec3(476.2, -1002.5, 29.3),
    heading = 270.0,
    maxVehicles = 8,
    type = "public"
  }
}`,
            codeLanguage: "lua",
          },
          {
            title: "Datenbank Setup",
            content:
              "Importiere die SQL Datei in deine Datenbank. Die Tabelle speichert alle Fahrzeuge mit Besitzer-ID, Garage-Zuordnung und Fahrzeugdaten.",
          },
        ],
      },
      usage: {
        title: "Verwendung",
        sections: [
          {
            title: "Fahrzeug spawnen",
            content:
              "Spieler können in einer Garage ein Fahrzeug auswählen und spawnen. Das System prüft automatisch Platz und Spawnn-Positionen.",
          },
          {
            title: "Fahrzeuge verwalten",
            content:
              "Spieler können ihre Fahrzeuge konfigurieren, Mods anbringen und Informationen wie Farbe und Nummernschild ändern.",
            code: `-- Exports
exports['advanced_garage']:GetPlayerVehicles(playerId)
exports['advanced_garage']:AddVehicle(playerId, vehicleModel, garage)
exports['advanced_garage']:RemoveVehicle(vehicleId)`,
            codeLanguage: "lua",
          },
        ],
      },
      troubleshooting: {
        title: "Fehlerbehebung",
        sections: [
          {
            title: "Fahrzeuge spawnen nicht",
            content:
              "Prüfe ob die Garagen-Positionen korrekt sind und keine andere Resource die Spawn-Positionen blockiert. Schau auch in die Server-Logs für Fehler.",
          },
          {
            title: "Datenbankfehler",
            content:
              "Stelle sicher, dass die SQL Datei korrekt importiert wurde und alle Tabellen vorhanden sind. Prüfe die Datenbankverbindung in deiner Config.",
          },
        ],
      },
    },
  },
  {
    id: "2",
    name: "Police MDT",
    slug: "police-mdt",
    description:
      "Vollständiges Mobile Data Terminal für Polizei-Fraktionen. Inklusive Personen- und Fahrzeugsuche, Strafregister, Einsatzverwaltung und mehr.",
    shortDescription: "Komplettes MDT System für Polizei-Fraktionen",
    category: "QBCore",
    version: "3.0.2",
    lastUpdate: "2024-01-20",
    downloads: 2100,
    features: [
      "Personen- und Fahrzeugsuche",
      "Strafregister System",
      "Einsatzverwaltung",
      "Fahndungen & BOLO",
      "Berichte schreiben",
      "Vollständige Dokumentation",
    ],
    changelog: [
      "v3.0.2 - Bugfixes und Stability",
      "v3.0.0 - Komplett neues UI",
      "v2.5.0 - Einsatzverwaltung hinzugefügt",
      "v2.0.0 - QBCore Support",
    ],
    installation: [
      "Script in resources Ordner kopieren",
      "ensure police_mdt in server.cfg hinzufügen",
      "SQL Dateien importieren",
      "Job Permissions konfigurieren",
    ],
    images: ["/scripts/mdt-1.jpg", "/scripts/mdt-2.jpg"],
    githubUrl: "https://github.com/example/police-mdt",
    docs: {
      description: {
        title: "Was ist Police MDT?",
        sections: [
          {
            title: "Überblick",
            content:
              "Police MDT ist ein professionelles Mobile Data Terminal System speziell für QBCore Polizei-Fraktionen. Es ermöglicht Polizisten schnelle Personensuchen, Fahrzeugabfragen und Strafregister-Management.",
          },
          {
            title: "Funktionen",
            content:
              "Schnelle Datenbankabfragen, Strafregister mit Bildern, Fahndungen verwalten, Einsätze starten und abschließen, sowie detaillierte Reports schreiben.",
          },
        ],
      },
      configuration: {
        title: "Konfiguration",
        sections: [
          {
            title: "Config.js Setup",
            content:
              "Passe die QBCore Job-Namen an und konfiguriere Datenbank-Verbindungen.",
            code: `Config = {}
Config.EnableMDT = true
Config.JobRequired = "police"
Config.MinRank = 1
Config.DatabaseName = "your_database"`,
            codeLanguage: "lua",
          },
        ],
      },
      usage: {
        title: "Verwendung",
        sections: [
          {
            title: "MDT öffnen",
            content:
              "Polizisten können das MDT mit dem Command /mdt öffnen oder über In-Game Terminals zugreifen.",
          },
          {
            title: "Personensuche",
            content:
              "Gib einen Namen ein um Informationen zu finden. Das System zeigt Strafregister, Fahrzeuge und aktuelle Warrants.",
          },
        ],
      },
      troubleshooting: {
        title: "Support",
        sections: [
          {
            title: "MDT öffnet nicht",
            content:
              "Prüfe ob der Spieler den korrekten Job hat und die SQL Tabellen vorhanden sind.",
          },
        ],
      },
    },
  },
  {
    id: "3",
    name: "Gang System",
    slug: "gang-system",
    description:
      "Umfangreiches Gang-Management System mit Territorien, Rang-System, Gang-Wars und vielem mehr. Perfekt für Roleplay Server mit aktivem Gang-Leben.",
    shortDescription: "Komplettes Gang-Management mit Territorien",
    category: "ESX",
    version: "1.8.0",
    lastUpdate: "2024-01-10",
    downloads: 890,
    features: [
      "Territorien System",
      "Gang Ränge & Permissions",
      "Gang Wars",
      "Stash & Fahrzeuge",
      "Gang Menu UI",
      "Admin Panel",
    ],
    changelog: [
      "v1.8.0 - Gang Wars System",
      "v1.5.0 - Territorien überarbeitet",
      "v1.2.0 - Admin Panel hinzugefügt",
      "v1.0.0 - Initial Release",
    ],
    installation: [
      "Script in resources Ordner kopieren",
      "ensure gang_system in server.cfg hinzufügen",
      "SQL Datei importieren",
      "Territorien in Config definieren",
    ],
    images: ["/scripts/gang-1.jpg", "/scripts/gang-2.jpg"],
    githubUrl: "https://github.com/example/gang-system",
    docs: {
      description: {
        title: "Was ist Gang System?",
        sections: [
          {
            title: "Überblick",
            content:
              "Das Gang System ist ein komplettes Management-System für Banden und Gruppen. Spieler können Gangs gründen, Territorien kontrollieren und an Gang-Kriegen teilnehmen.",
          },
          {
            title: "Features",
            content:
              "Dynamische Territorien mit Kontrolle, Rang-System mit Berechtigungen, Stash-Management, Fahrzeug-Speicher und PvP Gang-Wars.",
          },
        ],
      },
      configuration: {
        title: "Konfiguration",
        sections: [
          {
            title: "Territorien einrichten",
            content:
              "Definiere Territorien mit Position und Größe in der Config. Jedes Territorium kann eine Gang kontrollieren.",
            code: `Config.Territories = {
  {
    id = "grove",
    name = "Grove Street",
    location = vec3(10.5, -1840.2, 25.5),
    radius = 150,
    gangRequired = "grove"
  }
}`,
            codeLanguage: "lua",
          },
          {
            title: "Gang Ränge",
            content:
              "Passe die Rang-Namen und Berechtigungen für deine Gangs an.",
          },
        ],
      },
      usage: {
        title: "Verwendung",
        sections: [
          {
            title: "Gang gründen",
            content:
              "Ein Spieler kann eine Gang gründen mit dem Command /creategang [name]. Er wird automatisch zum Leader.",
          },
          {
            title: "Territorien kontrolieren",
            content:
              "Gangs können Territorien mit /claimterritory übernehmen. Das System verwaltet automatisch die Kontrolle und zeigt Wechsel an.",
          },
        ],
      },
      troubleshooting: {
        title: "Support",
        sections: [
          {
            title: "Territorium wird nicht aktualisiert",
            content:
              "Prüfe die Synchronisation zwischen Server und Client. Refreshe mit /refreshgangs.",
          },
        ],
      },
    },
  },
  {
    id: "4",
    name: "Vehicle Shop",
    slug: "vehicle-shop",
    description:
      "Professionelles Autohaus-Script mit Test-Drive, Finanzierung, modernem UI und vollständiger Fahrzeugverwaltung für Besitzer.",
    shortDescription: "Professionelles Autohaus mit Finanzierung",
    category: "Standalone",
    version: "2.5.1",
    lastUpdate: "2024-01-18",
    downloads: 1580,
    features: [
      "Modernes Shop Interface",
      "Test-Drive System",
      "Finanzierung & Leasing",
      "Boss Menu für Besitzer",
      "Fahrzeug Kategorien",
      "Multi-Shop Support",
    ],
    changelog: [
      "v2.5.1 - Hotfix für Finanzierung",
      "v2.5.0 - Leasing System hinzugefügt",
      "v2.0.0 - Complete UI Overhaul",
      "v1.0.0 - Initial Release",
    ],
    installation: [
      "Script in resources Ordner kopieren",
      "ensure vehicle_shop in server.cfg hinzufügen",
      "SQL Datei importieren",
      "Fahrzeuge und Preise konfigurieren",
    ],
    images: ["/scripts/shop-1.jpg", "/scripts/shop-2.jpg"],
    githubUrl: "https://github.com/example/vehicle-shop",
    demoUrl: "https://demo.example.com/vehicleshop",
    docs: {
      description: {
        title: "Was ist Vehicle Shop?",
        sections: [
          {
            title: "Überblick",
            content:
              "Vehicle Shop ist ein modernes, vollständiges Autohaus-System mit Kaufoption, Test-Drive Funktion und Finanzierungsmöglichkeiten. Spieler können Fahrzeuge direkt kaufen oder finanzieren.",
          },
          {
            title: "Hauptmerkmale",
            content:
              "Nahtlose Shop-Integration mit modernem UI, realistische Test-Drives, flexible Finanzierungspläne, Admin-Panel für Shop-Management und Multi-Shop Support.",
          },
        ],
      },
      configuration: {
        title: "Konfiguration",
        sections: [
          {
            title: "Fahrzeuge und Preise",
            content:
              "Konfiguriere den Fahrzeug-Katalog mit Modellen, Preisen und Kategorien.",
            code: `Config.Vehicles = {
  {
    model = "oracle",
    label = "Oracle XF",
    price = 45000,
    category = "sports"
  },
  {
    model = "tailgater",
    label = "Tailgater",
    price = 35000,
    category = "sedan"
  }
}`,
            codeLanguage: "lua",
          },
          {
            title: "Finanzierungspläne",
            content:
              "Passe Finanzierungszinsen, Laufzeiten und Gebühren an deine Wirtschaft an.",
          },
        ],
      },
      usage: {
        title: "Verwendung",
        sections: [
          {
            title: "Shop betreten",
            content:
              "Spieler betreten ein Autohaus und werden vom NPC begrüßt. Sie können den Katalog durchstöbern oder Fahrzeuge konfigurieren.",
          },
          {
            title: "Test-Drive",
            content:
              "Spieler können ein Auto Test-fahren bevor sie es kaufen. Das Vehicle wird mit Timer gespawnt und automatisch nach der Zeit entfernt.",
          },
        ],
      },
      troubleshooting: {
        title: "Support",
        sections: [
          {
            title: "Fahrzeug spawnt nicht",
            content:
              "Stelle sicher dass die Modelle im Format 'adder', 'oracle' etc. sind und auf deinem Server vorhanden sind.",
          },
        ],
      },
    },
  },
  {
    id: "5",
    name: "Banking System",
    slug: "banking-system",
    description:
      "Vollständiges Banking Script mit ATMs, Online-Banking, Überweisungen und Kontoverwaltung. Modernes UI und einfache Integration.",
    shortDescription: "Komplettes Banking mit Online-Überweisungen",
    category: "QBCore",
    version: "1.3.0",
    lastUpdate: "2024-01-12",
    downloads: 720,
    features: [
      "ATM System",
      "Online Banking UI",
      "Überweisungen",
      "Kontoauszüge",
      "Mehrere Konten",
      "Admin Funktionen",
    ],
    changelog: [
      "v1.3.0 - Kontoauszüge Feature",
      "v1.2.0 - Multi-Account Support",
      "v1.1.0 - UI Improvements",
      "v1.0.0 - Initial Release",
    ],
    installation: [
      "Script in resources Ordner kopieren",
      "ensure banking_system in server.cfg hinzufügen",
      "SQL Datei importieren",
      "ATM Locations konfigurieren",
    ],
    images: ["/scripts/bank-1.jpg", "/scripts/bank-2.jpg"],
    githubUrl: "https://github.com/example/banking-system",
    docs: {
      description: {
        title: "Was ist Banking System?",
        sections: [
          {
            title: "Überblick",
            content:
              "Das Banking System ist eine vollständige Banking-Lösung für FiveM Server. Spieler können Konten eröffnen, Geld überweisen, ATMs nutzen und ihr Konto verwalten.",
          },
          {
            title: "Features",
            content:
              "ATM Netzwerk im ganzen Server, Online-Banking über Handys oder Terminals, Sichere Überweisungen, Kontoauszüge und vollständiges Admin-Management.",
          },
        ],
      },
      configuration: {
        title: "Konfiguration",
        sections: [
          {
            title: "ATM Standorte",
            content:
              "Platziere ATMs an verschiedenen Orten im Server.",
            code: `Config.ATMs = {
  {
    location = vec3(147.36, -1044.52, 29.37),
    heading = 340.0,
    label = "Pillbox Medical ATM"
  },
  {
    location = vec3(-351.84, -49.74, 49.04),
    heading = 0.0,
    label = "Bank ATM Downtown"
  }
}`,
            codeLanguage: "lua",
          },
          {
            title: "Gebühren",
            content:
              "Konfiguriere Überweisungsgebühren und Abhebungsgebühren nach Belieben.",
          },
        ],
      },
      usage: {
        title: "Verwendung",
        sections: [
          {
            title: "ATM nutzen",
            content:
              "Spieler können ATMs benutzen um Geld abzuheben oder ihre Balance zu prüfen.",
          },
          {
            title: "Überweisungen",
            content:
              "Mit /transfer [spieler] [betrag] können Spieler Geld an andere transferieren. Das System prüft Gebühren und Balance automatisch.",
          },
        ],
      },
      troubleshooting: {
        title: "Support",
        sections: [
          {
            title: "ATM antwortet nicht",
            content:
              "Prüfe ob der ATM in den Config Koordinaten wirklich spawnt und die Datenbank verbunden ist.",
          },
        ],
      },
    },
  },
  {
    id: "6",
    name: "Housing System",
    slug: "housing-system",
    description:
      "Immobilien-System mit Kauf, Miete, Einrichtung und Schlüsselvergabe. Unterstützt Apartments und Häuser mit individuellem Interior.",
    shortDescription: "Housing mit Kauf, Miete und Einrichtung",
    category: "ESX",
    version: "2.0.0",
    lastUpdate: "2024-01-08",
    downloads: 950,
    features: [
      "Kauf & Miete",
      "Einrichtungs-System",
      "Schlüsselvergabe",
      "Stash pro Haus",
      "Garage Integration",
      "Makler Job",
    ],
    changelog: [
      "v2.0.0 - Neues Einrichtungs-System",
      "v1.5.0 - Makler Job hinzugefügt",
      "v1.2.0 - Garage Integration",
      "v1.0.0 - Initial Release",
    ],
    installation: [
      "Script in resources Ordner kopieren",
      "ensure housing_system in server.cfg hinzufügen",
      "SQL Datei importieren",
      "Häuser und Interiors konfigurieren",
    ],
    images: ["/scripts/housing-1.jpg", "/scripts/housing-2.jpg"],
    githubUrl: "https://github.com/example/housing-system",
    docs: {
      description: {
        title: "Was ist Housing System?",
        sections: [
          {
            title: "Überblick",
            content:
              "Housing System bietet ein komplettes Immobilien-Management für Spieler. Sie können Häuser oder Apartments kaufen oder mieten, diese einrichten und Schlüssel mit anderen teilen.",
          },
          {
            title: "Features",
            content:
              "Kauf und Miet-Optionen, umfangreiches Einrichtungssystem, Schlüsselverwaltung, Stash pro Immobilie, Garage Integration und Makler-Job für Management.",
          },
        ],
      },
      configuration: {
        title: "Konfiguration",
        sections: [
          {
            title: "Häuser definieren",
            content:
              "Definiere Häuser mit Position, Interior und Preis in der Config.",
            code: `Config.Houses = {
  {
    id = 1,
    label = "Small Apartment Downtown",
    coords = vec3(265.4, -349.5, 44.92),
    interior = "apt_1",
    price = 150000,
    type = "apartment"
  },
  {
    id = 2,
    label = "Medium House Vinewood",
    coords = vec3(-625.18, 42.37, 97.27),
    interior = "house_1",
    price = 350000,
    type = "house"
  }
}`,
            codeLanguage: "lua",
          },
        ],
      },
      usage: {
        title: "Verwendung",
        sections: [
          {
            title: "Haus kaufen",
            content:
              "Spieler können mit /buyhouse ein Haus kaufen wenn es verfügbar ist. Der Kaufpreis wird vom Konto abgezogen.",
          },
          {
            title: "Einrichtung",
            content:
              "Mit /furnituredisplay können Spieler ihr Haus einrichten und Möbel platzieren. Der Makler kann bei der Verwaltung helfen.",
          },
          {
            title: "Schlüssel teilen",
            content:
              "Mit /givehousequey [spieler] gibst du anderen Spielern Zugang zu deinem Haus.",
          },
        ],
      },
      troubleshooting: {
        title: "Support",
        sections: [
          {
            title: "Haus wird nicht angezeigt",
            content:
              "Prüfe ob die Koordinaten korrekt sind und die SQL Datei importiert wurde. Verwende /reloadhouses um die Config neu zu laden.",
          },
        ],
      },
    },
  },
];

export const faqData = [
  {
    question: "Wie erhalte ich die Scripts?",
    answer:
      "Alle unsere Scripts sind kostenlos und Open Source. Du kannst sie direkt von unserer Website herunterladen oder über GitHub clonen. Nach dem Download findest du eine README mit Installationsanweisungen.",
  },
  {
    question: "Welche Frameworks werden unterstützt?",
    answer:
      "Wir bieten Scripts für ESX, QBCore und Standalone an. Jedes Script ist klar kategorisiert, sodass du schnell findest, was zu deinem Server passt. Einige Scripts unterstützen mehrere Frameworks.",
  },
  {
    question: "Gibt es Updates für die Scripts?",
    answer:
      "Ja, alle Scripts werden regelmäßig aktualisiert. Als Open Source Projekt kannst du Updates über GitHub verfolgen, Issues melden und sogar selbst zur Entwicklung beitragen.",
  },
  {
    question: "Wo bekomme ich Support?",
    answer:
      "Support erhältst du über unseren Discord Server. Dort kannst du Fragen stellen, Bugs melden und dich mit anderen Nutzern austauschen. Die Community hilft sich gegenseitig.",
  },
  {
    question: "Kann ich die Scripts modifizieren?",
    answer:
      "Absolut! Alle Scripts sind Open Source unter der MIT Lizenz. Du kannst sie frei modifizieren, anpassen und für deinen Server optimieren. Wir freuen uns auch über Pull Requests.",
  },
  {
    question: "Sind die Scripts performance-optimiert?",
    answer:
      "Ja, Performance ist uns sehr wichtig. Alle Scripts werden mit Fokus auf minimalen Ressourcenverbrauch entwickelt. Die Resmon-Werte findest du in der jeweiligen Dokumentation.",
  },
];
