/* Thema 13: Reflexive pronouns – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Reflexive pronouns",
  "intro": "Reflexivpronomen (myself, yourself, himself ...) verwendet man, wenn Subjekt und Objekt dieselbe Person sind.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Reflexivpronomen zeigen, dass jemand etwas <b>mit sich selbst</b> tut: <span class=\"ex\">She hurt herself.</span></li><li>Die Formen: <b>myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</b>. <span class=\"ex\">We made it ourselves.</span></li><li><b>by + reflexiv</b> bedeutet \"allein / ohne Hilfe\": <span class=\"ex\">He did it by himself.</span></li><li>Manche Verben sind im Englischen <b>nicht</b> reflexiv, anders als im Deutschen: <span class=\"ex\">I feel good.</span> (nicht \"feel myself\")</li><li>Zur Betonung steht das Pronomen oft am Satzende: <span class=\"ex\">The teacher told me herself.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct reflexive pronoun: \"Tom cut ___ while cooking.\"",
      "optionen": [
        "himself",
        "hisself",
        "him"
      ],
      "richtig": 0,
      "erklaerung": "\"Tom\" ist maskulin Singular, also \"himself\". \"Hisself\" existiert nicht."
    },
    {
      "type": "mc",
      "frage": "Choose the correct reflexive pronoun: \"The children dressed ___ very quickly.\"",
      "optionen": [
        "themselves",
        "theirselves",
        "themself"
      ],
      "richtig": 0,
      "erklaerung": "Plural \"children\" verlangt \"themselves\". \"Theirselves\" und \"themself\" sind hier falsch."
    },
    {
      "type": "mc",
      "frage": "Choose the correct option: \"Did you paint the room ___?\" (= without help)",
      "optionen": [
        "by yourself",
        "by yourselfs",
        "yourself by"
      ],
      "richtig": 0,
      "erklaerung": "\"by yourself\" heißt \"allein/ohne Hilfe\". Der Plural von self ist \"selves\", nie \"selfs\"."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"I taught ___ how to play the guitar.\"",
      "richtig": [
        "myself"
      ],
      "erklaerung": "Subjekt \"I\", deshalb das Reflexivpronomen \"myself\"."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"The cat washed ___ in the sun.\"",
      "richtig": [
        "itself"
      ],
      "erklaerung": "Für ein Tier/Ding im Singular verwendet man \"itself\"."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"Help ___ to some cake, everyone!\" (talking to several people)",
      "richtig": [
        "yourselves"
      ],
      "erklaerung": "\"everyone\" wird hier als mehrere Personen angesprochen, daher Plural \"yourselves\"."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"We organised the whole party ___.\" (= alone, without help)",
      "richtig": [
        "ourselves",
        "by ourselves"
      ],
      "erklaerung": "Subjekt \"we\" verlangt \"ourselves\"; \"by ourselves\" betont \"ohne Hilfe\"."
    },
    {
      "type": "transform",
      "frage": "Rewrite using a reflexive pronoun: \"She made the dress without any help.\"",
      "richtig": [
        "She made the dress herself.",
        "She made the dress by herself."
      ],
      "erklaerung": "\"without any help\" wird durch \"herself\" bzw. \"by herself\" ausgedrückt."
    },
    {
      "type": "transform",
      "frage": "Complete with the correct reflexive pronoun: \"You should be proud of ___.\" (talking to one person)",
      "richtig": [
        "You should be proud of yourself.",
        "yourself"
      ],
      "erklaerung": "Eine Person als \"you\" angesprochen verlangt das Singular \"yourself\"."
    },
    {
      "type": "transform",
      "frage": "Rewrite using a reflexive pronoun for emphasis: \"The president wrote the speech. (He did it personally.)\"",
      "richtig": [
        "The president wrote the speech himself.",
        "The president himself wrote the speech."
      ],
      "erklaerung": "Zur Betonung steht \"himself\" am Satzende oder direkt nach dem Subjekt."
    }
  ]
};
