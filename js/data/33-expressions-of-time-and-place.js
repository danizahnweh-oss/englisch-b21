/* Thema 33: Expressions of time and place – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Expressions of time and place",
  "intro": "Im Englischen drücken bestimmte Präpositionen und Wörter aus, wann und wo etwas passiert.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>at</b> für genaue Zeitpunkte und Plätze: <span class=\"ex\">at 6 o'clock, at night, at the station</span></li><li><b>on</b> für Tage, Daten und Oberflächen: <span class=\"ex\">on Monday, on July 5th, on the table</span></li><li><b>in</b> für längere Zeiträume und geschlossene Räume/Gebiete: <span class=\"ex\">in May, in 2020, in the morning, in London</span></li><li>Orts-Präpositionen: <b>in</b> (innerhalb), <b>at</b> (Punkt), <b>on</b> (auf einer Fläche): <span class=\"ex\">in the box, at the door, on the wall</span></li><li>Feste Wendungen merken: <span class=\"ex\">at the weekend, at noon, in the evening, on time</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"I have an appointment ___ Monday.\"",
      "optionen": [
        "on",
        "in",
        "at"
      ],
      "richtig": 0,
      "erklaerung": "Vor Wochentagen steht 'on'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"We usually go on holiday ___ summer.\"",
      "optionen": [
        "on",
        "in",
        "at"
      ],
      "richtig": 1,
      "erklaerung": "Vor Jahreszeiten steht 'in'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"The film starts ___ 8 o'clock.\"",
      "optionen": [
        "in",
        "on",
        "at"
      ],
      "richtig": 2,
      "erklaerung": "Vor Uhrzeiten steht 'at'."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"My brother was born ___ 1998.\"",
      "richtig": [
        "in"
      ],
      "erklaerung": "Vor Jahreszahlen steht 'in'."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"The shop is open ___ Saturday morning.\"",
      "richtig": [
        "on"
      ],
      "erklaerung": "Vor einem bestimmten Tag bzw. 'Saturday morning' steht 'on'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"The keys are ___ the table.\"",
      "optionen": [
        "on",
        "in",
        "at"
      ],
      "richtig": 0,
      "erklaerung": "'on' bedeutet auf einer Oberflaeche."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"There is some milk ___ the fridge.\"",
      "optionen": [
        "on",
        "at",
        "in"
      ],
      "richtig": 2,
      "erklaerung": "'in' bedeutet innerhalb eines geschlossenen Raums."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"She is waiting for me ___ the bus stop.\"",
      "richtig": [
        "at"
      ],
      "erklaerung": "Bei einem bestimmten Punkt/Ort wie einer Haltestelle steht 'at'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"My grandparents live ___ Spain.\"",
      "optionen": [
        "at",
        "in",
        "on"
      ],
      "richtig": 1,
      "erklaerung": "Vor Laendern steht 'in'."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"We had a great time ___ Christmas.\"",
      "richtig": [
        "at"
      ],
      "erklaerung": "Vor Feiertagszeiten wie Christmas steht 'at'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"I'll call you ___ the evening.\"",
      "optionen": [
        "in",
        "at",
        "on"
      ],
      "richtig": 0,
      "erklaerung": "'in the morning/afternoon/evening' mit 'in'."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"The meeting is ___ night, so come after dinner.\"",
      "richtig": [
        "at"
      ],
      "erklaerung": "'at night' ist eine feste Wendung mit 'at'."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"There's a beautiful picture ___ the wall.\"",
      "richtig": [
        "on"
      ],
      "erklaerung": "Etwas haengt 'on the wall'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"My birthday is ___ the 5th of May.\"",
      "optionen": [
        "in",
        "on",
        "at"
      ],
      "richtig": 1,
      "erklaerung": "Vor einem konkreten Datum steht 'on'."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"He has lived here ___ 2015.\"",
      "richtig": [
        "since"
      ],
      "erklaerung": "'since' nennt den Startzeitpunkt eines andauernden Zustands."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"We have been friends ___ ten years.\"",
      "richtig": [
        "for"
      ],
      "erklaerung": "'for' nennt einen Zeitraum/eine Dauer."
    },
    {
      "type": "mc",
      "frage": "Choose the correct word: \"I'll finish the report ___ Friday.\"",
      "optionen": [
        "by",
        "since",
        "during"
      ],
      "richtig": 0,
      "erklaerung": "'by Friday' = spaetestens bis Freitag."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"There were many tourists ___ the airport.\"",
      "optionen": [
        "in",
        "at",
        "on"
      ],
      "richtig": 1,
      "erklaerung": "Bei Orten als Treffpunkt/Station wie airport steht meist 'at'."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"Please be quiet ___ the lesson.\"",
      "richtig": [
        "during"
      ],
      "erklaerung": "'during' = waehrend eines Zeitraums/Ereignisses."
    },
    {
      "type": "transform",
      "frage": "Rewrite using 'on': \"The party is happening Saturday.\" (add the correct preposition)",
      "richtig": [
        "The party is happening on Saturday.",
        "The party is on Saturday."
      ],
      "erklaerung": "Vor Wochentagen steht 'on'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"She sat ___ the corner of the room.\"",
      "optionen": [
        "on",
        "at",
        "in"
      ],
      "richtig": 2,
      "erklaerung": "'in the corner' (innen) im Gegensatz zu 'at/on the corner' (Strasse)."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"We waited ___ the queue for an hour.\"",
      "richtig": [
        "in"
      ],
      "erklaerung": "Im britischen Englisch 'in the queue'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"I read a book ___ the train this morning.\"",
      "optionen": [
        "on",
        "in",
        "at"
      ],
      "richtig": 0,
      "erklaerung": "Bei oeffentlichen Verkehrsmitteln (train, bus, plane) steht 'on'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct phrase: \"They moved to London ___.\"",
      "optionen": [
        "ago two years",
        "two years ago",
        "since two years"
      ],
      "richtig": 1,
      "erklaerung": "'ago' steht nach der Zeitangabe: 'two years ago'."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"The library is closed ___ the moment, please come back later.\"",
      "richtig": [
        "at"
      ],
      "erklaerung": "'at the moment' ist eine feste Wendung."
    },
    {
      "type": "transform",
      "frage": "Rewrite using 'until': \"The shop stays open. It closes at 9 p.m.\" (one sentence: open ... 9 p.m.)",
      "richtig": [
        "The shop stays open until 9 p.m.",
        "The shop is open until 9 p.m.",
        "The shop stays open until 9pm.",
        "The shop is open until 9pm."
      ],
      "erklaerung": "'until' nennt den Endzeitpunkt eines andauernden Vorgangs."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"We have to hand in the project ___ the end of the week.\"",
      "richtig": [
        "by"
      ],
      "erklaerung": "'by the end of the week' = spaetestens bis dahin."
    },
    {
      "type": "mc",
      "frage": "Choose the correct preposition: \"The plane flew ___ the clouds.\"",
      "optionen": [
        "above",
        "on",
        "at"
      ],
      "richtig": 0,
      "erklaerung": "'above' = oberhalb von etwas, hier ueber den Wolken."
    },
    {
      "type": "transform",
      "frage": "Rewrite using 'since': \"I started learning English five years ago and I still learn it.\" -> \"I have learned English ___ ...\" Complete: I have learned English since ...",
      "richtig": [
        "I have learned English since 2021.",
        "I have been learning English since 2021."
      ],
      "erklaerung": "'since' mit Startzeitpunkt; today is 2026, also vor fuenf Jahren = 2021."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap (place): \"The cat is hiding ___ the sofa, you can't see it from here.\"",
      "richtig": [
        "behind",
        "under"
      ],
      "erklaerung": "'behind' (hinter) oder 'under' (unter) passen, je nach Versteck."
    },
    {
      "type": "transform",
      "frage": "Rewrite using 'for': \"They have known each other since 2010.\" Express the duration up to today (2026): \"They have known each other ___ ... years.\"",
      "richtig": [
        "They have known each other for 16 years.",
        "They have known each other for sixteen years."
      ],
      "erklaerung": "Von 2010 bis 2026 sind es 16 Jahre; Dauer mit 'for'."
    }
  ]
};
