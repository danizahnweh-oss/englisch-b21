/* Thema 14: Question words – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Question words",
  "intro": "Mit Fragewörtern (question words) leitest du W-Fragen ein, um gezielt nach Personen, Dingen, Zeit, Ort oder Grund zu fragen.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>Who</b> fragt nach Personen, <b>what</b> nach Dingen: <span class=\"ex\">Who is calling? What do you want?</span></li><li><b>Where</b> (Ort), <b>when</b> (Zeit), <b>why</b> (Grund), <b>how</b> (Art und Weise): <span class=\"ex\">Where do you live? Why are you late?</span></li><li>Nach dem Fragewort kommt meist ein <b>Hilfsverb</b> (do/does/did/is/are): <span class=\"ex\">When does the train leave?</span></li><li><b>Which</b> fragt nach einer Auswahl, <b>whose</b> nach dem Besitzer: <span class=\"ex\">Which colour do you like? Whose bag is this?</span></li><li>Bei <b>how</b> + Adjektiv/Adverb: <span class=\"ex\">How old are you? How much is it?</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "___ is your birthday? - It's in March.",
      "optionen": [
        "When",
        "Where",
        "Who"
      ],
      "richtig": 0,
      "erklaerung": "Nach einem Zeitpunkt (March) fragt man mit 'When'."
    },
    {
      "type": "mc",
      "frage": "___ do you go to school? - By bus.",
      "optionen": [
        "Why",
        "How",
        "What"
      ],
      "richtig": 1,
      "erklaerung": "Nach der Art und Weise (by bus) fragt man mit 'How'."
    },
    {
      "type": "mc",
      "frage": "___ bag is this? It looks expensive.",
      "optionen": [
        "Who",
        "Which",
        "Whose"
      ],
      "richtig": 2,
      "erklaerung": "'Whose' fragt nach dem Besitzer (wessen Tasche)."
    },
    {
      "type": "gap",
      "frage": "___ are you so tired today? - Because I didn't sleep well.",
      "richtig": [
        "Why"
      ],
      "erklaerung": "Die Antwort mit 'Because' zeigt, dass nach dem Grund gefragt wird: 'Why'."
    },
    {
      "type": "gap",
      "frage": "___ does she live? - In London.",
      "richtig": [
        "Where"
      ],
      "erklaerung": "Nach dem Ort (In London) fragt man mit 'Where'."
    },
    {
      "type": "gap",
      "frage": "___ много... ___ much is this T-shirt? - It's 15 pounds.",
      "richtig": [
        "How"
      ],
      "erklaerung": "Nach einem Preis fragt man mit 'How much'. Hier fehlt 'How'."
    },
    {
      "type": "gap",
      "frage": "___ is knocking at the door? - It's the postman.",
      "richtig": [
        "Who"
      ],
      "erklaerung": "Nach einer Person (the postman) fragt man mit 'Who'."
    },
    {
      "type": "transform",
      "frage": "Bilde die passende Frage zur Antwort: 'I want the red one.' (Frage nach der Auswahl mit 'which')",
      "richtig": [
        "Which one do you want?",
        "Which one do you want",
        "Which do you want?"
      ],
      "erklaerung": "'Which' fragt nach einer Auswahl; danach folgt das Hilfsverb 'do'."
    },
    {
      "type": "transform",
      "frage": "Bilde die passende Frage zur Antwort: 'They are watching a film.' (Frage nach der Tätigkeit mit 'what')",
      "richtig": [
        "What are they watching?",
        "What are they watching",
        "What are they doing?",
        "What are they doing"
      ],
      "erklaerung": "Nach der Tätigkeit/dem Ding fragt man mit 'What' + are + Subjekt + -ing."
    },
    {
      "type": "transform",
      "frage": "Bilde die passende Frage zur Antwort: 'She is 12 years old.' (Frage nach dem Alter)",
      "richtig": [
        "How old is she?",
        "How old is she"
      ],
      "erklaerung": "Nach dem Alter fragt man mit 'How old' + is + Subjekt."
    }
  ]
};
