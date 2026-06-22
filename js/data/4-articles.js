/* Thema 4: Articles – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Articles",
  "intro": "Artikel (a, an, the oder kein Artikel) zeigen an, ob ein Nomen unbestimmt, bestimmt oder allgemein gemeint ist.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Den unbestimmten Artikel <b>a</b> nutzt du vor Konsonant-Lauten, <b>an</b> vor Vokal-Lauten: <span class=\"ex\">a book, an apple, an hour, a university</span>.</li><li>Der bestimmte Artikel <b>the</b> steht, wenn etwas <b>Bestimmtes</b> oder schon Bekanntes gemeint ist: <span class=\"ex\">the sun, the book you gave me</span>.</li><li><b>Kein Artikel</b> steht bei allgemeinen Pluralen, unzählbaren Nomen und den meisten Ländern/Namen: <span class=\"ex\">I like music. Dogs are loyal. She lives in Germany.</span></li><li>Wichtig ist der <b>Laut</b>, nicht der Buchstabe: <span class=\"ex\">an MP, a euro, an honest man</span>.</li><li><b>the</b> kommt bei Einzigartigem, Superlativen und Instrumenten: <span class=\"ex\">the best, the moon, play the piano</span>.</li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct article: She wants to become ___ engineer.",
      "optionen": [
        "a",
        "an",
        "the"
      ],
      "richtig": 1,
      "erklaerung": "\"Engineer\" beginnt mit einem Vokal-Laut, deshalb \"an\"."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: We waited for ___ hour at the station.",
      "optionen": [
        "a",
        "an",
        "the"
      ],
      "richtig": 1,
      "erklaerung": "Das \"h\" in \"hour\" ist stumm, der Laut ist ein Vokal, deshalb \"an\"."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: He studies at ___ university in London.",
      "optionen": [
        "a",
        "an",
        "the"
      ],
      "richtig": 0,
      "erklaerung": "\"University\" wird wie \"juniversity\" ausgesprochen (j-Laut, Konsonant), deshalb \"a\"."
    },
    {
      "type": "gap",
      "frage": "Look at ___ moon tonight, it is so bright!",
      "richtig": [
        "the"
      ],
      "erklaerung": "Der Mond ist einzigartig, deshalb steht der bestimmte Artikel \"the\"."
    },
    {
      "type": "gap",
      "frage": "I bought ___ new phone yesterday.",
      "richtig": [
        "a"
      ],
      "erklaerung": "Ein unbestimmtes, zählbares Nomen mit Konsonant-Laut, deshalb \"a\"."
    },
    {
      "type": "gap",
      "frage": "My sister can play ___ piano very well.",
      "richtig": [
        "the"
      ],
      "erklaerung": "Vor Musikinstrumenten steht im Englischen \"the\": play the piano."
    },
    {
      "type": "gap",
      "frage": "They don't eat ___ meat because they are vegetarians. (kein Artikel? schreibe '-' )",
      "richtig": [
        "-",
        "kein",
        "no",
        "nichts"
      ],
      "erklaerung": "\"Meat\" ist hier allgemein und unzählbar gemeint, deshalb kein Artikel."
    },
    {
      "type": "gap",
      "frage": "Paris is ___ capital of France.",
      "richtig": [
        "the"
      ],
      "erklaerung": "Es gibt nur eine Hauptstadt Frankreichs, also etwas Einzigartiges: \"the\"."
    },
    {
      "type": "transform",
      "frage": "Setze den passenden Artikel ein (a/an/the) und schreibe den ganzen Satz: She is ___ honest person.",
      "richtig": [
        "She is an honest person.",
        "She is an honest person"
      ],
      "erklaerung": "Das \"h\" in \"honest\" ist stumm, der Laut ist ein Vokal, deshalb \"an\"."
    },
    {
      "type": "transform",
      "frage": "Bilde den Satz mit dem richtigen Artikel (a/an/the): This is ___ best film I have ever seen.",
      "richtig": [
        "This is the best film I have ever seen.",
        "This is the best film I have ever seen"
      ],
      "erklaerung": "Vor Superlativen (best) steht immer der bestimmte Artikel \"the\"."
    },
    {
      "type": "transform",
      "frage": "Ergänze den Artikel (a/an) und schreibe den Satz: He gave me ___ umbrella.",
      "richtig": [
        "He gave me an umbrella.",
        "He gave me an umbrella"
      ],
      "erklaerung": "\"Umbrella\" beginnt mit einem Vokal-Laut, deshalb \"an\"."
    }
  ]
};
