/* Thema 19: Modal verbs – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Modal verbs",
  "intro": "Modalverben wie can, must, should oder may verändern die Bedeutung eines Satzes und drücken Fähigkeit, Erlaubnis, Pflicht oder Wahrscheinlichkeit aus.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Nach einem Modalverb steht immer der <b>Infinitiv ohne \"to\"</b>: <span class=\"ex\">She can swim.</span></li><li>Modalverben haben <b>keine Endung</b> in der 3. Person: <span class=\"ex\">He must go.</span> (nicht \"musts\")</li><li>Verneinung und Fragen funktionieren <b>ohne \"do/does\"</b>: <span class=\"ex\">You should not wait. Can I help?</span></li><li><b>\"must\" (Pflicht/Verbot)</b> vs. <b>\"have to\"</b>: <span class=\"ex\">I have to work. You mustn't smoke here.</span></li><li>Für Wahrscheinlichkeit nutzt man <b>might/may/could</b> (vielleicht) oder <b>must</b> (sicher): <span class=\"ex\">She might be late. He must be tired.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "___ you help me, please?",
      "optionen": [
        "Can",
        "Am",
        "Do can"
      ],
      "richtig": 0,
      "erklaerung": "'Can' bildet Bitten/Fragen am Satzanfang ohne Hilfsverb."
    },
    {
      "type": "mc",
      "frage": "I ___ swim very well.",
      "optionen": [
        "can",
        "can to",
        "cans"
      ],
      "richtig": 0,
      "erklaerung": "Nach Modalverben folgt der Infinitiv ohne 'to' und ohne -s."
    },
    {
      "type": "mc",
      "frage": "You ___ smoke here. It's a hospital.",
      "optionen": [
        "mustn't",
        "don't must",
        "must not to"
      ],
      "richtig": 0,
      "erklaerung": "Verbot wird mit 'mustn't' (must not) ausgedrückt."
    },
    {
      "type": "gap",
      "frage": "It's late. We ___ go home now. (Notwendigkeit, 'müssen')",
      "richtig": [
        "must",
        "have to"
      ],
      "erklaerung": "'must' oder 'have to' drücken Notwendigkeit aus."
    },
    {
      "type": "mc",
      "frage": "___ I open the window? It's hot in here.",
      "optionen": [
        "Shall",
        "Will to",
        "Do shall"
      ],
      "richtig": 0,
      "erklaerung": "'Shall I ...?' bietet etwas an oder macht einen Vorschlag."
    },
    {
      "type": "gap",
      "frage": "She ___ speak three languages: English, French and Spanish. (Fähigkeit)",
      "richtig": [
        "can"
      ],
      "erklaerung": "'can' drückt eine Fähigkeit aus."
    },
    {
      "type": "mc",
      "frage": "You look tired. You ___ go to bed early. (Ratschlag)",
      "optionen": [
        "should",
        "must to",
        "can't"
      ],
      "richtig": 0,
      "erklaerung": "'should' gibt einen Ratschlag."
    },
    {
      "type": "gap",
      "frage": "___ I borrow your pen, please? (höfliche Erlaubnis, formell)",
      "richtig": [
        "May",
        "Could",
        "Can"
      ],
      "erklaerung": "'May/Could/Can I ...?' fragt höflich um Erlaubnis."
    },
    {
      "type": "mc",
      "frage": "We ___ to wear a uniform at my school.",
      "optionen": [
        "have",
        "must",
        "can"
      ],
      "richtig": 0,
      "erklaerung": "'have to' braucht 'to'; 'must/can' nicht."
    },
    {
      "type": "transform",
      "frage": "Mache eine verneinte Fähigkeit daraus: 'He can drive a car.'",
      "richtig": [
        "He can't drive a car.",
        "He cannot drive a car.",
        "He can not drive a car."
      ],
      "erklaerung": "Verneinung von 'can' ist 'cannot/can't'."
    },
    {
      "type": "gap",
      "frage": "You ___ worry. Everything is fine. (kein Grund zur Sorge)",
      "richtig": [
        "needn't",
        "don't need to",
        "do not need to",
        "don't have to",
        "do not have to"
      ],
      "erklaerung": "Fehlende Notwendigkeit: 'needn't' / 'don't need to' / 'don't have to'."
    },
    {
      "type": "mc",
      "frage": "It ___ rain later, so take an umbrella. (Möglichkeit)",
      "optionen": [
        "might",
        "should to",
        "can't"
      ],
      "richtig": 0,
      "erklaerung": "'might' drückt eine Möglichkeit aus."
    },
    {
      "type": "gap",
      "frage": "When I was young, I ___ run very fast. (Fähigkeit in der Vergangenheit)",
      "richtig": [
        "could"
      ],
      "erklaerung": "'could' ist die Vergangenheitsform von 'can'."
    },
    {
      "type": "transform",
      "frage": "Setze in die Vergangenheit (Notwendigkeit): 'I must finish my homework.'",
      "richtig": [
        "I had to finish my homework."
      ],
      "erklaerung": "'must' hat keine Vergangenheit; man nutzt 'had to'."
    },
    {
      "type": "mc",
      "frage": "You ___ be hungry after that long walk! (logische Schlussfolgerung)",
      "optionen": [
        "must",
        "can",
        "should"
      ],
      "richtig": 0,
      "erklaerung": "'must' drückt eine sichere logische Schlussfolgerung aus."
    },
    {
      "type": "mc",
      "frage": "That ___ be John at the door; he's still in Paris.",
      "optionen": [
        "can't",
        "mustn't",
        "shouldn't"
      ],
      "richtig": 0,
      "erklaerung": "'can't' drückt aus, dass etwas (fast) unmöglich ist."
    },
    {
      "type": "gap",
      "frage": "___ you mind closing the door? (sehr höfliche Bitte)",
      "richtig": [
        "Would"
      ],
      "erklaerung": "'Would you mind ...?' ist eine sehr höfliche Bitte."
    },
    {
      "type": "gap",
      "frage": "In the past, people ___ to travel by horse. (Vergangenheit von 'have to')",
      "richtig": [
        "had"
      ],
      "erklaerung": "Vergangenheit von 'have to' ist 'had to'."
    },
    {
      "type": "transform",
      "frage": "Drücke denselben Ratschlag mit 'ought to' aus: 'You should see a doctor.'",
      "richtig": [
        "You ought to see a doctor."
      ],
      "erklaerung": "'ought to' ist eine Alternative zu 'should' für Ratschläge."
    },
    {
      "type": "mc",
      "frage": "___ you be able to come to the party tomorrow? (Zukunft von 'can')",
      "optionen": [
        "Will",
        "Can",
        "Would"
      ],
      "richtig": 0,
      "erklaerung": "Zukunft der Fähigkeit: 'will be able to'."
    },
    {
      "type": "gap",
      "frage": "I ___ go now, otherwise I'll miss the bus. (starke Notwendigkeit)",
      "richtig": [
        "must",
        "have to",
        "need to"
      ],
      "erklaerung": "Starke Notwendigkeit mit 'must/have to/need to'."
    },
    {
      "type": "mc",
      "frage": "You ___ have told me earlier! Now it's too late. (Kritik an Vergangenheit)",
      "optionen": [
        "should",
        "must",
        "can"
      ],
      "richtig": 0,
      "erklaerung": "'should have + Partizip' kritisiert eine nicht getane Handlung."
    },
    {
      "type": "transform",
      "frage": "Forme zu einer Vermutung über die Vergangenheit um (sicher): 'Perhaps she forgot the keys.' Beginne mit 'She ...'",
      "richtig": [
        "She must have forgotten the keys."
      ],
      "erklaerung": "'must have + Partizip' = sichere Vermutung über Vergangenes."
    },
    {
      "type": "gap",
      "frage": "He ___ have missed the train; I'm not sure. (Möglichkeit in der Vergangenheit)",
      "richtig": [
        "might",
        "may",
        "could"
      ],
      "erklaerung": "'might/may/could have + Partizip' = vergangene Möglichkeit."
    },
    {
      "type": "mc",
      "frage": "They ___ have finished the project; the office lights are still on. (negative Schlussfolgerung)",
      "optionen": [
        "can't",
        "mustn't",
        "needn't"
      ],
      "richtig": 0,
      "erklaerung": "'can't have + Partizip' = sichere negative Schlussfolgerung über Vergangenes."
    },
    {
      "type": "transform",
      "frage": "Ersetze 'must' durch die passende Pflicht-Form mit 'to': 'Visitors must sign in.' Beginne mit 'Visitors ...'",
      "richtig": [
        "Visitors have to sign in."
      ],
      "erklaerung": "'have to' drückt ebenfalls eine Pflicht aus."
    },
    {
      "type": "gap",
      "frage": "You ___ have paid for the ticket; it was free! (unnötige getane Handlung)",
      "richtig": [
        "needn't",
        "didn't need to",
        "did not need to"
      ],
      "erklaerung": "'needn't have + Partizip' = etwas wurde unnötigerweise getan."
    },
    {
      "type": "mc",
      "frage": "By next year, she ___ to speak fluent Japanese. (Fähigkeit in der Zukunft)",
      "optionen": [
        "will be able",
        "can",
        "could"
      ],
      "richtig": 0,
      "erklaerung": "Zukünftige Fähigkeit: 'will be able to' (+ to)."
    },
    {
      "type": "transform",
      "frage": "Drücke ein höfliches Angebot mit 'Shall' aus: 'Do you want me to carry that bag?' Beginne mit 'Shall ...'",
      "richtig": [
        "Shall I carry that bag?"
      ],
      "erklaerung": "'Shall I ...?' bietet höflich Hilfe an."
    },
    {
      "type": "gap",
      "frage": "You really ___ to apologise to her; it was rude. (Ratschlag/Verpflichtung mit 'to')",
      "richtig": [
        "ought"
      ],
      "erklaerung": "'ought to' drückt einen starken Ratschlag/Verpflichtung aus."
    },
    {
      "type": "mc",
      "frage": "I wasn't able to call you because my phone ___ find a signal.",
      "optionen": [
        "couldn't",
        "mustn't",
        "shouldn't"
      ],
      "richtig": 0,
      "erklaerung": "'couldn't' = fehlende Fähigkeit/Möglichkeit in der Vergangenheit."
    }
  ]
};
