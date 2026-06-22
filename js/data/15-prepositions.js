/* Thema 15: Prepositions – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Prepositions",
  "intro": "Präpositionen (prepositions) verbinden Wörter und zeigen Zeit, Ort und Richtung an – hier übst du die wichtigsten.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>at</b> für genaue Zeit und Punkte: <span class=\"ex\">at 7 o'clock, at the bus stop</span></li><li><b>on</b> für Tage, Daten und Oberflächen: <span class=\"ex\">on Monday, on the table</span></li><li><b>in</b> für Monate, Jahre und geschlossene Räume: <span class=\"ex\">in July, in the box</span></li><li>Richtung mit <b>to</b>, <b>into</b>, <b>from</b>: <span class=\"ex\">I go to school, she came from London</span></li><li>Häufige feste Verbindungen lernst du am besten als Ganzes: <span class=\"ex\">interested in, good at, depend on</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"We usually meet ___ Sunday afternoon.\"",
      "optionen": [
        "on",
        "in",
        "at"
      ],
      "richtig": 0,
      "erklaerung": "Bei Wochentagen (auch mit Tageszeit wie 'Sunday afternoon') steht 'on'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"The film starts ___ 8 p.m.\"",
      "optionen": [
        "in",
        "at",
        "on"
      ],
      "richtig": 1,
      "erklaerung": "Bei genauen Uhrzeiten benutzt man 'at': at 8 p.m."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"She is really good ___ playing the guitar.\"",
      "optionen": [
        "in",
        "on",
        "at"
      ],
      "richtig": 2,
      "erklaerung": "Feste Verbindung: 'good at' (gut in etwas) wird immer mit 'at' gebildet."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"My birthday is ___ July.\"",
      "richtig": [
        "in"
      ],
      "erklaerung": "Bei Monaten (und Jahren) steht 'in': in July, in 2025."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"Please put the keys ___ the table.\"",
      "richtig": [
        "on"
      ],
      "erklaerung": "Für eine Oberfläche, auf der etwas liegt, benutzt man 'on'."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"I have been waiting ___ the bus stop for ten minutes.\"",
      "richtig": [
        "at"
      ],
      "erklaerung": "Für einen bestimmten Punkt/Treffpunkt wie eine Haltestelle benutzt man 'at': at the bus stop."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"Tom is afraid ___ spiders.\"",
      "richtig": [
        "of"
      ],
      "erklaerung": "Feste Verbindung: 'afraid of' (Angst vor etwas)."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"We are flying ___ Spain next week.\"",
      "richtig": [
        "to"
      ],
      "erklaerung": "Richtung/Ziel einer Bewegung drückt man mit 'to' aus: fly to Spain."
    },
    {
      "type": "transform",
      "frage": "Complete with the correct preposition: \"This present is ___ you.\" (Geschenk fuer dich)",
      "richtig": [
        "This present is for you.",
        "This present is for you"
      ],
      "erklaerung": "'for' drückt aus, fuer wen etwas bestimmt ist: a present for you."
    },
    {
      "type": "transform",
      "frage": "Fill in the missing preposition and write the full sentence: \"The cat is hiding ___ the sofa.\" (darunter)",
      "richtig": [
        "The cat is hiding under the sofa.",
        "The cat is hiding under the sofa"
      ],
      "erklaerung": "'under' bedeutet 'unter/darunter'. Die Katze versteckt sich unter dem Sofa."
    },
    {
      "type": "transform",
      "frage": "Complete with the correct preposition: \"She walked ___ the room and closed the door.\" (in den Raum hinein)",
      "richtig": [
        "She walked into the room and closed the door.",
        "She walked into the room and closed the door"
      ],
      "erklaerung": "Bei einer Bewegung in einen geschlossenen Raum hinein benutzt man 'into'."
    }
  ]
};
