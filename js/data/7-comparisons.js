/* Thema 7: Comparisons – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Comparisons",
  "intro": "Mit Comparisons (Vergleichen) drückst du auf Englisch aus, dass etwas größer, kleiner, besser oder genauso ist wie etwas anderes.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Kurze Adjektive bekommen im <b>Komparativ</b> die Endung <b>-er</b> und im <b>Superlativ</b> <b>-est</b>: <span class=\"ex\">cold – colder – the coldest</span></li><li>Lange Adjektive (2+ Silben) nutzen <b>more</b> und <b>most</b>: <span class=\"ex\">expensive – more expensive – the most expensive</span></li><li>Im Vergleich folgt nach dem Komparativ <b>than</b>: <span class=\"ex\">She is taller than me.</span></li><li>Gleichheit drückst du mit <b>as ... as</b> aus, Verneinung mit <b>not as ... as</b>: <span class=\"ex\">He is as fast as his brother.</span></li><li>Unregelmäßige Formen musst du lernen: <b>good–better–best</b>, <b>bad–worse–worst</b>, <b>far–further–furthest</b>: <span class=\"ex\">This is the best day ever.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Which sentence is correct?",
      "optionen": [
        "My house is bigger than yours.",
        "My house is more big than yours.",
        "My house is biggest than yours."
      ],
      "richtig": 0,
      "erklaerung": "\"big\" ist ein kurzes Adjektiv und bildet den Komparativ mit -er (der Endkonsonant wird verdoppelt): bigger. Nach dem Komparativ steht \"than\"."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: This is the ___ film I have ever seen.",
      "optionen": [
        "more interesting",
        "most interesting",
        "interestingest"
      ],
      "richtig": 1,
      "erklaerung": "\"interesting\" ist ein langes Adjektiv. Der Superlativ wird mit \"most\" gebildet: the most interesting."
    },
    {
      "type": "mc",
      "frage": "Which sentence uses the irregular comparison correctly?",
      "optionen": [
        "Today the weather is worse than yesterday.",
        "Today the weather is badder than yesterday.",
        "Today the weather is more bad than yesterday."
      ],
      "richtig": 0,
      "erklaerung": "\"bad\" ist unregelmäßig: bad – worse – worst. \"badder\" und \"more bad\" gibt es nicht."
    },
    {
      "type": "gap",
      "frage": "A car is ___ than a bike. (fast)",
      "richtig": [
        "faster"
      ],
      "erklaerung": "\"fast\" ist kurz und bildet den Komparativ mit -er: faster. Danach folgt \"than\"."
    },
    {
      "type": "gap",
      "frage": "Mount Everest is the ___ mountain in the world. (high)",
      "richtig": [
        "highest"
      ],
      "erklaerung": "Superlativ von \"high\": the highest. Kurze Adjektive bekommen die Endung -est."
    },
    {
      "type": "gap",
      "frage": "My new phone is ___ expensive ___ my old one – they cost the same. (gleich teuer: as ... as)",
      "richtig": [
        "as ... as",
        "as...as",
        "as as"
      ],
      "erklaerung": "Gleichheit drückt man mit \"as + Adjektiv + as\" aus: as expensive as."
    },
    {
      "type": "gap",
      "frage": "She speaks English ___ than her sister. (good)",
      "richtig": [
        "better"
      ],
      "erklaerung": "\"good\" ist unregelmäßig: good – better – best. Der Komparativ ist \"better\"."
    },
    {
      "type": "transform",
      "frage": "Bilde den Komparativ mit \"than\": Tom is tall. John is taller. (Schreibe einen Satz: Tom ... John.)",
      "richtig": [
        "John is taller than Tom.",
        "John is taller than Tom"
      ],
      "erklaerung": "Komparativ von \"tall\" ist \"taller\", danach folgt \"than\": John is taller than Tom."
    },
    {
      "type": "transform",
      "frage": "Schreibe den Satz im Superlativ: \"This book is interesting.\" -> (the / interesting / book / in the library)",
      "richtig": [
        "This is the most interesting book in the library.",
        "This is the most interesting book in the library"
      ],
      "erklaerung": "Langes Adjektiv: Superlativ mit \"the most\": the most interesting book."
    },
    {
      "type": "transform",
      "frage": "Drücke Gleichheit aus mit \"as ... as\": \"Anna and Lisa are 12 years old.\" (Anna / old / Lisa)",
      "richtig": [
        "Anna is as old as Lisa.",
        "Anna is as old as Lisa"
      ],
      "erklaerung": "Bei gleichem Alter nutzt man \"as old as\": Anna is as old as Lisa."
    }
  ]
};
