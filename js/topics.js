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
  { id: 1,  title: "Nouns",                         group: "woerter",  file: "1-nouns.js" },
  { id: 2,  title: "Plural forms",                  group: "woerter",  file: "2-plural-forms.js" },
  { id: 3,  title: "Gerund",                        group: "woerter",  file: "3-gerund.js" },
  { id: 4,  title: "Articles",                      group: "woerter",  file: "4-articles.js" },
  { id: 5,  title: "Adjectives",                    group: "woerter",  file: "5-adjectives.js" },
  { id: 6,  title: "Adverbs",                       group: "woerter",  file: "6-adverbs.js" },
  { id: 7,  title: "Comparisons",                   group: "woerter",  file: "7-comparisons.js" },
  { id: 15, title: "Prepositions",                  group: "woerter",  file: "15-prepositions.js" },
  { id: 16, title: "Phrasal verbs",                 group: "woerter",  file: "16-phrasal-verbs.js" },
  { id: 17, title: "Conjunctions",                  group: "woerter",  file: "17-conjunctions.js" },

  // --- Pronomen ---
  { id: 8,  title: "Personal pronouns",             group: "pronomen", file: "8-personal-pronouns.js" },
  { id: 9,  title: "Demonstrative pronouns",        group: "pronomen", file: "9-demonstrative-pronouns.js" },
  { id: 10, title: "Possessive pronouns",           group: "pronomen", file: "10-possessive-pronouns.js" },
  { id: 11, title: "Indefinite pronouns",           group: "pronomen", file: "11-indefinite-pronouns.js" },
  { id: 12, title: "Relative pronouns and clauses", group: "pronomen", file: "12-relative.js" },
  { id: 13, title: "Reflexive pronouns",            group: "pronomen", file: "13-reflexive-pronouns.js" },
  { id: 14, title: "Question words",                group: "pronomen", file: "14-question-words.js" },

  // --- Verben & Zeiten ---
  { id: 18, title: "Auxiliary verbs",               group: "verben",   file: "18-auxiliary-verbs.js" },
  { id: 19, title: "Modal verbs",                   group: "verben",   file: "19-modal-verbs.js" },
  { id: 20, title: "Verb conjugation",              group: "verben",   file: "20-verb-conjugation.js" },
  { id: 21, title: "Simple present",                group: "verben",   file: "21-simple-present.js" },
  { id: 22, title: "Participles",                   group: "verben",   file: "22-participles.js" },
  { id: 23, title: "Continuous form",               group: "verben",   file: "23-continuous-form.js" },
  { id: 24, title: "Future",                        group: "verben",   file: "24-future.js" },
  { id: 25, title: "Past tenses",                   group: "verben",   file: "25-past-tenses.js" },
  { id: 26, title: "Simple past",                   group: "verben",   file: "26-simple-past.js" },
  { id: 27, title: "Present perfect",               group: "verben",   file: "27-present-perfect.js" },
  { id: 28, title: "Past perfect",                  group: "verben",   file: "28-past-perfect.js" },
  { id: 30, title: "Passive voice",                 group: "verben",   file: "30-passive.js" },
  { id: 31, title: "Imperative",                    group: "verben",   file: "31-imperative.js" },
  { id: 34, title: "Infinitive constructions",      group: "verben",   file: "34-infinitive-constructions.js" },
  { id: 35, title: "Reported speech",               group: "verben",   file: "35-reported-speech.js" },

  // --- Sätze & Struktur ---
  { id: 29, title: "Conditional clauses",           group: "satz",     file: "29-conditional-clauses.js" },
  { id: 32, title: "Case",                          group: "satz",     file: "32-case.js" },
  { id: 33, title: "Expressions of time and place", group: "satz",     file: "33-expressions-of-time-and-place.js" },
  { id: 36, title: "Negation",                      group: "satz",     file: "36-negation.js" },
  { id: 37, title: "Word order",                    group: "satz",     file: "37-word-order.js" },
  { id: 38, title: "Questions",                     group: "satz",     file: "38-questions.js" },
  { id: 39, title: "Short answer",                  group: "satz",     file: "39-short-answer.js" },
  { id: 40, title: "Spelling",                      group: "satz",     file: "40-spelling.js" },
  { id: 41, title: "Contractions",                  group: "satz",     file: "41-contractions.js" }
];
