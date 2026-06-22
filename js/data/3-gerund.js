/* Thema 3: Gerund – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Gerund",
  "intro": "Das Gerund ist die -ing-Form eines Verbs, die wie ein Substantiv (Nomen) verwendet wird.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Das <b>Gerund</b> ist die <b>-ing-Form</b> und funktioniert wie ein Nomen: <span class=\"ex\">Swimming is healthy.</span></li><li>Nach <b>Präpositionen</b> steht immer das Gerund: <span class=\"ex\">She is good at cooking.</span></li><li>Nach bestimmten Verben wie <b>enjoy, avoid, finish, mind, suggest</b> folgt das Gerund: <span class=\"ex\">I enjoy reading.</span></li><li>Als <b>Subjekt</b> eines Satzes steht oft das Gerund: <span class=\"ex\">Smoking is dangerous.</span></li><li>Achtung: Nach <b>to</b> als Präposition (z. B. <b>look forward to</b>) kommt ebenfalls das Gerund: <span class=\"ex\">I look forward to seeing you.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct form: I enjoy ___ to music in the evening.",
      "optionen": [
        "listening",
        "listen",
        "to listen"
      ],
      "richtig": 0,
      "erklaerung": "Nach dem Verb 'enjoy' steht immer das Gerund (-ing-Form): 'enjoy listening'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: ___ is a great way to stay fit.",
      "optionen": [
        "Run",
        "Running",
        "To running"
      ],
      "richtig": 1,
      "erklaerung": "Als Subjekt am Satzanfang verwendet man das Gerund: 'Running is ...'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: She is afraid of ___ in the dark.",
      "optionen": [
        "walk",
        "to walk",
        "walking"
      ],
      "richtig": 2,
      "erklaerung": "Nach einer Präposition (hier 'of') steht immer das Gerund: 'afraid of walking'."
    },
    {
      "type": "gap",
      "frage": "We finished ___ (clean) the kitchen at nine o'clock.",
      "richtig": [
        "cleaning"
      ],
      "erklaerung": "Nach 'finish' folgt das Gerund: 'finished cleaning'."
    },
    {
      "type": "gap",
      "frage": "Thank you for ___ (help) me with my homework.",
      "richtig": [
        "helping"
      ],
      "erklaerung": "Nach der Präposition 'for' steht das Gerund: 'for helping'."
    },
    {
      "type": "gap",
      "frage": "Would you mind ___ (open) the window, please?",
      "richtig": [
        "opening"
      ],
      "erklaerung": "Nach 'mind' folgt das Gerund: 'mind opening'."
    },
    {
      "type": "gap",
      "frage": "I'm looking forward to ___ (see) you next week.",
      "richtig": [
        "seeing"
      ],
      "erklaerung": "In 'look forward to' ist 'to' eine Präposition, daher folgt das Gerund: 'to seeing'."
    },
    {
      "type": "transform",
      "frage": "Bilde einen Satz mit dem Gerund als Subjekt. Beginne mit dem Gerund: (smoke) is bad for your health.",
      "richtig": [
        "Smoking is bad for your health.",
        "Smoking is bad for your health"
      ],
      "erklaerung": "Als Subjekt steht das Gerund 'Smoking' am Satzanfang und wird grossgeschrieben."
    },
    {
      "type": "transform",
      "frage": "Forme den Satz mit 'avoid' um: 'Don't eat too much sugar.' -> You should avoid ...",
      "richtig": [
        "You should avoid eating too much sugar.",
        "You should avoid eating too much sugar"
      ],
      "erklaerung": "Nach 'avoid' steht das Gerund: 'avoid eating'."
    },
    {
      "type": "transform",
      "frage": "Verbinde die Sätze mit 'good at': 'She plays the piano. She does it well.' -> She is ...",
      "richtig": [
        "She is good at playing the piano.",
        "She is good at playing the piano"
      ],
      "erklaerung": "Nach der Präposition 'at' folgt das Gerund: 'good at playing'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: He suggested ___ a taxi to the airport.",
      "optionen": [
        "to take",
        "taking",
        "take"
      ],
      "richtig": 1,
      "erklaerung": "Nach 'suggest' steht das Gerund: 'suggested taking'."
    }
  ]
};
