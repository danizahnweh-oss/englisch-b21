/* Thema 38: Questions – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Questions",
  "intro": "Fragen im Englischen bildest du meistens mit einem Hilfsverb (do/does/did, be, can, have) und der richtigen Wortstellung.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Bei den meisten Vollverben brauchst du <b>do/does/did</b>: <span class=\"ex\">Do you like tea? Does she work here? Did they call?</span></li><li>Mit <b>be</b>, <b>can</b> oder <b>have got</b> wird das Verb einfach nach vorne gestellt: <span class=\"ex\">Are you ready? Can he swim? Have you got a car?</span></li><li>Bei <b>W-Fragen</b> steht das Fragewort vorne: <span class=\"ex\">Where do you live? What is your name?</span></li><li>Fragt das Fragewort nach dem <b>Subjekt</b>, brauchst du kein do/does/did: <span class=\"ex\">Who lives here? What happened?</span></li><li><b>Question tags</b> hängst du an: positiver Satz → negatives Tag: <span class=\"ex\">She is nice, isn't she?</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "___ you a teacher?",
      "optionen": [
        "Are",
        "Do",
        "Is"
      ],
      "richtig": 0,
      "erklaerung": "Bei 'to be' (you) steht die Frageform 'Are'."
    },
    {
      "type": "mc",
      "frage": "___ she like coffee?",
      "optionen": [
        "Is",
        "Does",
        "Do"
      ],
      "richtig": 1,
      "erklaerung": "Im Simple Present mit he/she/it nutzt man 'Does'."
    },
    {
      "type": "mc",
      "frage": "Where ___ you live?",
      "optionen": [
        "do",
        "are",
        "does"
      ],
      "richtig": 0,
      "erklaerung": "Mit 'you' im Simple Present steht 'do'."
    },
    {
      "type": "gap",
      "frage": "___ they at home now? (to be)",
      "richtig": [
        "Are"
      ],
      "erklaerung": "Frage mit 'to be' und 'they' bildet man mit 'Are'."
    },
    {
      "type": "gap",
      "frage": "___ he speak English? (Simple Present)",
      "richtig": [
        "Does"
      ],
      "erklaerung": "Mit he/she/it im Simple Present steht das Hilfsverb 'Does'."
    },
    {
      "type": "mc",
      "frage": "What ___ your name?",
      "optionen": [
        "is",
        "are",
        "do"
      ],
      "richtig": 0,
      "erklaerung": "'name' ist Singular, daher 'is'."
    },
    {
      "type": "gap",
      "frage": "Frage nach der Zeit: '___ time is it?'",
      "richtig": [
        "What"
      ],
      "erklaerung": "Nach der Uhrzeit fragt man mit 'What time'."
    },
    {
      "type": "transform",
      "frage": "Mache eine Frage: 'You can swim.'",
      "richtig": [
        "Can you swim?"
      ],
      "erklaerung": "Bei Modalverben wird das Verb (can) nach vorn gestellt."
    },
    {
      "type": "mc",
      "frage": "___ many brothers do you have?",
      "optionen": [
        "How",
        "What",
        "Who"
      ],
      "richtig": 0,
      "erklaerung": "Nach der Anzahl fragt man mit 'How many'."
    },
    {
      "type": "gap",
      "frage": "___ are you late? - Because I missed the bus.",
      "richtig": [
        "Why"
      ],
      "erklaerung": "Nach dem Grund fragt man mit 'Why'."
    },
    {
      "type": "transform",
      "frage": "Mache eine Frage: 'She is reading a book.'",
      "richtig": [
        "Is she reading a book?"
      ],
      "erklaerung": "Im Present Progressive wird 'is' nach vorn gestellt."
    },
    {
      "type": "mc",
      "frage": "___ did you go yesterday?",
      "optionen": [
        "Where",
        "Where do",
        "Where does"
      ],
      "richtig": 0,
      "erklaerung": "Im Simple Past steht 'did', also nur 'Where' davor."
    },
    {
      "type": "gap",
      "frage": "What ___ you do last weekend? (Simple Past)",
      "richtig": [
        "did"
      ],
      "erklaerung": "Im Simple Past bildet man Fragen mit dem Hilfsverb 'did'."
    },
    {
      "type": "transform",
      "frage": "Mache eine Frage: 'They went to London.' (Frage nach dem Ort)",
      "richtig": [
        "Where did they go?"
      ],
      "erklaerung": "Mit 'Where' und Hilfsverb 'did' im Simple Past."
    },
    {
      "type": "gap",
      "frage": "___ is your favourite colour? - Blue.",
      "richtig": [
        "What"
      ],
      "erklaerung": "Nach einer Sache/Wahl fragt man mit 'What'."
    },
    {
      "type": "mc",
      "frage": "___ does the film start? - At 8 p.m.",
      "optionen": [
        "What time",
        "How long",
        "How often"
      ],
      "richtig": 0,
      "erklaerung": "Nach dem Zeitpunkt fragt man mit 'What time'."
    },
    {
      "type": "transform",
      "frage": "Mache eine Frage: 'He has finished his homework.' (Present Perfect)",
      "richtig": [
        "Has he finished his homework?"
      ],
      "erklaerung": "Im Present Perfect wird 'has' nach vorn gestellt."
    },
    {
      "type": "gap",
      "frage": "___ have you lived here? - For ten years.",
      "richtig": [
        "How long"
      ],
      "erklaerung": "Nach der Dauer fragt man mit 'How long'."
    },
    {
      "type": "mc",
      "frage": "___ book is this? - It's mine.",
      "optionen": [
        "Whose",
        "Who's",
        "Who"
      ],
      "richtig": 0,
      "erklaerung": "Nach dem Besitzer fragt man mit 'Whose'."
    },
    {
      "type": "transform",
      "frage": "Mache eine Frage: 'You will come to the party.'",
      "richtig": [
        "Will you come to the party?"
      ],
      "erklaerung": "Im Future mit 'will' wird 'will' nach vorn gestellt."
    },
    {
      "type": "gap",
      "frage": "Subjektfrage: '___ broke the window?' - Tom did.",
      "richtig": [
        "Who"
      ],
      "erklaerung": "Bei einer Subjektfrage mit 'Who' braucht man kein 'did': Who broke...?"
    },
    {
      "type": "mc",
      "frage": "Who ___ you at the station? - My uncle did.",
      "optionen": [
        "met",
        "did meet",
        "does meet"
      ],
      "richtig": 0,
      "erklaerung": "Bei der Subjektfrage 'Who' steht das Verb direkt im Past: 'met'."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Subjektfrage nach dem Subjekt: 'Anna called the police.'",
      "richtig": [
        "Who called the police?"
      ],
      "erklaerung": "Subjektfrage mit 'Who' ohne Hilfsverb: das Verb bleibt im Past."
    },
    {
      "type": "gap",
      "frage": "___ often do you go to the gym? - Twice a week.",
      "richtig": [
        "How"
      ],
      "erklaerung": "Nach der Häufigkeit fragt man mit 'How often'."
    },
    {
      "type": "mc",
      "frage": "You're a doctor, ___?",
      "optionen": [
        "aren't you",
        "don't you",
        "isn't it"
      ],
      "richtig": 0,
      "erklaerung": "Question Tag: positiver Satz mit 'are' -> negativer Tag 'aren't you'."
    },
    {
      "type": "gap",
      "frage": "She doesn't like tea, ___ she? (Question Tag)",
      "richtig": [
        "does",
        "does?"
      ],
      "erklaerung": "Negativer Satz mit 'doesn't' -> positiver Tag 'does she'."
    },
    {
      "type": "transform",
      "frage": "Mache eine indirekte Frage: Beginne mit 'Could you tell me ...' - 'Where is the station?'",
      "richtig": [
        "Could you tell me where the station is?"
      ],
      "erklaerung": "In indirekten Fragen steht die normale Wortstellung: '...where the station is'."
    },
    {
      "type": "transform",
      "frage": "Mache eine indirekte Frage: Beginne mit 'Do you know ...' - 'What time does the shop open?'",
      "richtig": [
        "Do you know what time the shop opens?"
      ],
      "erklaerung": "In der indirekten Frage entfällt 'does' und das Verb wird angepasst: 'opens'."
    },
    {
      "type": "gap",
      "frage": "___ are you waiting for? - For my friend. (Präposition am Satzende)",
      "richtig": [
        "Who",
        "Whom"
      ],
      "erklaerung": "Bei 'wait for' steht das Fragewort 'Who/Whom' vorn, die Präposition 'for' am Ende."
    },
    {
      "type": "mc",
      "frage": "___ of these two jackets do you prefer?",
      "optionen": [
        "Which",
        "What",
        "Who"
      ],
      "richtig": 0,
      "erklaerung": "Bei einer Auswahl aus begrenzten Optionen nutzt man 'Which'."
    },
    {
      "type": "transform",
      "frage": "Mache eine verneinte Frage: 'You have seen this film.' (mit 'Haven't')",
      "richtig": [
        "Haven't you seen this film?"
      ],
      "erklaerung": "Verneinte Frage im Present Perfect: 'Haven't you seen ...?'"
    },
    {
      "type": "transform",
      "frage": "Mache eine Frage nach dem Subjekt mit 'What': 'Something fell off the shelf.'",
      "richtig": [
        "What fell off the shelf?"
      ],
      "erklaerung": "Subjektfrage mit 'What' ohne Hilfsverb: 'What fell ...?'"
    }
  ]
};
