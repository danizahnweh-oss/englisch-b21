/* Thema 5: Adjectives – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Adjectives",
  "intro": "Adjektive beschreiben Nomen und Pronomen – sie sagen, wie jemand oder etwas ist.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>Adjektive</b> stehen meist <b>vor dem Nomen</b> oder nach Verben wie <i>be</i>, <i>look</i>, <i>feel</i>: <span class=\"ex\">a fast car</span>, <span class=\"ex\">She is happy.</span></li><li>Sie sind im Englischen <b>unveränderlich</b> – keine Plural- oder Geschlechtsformen: <span class=\"ex\">two big houses</span> (nicht <i>bigs</i>).</li><li>Mehrere Adjektive folgen einer <b>festen Reihenfolge</b> (Meinung, Größe, Alter, Farbe): <span class=\"ex\">a nice big old brown table</span>.</li><li>Endet ein Adjektiv auf <b>-ed</b>, beschreibt es ein Gefühl; auf <b>-ing</b> die Ursache: <span class=\"ex\">I am bored.</span> / <span class=\"ex\">The film is boring.</span></li><li>Viele Adjektive werden aus Nomen gebildet, oft mit <b>-y, -ful, -less</b>: <span class=\"ex\">sunny</span>, <span class=\"ex\">helpful</span>, <span class=\"ex\">careless</span>.</li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Which sentence is correct?",
      "optionen": [
        "They have two beautifuls gardens.",
        "They have two beautiful gardens.",
        "They have two beautiful garden."
      ],
      "richtig": 1,
      "erklaerung": "Englische Adjektive bleiben unveränderlich (kein 's'), und das Nomen steht im Plural: 'beautiful gardens'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct order: 'She bought a ___ jacket.'",
      "optionen": [
        "leather black nice",
        "nice black leather",
        "black nice leather"
      ],
      "richtig": 1,
      "erklaerung": "Die Reihenfolge ist Meinung (nice) – Farbe (black) – Material (leather): 'a nice black leather jacket'."
    },
    {
      "type": "mc",
      "frage": "Complete: 'The long trip was very ___, so everyone fell asleep.'",
      "optionen": [
        "tired",
        "tiring",
        "tire"
      ],
      "richtig": 1,
      "erklaerung": "Die Ursache (the trip) wird mit '-ing' beschrieben: 'tiring'. Die Personen wären 'tired'."
    },
    {
      "type": "gap",
      "frage": "It was a ___ day, so we sat in the garden. (Adjektiv von 'sun')",
      "richtig": [
        "sunny"
      ],
      "erklaerung": "Aus dem Nomen 'sun' wird mit der Endung '-y' das Adjektiv 'sunny'."
    },
    {
      "type": "gap",
      "frage": "After the long exam I felt completely ___. (Gefühl, Adjektiv auf -ed von 'exhaust')",
      "richtig": [
        "exhausted"
      ],
      "erklaerung": "Ein Gefühl der Person wird mit '-ed' ausgedrückt: 'exhausted' (= völlig erschöpft)."
    },
    {
      "type": "gap",
      "frage": "She gave me some very ___ advice. (Adjektiv von 'help', Endung -ful)",
      "richtig": [
        "helpful"
      ],
      "erklaerung": "Mit der Endung '-ful' entsteht aus 'help' das Adjektiv 'helpful' (= hilfreich)."
    },
    {
      "type": "gap",
      "frage": "Be careful! He is a ___ driver and often has accidents. (Adjektiv von 'care', Endung -less)",
      "richtig": [
        "careless"
      ],
      "erklaerung": "Die Endung '-less' bedeutet 'ohne': 'careless' = ohne Sorgfalt, unvorsichtig."
    },
    {
      "type": "transform",
      "frage": "Forme den Satz um, sodass das Adjektiv vor dem Nomen steht: 'The house is old.' -> 'It is an ___ house.' (ganzen Satz schreiben)",
      "richtig": [
        "It is an old house.",
        "It is an old house"
      ],
      "erklaerung": "Das Adjektiv 'old' steht vor dem Nomen. Da 'old' mit Vokal beginnt, heißt es 'an old house'."
    },
    {
      "type": "transform",
      "frage": "Setze die Adjektive in die richtige Reihenfolge: 'a (red / small / cotton) bag'. Schreibe die ganze Wortgruppe.",
      "richtig": [
        "a small red cotton bag",
        "small red cotton bag"
      ],
      "erklaerung": "Reihenfolge: Größe (small) – Farbe (red) – Material (cotton): 'a small red cotton bag'."
    },
    {
      "type": "transform",
      "frage": "Beschreibe die Ursache statt des Gefühls. Ändere 'I am interested in the lesson.' -> 'The lesson is ___.' (ganzen Satz schreiben)",
      "richtig": [
        "The lesson is interesting.",
        "The lesson is interesting"
      ],
      "erklaerung": "Die Ursache (the lesson) bekommt die Endung '-ing': 'The lesson is interesting.'"
    }
  ]
};
