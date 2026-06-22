/* Thema 3: Gerund – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Gerund",
  "intro": "Das Gerund ist die -ing-Form eines Verbs, die wie ein Substantiv (Nomen) verwendet wird.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Das <b>Gerund</b> ist die <b>-ing-Form</b> und funktioniert wie ein Nomen: <span class=\"ex\">Swimming is healthy.</span></li><li>Nach <b>Präpositionen</b> steht immer das Gerund: <span class=\"ex\">She is good at cooking.</span></li><li>Nach bestimmten Verben wie <b>enjoy, avoid, finish, mind, suggest</b> folgt das Gerund: <span class=\"ex\">I enjoy reading.</span></li><li>Als <b>Subjekt</b> eines Satzes steht oft das Gerund: <span class=\"ex\">Smoking is dangerous.</span></li><li>Achtung: Nach <b>to</b> als Präposition (z. B. <b>look forward to</b>) kommt ebenfalls das Gerund: <span class=\"ex\">I look forward to seeing you.</span></li></ul>",
  "questions": [
    {
      "type": "gap",
      "frage": "I enjoy ___ (read) books in the evening.",
      "richtig": [
        "reading"
      ],
      "erklaerung": "Nach 'enjoy' steht das Gerund (-ing-Form)."
    },
    {
      "type": "mc",
      "frage": "She is good at ___ pictures.",
      "optionen": [
        "draw",
        "drawing",
        "to draw"
      ],
      "richtig": 1,
      "erklaerung": "Nach Präposition 'at' steht immer das Gerund."
    },
    {
      "type": "gap",
      "frage": "Thank you for ___ (help) me with my homework.",
      "richtig": [
        "helping"
      ],
      "erklaerung": "Nach der Präposition 'for' folgt das Gerund."
    },
    {
      "type": "mc",
      "frage": "___ is my favourite hobby.",
      "optionen": [
        "Swim",
        "Swimming",
        "To swimming"
      ],
      "richtig": 1,
      "erklaerung": "Als Subjekt am Satzanfang steht das Gerund."
    },
    {
      "type": "gap",
      "frage": "They keep ___ (talk) during the film.",
      "richtig": [
        "talking"
      ],
      "erklaerung": "Nach 'keep' (= weitermachen) steht das Gerund."
    },
    {
      "type": "transform",
      "frage": "Bilde einen Satz mit Gerund als Subjekt: 'Cook is fun.' (cook -> Gerund)",
      "richtig": [
        "Cooking is fun.",
        "Cooking is fun"
      ],
      "erklaerung": "Das Verb am Satzanfang wird zum Gerund: 'Cooking'."
    },
    {
      "type": "gap",
      "frage": "I don't mind ___ (wait) for a few minutes.",
      "richtig": [
        "waiting"
      ],
      "erklaerung": "Nach 'mind' steht das Gerund."
    },
    {
      "type": "mc",
      "frage": "He finished ___ his report yesterday.",
      "optionen": [
        "to write",
        "writing",
        "write"
      ],
      "richtig": 1,
      "erklaerung": "Nach 'finish' folgt das Gerund."
    },
    {
      "type": "gap",
      "frage": "We are looking forward to ___ (see) you again.",
      "richtig": [
        "seeing"
      ],
      "erklaerung": "'look forward to' enthält die Präposition 'to', daher Gerund."
    },
    {
      "type": "mc",
      "frage": "Would you mind ___ the window?",
      "optionen": [
        "opening",
        "to open",
        "open"
      ],
      "richtig": 0,
      "erklaerung": "Nach 'Would you mind' steht das Gerund."
    },
    {
      "type": "gap",
      "frage": "She gave up ___ (smoke) last year.",
      "richtig": [
        "smoking"
      ],
      "erklaerung": "Nach 'give up' (= aufhören) steht das Gerund."
    },
    {
      "type": "transform",
      "frage": "Umformen mit 'enjoy': 'I play tennis. I like it.' -> Satz mit 'enjoy' + Gerund.",
      "richtig": [
        "I enjoy playing tennis.",
        "I enjoy playing tennis"
      ],
      "erklaerung": "Nach 'enjoy' folgt das Gerund 'playing'."
    },
    {
      "type": "gap",
      "frage": "I'm interested in ___ (learn) Spanish.",
      "richtig": [
        "learning"
      ],
      "erklaerung": "Nach 'interested in' (Präposition) steht das Gerund."
    },
    {
      "type": "mc",
      "frage": "Before ___ to bed, she brushes her teeth.",
      "optionen": [
        "go",
        "going",
        "to go"
      ],
      "richtig": 1,
      "erklaerung": "Nach der Präposition 'before' steht das Gerund."
    },
    {
      "type": "gap",
      "frage": "He avoided ___ (answer) my question.",
      "richtig": [
        "answering"
      ],
      "erklaerung": "Nach 'avoid' folgt das Gerund."
    },
    {
      "type": "mc",
      "frage": "I'm used to ___ early in the morning.",
      "optionen": [
        "get up",
        "getting up",
        "to get up"
      ],
      "richtig": 1,
      "erklaerung": "'be used to' enthält 'to' als Präposition, daher Gerund."
    },
    {
      "type": "gap",
      "frage": "They suggested ___ (go) to the cinema together.",
      "richtig": [
        "going"
      ],
      "erklaerung": "Nach 'suggest' steht das Gerund."
    },
    {
      "type": "transform",
      "frage": "Umformen: 'It's no use. You can't argue with him.' -> Satz mit 'It's no use' + Gerund (argue).",
      "richtig": [
        "It's no use arguing with him.",
        "It is no use arguing with him.",
        "It's no use arguing with him",
        "It is no use arguing with him"
      ],
      "erklaerung": "Nach 'It's no use' folgt das Gerund 'arguing'."
    },
    {
      "type": "gap",
      "frage": "I can't help ___ (laugh) when I see that video.",
      "richtig": [
        "laughing"
      ],
      "erklaerung": "'can't help' (= nicht anders können) verlangt das Gerund."
    },
    {
      "type": "mc",
      "frage": "After ___ lunch, we went for a walk.",
      "optionen": [
        "have",
        "to have",
        "having"
      ],
      "richtig": 2,
      "erklaerung": "Nach der Präposition 'after' steht das Gerund."
    },
    {
      "type": "gap",
      "frage": "She apologised for ___ (be) late.",
      "richtig": [
        "being"
      ],
      "erklaerung": "Nach 'apologise for' (Präposition 'for') steht das Gerund."
    },
    {
      "type": "mc",
      "frage": "It's worth ___ that museum.",
      "optionen": [
        "to visit",
        "visiting",
        "visit"
      ],
      "richtig": 1,
      "erklaerung": "Nach 'be worth' folgt das Gerund."
    },
    {
      "type": "gap",
      "frage": "I'm thinking of ___ (buy) a new car.",
      "richtig": [
        "buying"
      ],
      "erklaerung": "Nach 'think of' (Präposition 'of') steht das Gerund."
    },
    {
      "type": "transform",
      "frage": "Umformen: 'Don't drive so fast!' -> Empfehlung mit 'I'd recommend not ___' (drive slowly).",
      "richtig": [
        "I'd recommend driving slowly.",
        "I would recommend driving slowly.",
        "I'd recommend driving slowly",
        "I would recommend driving slowly"
      ],
      "erklaerung": "Nach 'recommend' folgt das Gerund 'driving'."
    },
    {
      "type": "mc",
      "frage": "He denied ___ the money.",
      "optionen": [
        "stealing",
        "to steal",
        "steal"
      ],
      "richtig": 0,
      "erklaerung": "Nach 'deny' steht das Gerund."
    },
    {
      "type": "gap",
      "frage": "There's no point in ___ (worry) about it now.",
      "richtig": [
        "worrying"
      ],
      "erklaerung": "Nach 'point in' (Präposition 'in') folgt das Gerund."
    },
    {
      "type": "gap",
      "frage": "I remember ___ (lock) the door before we left, I'm sure of it.",
      "richtig": [
        "locking"
      ],
      "erklaerung": "'remember + Gerund' = sich an etwas Vergangenes erinnern."
    },
    {
      "type": "mc",
      "frage": "Please stop ___ noise; I'm trying to concentrate.",
      "optionen": [
        "to make",
        "making",
        "make"
      ],
      "richtig": 1,
      "erklaerung": "'stop + Gerund' = mit einer Tätigkeit aufhören."
    },
    {
      "type": "transform",
      "frage": "Umformen ins Passiv-Gerund: 'She likes it when people praise her.' -> 'She likes ___ (praise).'",
      "richtig": [
        "She likes being praised.",
        "She likes being praised"
      ],
      "erklaerung": "Passiv-Gerund: 'being' + Past Participle ('praised')."
    },
    {
      "type": "gap",
      "frage": "I appreciate your ___ (take) the time to explain this to me.",
      "richtig": [
        "taking"
      ],
      "erklaerung": "Nach Possessivpronomen + 'appreciate' steht das Gerund ('your taking')."
    },
    {
      "type": "transform",
      "frage": "Umformen: 'He went out. He didn't say goodbye.' -> Satz mit 'without' + Gerund.",
      "richtig": [
        "He went out without saying goodbye.",
        "He went out without saying goodbye"
      ],
      "erklaerung": "Nach der Präposition 'without' folgt das Gerund 'saying'."
    }
  ]
};
