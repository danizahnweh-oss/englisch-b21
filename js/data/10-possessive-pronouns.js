/* Thema 10: Possessive pronouns – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Possessive pronouns",
  "intro": "Possessivpronomen (mine, yours, his, hers, ours, theirs) zeigen Besitz an und stehen allein, ohne ein Nomen danach.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>Possessivpronomen</b> stehen <b>allein</b> und ersetzen ein Nomen: <span class=\"ex\">This book is mine.</span></li><li>Sie heißen: <b>mine, yours, his, hers, ours, theirs</b> <span class=\"ex\">Whose pen is this? It's hers.</span></li><li>Verwechsle sie nicht mit <b>Possessivbegleitern</b> (my, your, her ...), die <b>vor</b> einem Nomen stehen: <span class=\"ex\">my car</span> vs. <span class=\"ex\">mine</span></li><li>Es gibt <b>kein \"its\"</b> als Possessivpronomen und <b>keinen Apostroph</b>: nicht \"your's\", sondern <span class=\"ex\">yours</span></li><li>Oft nach dem Verb <b>to be</b> oder bei <b>Whose ...?</b>-Fragen: <span class=\"ex\">Whose keys are these? They're ours.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Is this your jacket? Yes, it's ___.",
      "optionen": [
        "my",
        "mine",
        "mine's"
      ],
      "richtig": 1,
      "erklaerung": "Nach 'to be' und ohne folgendes Nomen steht das Possessivpronomen 'mine', nicht der Begleiter 'my'."
    },
    {
      "type": "mc",
      "frage": "These seats are ___. We booked them yesterday.",
      "optionen": [
        "ours",
        "our",
        "us"
      ],
      "richtig": 0,
      "erklaerung": "'ours' ist das Possessivpronomen zu 'we' und steht allein nach dem Verb."
    },
    {
      "type": "mc",
      "frage": "Whose phone is ringing? I think it's ___.",
      "optionen": [
        "her",
        "she",
        "hers"
      ],
      "richtig": 2,
      "erklaerung": "'hers' ist das Possessivpronomen zu 'she'; 'her' wäre ein Begleiter und braucht ein Nomen."
    },
    {
      "type": "mc",
      "frage": "My dog is friendly, but ___ barks all the time.",
      "optionen": [
        "their",
        "theirs",
        "them"
      ],
      "richtig": 1,
      "erklaerung": "'theirs' ersetzt 'their dog' und steht allein als Subjekt."
    },
    {
      "type": "gap",
      "frage": "I forgot my umbrella. Can I borrow ___? (you)",
      "richtig": [
        "yours"
      ],
      "erklaerung": "Das Possessivpronomen zu 'you' ist 'yours' und ersetzt hier 'your umbrella'."
    },
    {
      "type": "gap",
      "frage": "This isn't my coat. ___ is blue, not black. (I)",
      "richtig": [
        "Mine",
        "mine"
      ],
      "erklaerung": "'Mine' ersetzt 'my coat' und steht hier allein als Subjekt am Satzanfang."
    },
    {
      "type": "gap",
      "frage": "Our garden is small, but ___ is huge. (they)",
      "richtig": [
        "theirs"
      ],
      "erklaerung": "'theirs' ist das Possessivpronomen zu 'they' und steht ohne Nomen."
    },
    {
      "type": "gap",
      "frage": "He says this bike is ___, but I'm not sure. (he)",
      "richtig": [
        "his"
      ],
      "erklaerung": "Bei 'he' ist die Form 'his' sowohl Begleiter als auch Possessivpronomen; hier steht es allein."
    },
    {
      "type": "transform",
      "frage": "Schreibe den Satz mit einem Possessivpronomen um: This is my car.",
      "richtig": [
        "This car is mine.",
        "This car is mine"
      ],
      "erklaerung": "Aus dem Begleiter 'my' + Nomen wird das Possessivpronomen 'mine', das allein steht."
    },
    {
      "type": "transform",
      "frage": "Schreibe den Satz mit einem Possessivpronomen um: These are your books.",
      "richtig": [
        "These books are yours.",
        "These books are yours"
      ],
      "erklaerung": "'your books' wird zu 'yours'; das Verb passt sich an den Plural 'books are' an."
    },
    {
      "type": "transform",
      "frage": "Schreibe den Satz mit einem Possessivpronomen um: It is our house.",
      "richtig": [
        "This house is ours.",
        "The house is ours.",
        "It is ours.",
        "It's ours.",
        "This house is ours",
        "The house is ours",
        "It is ours",
        "It's ours"
      ],
      "erklaerung": "'our house' wird zum Possessivpronomen 'ours', das allein nach 'to be' steht."
    }
  ]
};
