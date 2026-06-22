/* Thema 33: Expressions of time and place – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Expressions of time and place",
  "intro": "Im Englischen drücken bestimmte Präpositionen und Wörter aus, wann und wo etwas passiert.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>at</b> für genaue Zeitpunkte und Plätze: <span class=\"ex\">at 6 o'clock, at night, at the station</span></li><li><b>on</b> für Tage, Daten und Oberflächen: <span class=\"ex\">on Monday, on July 5th, on the table</span></li><li><b>in</b> für längere Zeiträume und geschlossene Räume/Gebiete: <span class=\"ex\">in May, in 2020, in the morning, in London</span></li><li>Orts-Präpositionen: <b>in</b> (innerhalb), <b>at</b> (Punkt), <b>on</b> (auf einer Fläche): <span class=\"ex\">in the box, at the door, on the wall</span></li><li>Feste Wendungen merken: <span class=\"ex\">at the weekend, at noon, in the evening, on time</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"The meeting starts ___ 9 o'clock.\"",
      "optionen": [
        "at",
        "on",
        "in"
      ],
      "richtig": 0,
      "erklaerung": "Bei genauen Uhrzeiten steht immer 'at': at 9 o'clock."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"My birthday is ___ July.\"",
      "optionen": [
        "at",
        "on",
        "in"
      ],
      "richtig": 2,
      "erklaerung": "Bei Monaten (ohne genaues Datum) verwendet man 'in': in July."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"We met ___ Monday morning.\"",
      "optionen": [
        "in",
        "on",
        "at"
      ],
      "richtig": 1,
      "erklaerung": "Bei einem bestimmten Tag (auch mit morning/afternoon) steht 'on': on Monday morning."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"She is waiting ___ the bus stop.\"",
      "optionen": [
        "at",
        "in",
        "on"
      ],
      "richtig": 0,
      "erklaerung": "Ein Ort als Punkt/Treffpunkt wird mit 'at' bezeichnet: at the bus stop."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"There are some apples ___ the fridge.\"",
      "richtig": [
        "in"
      ],
      "erklaerung": "Innerhalb eines geschlossenen Raums/Behälters steht 'in': in the fridge."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"The train leaves ___ the afternoon.\"",
      "richtig": [
        "in"
      ],
      "erklaerung": "Tageszeiten wie morning, afternoon und evening stehen mit 'in': in the afternoon. (Ausnahme: at night.)"
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"Your keys are ___ the table.\"",
      "richtig": [
        "on"
      ],
      "erklaerung": "Auf einer Oberfläche/Fläche steht 'on': on the table."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"I always feel tired ___ night.\"",
      "richtig": [
        "at"
      ],
      "erklaerung": "Die feste Wendung lautet 'at night' (Ausnahme zu 'in the morning/evening')."
    },
    {
      "type": "transform",
      "frage": "Combine into one correct sentence (use the right preposition of time): \"The shop opens. 8 a.m.\"",
      "richtig": [
        "The shop opens at 8 a.m.",
        "The shop opens at 8 am.",
        "The shop opens at 8 a.m",
        "The shop opens at 8am."
      ],
      "erklaerung": "Bei genauen Uhrzeiten steht 'at': at 8 a.m."
    },
    {
      "type": "transform",
      "frage": "Combine into one correct sentence (use the right preposition of time): \"We are going on holiday. December.\"",
      "richtig": [
        "We are going on holiday in December.",
        "We're going on holiday in December."
      ],
      "erklaerung": "Bei Monaten steht 'in': in December."
    },
    {
      "type": "transform",
      "frage": "Combine into one correct sentence (use the right preposition of place): \"He is standing. the door.\"",
      "richtig": [
        "He is standing at the door.",
        "He's standing at the door."
      ],
      "erklaerung": "Ein bestimmter Punkt/Stelle wird mit 'at' angegeben: at the door."
    }
  ]
};
