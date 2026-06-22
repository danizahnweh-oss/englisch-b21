/* Thema 34: Infinitive constructions – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Infinitive constructions",
  "intro": "Infinitivkonstruktionen sind ein zentrales Thema im Englischen: Sie zeigen, wann ein Verb mit \"to\" steht, wann der reine Infinitiv (ohne \"to\") verwendet wird und wie man Infinitive nach Adjektiven, Fragewörtern oder bestimmten Verben einsetzt.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Der <b>to-Infinitiv</b> drückt oft Absicht oder Zweck aus: <span class=\"ex\">I went out to buy some milk.</span></li><li>Nach <b>Modalverben</b> und nach <b>let, make, see, hear</b> steht der <b>reine Infinitiv</b> (ohne \"to\"): <span class=\"ex\">She made him wait.</span></li><li>Viele Verben wie <b>want, decide, hope, promise, would like</b> werden mit dem to-Infinitiv verbunden: <span class=\"ex\">They decided to stay at home.</span></li><li>Nach <b>Adjektiven</b> und nach <b>too / enough</b> folgt der to-Infinitiv: <span class=\"ex\">It's hard to learn this. He is old enough to drive.</span></li><li>Nach <b>Fragewörtern</b> (what, how, where) kann ebenfalls ein to-Infinitiv stehen: <span class=\"ex\">I don't know what to do.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct form: \"We decided ___ at home because of the rain.\"",
      "optionen": [
        "to stay",
        "stay",
        "staying"
      ],
      "richtig": 0,
      "erklaerung": "Nach \"decide\" steht der to-Infinitiv: \"decided to stay\"."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: \"My parents let me ___ out last night.\"",
      "optionen": [
        "to go",
        "go",
        "going"
      ],
      "richtig": 1,
      "erklaerung": "Nach \"let\" steht der reine Infinitiv ohne \"to\": \"let me go\"."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: \"This box is too heavy ___.\"",
      "optionen": [
        "to lift",
        "for lifting",
        "lift"
      ],
      "richtig": 0,
      "erklaerung": "Nach \"too + Adjektiv\" folgt der to-Infinitiv: \"too heavy to lift\"."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: \"I heard someone ___ my name in the crowd.\"",
      "optionen": [
        "to call",
        "call",
        "to calling"
      ],
      "richtig": 1,
      "erklaerung": "Nach Wahrnehmungsverben wie \"hear\" steht der reine Infinitiv: \"heard someone call\"."
    },
    {
      "type": "gap",
      "frage": "She went to the station ___ (meet) her friend.",
      "richtig": [
        "to meet"
      ],
      "erklaerung": "Der to-Infinitiv drückt den Zweck aus: \"to meet her friend\"."
    },
    {
      "type": "gap",
      "frage": "He is old enough ___ (drive) a car now.",
      "richtig": [
        "to drive"
      ],
      "erklaerung": "Nach \"enough\" folgt der to-Infinitiv: \"old enough to drive\"."
    },
    {
      "type": "gap",
      "frage": "I don't know what ___ (say) to her.",
      "richtig": [
        "to say"
      ],
      "erklaerung": "Nach dem Fragewort \"what\" kann ein to-Infinitiv stehen: \"what to say\"."
    },
    {
      "type": "gap",
      "frage": "You should ___ (call) the doctor immediately.",
      "richtig": [
        "call"
      ],
      "erklaerung": "Nach Modalverben wie \"should\" steht der reine Infinitiv ohne \"to\": \"should call\"."
    },
    {
      "type": "transform",
      "frage": "Bilde einen Satz mit \"want to\": I / want / learn / Spanish.",
      "richtig": [
        "I want to learn Spanish.",
        "I want to learn Spanish"
      ],
      "erklaerung": "Nach \"want\" folgt der to-Infinitiv: \"want to learn\"."
    },
    {
      "type": "transform",
      "frage": "Forme um mit \"made him\": The teacher / make / him / repeat / the sentence.",
      "richtig": [
        "The teacher made him repeat the sentence.",
        "The teacher made him repeat the sentence"
      ],
      "erklaerung": "Nach \"make\" (jemanden zu etwas bringen) steht der reine Infinitiv: \"made him repeat\"."
    },
    {
      "type": "transform",
      "frage": "Verbinde die Sätze mit einem to-Infinitiv des Zwecks: \"She saved money. She wanted to buy a bike.\"",
      "richtig": [
        "She saved money to buy a bike.",
        "She saved money to buy a bike",
        "She saved money in order to buy a bike.",
        "She saved money in order to buy a bike"
      ],
      "erklaerung": "Der to-Infinitiv (oder \"in order to\") ersetzt den Zweck-Nebensatz: \"saved money to buy a bike\"."
    }
  ]
};
