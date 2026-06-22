/* Thema 8: Personal pronouns – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Personal pronouns",
  "intro": "Personalpronomen ersetzen Personen oder Dinge im Satz und unterscheiden sich danach, ob sie das Subjekt oder das Objekt einer Handlung sind.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Als <b>Subjekt</b> (wer/was handelt) stehen: <b>I, you, he, she, it, we, they</b> <span class=\"ex\">She likes coffee.</span></li><li>Als <b>Objekt</b> (wen/was) stehen: <b>me, you, him, her, it, us, them</b> <span class=\"ex\">I called him yesterday.</span></li><li><b>he</b> für Männer, <b>she</b> für Frauen, <b>it</b> für Dinge/Tiere, <b>they</b> für Mehrzahl <span class=\"ex\">The books are old; they are heavy.</span></li><li>Nach Präpositionen (with, for, to ...) steht immer die <b>Objektform</b> <span class=\"ex\">This present is for you and me.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct pronoun: ___ is my best friend. She is very kind.",
      "optionen": [
        "Her",
        "She",
        "Hers"
      ],
      "richtig": 1,
      "erklaerung": "Als Subjekt des Satzes (wer ist mein Freund?) steht die Subjektform 'She'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct pronoun: Can you help ___? I can't open this box.",
      "optionen": [
        "I",
        "my",
        "me"
      ],
      "richtig": 2,
      "erklaerung": "Nach dem Verb 'help' steht das Objekt, also die Objektform 'me'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct pronoun: Tom and Lisa are here. ___ are waiting outside.",
      "optionen": [
        "They",
        "Them",
        "We"
      ],
      "richtig": 0,
      "erklaerung": "Tom und Lisa sind mehrere Personen und das Subjekt; daher 'They'."
    },
    {
      "type": "gap",
      "frage": "Where is the dog? ___ is sleeping under the table.",
      "richtig": [
        "It",
        "it"
      ],
      "erklaerung": "Ein Tier/Ding als Subjekt wird mit 'It' ersetzt."
    },
    {
      "type": "gap",
      "frage": "I really like your parents. Please say hello to ___ from me.",
      "richtig": [
        "them"
      ],
      "erklaerung": "Nach der Präposition 'to' steht die Objektform; für die Eltern (Mehrzahl) ist das 'them'."
    },
    {
      "type": "gap",
      "frage": "My sister loves music. ___ plays the guitar every day.",
      "richtig": [
        "She",
        "she"
      ],
      "erklaerung": "Die Schwester ist weiblich und das Subjekt; daher 'She'."
    },
    {
      "type": "gap",
      "frage": "This cake is delicious. Can you give ___ another piece, please?",
      "richtig": [
        "me"
      ],
      "erklaerung": "Nach 'give' steht hier das Objekt (wem?); die sprechende Person sagt 'me'."
    },
    {
      "type": "transform",
      "frage": "Ersetze die unterstrichenen Wörter durch ein Personalpronomen: My brother and I went to the park.",
      "richtig": [
        "We went to the park.",
        "We went to the park"
      ],
      "erklaerung": "'My brother and I' als Subjekt wird durch 'We' ersetzt."
    },
    {
      "type": "transform",
      "frage": "Ersetze die unterstrichenen Wörter durch ein Personalpronomen: I saw Mr. Jones at the station.",
      "richtig": [
        "I saw him at the station.",
        "I saw him at the station"
      ],
      "erklaerung": "'Mr. Jones' ist hier das Objekt (männlich); daher 'him'."
    },
    {
      "type": "transform",
      "frage": "Ersetze die unterstrichenen Wörter durch Personalpronomen: Anna and Sophie helped the children.",
      "richtig": [
        "They helped them.",
        "They helped them"
      ],
      "erklaerung": "'Anna and Sophie' (Subjekt) wird zu 'They', 'the children' (Objekt) wird zu 'them'."
    }
  ]
};
