/* Thema 8: Personal pronouns – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Personal pronouns",
  "intro": "Personalpronomen ersetzen Personen oder Dinge im Satz und unterscheiden sich danach, ob sie das Subjekt oder das Objekt einer Handlung sind.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Als <b>Subjekt</b> (wer/was handelt) stehen: <b>I, you, he, she, it, we, they</b> <span class=\"ex\">She likes coffee.</span></li><li>Als <b>Objekt</b> (wen/was) stehen: <b>me, you, him, her, it, us, them</b> <span class=\"ex\">I called him yesterday.</span></li><li><b>he</b> für Männer, <b>she</b> für Frauen, <b>it</b> für Dinge/Tiere, <b>they</b> für Mehrzahl <span class=\"ex\">The books are old; they are heavy.</span></li><li>Nach Präpositionen (with, for, to ...) steht immer die <b>Objektform</b> <span class=\"ex\">This present is for you and me.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct subject pronoun: ___ am a student.",
      "optionen": [
        "I",
        "Me",
        "My"
      ],
      "richtig": 0,
      "erklaerung": "Subjektpronomen der 1. Person Singular ist 'I'."
    },
    {
      "type": "gap",
      "frage": "This is my brother. ___ is twelve years old.",
      "richtig": [
        "He"
      ],
      "erklaerung": "Fuer eine maennliche Person benutzt man 'He'."
    },
    {
      "type": "mc",
      "frage": "Look at the bird. ___ is singing.",
      "optionen": [
        "He",
        "It",
        "She"
      ],
      "richtig": 1,
      "erklaerung": "Fuer Tiere/Dinge ohne bekanntes Geschlecht benutzt man 'It'."
    },
    {
      "type": "gap",
      "frage": "My sister loves music. ___ plays the piano every day.",
      "richtig": [
        "She"
      ],
      "erklaerung": "Fuer eine weibliche Person benutzt man 'She'."
    },
    {
      "type": "mc",
      "frage": "Tom and I are friends. ___ play football together.",
      "optionen": [
        "They",
        "We",
        "You"
      ],
      "richtig": 1,
      "erklaerung": "'Tom and I' = 'We' (1. Person Plural)."
    },
    {
      "type": "gap",
      "frage": "Where are my keys? ___ are on the table.",
      "richtig": [
        "They"
      ],
      "erklaerung": "Fuer einen Plural von Dingen benutzt man 'They'."
    },
    {
      "type": "mc",
      "frage": "Can you help me? ___ need your support.",
      "optionen": [
        "I",
        "Me",
        "We"
      ],
      "richtig": 0,
      "erklaerung": "Als Subjekt des Satzes steht 'I'."
    },
    {
      "type": "gap",
      "frage": "Anna and Lisa are late. ___ missed the bus.",
      "richtig": [
        "They"
      ],
      "erklaerung": "Zwei Personen werden mit 'They' aufgenommen."
    },
    {
      "type": "mc",
      "frage": "Choose the correct object pronoun: Please call ___ tonight (the speaker).",
      "optionen": [
        "I",
        "me",
        "my"
      ],
      "richtig": 1,
      "erklaerung": "Nach dem Verb steht das Objektpronomen 'me'."
    },
    {
      "type": "gap",
      "frage": "I like this song. Can you play ___ again? (the song)",
      "richtig": [
        "it"
      ],
      "erklaerung": "Ein Ding als Objekt wird mit 'it' ersetzt."
    },
    {
      "type": "mc",
      "frage": "That's Peter. Do you know ___?",
      "optionen": [
        "he",
        "him",
        "his"
      ],
      "richtig": 1,
      "erklaerung": "Als Objekt von 'know' steht 'him'."
    },
    {
      "type": "gap",
      "frage": "Sarah is nice. I often talk to ___.",
      "richtig": [
        "her"
      ],
      "erklaerung": "Objektpronomen fuer eine weibliche Person ist 'her'."
    },
    {
      "type": "mc",
      "frage": "These books are great. I want to read ___.",
      "optionen": [
        "they",
        "them",
        "their"
      ],
      "richtig": 1,
      "erklaerung": "Plural-Objektpronomen ist 'them'."
    },
    {
      "type": "transform",
      "frage": "Ersetze die unterstrichenen Woerter durch ein Subjektpronomen: 'My parents live in Berlin.'",
      "richtig": [
        "They live in Berlin.",
        "They live in Berlin"
      ],
      "erklaerung": "'My parents' (Plural Personen) wird zu 'They'."
    },
    {
      "type": "transform",
      "frage": "Ersetze die unterstrichenen Woerter durch ein Objektpronomen: 'I gave the present to my mother.'",
      "richtig": [
        "I gave the present to her.",
        "I gave the present to her"
      ],
      "erklaerung": "'my mother' wird zum Objektpronomen 'her'."
    },
    {
      "type": "mc",
      "frage": "Excuse me, can ___ tell me the time? (talking to one person)",
      "optionen": [
        "you",
        "they",
        "it"
      ],
      "richtig": 0,
      "erklaerung": "Zur direkten Anrede einer Person benutzt man 'you'."
    },
    {
      "type": "gap",
      "frage": "My dog is hungry. I will feed ___ now.",
      "richtig": [
        "it",
        "him",
        "her"
      ],
      "erklaerung": "Ein Tier wird meist mit 'it' ersetzt; bei bekanntem Geschlecht auch 'him'/'her'."
    },
    {
      "type": "transform",
      "frage": "Ersetze beide Substantive durch Pronomen: 'Mark helped the children.'",
      "richtig": [
        "He helped them.",
        "He helped them"
      ],
      "erklaerung": "'Mark' wird Subjekt 'He', 'the children' Objekt 'them'."
    },
    {
      "type": "mc",
      "frage": "It's a heavy box. Can you carry ___ for me?",
      "optionen": [
        "it",
        "him",
        "them"
      ],
      "richtig": 0,
      "erklaerung": "Ein einzelnes Ding ('box') ist 'it'."
    },
    {
      "type": "gap",
      "frage": "You and Tom did great work. ___ should be proud of yourselves.",
      "richtig": [
        "You"
      ],
      "erklaerung": "'You and Tom' wird als Subjekt zu 'You' (Plural)."
    },
    {
      "type": "mc",
      "frage": "Between you and ___, this is a secret.",
      "optionen": [
        "I",
        "me",
        "my"
      ],
      "richtig": 1,
      "erklaerung": "Nach der Praeposition 'between' steht das Objektpronomen 'me'."
    },
    {
      "type": "gap",
      "frage": "The students worked hard, so the teacher praised ___.",
      "richtig": [
        "them"
      ],
      "erklaerung": "'The students' als Objekt wird zu 'them'."
    },
    {
      "type": "transform",
      "frage": "Ersetze die Substantive durch Pronomen: 'Emma and I invited Jack and Sophie.'",
      "richtig": [
        "We invited them.",
        "We invited them"
      ],
      "erklaerung": "'Emma and I' = 'We' (Subjekt), 'Jack and Sophie' = 'them' (Objekt)."
    },
    {
      "type": "mc",
      "frage": "My grandmother is old, but ___ is still very active.",
      "optionen": [
        "it",
        "she",
        "her"
      ],
      "richtig": 1,
      "erklaerung": "Als Subjekt fuer eine weibliche Person steht 'she', nicht 'her'."
    },
    {
      "type": "gap",
      "frage": "I bought flowers for my friends and gave ___ to ___ at the party. (the flowers / the friends)",
      "richtig": [
        "them to them"
      ],
      "erklaerung": "Die Blumen = 'them' (Objekt Sache), die Freunde = 'them' (Objekt Personen)."
    },
    {
      "type": "mc",
      "frage": "Who broke the window? It was ___! (formal/standard English)",
      "optionen": [
        "I",
        "me",
        "mine"
      ],
      "richtig": 0,
      "erklaerung": "Nach 'be' verlangt formelles Englisch das Subjektpronomen: 'It was I.'"
    },
    {
      "type": "transform",
      "frage": "Ersetze die unterstrichenen Teile durch Pronomen: 'The manager told the new employees that the manager trusted the new employees.'",
      "richtig": [
        "She told them that she trusted them.",
        "He told them that he trusted them.",
        "She told them that she trusted them",
        "He told them that he trusted them"
      ],
      "erklaerung": "'The manager' = he/she, 'the new employees' = them; im zweiten Teil wird beides wiederholt."
    },
    {
      "type": "gap",
      "frage": "He gave my brother and ___ a lift home yesterday. (the speaker, as object)",
      "richtig": [
        "me"
      ],
      "erklaerung": "In 'my brother and me' steht das Objektpronomen 'me', nicht 'I'."
    },
    {
      "type": "mc",
      "frage": "Neither she nor ___ knew the answer. (standard English, as subject)",
      "optionen": [
        "I",
        "me",
        "mine"
      ],
      "richtig": 0,
      "erklaerung": "Nach 'neither...nor' als Subjekt steht 'I'."
    },
    {
      "type": "transform",
      "frage": "Forme so um, dass beide Personen durch ein Pronomen ersetzt werden: 'My colleague and I finished the report, and the boss thanked my colleague and me.'",
      "richtig": [
        "We finished the report, and the boss thanked us.",
        "We finished the report and the boss thanked us.",
        "We finished the report, and the boss thanked us"
      ],
      "erklaerung": "'My colleague and I' = 'We' (Subjekt), 'my colleague and me' = 'us' (Objekt)."
    }
  ]
};
