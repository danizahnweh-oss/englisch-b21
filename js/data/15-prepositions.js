/* Thema 15: Prepositions – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Prepositions",
  "intro": "Präpositionen (prepositions) verbinden Wörter und zeigen Zeit, Ort und Richtung an – hier übst du die wichtigsten.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>at</b> für genaue Zeit und Punkte: <span class=\"ex\">at 7 o'clock, at the bus stop</span></li><li><b>on</b> für Tage, Daten und Oberflächen: <span class=\"ex\">on Monday, on the table</span></li><li><b>in</b> für Monate, Jahre und geschlossene Räume: <span class=\"ex\">in July, in the box</span></li><li>Richtung mit <b>to</b>, <b>into</b>, <b>from</b>: <span class=\"ex\">I go to school, she came from London</span></li><li>Häufige feste Verbindungen lernst du am besten als Ganzes: <span class=\"ex\">interested in, good at, depend on</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "The book is ___ the table.",
      "optionen": [
        "on",
        "in",
        "at"
      ],
      "richtig": 0,
      "erklaerung": "Auf einer Oberfläche steht etwas \"on\"."
    },
    {
      "type": "mc",
      "frage": "She lives ___ London.",
      "optionen": [
        "at",
        "in",
        "on"
      ],
      "richtig": 1,
      "erklaerung": "Bei Städten und Ländern benutzt man \"in\"."
    },
    {
      "type": "gap",
      "frage": "The meeting starts ___ 9 o'clock.",
      "richtig": [
        "at"
      ],
      "erklaerung": "Bei genauen Uhrzeiten steht \"at\"."
    },
    {
      "type": "mc",
      "frage": "My birthday is ___ July.",
      "optionen": [
        "on",
        "at",
        "in"
      ],
      "richtig": 2,
      "erklaerung": "Bei Monaten benutzt man \"in\"."
    },
    {
      "type": "gap",
      "frage": "We have a test ___ Monday.",
      "richtig": [
        "on"
      ],
      "erklaerung": "Bei Wochentagen steht \"on\"."
    },
    {
      "type": "mc",
      "frage": "The cat is hiding ___ the bed.",
      "optionen": [
        "under",
        "on",
        "at"
      ],
      "richtig": 0,
      "erklaerung": "\"under\" = unter etwas."
    },
    {
      "type": "gap",
      "frage": "There is a picture ___ the wall.",
      "richtig": [
        "on"
      ],
      "erklaerung": "An der Wand hängt etwas \"on the wall\"."
    },
    {
      "type": "mc",
      "frage": "I go to school ___ bus.",
      "optionen": [
        "with",
        "by",
        "on"
      ],
      "richtig": 1,
      "erklaerung": "Verkehrsmittel: \"by bus, by train\"."
    },
    {
      "type": "gap",
      "frage": "He is waiting ___ the bus stop.",
      "richtig": [
        "at"
      ],
      "erklaerung": "Ein bestimmter Punkt/Ort: \"at the bus stop\"."
    },
    {
      "type": "mc",
      "frage": "The shop is ___ to the bank.",
      "optionen": [
        "next",
        "near",
        "beside"
      ],
      "richtig": 0,
      "erklaerung": "\"next to\" = direkt neben."
    },
    {
      "type": "gap",
      "frage": "The children ran ___ the park to the school.",
      "richtig": [
        "through"
      ],
      "erklaerung": "Bewegung mitten hindurch: \"through\"."
    },
    {
      "type": "mc",
      "frage": "We arrived ___ the airport very early.",
      "optionen": [
        "to",
        "at",
        "in"
      ],
      "richtig": 1,
      "erklaerung": "\"arrive at\" bei einem Ort/Gebäude (nicht \"to\")."
    },
    {
      "type": "gap",
      "frage": "I have been living here ___ 2015.",
      "richtig": [
        "since"
      ],
      "erklaerung": "\"since\" + Zeitpunkt (Anfang)."
    },
    {
      "type": "gap",
      "frage": "She has studied English ___ three years.",
      "richtig": [
        "for"
      ],
      "erklaerung": "\"for\" + Zeitdauer."
    },
    {
      "type": "mc",
      "frage": "The plane flew ___ the clouds.",
      "optionen": [
        "above",
        "over",
        "on"
      ],
      "richtig": 0,
      "erklaerung": "\"above\" = oberhalb (ohne direkten Kontakt)."
    },
    {
      "type": "mc",
      "frage": "Put your coat ___ the hook, please.",
      "optionen": [
        "in",
        "on",
        "at"
      ],
      "richtig": 1,
      "erklaerung": "An einen Haken hängen: \"on the hook\"."
    },
    {
      "type": "gap",
      "frage": "They walked ___ the stairs to the second floor.",
      "richtig": [
        "up"
      ],
      "erklaerung": "Bewegung nach oben: \"up the stairs\"."
    },
    {
      "type": "mc",
      "frage": "I am really good ___ playing chess.",
      "optionen": [
        "in",
        "at",
        "on"
      ],
      "richtig": 1,
      "erklaerung": "Feste Verbindung: \"good at\"."
    },
    {
      "type": "gap",
      "frage": "She is afraid ___ spiders.",
      "richtig": [
        "of"
      ],
      "erklaerung": "Feste Verbindung: \"afraid of\"."
    },
    {
      "type": "mc",
      "frage": "Congratulations ___ your new job!",
      "optionen": [
        "for",
        "on",
        "to"
      ],
      "richtig": 1,
      "erklaerung": "Feste Verbindung: \"congratulations on\"."
    },
    {
      "type": "gap",
      "frage": "This present is ___ you.",
      "richtig": [
        "for"
      ],
      "erklaerung": "Empfänger eines Geschenks: \"for you\"."
    },
    {
      "type": "mc",
      "frage": "We talked ___ the new film for hours.",
      "optionen": [
        "about",
        "of",
        "on"
      ],
      "richtig": 0,
      "erklaerung": "\"talk about\" = über etwas reden."
    },
    {
      "type": "gap",
      "frage": "He apologised ___ being late.",
      "richtig": [
        "for"
      ],
      "erklaerung": "\"apologise for\" (sich für etwas entschuldigen)."
    },
    {
      "type": "mc",
      "frage": "The temperature dropped ___ five degrees overnight.",
      "optionen": [
        "by",
        "with",
        "of"
      ],
      "richtig": 0,
      "erklaerung": "Maß der Veränderung: \"by five degrees\"."
    },
    {
      "type": "gap",
      "frage": "I'm not interested ___ politics at all.",
      "richtig": [
        "in"
      ],
      "erklaerung": "Feste Verbindung: \"interested in\"."
    },
    {
      "type": "mc",
      "frage": "She insisted ___ paying for the meal herself.",
      "optionen": [
        "on",
        "in",
        "for"
      ],
      "richtig": 0,
      "erklaerung": "Feste Verbindung: \"insist on\"."
    },
    {
      "type": "transform",
      "frage": "Schreibe den Satz mit der richtigen Präposition: \"This decision depends ___ you.\"",
      "richtig": [
        "This decision depends on you.",
        "This decision depends on you"
      ],
      "erklaerung": "\"depend on\" = abhängen von."
    },
    {
      "type": "gap",
      "frage": "The thief broke ___ the house while they were asleep.",
      "richtig": [
        "into"
      ],
      "erklaerung": "\"break into\" = einbrechen in."
    },
    {
      "type": "transform",
      "frage": "Vervollständige mit der passenden Präposition: \"You can rely ___ me whenever you need help.\"",
      "richtig": [
        "You can rely on me whenever you need help.",
        "You can rely on me whenever you need help"
      ],
      "erklaerung": "\"rely on\" = sich verlassen auf."
    },
    {
      "type": "transform",
      "frage": "Setze die richtige Präposition ein: \"Despite the rain, we went out, but we couldn't account ___ the missing money.\"",
      "richtig": [
        "Despite the rain, we went out, but we couldn't account for the missing money.",
        "Despite the rain, we went out, but we couldn't account for the missing money"
      ],
      "erklaerung": "\"account for\" = erklären/Rechenschaft ablegen über."
    }
  ]
};
