/* ============================================================
   Themen-Register – die Liste aller Grammatik-Themen.
   index.html baut daraus die Übersicht, uebung.html lädt damit
   das richtige Quiz (über ?id=NN in der Adresse).

   Pro Thema:
     id    Nummer (wie in der Liste, 1–41)
     title englischer Themen-Name
     group Schublade für die Übersicht
     file  Name der Daten-Datei in js/data/ – oder null, wenn
           das Thema noch keine Übungen hat ("in Arbeit").
   Ein Thema wird automatisch "fertig", sobald file gesetzt ist.
   ============================================================ */

window.TOPIC_GROUPS = [
  { key: "woerter",  name: "Wörter & Wortarten" },
  { key: "pronomen", name: "Pronomen" },
  { key: "verben",   name: "Verben & Zeiten" },
  { key: "satz",     name: "Sätze & Struktur" }
];

window.TOPICS = [
  // --- Wörter & Wortarten ---
  { id: 1,  title: "Nouns",                         group: "woerter",  file: null },
  { id: 2,  title: "Plural forms",                  group: "woerter",  file: null },
  { id: 3,  title: "Gerund",                        group: "woerter",  file: null },
  { id: 4,  title: "Articles",                      group: "woerter",  file: null },
  { id: 5,  title: "Adjectives",                    group: "woerter",  file: null },
  { id: 6,  title: "Adverbs",                       group: "woerter",  file: null },
  { id: 7,  title: "Comparisons",                   group: "woerter",  file: null },
  { id: 15, title: "Prepositions",                  group: "woerter",  file: null },
  { id: 16, title: "Phrasal verbs",                 group: "woerter",  file: null },
  { id: 17, title: "Conjunctions",                  group: "woerter",  file: null },

  // --- Pronomen ---
  { id: 8,  title: "Personal pronouns",             group: "pronomen", file: null },
  { id: 9,  title: "Demonstrative pronouns",        group: "pronomen", file: null },
  { id: 10, title: "Possessive pronouns",           group: "pronomen", file: null },
  { id: 11, title: "Indefinite pronouns",           group: "pronomen", file: null },
  { id: 12, title: "Relative pronouns and clauses", group: "pronomen", file: "12-relative.js" },
  { id: 13, title: "Reflexive pronouns",            group: "pronomen", file: null },
  { id: 14, title: "Question words",                group: "pronomen", file: null },

  // --- Verben & Zeiten ---
  { id: 18, title: "Auxiliary verbs",               group: "verben",   file: null },
  { id: 19, title: "Modal verbs",                   group: "verben",   file: null },
  { id: 20, title: "Verb conjugation",              group: "verben",   file: null },
  { id: 21, title: "Simple present",                group: "verben",   file: null },
  { id: 22, title: "Participles",                   group: "verben",   file: null },
  { id: 23, title: "Continuous form",               group: "verben",   file: null },
  { id: 24, title: "Future",                        group: "verben",   file: null },
  { id: 25, title: "Past tenses",                   group: "verben",   file: "25-past-tenses.js" },
  { id: 26, title: "Simple past",                   group: "verben",   file: null },
  { id: 27, title: "Present perfect",               group: "verben",   file: "27-present-perfect.js" },
  { id: 28, title: "Past perfect",                  group: "verben",   file: null },
  { id: 30, title: "Passive voice",                 group: "verben",   file: "30-passive.js" },
  { id: 31, title: "Imperative",                    group: "verben",   file: null },
  { id: 34, title: "Infinitive constructions",      group: "verben",   file: null },
  { id: 35, title: "Reported speech",               group: "verben",   file: "35-reported-speech.js" },

  // --- Sätze & Struktur ---
  { id: 29, title: "Conditional clauses",           group: "satz",     file: null },
  { id: 32, title: "Case",                          group: "satz",     file: null },
  { id: 33, title: "Expressions of time and place", group: "satz",     file: null },
  { id: 36, title: "Negation",                      group: "satz",     file: null },
  { id: 37, title: "Word order",                    group: "satz",     file: null },
  { id: 38, title: "Questions",                     group: "satz",     file: null },
  { id: 39, title: "Short answer",                  group: "satz",     file: null },
  { id: 40, title: "Spelling",                      group: "satz",     file: null },
  { id: 41, title: "Contractions",                  group: "satz",     file: null }
];
