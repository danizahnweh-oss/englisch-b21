/* Thema 31: Imperative – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Imperative",
  "intro": "Der Imperativ wird im Englischen verwendet, um Aufforderungen, Befehle, Anweisungen oder Bitten auszudrücken.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Der Imperativ nutzt die <b>Grundform des Verbs</b> ohne Subjekt: <span class=\"ex\">Open the window.</span></li><li>Die <b>Verneinung</b> bildet man mit <b>don't</b> + Grundform: <span class=\"ex\">Don't be late.</span></li><li>Für einen <b>höflichen</b> Ton fügt man oft <b>please</b> hinzu: <span class=\"ex\">Please sit down.</span> oder <span class=\"ex\">Sit down, please.</span></li><li>Mit <b>Let's</b> (= let us) macht man einen <b>gemeinsamen Vorschlag</b>: <span class=\"ex\">Let's go home.</span> Verneint: <span class=\"ex\">Let's not argue.</span></li><li>Zur Betonung kann man <b>do</b> voranstellen: <span class=\"ex\">Do come in!</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Which sentence is a correct imperative telling someone to close the door?",
      "optionen": [
        "You close the door.",
        "Close the door.",
        "Closing the door."
      ],
      "richtig": 1,
      "erklaerung": "Der Imperativ verwendet die Grundform des Verbs ohne Subjekt: 'Close the door.'"
    },
    {
      "type": "mc",
      "frage": "Choose the correct negative imperative: '___ touch that, it's hot!'",
      "optionen": [
        "Don't",
        "Not",
        "No"
      ],
      "richtig": 0,
      "erklaerung": "Die Verneinung des Imperativs wird mit 'don't' + Grundform gebildet: 'Don't touch that.'"
    },
    {
      "type": "mc",
      "frage": "Which sentence makes a suggestion to do something together?",
      "optionen": [
        "Let's go to the cinema tonight.",
        "Go you to the cinema tonight.",
        "We going to the cinema tonight."
      ],
      "richtig": 0,
      "erklaerung": "Für gemeinsame Vorschläge benutzt man 'Let's' (= let us) + Grundform: 'Let's go to the cinema tonight.'"
    },
    {
      "type": "gap",
      "frage": "___ careful! The floor is wet. (positive imperative of 'be')",
      "richtig": [
        "Be",
        "be"
      ],
      "erklaerung": "Auch 'be' bildet den Imperativ einfach mit der Grundform: 'Be careful!'"
    },
    {
      "type": "gap",
      "frage": "It's a secret. Please ___ tell anyone. (negative, short form possible)",
      "richtig": [
        "don't",
        "do not",
        "Don't",
        "Do not"
      ],
      "erklaerung": "Die verneinte Aufforderung lautet 'don't' (Kurzform) bzw. 'do not' + Grundform: 'Please don't tell anyone.'"
    },
    {
      "type": "gap",
      "frage": "We're arguing too much. ___ not argue anymore. (suggestion meaning 'let us')",
      "richtig": [
        "Let's",
        "Lets",
        "Let us",
        "let's",
        "let us",
        "lets"
      ],
      "erklaerung": "Verneinte gemeinsame Vorschläge bildet man mit 'Let's not' + Grundform: 'Let's not argue anymore.'"
    },
    {
      "type": "gap",
      "frage": "Fill in the polite word: '___ sit down.' (makes the imperative more polite)",
      "richtig": [
        "Please",
        "please"
      ],
      "erklaerung": "Mit 'please' wird die Aufforderung höflicher: 'Please sit down.'"
    },
    {
      "type": "transform",
      "frage": "Make a negative imperative from this sentence: 'Be afraid.'",
      "richtig": [
        "Don't be afraid.",
        "Do not be afraid.",
        "Don't be afraid",
        "Do not be afraid"
      ],
      "erklaerung": "Die Verneinung bildet man mit 'Don't' (oder 'Do not') + Grundform: 'Don't be afraid.'"
    },
    {
      "type": "transform",
      "frage": "Turn this statement into a polite request using an imperative and 'please': 'You should help me.'",
      "richtig": [
        "Help me, please.",
        "Please help me.",
        "Help me, please",
        "Please help me"
      ],
      "erklaerung": "Aus dem Modalsatz wird ein Imperativ mit 'please': 'Please help me.' oder 'Help me, please.'"
    },
    {
      "type": "transform",
      "frage": "Rewrite as a suggestion with 'Let's': 'We could take a break.'",
      "richtig": [
        "Let's take a break.",
        "Let us take a break.",
        "Let's take a break",
        "Let us take a break"
      ],
      "erklaerung": "Vorschläge an die Gruppe bildet man mit 'Let's' + Grundform: 'Let's take a break.'"
    },
    {
      "type": "transform",
      "frage": "Make a positive imperative telling someone to turn off the light (use 'turn off' and 'the light').",
      "richtig": [
        "Turn off the light.",
        "Turn the light off.",
        "Turn off the light",
        "Turn the light off"
      ],
      "erklaerung": "Der Imperativ steht in der Grundform; bei 'turn off' kann das Objekt davor oder dahinter stehen: 'Turn off the light.' / 'Turn the light off.'"
    }
  ]
};
