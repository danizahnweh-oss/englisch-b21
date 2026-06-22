/* Thema 21: Simple present – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Simple present",
  "intro": "Das Simple Present beschreibt Gewohnheiten, Fakten und regelmäßige Handlungen.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Wir nutzen das <b>Simple Present</b> für <b>Gewohnheiten</b>, Fakten und Routinen: <span class=\"ex\">I play tennis every Sunday.</span></li><li>In der <b>3. Person Singular</b> (he/she/it) hängt man ein <b>-s</b> an: <span class=\"ex\">She works in London.</span></li><li>Verneinung und Frage bildet man mit <b>do</b> / <b>does</b>: <span class=\"ex\">He doesn't like coffee.</span> <span class=\"ex\">Do you speak English?</span></li><li>Nach <b>does</b> und <b>doesn't</b> steht das Verb ohne -s (Grundform): <span class=\"ex\">She doesn't work here.</span></li><li>Typische <b>Signalwörter</b>: always, usually, often, sometimes, never, every day: <span class=\"ex\">They never watch TV.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct form: My sister ___ to school by bus every morning.",
      "optionen": [
        "go",
        "goes",
        "going"
      ],
      "richtig": 1,
      "erklaerung": "Bei der 3. Person Singular (my sister = she) hängt man -s an: goes."
    },
    {
      "type": "mc",
      "frage": "Which sentence is correct?",
      "optionen": [
        "He don't like fish.",
        "He doesn't likes fish.",
        "He doesn't like fish."
      ],
      "richtig": 2,
      "erklaerung": "Bei he/she/it nutzt man 'doesn't', und danach steht das Verb in der Grundform (like, nicht likes)."
    },
    {
      "type": "mc",
      "frage": "Pick the right question form: ___ they live in Berlin?",
      "optionen": [
        "Do",
        "Does",
        "Are"
      ],
      "richtig": 0,
      "erklaerung": "Bei 'they' (Plural) bildet man die Frage mit 'Do'."
    },
    {
      "type": "gap",
      "frage": "Tom ___ (work) in a hospital. He is a nurse.",
      "richtig": [
        "works"
      ],
      "erklaerung": "Tom = he, deshalb 3. Person Singular mit -s: works."
    },
    {
      "type": "gap",
      "frage": "We usually ___ (have) dinner at seven o'clock.",
      "richtig": [
        "have"
      ],
      "erklaerung": "Bei 'we' bleibt das Verb in der Grundform: have."
    },
    {
      "type": "gap",
      "frage": "I ___ understand this question. Can you help me? (Verneinung von 'do')",
      "richtig": [
        "don't",
        "do not"
      ],
      "erklaerung": "Bei 'I' verneint man mit 'don't' (Langform: do not)."
    },
    {
      "type": "gap",
      "frage": "She ___ like spiders at all. (Verneinung mit 'does')",
      "richtig": [
        "doesn't",
        "does not"
      ],
      "erklaerung": "Bei 'she' verneint man mit 'doesn't' (Langform: does not); das Verb 'like' bleibt in der Grundform."
    },
    {
      "type": "gap",
      "frage": "___ your father drink tea in the morning? (Frage mit 'do/does')",
      "richtig": [
        "Does",
        "does"
      ],
      "erklaerung": "'Your father' = he, deshalb bildet man die Frage mit 'Does'."
    },
    {
      "type": "transform",
      "frage": "Verneine den Satz: She speaks French.",
      "richtig": [
        "She doesn't speak French.",
        "She does not speak French."
      ],
      "erklaerung": "Mit 'doesn't/does not' verneinen; danach steht 'speak' ohne -s."
    },
    {
      "type": "transform",
      "frage": "Mach eine Frage daraus: They play football on Saturdays.",
      "richtig": [
        "Do they play football on Saturdays?",
        "Do they play football on Saturdays"
      ],
      "erklaerung": "Bei 'they' beginnt die Frage mit 'Do' und das Verb bleibt in der Grundform."
    },
    {
      "type": "transform",
      "frage": "Setze in die 3. Person Singular um (he): I go to bed early.",
      "richtig": [
        "He goes to bed early.",
        "He goes to bed early"
      ],
      "erklaerung": "Aus 'go' wird in der 3. Person Singular 'goes' (Verben auf -o bekommen -es)."
    }
  ]
};
