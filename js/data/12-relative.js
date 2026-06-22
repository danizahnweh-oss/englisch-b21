/* Thema 12: Relative pronouns and clauses. */
const QUIZ_DATA = {
  "title": "Relative pronouns and clauses",
  "intro": "who/which/that/whose/where und der Unterschied defining vs. non-defining.",
  "explain": "\n    <h2>Kurz erklärt</h2>\n    <ul>\n      <li><b>who</b> Personen, <b>which</b> Sachen, <b>that</b> beides (nur defining),\n        <b>whose</b> Besitz, <b>where</b> Ort.\n        <span class=\"ex\">the man who… / the book which… / the girl whose…</span></li>\n      <li><b>Defining</b> (notwendig, kein Komma): sagt, <i>welche</i> Person/Sache.\n        <span class=\"ex\">The book that I bought is great.</span></li>\n      <li><b>Non-defining</b> (Zusatzinfo, mit Kommas, kein „that“):\n        <span class=\"ex\">My brother, who lives in Rome, is a chef.</span></li>\n      <li>In defining clauses kann das Objekt-Pronomen wegfallen.\n        <span class=\"ex\">the film (that) I saw</span></li>\n    </ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct relative pronoun: The woman ___ lives next door is a doctor.",
      "optionen": [
        "who",
        "which",
        "where"
      ],
      "richtig": 0,
      "erklaerung": "Für Personen benutzt man 'who'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct relative pronoun: I have a book ___ explains everything.",
      "optionen": [
        "who",
        "which",
        "whose"
      ],
      "richtig": 1,
      "erklaerung": "Für Sachen/Dinge benutzt man 'which'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct relative pronoun: That is the boy ___ won the race.",
      "optionen": [
        "which",
        "whose",
        "who"
      ],
      "richtig": 2,
      "erklaerung": "'who' bezieht sich auf eine Person als Subjekt."
    },
    {
      "type": "gap",
      "frage": "The car ___ is parked outside belongs to my uncle. (Relativpronomen für Sachen)",
      "richtig": [
        "which",
        "that"
      ],
      "erklaerung": "Für Dinge sind 'which' oder 'that' möglich."
    },
    {
      "type": "gap",
      "frage": "This is the teacher ___ helped me with my homework. (Relativpronomen für Personen)",
      "richtig": [
        "who",
        "that"
      ],
      "erklaerung": "Für Personen kann man 'who' oder 'that' verwenden."
    },
    {
      "type": "mc",
      "frage": "Choose the correct word: A hospital is a place ___ doctors work.",
      "optionen": [
        "which",
        "where",
        "who"
      ],
      "richtig": 1,
      "erklaerung": "'where' bezieht sich auf einen Ort."
    },
    {
      "type": "mc",
      "frage": "Choose the correct word: Monday is the day ___ the new shop opens.",
      "optionen": [
        "when",
        "where",
        "who"
      ],
      "richtig": 0,
      "erklaerung": "'when' bezieht sich auf eine Zeit/einen Tag."
    },
    {
      "type": "gap",
      "frage": "That's the girl ___ bag was stolen. (Relativpronomen für Besitz)",
      "richtig": [
        "whose"
      ],
      "erklaerung": "'whose' drückt Besitz aus (dessen/deren)."
    },
    {
      "type": "mc",
      "frage": "Choose the correct relative pronoun: My neighbour, ___ is 80, still goes jogging.",
      "optionen": [
        "which",
        "who",
        "where"
      ],
      "richtig": 1,
      "erklaerung": "Auch im nicht-bestimmenden Satz für Personen 'who'."
    },
    {
      "type": "gap",
      "frage": "London is a city ___ I would love to live one day. (Relativadverb für Ort)",
      "richtig": [
        "where"
      ],
      "erklaerung": "'where' steht für 'in der/an dem' bei Orten."
    },
    {
      "type": "mc",
      "frage": "Choose the correct relative pronoun: The film ___ we watched last night was boring.",
      "optionen": [
        "who",
        "which",
        "whose"
      ],
      "richtig": 1,
      "erklaerung": "Für eine Sache (film) benutzt man 'which' (oder that)."
    },
    {
      "type": "gap",
      "frage": "Do you remember the summer ___ we went to Italy? (Relativadverb für Zeit)",
      "richtig": [
        "when"
      ],
      "erklaerung": "'when' bezieht sich auf einen Zeitpunkt/Zeitraum."
    },
    {
      "type": "mc",
      "frage": "Which sentence allows leaving out the relative pronoun? Choose the one where it can be omitted.",
      "optionen": [
        "The man who called you is here.",
        "The book that I bought is new.",
        "The girl who sings is my sister."
      ],
      "richtig": 1,
      "erklaerung": "Das Relativpronomen kann entfallen, wenn es Objekt ist: 'The book I bought'."
    },
    {
      "type": "gap",
      "frage": "The students ___ passed the exam were very happy. (Subjekt-Relativpronomen, Personen)",
      "richtig": [
        "who",
        "that"
      ],
      "erklaerung": "Als Subjekt für Personen 'who' oder 'that'."
    },
    {
      "type": "transform",
      "frage": "Verbinde zu EINEM Satz mit Relativsatz: 'This is the house. My grandparents built it.'",
      "richtig": [
        "This is the house which my grandparents built.",
        "This is the house that my grandparents built.",
        "This is the house my grandparents built."
      ],
      "erklaerung": "'it' wird zum Objekt-Relativpronomen (which/that) und kann entfallen."
    },
    {
      "type": "transform",
      "frage": "Verbinde zu EINEM Satz: 'I met a man. His brother is a famous actor.'",
      "richtig": [
        "I met a man whose brother is a famous actor."
      ],
      "erklaerung": "'his' wird zu 'whose' (Besitz)."
    },
    {
      "type": "mc",
      "frage": "Choose the correct relative pronoun: The reason ___ he left is still unclear.",
      "optionen": [
        "why",
        "where",
        "who"
      ],
      "richtig": 0,
      "erklaerung": "Nach 'reason' steht 'why'."
    },
    {
      "type": "gap",
      "frage": "She gave me everything ___ I needed. (nach 'everything' steht meist nicht 'which')",
      "richtig": [
        "that"
      ],
      "erklaerung": "Nach 'everything/all/something' benutzt man 'that', nicht 'which'."
    },
    {
      "type": "transform",
      "frage": "Verbinde zu EINEM Satz: 'That is the café. We first met there.'",
      "richtig": [
        "That is the café where we first met.",
        "That is the café where we first met there."
      ],
      "erklaerung": "Ort + Relativsatz: 'where' ersetzt 'there'."
    },
    {
      "type": "mc",
      "frage": "Defining or non-defining? Choose the correctly punctuated NON-defining clause.",
      "optionen": [
        "My sister who lives in Berlin is a nurse.",
        "My sister, who lives in Berlin, is a nurse.",
        "My sister, that lives in Berlin, is a nurse."
      ],
      "richtig": 1,
      "erklaerung": "Nicht-bestimmende Sätze stehen in Kommas und nutzen nicht 'that'."
    },
    {
      "type": "gap",
      "frage": "The hotel ___ we stayed last year has closed down. (Relativadverb für Ort)",
      "richtig": [
        "where"
      ],
      "erklaerung": "'where' = 'at which'; ersetzt Präposition + Pronomen."
    },
    {
      "type": "mc",
      "frage": "Choose the most natural formal option: The colleague to ___ I spoke was very helpful.",
      "optionen": [
        "who",
        "whom",
        "which"
      ],
      "richtig": 1,
      "erklaerung": "Nach einer Präposition steht im formellen Englisch 'whom'."
    },
    {
      "type": "transform",
      "frage": "Verbinde zu EINEM Satz mit nicht-bestimmendem Relativsatz (mit Kommas): 'Mr Brown is retiring. He has worked here for 30 years.'",
      "richtig": [
        "Mr Brown, who has worked here for 30 years, is retiring."
      ],
      "erklaerung": "Zusatzinformation über eine bekannte Person mit 'who' und Kommas."
    },
    {
      "type": "gap",
      "frage": "This is the moment ___ everything changed. (Relativadverb für Zeit)",
      "richtig": [
        "when"
      ],
      "erklaerung": "'when' bezieht sich auf 'moment' (Zeit)."
    },
    {
      "type": "mc",
      "frage": "Choose the correct option: He lost his keys, ___ made him late.",
      "optionen": [
        "that",
        "which",
        "what"
      ],
      "richtig": 1,
      "erklaerung": "'which' bezieht sich auf den ganzen vorherigen Satz; 'that' geht hier nicht."
    },
    {
      "type": "transform",
      "frage": "Verbinde zu EINEM Satz: 'The bridge was built in 1890. It collapsed yesterday.'",
      "richtig": [
        "The bridge which was built in 1890 collapsed yesterday.",
        "The bridge that was built in 1890 collapsed yesterday.",
        "The bridge, which was built in 1890, collapsed yesterday."
      ],
      "erklaerung": "'it' (Subjekt, Sache) wird zu 'which/that'."
    },
    {
      "type": "gap",
      "frage": "There are many people ___ I would like to thank tonight. (Objekt-Relativpronomen, Personen – nenne EINE mögliche Form)",
      "richtig": [
        "who",
        "that",
        "whom"
      ],
      "erklaerung": "Als Objekt für Personen: who/that/whom (oder weglassbar)."
    },
    {
      "type": "mc",
      "frage": "Choose the sentence where 'that' is correct (not 'which'): ",
      "optionen": [
        "My phone, that is new, is broken.",
        "Is there anything that I can do?",
        "Paris, that is in France, is lovely."
      ],
      "richtig": 1,
      "erklaerung": "Nach 'anything' und in bestimmenden Sätzen ist 'that' korrekt; nicht in Komma-Sätzen."
    },
    {
      "type": "transform",
      "frage": "Verbinde zu EINEM Satz mit reduziertem Relativsatz (ohne Relativpronomen + Hilfsverb): 'The people. They were invited to the party. They didn't come.' Nutze 'invited'.",
      "richtig": [
        "The people invited to the party didn't come.",
        "The people who were invited to the party didn't come.",
        "The people that were invited to the party didn't come."
      ],
      "erklaerung": "Passiv-Relativsatz kann zu Partizip verkürzt werden: 'who were invited' -> 'invited'."
    },
    {
      "type": "transform",
      "frage": "Verbinde zu EINEM formellen Satz mit Präposition vorangestellt: 'The author wrote this novel. We are talking about her.'",
      "richtig": [
        "The author about whom we are talking wrote this novel.",
        "The author about whom we are talking wrote this novel.",
        "The author who we are talking about wrote this novel.",
        "The author that we are talking about wrote this novel.",
        "The author we are talking about wrote this novel."
      ],
      "erklaerung": "Formell: 'about whom'; informell: '... who/that we are talking about' oder ohne Pronomen."
    },
    {
      "type": "mc",
      "frage": "Choose the correct non-defining relative pronoun: We visited Edinburgh, ___ is the capital of Scotland.",
      "optionen": [
        "that",
        "which",
        "who"
      ],
      "richtig": 1,
      "erklaerung": "Eigenname + Zusatzinfo (Ort als Sache) -> 'which', nie 'that' im Komma-Satz."
    }
  ]
};
