/* Thema 38: Questions – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Questions",
  "intro": "Fragen im Englischen bildest du meistens mit einem Hilfsverb (do/does/did, be, can, have) und der richtigen Wortstellung.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Bei den meisten Vollverben brauchst du <b>do/does/did</b>: <span class=\"ex\">Do you like tea? Does she work here? Did they call?</span></li><li>Mit <b>be</b>, <b>can</b> oder <b>have got</b> wird das Verb einfach nach vorne gestellt: <span class=\"ex\">Are you ready? Can he swim? Have you got a car?</span></li><li>Bei <b>W-Fragen</b> steht das Fragewort vorne: <span class=\"ex\">Where do you live? What is your name?</span></li><li>Fragt das Fragewort nach dem <b>Subjekt</b>, brauchst du kein do/does/did: <span class=\"ex\">Who lives here? What happened?</span></li><li><b>Question tags</b> hängst du an: positiver Satz → negatives Tag: <span class=\"ex\">She is nice, isn't she?</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "___ your sister speak French?",
      "optionen": [
        "Do",
        "Does",
        "Is"
      ],
      "richtig": 1,
      "erklaerung": "Bei der 3. Person Singular (your sister) und dem Vollverb 'speak' brauchst du 'Does'."
    },
    {
      "type": "mc",
      "frage": "___ you at home yesterday evening?",
      "optionen": [
        "Did",
        "Were",
        "Was"
      ],
      "richtig": 1,
      "erklaerung": "'you' verlangt im Past 'were'. Bei 'be' steht das Verb direkt vorne, kein 'did'."
    },
    {
      "type": "mc",
      "frage": "___ happened after the game?",
      "optionen": [
        "What did",
        "What",
        "What does"
      ],
      "richtig": 1,
      "erklaerung": "'What' fragt hier nach dem Subjekt, deshalb kein 'did': 'What happened?'"
    },
    {
      "type": "gap",
      "frage": "___ you like coffee or tea?",
      "richtig": [
        "Do"
      ],
      "erklaerung": "Bei 'you' und dem Vollverb 'like' im Present brauchst du das Hilfsverb 'Do'."
    },
    {
      "type": "gap",
      "frage": "Where ___ he go last weekend?",
      "richtig": [
        "did"
      ],
      "erklaerung": "'last weekend' zeigt Vergangenheit, also 'did' + Grundform 'go'."
    },
    {
      "type": "gap",
      "frage": "She is a teacher, ___ she?",
      "richtig": [
        "isn't",
        "isn’t",
        "is not"
      ],
      "erklaerung": "Positiver Satz mit 'is' bekommt ein negatives Question Tag: 'isn't she?'"
    },
    {
      "type": "gap",
      "frage": "___ can you swim? – For about thirty minutes.",
      "richtig": [
        "How long"
      ],
      "erklaerung": "Die Antwort nennt eine Dauer, also fragt man mit 'How long'."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Frage: You are coming to the party.",
      "richtig": [
        "Are you coming to the party?"
      ],
      "erklaerung": "Bei 'be' (are) stellst du das Verb einfach vor das Subjekt: 'Are you coming to the party?'"
    },
    {
      "type": "transform",
      "frage": "Bilde eine Frage: They watched a film. (Frage nach 'a film' mit 'What')",
      "richtig": [
        "What did they watch?"
      ],
      "erklaerung": "W-Frage im Past: Fragewort + 'did' + Subjekt + Grundform: 'What did they watch?'"
    },
    {
      "type": "transform",
      "frage": "Bilde eine Frage: Tom has got a new bike.",
      "richtig": [
        "Has Tom got a new bike?",
        "Does Tom have a new bike?"
      ],
      "erklaerung": "Mit 'have got' wird 'has' nach vorne gestellt: 'Has Tom got a new bike?' Auch 'Does Tom have...?' ist korrekt."
    },
    {
      "type": "mc",
      "frage": "You won't be late, ___?",
      "optionen": [
        "will you",
        "won't you",
        "do you"
      ],
      "richtig": 0,
      "erklaerung": "Negativer Satz ('won't') bekommt ein positives Tag: 'will you?'"
    }
  ]
};
