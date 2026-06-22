/* Thema 32: Case – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Case",
  "intro": "Im Englischen zeigt der \"Case\" (Kasus) die Rolle eines Wortes im Satz - besonders bei Pronomen unterscheidet man Subjektform, Objektform und Possessivform.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Die <b>Subjektform</b> (I, he, she, we, they) steht vor dem Verb als handelnde Person: <span class=\"ex\">She knows the answer.</span></li><li>Die <b>Objektform</b> (me, him, her, us, them) steht nach dem Verb oder nach einer Präposition: <span class=\"ex\">I saw him.</span> / <span class=\"ex\">Give it to me.</span></li><li>Possessivbegleiter (<b>my, your, his, our</b>) stehen vor einem Nomen; Possessivpronomen (<b>mine, yours, his, ours</b>) stehen allein: <span class=\"ex\">This book is mine.</span></li><li>Besitz bei Nomen zeigt man mit dem <b>Genitiv-'s</b>: <span class=\"ex\">Anna's car</span>; bei Plural mit s nur ein Apostroph: <span class=\"ex\">the girls' room</span>.</li><li>Im formellen Englisch nutzt man <b>whom</b> als Objektform von <b>who</b>: <span class=\"ex\">To whom did you speak?</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct form: ___ gave the book to John.",
      "optionen": [
        "Her",
        "She",
        "Hers"
      ],
      "richtig": 1,
      "erklaerung": "Als Subjekt (handelnde Person vor dem Verb) braucht man die Subjektform 'She'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: Can you help ___ with the homework?",
      "optionen": [
        "I",
        "me",
        "my"
      ],
      "richtig": 1,
      "erklaerung": "Nach dem Verb 'help' steht das Objekt, daher die Objektform 'me'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: This umbrella isn't yours, it's ___.",
      "optionen": [
        "my",
        "mine",
        "me"
      ],
      "richtig": 1,
      "erklaerung": "Allein stehend (ohne folgendes Nomen) braucht man das Possessivpronomen 'mine'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: Between you and ___, the plan is risky.",
      "optionen": [
        "I",
        "me",
        "myself"
      ],
      "richtig": 1,
      "erklaerung": "Nach der Präposition 'between' steht die Objektform 'me'."
    },
    {
      "type": "gap",
      "frage": "Look at those children. ___ parents are waiting outside. (possessive of 'they')",
      "richtig": [
        "Their",
        "their"
      ],
      "erklaerung": "Vor dem Nomen 'parents' braucht man den Possessivbegleiter 'their'."
    },
    {
      "type": "gap",
      "frage": "I really like this song. Did you write it ___? (object/reflexive form of 'you')",
      "richtig": [
        "yourself"
      ],
      "erklaerung": "Das Reflexivpronomen 'yourself' verweist auf das Subjekt 'you' zurück."
    },
    {
      "type": "gap",
      "frage": "That's not my jacket. ___ is over there on the chair. (possessive pronoun of 'she')",
      "richtig": [
        "Hers",
        "hers"
      ],
      "erklaerung": "Allein stehend als Possessivpronomen von 'she' lautet die Form 'hers' (ohne Apostroph)."
    },
    {
      "type": "gap",
      "frage": "This is ___ car. (the car belonging to Thomas - use the genitive with 's)",
      "richtig": [
        "Thomas's",
        "Thomas'",
        "Thomas’s",
        "Thomas’"
      ],
      "erklaerung": "Besitz bei einem Eigennamen zeigt man mit dem Genitiv-'s: Thomas's (auch 'Thomas'' ist akzeptiert)."
    },
    {
      "type": "transform",
      "frage": "Replace the underlined words with the correct pronouns: Anna gave the keys to Anna's brother.",
      "richtig": [
        "She gave the keys to her brother.",
        "She gave the keys to her brother"
      ],
      "erklaerung": "'Anna' als Subjekt wird zu 'She'; 'Anna's' als Possessivbegleiter wird zu 'her'."
    },
    {
      "type": "transform",
      "frage": "Rewrite using a pronoun for the object: I met Tom and Lisa at the station.",
      "richtig": [
        "I met them at the station.",
        "I met them at the station"
      ],
      "erklaerung": "'Tom and Lisa' ist hier das Objekt nach 'met', daher die Objektform 'them'."
    },
    {
      "type": "transform",
      "frage": "Rewrite in formal style using 'whom': Who did you invite to the party?",
      "richtig": [
        "Whom did you invite to the party?",
        "Whom did you invite to the party"
      ],
      "erklaerung": "Als Objekt des Verbs 'invite' nutzt man im formellen Englisch die Objektform 'whom'."
    }
  ]
};
