/* Thema 29: Conditional clauses – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Conditional clauses",
  "intro": "Mit Conditional clauses (Bedingungssätzen) drückst du aus, was unter bestimmten Bedingungen passiert, passieren würde oder hätte passieren können.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>Type 0</b> (allgemeine Wahrheiten): <b>if</b> + Present, dann Present. <span class=\"ex\">If you heat ice, it melts.</span></li><li><b>Type 1</b> (real, möglich in der Zukunft): <b>if</b> + Present Simple, dann <b>will</b> + Infinitiv. <span class=\"ex\">If it rains, we will stay home.</span></li><li><b>Type 2</b> (unreal, unwahrscheinlich/hypothetisch): <b>if</b> + Past Simple, dann <b>would</b> + Infinitiv. <span class=\"ex\">If I had more time, I would learn Spanish.</span></li><li><b>Type 3</b> (unreal in der Vergangenheit): <b>if</b> + Past Perfect, dann <b>would have</b> + Partizip. <span class=\"ex\">If she had studied, she would have passed.</span></li><li>Nach <b>if</b> steht nie <b>will</b> oder <b>would</b>; bei <b>I/he/she/it</b> nutzt man im Type 2 oft <b>were</b>. <span class=\"ex\">If I were you, I would apologize.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "If it ___ tomorrow, we will cancel the picnic.",
      "optionen": [
        "rains",
        "will rain",
        "would rain"
      ],
      "richtig": 0,
      "erklaerung": "Type 1: Nach 'if' steht das Present Simple ('rains'), nicht 'will'."
    },
    {
      "type": "mc",
      "frage": "If I ___ rich, I would travel around the world.",
      "optionen": [
        "am",
        "were",
        "will be"
      ],
      "richtig": 1,
      "erklaerung": "Type 2 (hypothetisch): 'if' + Past Simple; bei 'I' nutzt man im Konditional oft 'were'."
    },
    {
      "type": "mc",
      "frage": "If she had left earlier, she ___ the train.",
      "optionen": [
        "would catch",
        "would have caught",
        "had caught"
      ],
      "richtig": 1,
      "erklaerung": "Type 3 (Vergangenheit, irreal): 'if' + Past Perfect, dann 'would have' + Partizip."
    },
    {
      "type": "mc",
      "frage": "If you heat water to 100 degrees, it ___.",
      "optionen": [
        "boils",
        "will boil",
        "would boil"
      ],
      "richtig": 0,
      "erklaerung": "Type 0 (allgemeine Wahrheit): beide Satzteile im Present Simple ('boils')."
    },
    {
      "type": "gap",
      "frage": "If I ___ (have) enough money, I would buy a new laptop.",
      "richtig": [
        "had"
      ],
      "erklaerung": "Type 2: Nach 'if' steht das Past Simple von 'have', also 'had'."
    },
    {
      "type": "gap",
      "frage": "If it rains this evening, we ___ (stay) at home.",
      "richtig": [
        "will stay",
        "'ll stay"
      ],
      "erklaerung": "Type 1: Der Hauptsatz steht mit 'will' + Infinitiv: 'will stay'."
    },
    {
      "type": "gap",
      "frage": "If they had known about the traffic, they ___ (leave) earlier.",
      "richtig": [
        "would have left",
        "'d have left"
      ],
      "erklaerung": "Type 3: Hauptsatz mit 'would have' + Partizip; das Partizip von 'leave' ist 'left'."
    },
    {
      "type": "gap",
      "frage": "If I ___ (be) you, I would talk to the teacher.",
      "richtig": [
        "were",
        "was"
      ],
      "erklaerung": "Type 2: In der festen Wendung 'If I were you' steht 'were' (umgangssprachlich auch 'was')."
    },
    {
      "type": "transform",
      "frage": "Schreibe als Type-1-Satz: 'If you (study) hard, you (pass) the exam.'",
      "richtig": [
        "If you study hard, you will pass the exam.",
        "If you study hard, you'll pass the exam."
      ],
      "erklaerung": "Type 1: 'if' + Present Simple ('study'), Hauptsatz mit 'will pass'."
    },
    {
      "type": "transform",
      "frage": "Forme zu Type 2 um: 'If we (have) a car, we (drive) to the coast.'",
      "richtig": [
        "If we had a car, we would drive to the coast.",
        "If we had a car, we'd drive to the coast."
      ],
      "erklaerung": "Type 2: 'if' + Past Simple ('had'), Hauptsatz mit 'would drive'."
    },
    {
      "type": "transform",
      "frage": "Forme zu Type 3 um: 'If he (call) me, I (help) him.'",
      "richtig": [
        "If he had called me, I would have helped him.",
        "If he had called me, I'd have helped him."
      ],
      "erklaerung": "Type 3: 'if' + Past Perfect ('had called'), Hauptsatz mit 'would have helped'."
    }
  ]
};
