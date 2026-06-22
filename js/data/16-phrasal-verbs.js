/* Thema 16: Phrasal verbs – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Phrasal verbs",
  "intro": "Phrasal verbs sind Verben mit einem oder zwei kleinen Partikeln (Präposition oder Adverb), die zusammen eine eigene Bedeutung ergeben.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Ein <b>phrasal verb</b> besteht aus Verb + Partikel und hat oft eine ganz neue Bedeutung: <span class=\"ex\">give up = aufgeben</span></li><li>Bei <b>trennbaren</b> phrasal verbs kann das Objekt dazwischen stehen: <span class=\"ex\">turn the light off / turn off the light</span></li><li>Ein <b>Pronomen</b> muss bei trennbaren Verben in die Mitte: <span class=\"ex\">turn it off</span> (nicht: turn off it)</li><li>Bei <b>untrennbaren</b> phrasal verbs bleibt das Verb mit der Partikel zusammen: <span class=\"ex\">look after the children</span></li><li>Die Bedeutung ist oft nicht wörtlich, also am besten als <b>Vokabel</b> lernen: <span class=\"ex\">look up a word = ein Wort nachschlagen</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct phrasal verb: I can't read this word. Can you ___ it ___ in the dictionary?",
      "optionen": [
        "look it up",
        "look up it",
        "look it after"
      ],
      "richtig": 0,
      "erklaerung": "\"look up\" bedeutet nachschlagen und ist trennbar; ein Pronomen (it) muss zwischen Verb und Partikel stehen: look it up."
    },
    {
      "type": "mc",
      "frage": "Which sentence has the correct meaning of 'give up'? My grandfather decided to ___ smoking last year.",
      "optionen": [
        "give up",
        "give in",
        "give away"
      ],
      "richtig": 0,
      "erklaerung": "\"give up\" heißt aufhören/aufgeben. \"give in\" = nachgeben, \"give away\" = verschenken/verraten."
    },
    {
      "type": "mc",
      "frage": "Our plane was late, so we had to ___ the trip until the next day.",
      "optionen": [
        "put off",
        "put on",
        "put up"
      ],
      "richtig": 0,
      "erklaerung": "\"put off\" bedeutet verschieben. \"put on\" = anziehen/anschalten, \"put up\" = aufstellen/unterbringen."
    },
    {
      "type": "mc",
      "frage": "While I'm away, could you ___ my cat?",
      "optionen": [
        "look after",
        "look for",
        "look up"
      ],
      "richtig": 0,
      "erklaerung": "\"look after\" heißt sich kümmern um. \"look for\" = suchen, \"look up\" = nachschlagen."
    },
    {
      "type": "gap",
      "frage": "It's cold in here. Could you ___ ___ the heating, please? (anschalten)",
      "richtig": [
        "turn on",
        "switch on",
        "put on"
      ],
      "erklaerung": "\"turn on\" (auch \"switch on\"/\"put on\") bedeutet ein Gerät anschalten."
    },
    {
      "type": "gap",
      "frage": "My alarm didn't go off, so I ___ ___ late this morning. (aufstehen)",
      "richtig": [
        "got up",
        "woke up"
      ],
      "erklaerung": "\"get up\" (im Past: got up) heißt aufstehen; \"wake up\" (woke up) = aufwachen, passt hier ebenfalls."
    },
    {
      "type": "gap",
      "frage": "We've run ___ ___ milk. Can you buy some on your way home? (etwas ist ausgegangen / aufgebraucht)",
      "richtig": [
        "out of"
      ],
      "erklaerung": "\"run out of\" bedeutet, dass etwas aufgebraucht ist. Die Partikeln sind hier 'out of'."
    },
    {
      "type": "gap",
      "frage": "I don't know what 'awkward' means. I'll ___ it ___ online. (nachschlagen)",
      "richtig": [
        "look up"
      ],
      "erklaerung": "Bei \"look up\" steht das Pronomen 'it' in der Mitte: look it up. In die Lücken kommt 'look' und 'up'."
    },
    {
      "type": "transform",
      "frage": "Umformen: Ersetze das Pronomen richtig. Schreibe den Satz so, dass 'it' an der richtigen Stelle steht: 'Please turn off it.'",
      "richtig": [
        "Please turn it off.",
        "Please turn it off"
      ],
      "erklaerung": "Bei trennbaren phrasal verbs muss ein Pronomen zwischen Verb und Partikel: turn it off (nicht 'turn off it')."
    },
    {
      "type": "transform",
      "frage": "Umformen: Schreibe den Satz mit dem phrasal verb 'fill in' und dem Objekt 'the form' so um, dass das Objekt zwischen Verb und Partikel steht: 'You must fill in the form.'",
      "richtig": [
        "You must fill the form in.",
        "You must fill the form in"
      ],
      "erklaerung": "\"fill in\" ist trennbar, daher kann das Nomen-Objekt auch in der Mitte stehen: fill the form in."
    },
    {
      "type": "transform",
      "frage": "Umformen: Ersetze 'the music' durch ein Pronomen: 'Can you turn down the music?'",
      "richtig": [
        "Can you turn it down?",
        "Can you turn it down"
      ],
      "erklaerung": "Das Pronomen 'it' ersetzt 'the music' und muss in die Mitte: turn it down (nicht 'turn down it')."
    }
  ]
};
