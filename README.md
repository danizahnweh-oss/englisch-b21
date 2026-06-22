# Englisch B2.1 – Grammatik üben

Eine kleine, interaktive Lernseite für Englisch auf Niveau B2.1. Pro Thema gibt es
erst eine kurze Erklärung, dann spielerische Übungen mit Sofort-Feedback, Punkten,
Serien-Zähler und Abschluss-Auswertung. Reines HTML, CSS und JavaScript – kein
Server, keine Datenbank, kein Framework.

## Module

1. **Tenses** – Present Perfect vs. Past Simple, Verlaufsformen, Zukunft, since/for
2. **Passive & Reported Speech** – Passiv in allen Zeiten, indirekte Rede, say vs. tell
3. **Relativsätze & Konjunktionen** – who/which/that/whose, defining vs. non-defining,
   although/despite/because of

## Lokal öffnen

Ordner in VS Code öffnen und `index.html` mit der Erweiterung **Live Server** starten
(Rechtsklick → „Open with Live Server"). Alternativ die Datei direkt im Browser öffnen.

## Aufbau

```
englisch-b21/
├── index.html                  Startseite mit Themen-Übersicht
├── tenses.html                 Modul 1
├── passive-reported.html       Modul 2
├── relative-conjunctions.html  Modul 3
├── css/style.css               gemeinsames Aussehen
└── js/
    ├── quiz.js                 Übungslogik (einmal, für alle Module)
    └── data/                   Inhalte (Fragen & Erklärungen) je Modul
        ├── tenses.js
        ├── passive.js
        └── relative.js
```

Die wichtigste Idee: Die **Logik** (`quiz.js`) ist von den **Inhalten** (`js/data/*.js`)
getrennt. Eine neue Übung ist nur ein neuer Eintrag in der passenden Daten-Datei –
die Logik wird dafür nie angefasst.

## Übungstypen

- **Multiple Choice** – drei Optionen, eine richtig
- **Lückentext** – richtige Form eintippen
- **Umformen** – Satz umschreiben (z. B. Aktiv → Passiv)
