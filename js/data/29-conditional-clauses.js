/* Thema 29: Conditional clauses – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Conditional clauses",
  "intro": "Mit Conditional clauses (Bedingungssätzen) drückst du aus, was unter bestimmten Bedingungen passiert, passieren würde oder hätte passieren können.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>Type 0</b> (allgemeine Wahrheiten): <b>if</b> + Present, dann Present. <span class=\"ex\">If you heat ice, it melts.</span></li><li><b>Type 1</b> (real, möglich in der Zukunft): <b>if</b> + Present Simple, dann <b>will</b> + Infinitiv. <span class=\"ex\">If it rains, we will stay home.</span></li><li><b>Type 2</b> (unreal, unwahrscheinlich/hypothetisch): <b>if</b> + Past Simple, dann <b>would</b> + Infinitiv. <span class=\"ex\">If I had more time, I would learn Spanish.</span></li><li><b>Type 3</b> (unreal in der Vergangenheit): <b>if</b> + Past Perfect, dann <b>would have</b> + Partizip. <span class=\"ex\">If she had studied, she would have passed.</span></li><li>Nach <b>if</b> steht nie <b>will</b> oder <b>would</b>; bei <b>I/he/she/it</b> nutzt man im Type 2 oft <b>were</b>. <span class=\"ex\">If I were you, I would apologize.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "If it ___ tomorrow, we will stay at home.",
      "optionen": [
        "rains",
        "will rain",
        "rained"
      ],
      "richtig": 0,
      "erklaerung": "Im If-Satz Typ 1 steht im if-Teil das simple present, nicht 'will'."
    },
    {
      "type": "mc",
      "frage": "If you heat ice, it ___.",
      "optionen": [
        "would melt",
        "melts",
        "will melt"
      ],
      "richtig": 1,
      "erklaerung": "Bei allgemeinen Wahrheiten (Typ 0) steht in beiden Teilen das simple present."
    },
    {
      "type": "gap",
      "frage": "If she studies hard, she ___ (pass) the exam.",
      "richtig": [
        "will pass",
        "'ll pass"
      ],
      "erklaerung": "If-Satz Typ 1: Hauptsatz mit will + Infinitiv."
    },
    {
      "type": "mc",
      "frage": "If I ___ rich, I would buy a big house.",
      "optionen": [
        "am",
        "were",
        "will be"
      ],
      "richtig": 1,
      "erklaerung": "Typ 2 beschreibt Unwirkliches; im if-Teil steht past tense, bei 'be' meist 'were'."
    },
    {
      "type": "gap",
      "frage": "We won't go to the beach if the weather ___ (be) bad.",
      "richtig": [
        "is"
      ],
      "erklaerung": "Typ 1: Im if-Satz steht simple present, auch wenn der Hauptsatz verneint ist."
    },
    {
      "type": "mc",
      "frage": "If he had more time, he ___ travel around the world.",
      "optionen": [
        "will",
        "would",
        "would have"
      ],
      "richtig": 1,
      "erklaerung": "Typ 2: Hauptsatz mit would + Infinitiv."
    },
    {
      "type": "gap",
      "frage": "If you don't hurry, you ___ (miss) the bus.",
      "richtig": [
        "will miss",
        "'ll miss"
      ],
      "erklaerung": "Typ 1: reale Bedingung in der Zukunft, Hauptsatz mit will."
    },
    {
      "type": "mc",
      "frage": "If I ___ you, I would apologize.",
      "optionen": [
        "was",
        "am",
        "were"
      ],
      "richtig": 2,
      "erklaerung": "In der festen Wendung 'If I were you' steht im Typ 2 'were'."
    },
    {
      "type": "gap",
      "frage": "If we leave now, we ___ (catch) the early train.",
      "richtig": [
        "will catch",
        "'ll catch"
      ],
      "erklaerung": "Typ 1: erfüllbare Bedingung, Hauptsatz mit will + Infinitiv."
    },
    {
      "type": "mc",
      "frage": "If they ___ harder, they would earn more money.",
      "optionen": [
        "worked",
        "would work",
        "work"
      ],
      "richtig": 0,
      "erklaerung": "Typ 2: im if-Teil steht das simple past."
    },
    {
      "type": "gap",
      "frage": "She would help you if she ___ (have) the time.",
      "richtig": [
        "had"
      ],
      "erklaerung": "Typ 2: im if-Satz steht das simple past, hier 'had'."
    },
    {
      "type": "transform",
      "frage": "Forme zu einem Typ-1-Satz um: 'It is cold. I will wear a jacket.' (Beginne mit 'If ...')",
      "richtig": [
        "If it is cold, I will wear a jacket.",
        "If it is cold I will wear a jacket"
      ],
      "erklaerung": "If-Satz Typ 1: simple present im if-Teil, will im Hauptsatz."
    },
    {
      "type": "mc",
      "frage": "If I had known about the party, I ___ come.",
      "optionen": [
        "would have",
        "would",
        "will have"
      ],
      "richtig": 0,
      "erklaerung": "Typ 3: Hauptsatz mit would have + Partizip Perfekt."
    },
    {
      "type": "gap",
      "frage": "If you had asked me, I ___ (help) you.",
      "richtig": [
        "would have helped",
        "'d have helped"
      ],
      "erklaerung": "Typ 3 (unmögliche Vergangenheit): would have + past participle."
    },
    {
      "type": "mc",
      "frage": "If she ___ harder, she would have passed the test.",
      "optionen": [
        "studied",
        "had studied",
        "would study"
      ],
      "richtig": 1,
      "erklaerung": "Typ 3: im if-Teil steht das past perfect (had + Partizip)."
    },
    {
      "type": "gap",
      "frage": "If they had left earlier, they ___ (not / miss) the flight.",
      "richtig": [
        "wouldn't have missed",
        "would not have missed"
      ],
      "erklaerung": "Typ 3: would not have + past participle für die verneinte Vergangenheit."
    },
    {
      "type": "transform",
      "frage": "Forme zu einem Typ-2-Satz um: 'I don't have a car, so I don't drive to work.' (Beginne mit 'If I ...')",
      "richtig": [
        "If I had a car, I would drive to work.",
        "If I had a car I would drive to work"
      ],
      "erklaerung": "Typ 2: simple past im if-Teil, would + Infinitiv im Hauptsatz."
    },
    {
      "type": "mc",
      "frage": "___ you finish your homework, you can watch TV.",
      "optionen": [
        "Unless",
        "If",
        "Whether"
      ],
      "richtig": 1,
      "erklaerung": "'If' leitet die reale Bedingung ein; 'unless' würde 'wenn nicht' bedeuten."
    },
    {
      "type": "gap",
      "frage": "You won't pass the exam ___ you study harder. (Konjunktion für 'wenn nicht')",
      "richtig": [
        "unless"
      ],
      "erklaerung": "'unless' bedeutet 'if not' und ersetzt hier die verneinte Bedingung."
    },
    {
      "type": "mc",
      "frage": "I'll lend you the book ___ you give it back next week.",
      "optionen": [
        "unless",
        "as long as",
        "in case"
      ],
      "richtig": 1,
      "erklaerung": "'as long as' (solange/unter der Bedingung dass) passt zur positiven Bedingung."
    },
    {
      "type": "transform",
      "frage": "Schreibe den Satz mit 'unless' statt 'if not': 'If you don't water the plants, they will die.'",
      "richtig": [
        "Unless you water the plants, they will die.",
        "Unless you water the plants they will die"
      ],
      "erklaerung": "'unless' ersetzt 'if ... not'; das Verb wird dann bejaht."
    },
    {
      "type": "gap",
      "frage": "If I ___ (be) you, I wouldn't trust him.",
      "richtig": [
        "were",
        "was"
      ],
      "erklaerung": "Typ 2: 'were' ist Standard; 'was' wird umgangssprachlich oft akzeptiert."
    },
    {
      "type": "mc",
      "frage": "If we had booked earlier, the hotel ___ cheaper.",
      "optionen": [
        "would be",
        "would have been",
        "will be"
      ],
      "richtig": 1,
      "erklaerung": "Typ 3: would have been + Partizip für eine nicht eingetretene Vergangenheit."
    },
    {
      "type": "gap",
      "frage": "Take an umbrella ___ it rains. (Konjunktion: 'für den Fall, dass')",
      "richtig": [
        "in case"
      ],
      "erklaerung": "'in case' drückt eine Vorsichtsmaßnahme aus: für den Fall, dass es regnet."
    },
    {
      "type": "mc",
      "frage": "If I had studied medicine, I ___ a doctor now.",
      "optionen": [
        "would be",
        "would have been",
        "will be"
      ],
      "richtig": 0,
      "erklaerung": "Gemischter Conditional: Vergangenheit im if-Teil, Gegenwart ('now') im Hauptsatz mit would + Infinitiv."
    },
    {
      "type": "transform",
      "frage": "Forme zu einem Typ-3-Satz um: 'She didn't call me, so I didn't know.' (Beginne mit 'If she ...')",
      "richtig": [
        "If she had called me, I would have known.",
        "If she had called me I would have known"
      ],
      "erklaerung": "Typ 3: past perfect im if-Teil, would have + Partizip im Hauptsatz."
    },
    {
      "type": "gap",
      "frage": "If he hadn't helped me, I ___ (not / finish) the project on time.",
      "richtig": [
        "wouldn't have finished",
        "would not have finished"
      ],
      "erklaerung": "Typ 3: would not have + past participle in der verneinten Vergangenheit."
    },
    {
      "type": "mc",
      "frage": "If you ___ tired, we can stop for a break.",
      "optionen": [
        "will be",
        "are",
        "were"
      ],
      "richtig": 1,
      "erklaerung": "Typ 1: reale Bedingung mit simple present im if-Teil, 'can' im Hauptsatz."
    },
    {
      "type": "gap",
      "frage": "Had I known the truth, I ___ (act) differently. (Inversion ohne 'if')",
      "richtig": [
        "would have acted"
      ],
      "erklaerung": "Bei Inversion 'Had I known' (= If I had known) bleibt der Hauptsatz Typ 3: would have + Partizip."
    },
    {
      "type": "transform",
      "frage": "Schreibe den Typ-3-Satz mit Inversion (ohne 'if'): 'If they had arrived earlier, they would have seen the show.'",
      "richtig": [
        "Had they arrived earlier, they would have seen the show.",
        "Had they arrived earlier they would have seen the show"
      ],
      "erklaerung": "Formelle Inversion: 'if' entfällt, 'had' rückt an den Satzanfang."
    },
    {
      "type": "mc",
      "frage": "If I were taller, I ___ play basketball better. But mixed: were I to win the lottery, I ___ quit my job.",
      "optionen": [
        "could / would",
        "will / would",
        "would / will"
      ],
      "richtig": 0,
      "erklaerung": "Typ 2: 'could/would' + Infinitiv; die Inversion 'Were I to win' entspricht 'If I won'."
    },
    {
      "type": "gap",
      "frage": "If the alarm hadn't gone off, we ___ (still / be) asleep now. (gemischter Conditional)",
      "richtig": [
        "would still be",
        "'d still be"
      ],
      "erklaerung": "Gemischter Typ: Vergangenheit im if-Teil (Typ 3), Gegenwart ('now') im Hauptsatz mit would + Infinitiv."
    }
  ]
};
