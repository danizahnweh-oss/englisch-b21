/* Thema 39: Short answer – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Short answer",
  "intro": "Short answers sind kurze Antworten auf Ja/Nein-Fragen, bei denen man das Hilfsverb wiederholt statt den ganzen Satz.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Short answers wiederholen das <b>Hilfsverb</b> aus der Frage, nicht das Vollverb: <span class=\"ex\">Do you like tea? - Yes, I do.</span></li><li>Bei <b>positiven</b> Kurzantworten benutzt man <b>keine Kurzform</b>: <span class=\"ex\">Yes, she is.</span> (nicht \"she's\")</li><li>Bei <b>negativen</b> Kurzantworten benutzt man die <b>Kurzform</b> mit not: <span class=\"ex\">No, he doesn't.</span></li><li>Mit <b>be</b> antwortet man mit be, mit <b>do/does/did</b> bei einfachen Vollverben, mit <b>can/will/have</b> bei Modal- bzw. Perfektformen: <span class=\"ex\">Can you swim? - Yes, I can.</span></li><li>Das <b>Pronomen</b> passt sich an: aus you wird oft I, aus your friend wird he/she: <span class=\"ex\">Is your sister here? - Yes, she is.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Do you live in London? - Yes, I ___.",
      "optionen": [
        "do",
        "live",
        "am"
      ],
      "richtig": 0,
      "erklaerung": "Die Frage mit 'Do' wird in der Kurzantwort mit dem Hilfsverb 'do' beantwortet, nicht mit dem Vollverb."
    },
    {
      "type": "mc",
      "frage": "Is she your teacher? - No, she ___.",
      "optionen": [
        "doesn't",
        "isn't",
        "not"
      ],
      "richtig": 1,
      "erklaerung": "Die Frage mit 'Is' wird mit 'be' beantwortet. Verneint heißt das 'isn't'."
    },
    {
      "type": "mc",
      "frage": "Can Tom play the guitar? - Yes, he ___.",
      "optionen": [
        "can",
        "cans",
        "does"
      ],
      "richtig": 0,
      "erklaerung": "Bei Fragen mit dem Modalverb 'can' wiederholt man 'can'. Modalverben bekommen kein -s."
    },
    {
      "type": "gap",
      "frage": "Does he work here? - No, he ___. (verneinte Kurzantwort)",
      "richtig": [
        "doesn't",
        "does not"
      ],
      "erklaerung": "Frage mit 'Does' -> Kurzantwort mit 'does'. Verneint: doesn't / does not."
    },
    {
      "type": "gap",
      "frage": "Are they at home? - Yes, they ___. (positive Kurzantwort)",
      "richtig": [
        "are"
      ],
      "erklaerung": "Frage mit 'Are' -> Kurzantwort mit 'are'. In positiven Kurzantworten benutzt man keine Kurzform."
    },
    {
      "type": "gap",
      "frage": "Did you see the film? - No, I ___. (verneinte Kurzantwort)",
      "richtig": [
        "didn't",
        "did not"
      ],
      "erklaerung": "Frage im Past mit 'Did' -> Kurzantwort mit 'did'. Verneint: didn't / did not."
    },
    {
      "type": "gap",
      "frage": "Have you finished your homework? - Yes, I ___. (positive Kurzantwort)",
      "richtig": [
        "have"
      ],
      "erklaerung": "Im Present Perfect mit 'Have' antwortet man mit 'have'. Positiv ohne Kurzform."
    },
    {
      "type": "gap",
      "frage": "Will it rain tomorrow? - No, it ___. (verneinte Kurzantwort)",
      "richtig": [
        "won't",
        "will not"
      ],
      "erklaerung": "Frage mit 'Will' -> Kurzantwort mit 'will'. Verneinte Kurzform von will not ist won't."
    },
    {
      "type": "transform",
      "frage": "Antworte mit einer positiven Short Answer: 'Do your parents speak English?'",
      "richtig": [
        "Yes, they do.",
        "Yes, they do"
      ],
      "erklaerung": "'Do' + 'your parents' -> Kurzantwort 'Yes, they do.' Das Pronomen für 'parents' ist 'they'."
    },
    {
      "type": "transform",
      "frage": "Antworte mit einer verneinten Short Answer: 'Is your brother a doctor?'",
      "richtig": [
        "No, he isn't.",
        "No, he isn't",
        "No, he is not.",
        "No, he is not",
        "No, he's not.",
        "No, he's not"
      ],
      "erklaerung": "'Is' + 'your brother' -> 'No, he isn't.' Das Pronomen für 'brother' ist 'he'."
    },
    {
      "type": "transform",
      "frage": "Antworte mit einer positiven Short Answer: 'Can you help me?'",
      "richtig": [
        "Yes, I can.",
        "Yes, I can"
      ],
      "erklaerung": "'Can you' -> 'Yes, I can.' Aus 'you' wird 'I', das Modalverb 'can' wird wiederholt."
    }
  ]
};
