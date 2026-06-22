/* Thema 27: Present Perfect – nur Inhalt, Logik steckt in quiz.js. */
const QUIZ_DATA = {
  "title": "Present perfect",
  "intro": "have/has + Partizip: Bezug zur Gegenwart, Zeitpunkt egal.",
  "explain": "\n    <h2>Kurz erklärt</h2>\n    <ul>\n      <li><b>Form:</b> have/has + 3. Verbform (Partizip).\n        <span class=\"ex\">I have seen / she has gone</span></li>\n      <li>Handlung mit <b>Bezug zur Gegenwart</b>, Zeitpunkt unwichtig.\n        <span class=\"ex\">I have lost my key. (= jetzt weg)</span></li>\n      <li><b>since</b> = Startpunkt, <b>for</b> = Zeitdauer.\n        <span class=\"ex\">since 2019 · for three years</span></li>\n      <li>Signalwörter: <b>ever, never, already, yet, just, so far</b>.</li>\n      <li>Fester Vergangenheits-Zeitpunkt (yesterday, last year) → kein Present Perfect, sondern Past Simple.</li>\n    </ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "I ___ my homework.",
      "optionen": [
        "have finished",
        "has finished",
        "am finished"
      ],
      "richtig": 0,
      "erklaerung": "Bei 'I' verwendet man die Hilfsverbform 'have' + Partizip Perfect."
    },
    {
      "type": "mc",
      "frage": "She ___ to London twice.",
      "optionen": [
        "have been",
        "has been",
        "is been"
      ],
      "richtig": 1,
      "erklaerung": "Bei 'she' (3. Person Singular) heisst es 'has' + Partizip."
    },
    {
      "type": "gap",
      "frage": "We ___ (eat) lunch already.",
      "richtig": [
        "have eaten",
        "'ve eaten"
      ],
      "erklaerung": "Present Perfect: 'have' + Partizip von 'eat' = 'eaten'."
    },
    {
      "type": "mc",
      "frage": "They ___ a new car.",
      "optionen": [
        "have bought",
        "has bought",
        "have buy"
      ],
      "richtig": 0,
      "erklaerung": "'They' nimmt 'have', das Partizip von 'buy' ist 'bought'."
    },
    {
      "type": "gap",
      "frage": "He ___ (lose) his keys.",
      "richtig": [
        "has lost",
        "'s lost"
      ],
      "erklaerung": "3. Person Singular: 'has' + Partizip 'lost'."
    },
    {
      "type": "mc",
      "frage": "___ you ever seen a whale?",
      "optionen": [
        "Has",
        "Have",
        "Are"
      ],
      "richtig": 1,
      "erklaerung": "In Fragen mit 'you' steht 'Have' am Satzanfang."
    },
    {
      "type": "gap",
      "frage": "I ___ (write) three emails today.",
      "richtig": [
        "have written",
        "'ve written"
      ],
      "erklaerung": "Partizip von 'write' ist 'written'."
    },
    {
      "type": "transform",
      "frage": "Bilde das Present Perfect: 'They / visit / their grandparents.'",
      "richtig": [
        "They have visited their grandparents.",
        "They've visited their grandparents."
      ],
      "erklaerung": "Regelmaessiges Verb: 'visit' + '-ed' = 'visited'."
    },
    {
      "type": "mc",
      "frage": "My sister ___ her phone.",
      "optionen": [
        "have broken",
        "has broken",
        "has broke"
      ],
      "richtig": 1,
      "erklaerung": "'has' + korrektes Partizip 'broken' (nicht 'broke')."
    },
    {
      "type": "gap",
      "frage": "___ she finished the book yet?",
      "richtig": [
        "Has"
      ],
      "erklaerung": "Frage in 3. Person Singular beginnt mit 'Has'."
    },
    {
      "type": "gap",
      "frage": "We have ___ (not / see) that film.",
      "richtig": [
        "not seen",
        "not seen yet"
      ],
      "erklaerung": "Verneinung: 'have not seen', Partizip 'seen'."
    },
    {
      "type": "transform",
      "frage": "Verneine: 'I have done the dishes.'",
      "richtig": [
        "I have not done the dishes.",
        "I haven't done the dishes."
      ],
      "erklaerung": "Verneinung mit 'have not' / 'haven't' vor dem Partizip."
    },
    {
      "type": "mc",
      "frage": "Choose the correct sentence with 'just'.",
      "optionen": [
        "I have just arrived.",
        "I just have arrived.",
        "I am just arrived."
      ],
      "richtig": 0,
      "erklaerung": "'just' steht zwischen Hilfsverb 'have' und Partizip."
    },
    {
      "type": "gap",
      "frage": "He has ___ (go) to the supermarket.",
      "richtig": [
        "gone"
      ],
      "erklaerung": "'gone' = hingegangen (noch dort); Partizip von 'go'."
    },
    {
      "type": "mc",
      "frage": "They ___ in this town since 2010.",
      "optionen": [
        "have lived",
        "lived",
        "have living"
      ],
      "richtig": 0,
      "erklaerung": "Mit 'since' + Zeitpunkt wird Present Perfect verwendet."
    },
    {
      "type": "gap",
      "frage": "I have known her ___ ten years. (for / since)",
      "richtig": [
        "for"
      ],
      "erklaerung": "'for' steht vor einer Zeitspanne (ten years)."
    },
    {
      "type": "gap",
      "frage": "We have been friends ___ 2015. (for / since)",
      "richtig": [
        "since"
      ],
      "erklaerung": "'since' steht vor einem Zeitpunkt (2015)."
    },
    {
      "type": "mc",
      "frage": "Have you finished ___?",
      "optionen": [
        "yet",
        "already",
        "since"
      ],
      "richtig": 0,
      "erklaerung": "In Fragen am Satzende verwendet man 'yet'."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Frage: 'you / ever / try / sushi'",
      "richtig": [
        "Have you ever tried sushi?"
      ],
      "erklaerung": "Frage: 'Have' + Subjekt + 'ever' + Partizip 'tried'."
    },
    {
      "type": "gap",
      "frage": "She ___ (drink) too much coffee today.",
      "richtig": [
        "has drunk",
        "'s drunk"
      ],
      "erklaerung": "Partizip von 'drink' ist 'drunk'."
    },
    {
      "type": "mc",
      "frage": "I have lived here ___ I was a child.",
      "optionen": [
        "for",
        "since",
        "yet"
      ],
      "richtig": 1,
      "erklaerung": "'since' kann auch vor einem Nebensatz mit Zeitpunkt stehen."
    },
    {
      "type": "transform",
      "frage": "Setze ins Present Perfect: 'He takes a lot of photos.'",
      "richtig": [
        "He has taken a lot of photos.",
        "He's taken a lot of photos."
      ],
      "erklaerung": "Partizip von 'take' ist 'taken', mit 'has' (3. Person)."
    },
    {
      "type": "gap",
      "frage": "They haven't ___ (speak) to each other for weeks.",
      "richtig": [
        "spoken"
      ],
      "erklaerung": "Partizip von 'speak' ist 'spoken'."
    },
    {
      "type": "mc",
      "frage": "Which sentence is correct?",
      "optionen": [
        "I have seen him yesterday.",
        "I saw him yesterday.",
        "I have see him yesterday."
      ],
      "richtig": 1,
      "erklaerung": "Mit konkreter Vergangenheitsangabe 'yesterday' nimmt man Simple Past, nicht Present Perfect."
    },
    {
      "type": "gap",
      "frage": "This is the best meal I have ever ___ (have).",
      "richtig": [
        "had"
      ],
      "erklaerung": "Nach Superlativ + 'ever' steht Present Perfect; Partizip von 'have' ist 'had'."
    },
    {
      "type": "transform",
      "frage": "Mache eine Kurzfrage (question tag) komplett: 'You have met him before, ___?'",
      "richtig": [
        "haven't you"
      ],
      "erklaerung": "Positiver Satz mit 'have' bekommt den negativen Tag 'haven't you'."
    },
    {
      "type": "mc",
      "frage": "How long ___ you had this job?",
      "optionen": [
        "have",
        "has",
        "did"
      ],
      "richtig": 0,
      "erklaerung": "'How long' mit Present Perfect: bei 'you' steht 'have'."
    },
    {
      "type": "gap",
      "frage": "I'm not hungry; I ___ (already / eat).",
      "richtig": [
        "have already eaten",
        "'ve already eaten"
      ],
      "erklaerung": "'already' steht zwischen 'have' und Partizip 'eaten'."
    },
    {
      "type": "transform",
      "frage": "Setze ins Present Perfect Continuous: 'She / wait / for two hours.'",
      "richtig": [
        "She has been waiting for two hours.",
        "She's been waiting for two hours."
      ],
      "erklaerung": "Present Perfect Continuous: 'has/have been' + Verb mit '-ing' betont die Dauer."
    },
    {
      "type": "mc",
      "frage": "Choose the correct continuous form: 'It ___ all day.'",
      "optionen": [
        "has been raining",
        "has rained been",
        "has being rain"
      ],
      "richtig": 0,
      "erklaerung": "Present Perfect Continuous: 'has been' + 'raining' betont die andauernde Handlung."
    },
    {
      "type": "gap",
      "frage": "They've been learning English ___ three years now. (for / since)",
      "richtig": [
        "for"
      ],
      "erklaerung": "Vor einer Zeitspanne (three years) steht 'for', auch im Present Perfect Continuous."
    }
  ]
};
