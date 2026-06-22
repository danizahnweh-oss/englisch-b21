/* Thema 25: Past tenses – Simple Past, Past Continuous, Past Perfect. */
const QUIZ_DATA = {
  "title": "Past tenses",
  "intro": "Simple Past, Past Continuous und Past Perfect im Überblick.",
  "explain": "\n    <h2>Kurz erklärt</h2>\n    <ul>\n      <li><b>Simple Past</b>: abgeschlossen, mit Zeitpunkt.\n        <span class=\"ex\">I played tennis yesterday.</span></li>\n      <li><b>Past Continuous</b> (was/were + -ing): Verlauf in der Vergangenheit.\n        <span class=\"ex\">While I was cooking, the phone rang.</span></li>\n      <li><b>Past Perfect</b> (had + Partizip): das „Davor“ in der Vergangenheit.\n        <span class=\"ex\">The train had left before we arrived.</span></li>\n      <li>Typische Kombination: längere Handlung (Continuous) + kurze (Simple Past).</li>\n    </ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct form: Yesterday I ___ to school by bus.",
      "optionen": [
        "go",
        "went",
        "goed"
      ],
      "richtig": 1,
      "erklaerung": "Simple Past von 'go' ist die unregelmäßige Form 'went'."
    },
    {
      "type": "gap",
      "frage": "Last summer we ___ (visit) our grandparents in Italy.",
      "richtig": [
        "visited"
      ],
      "erklaerung": "Regelmäßiges Verb im Simple Past: visit + -ed = visited."
    },
    {
      "type": "mc",
      "frage": "She ___ TV when the phone rang.",
      "optionen": [
        "watched",
        "was watching",
        "is watching"
      ],
      "richtig": 1,
      "erklaerung": "Past Progressive (was watching) beschreibt die laufende Handlung, die durch 'rang' unterbrochen wird."
    },
    {
      "type": "gap",
      "frage": "They ___ (not / play) football last Saturday.",
      "richtig": [
        "did not play",
        "didn't play"
      ],
      "erklaerung": "Verneinung im Simple Past mit 'did not / didn't' + Grundform."
    },
    {
      "type": "mc",
      "frage": "___ you see the new film last night?",
      "optionen": [
        "Did",
        "Do",
        "Were"
      ],
      "richtig": 0,
      "erklaerung": "Frage im Simple Past mit 'Did' + Grundform 'see'."
    },
    {
      "type": "gap",
      "frage": "When I was a child, I ___ (have) a small red bike.",
      "richtig": [
        "had"
      ],
      "erklaerung": "Simple Past von 'have' ist die unregelmäßige Form 'had'."
    },
    {
      "type": "transform",
      "frage": "Bilde die Verneinung im Simple Past: He bought a new car.",
      "richtig": [
        "He did not buy a new car.",
        "He didn't buy a new car."
      ],
      "erklaerung": "Verneinung mit 'did not / didn't' + Grundform 'buy'."
    },
    {
      "type": "mc",
      "frage": "We ___ in the garden all afternoon yesterday.",
      "optionen": [
        "worked",
        "were working",
        "work"
      ],
      "richtig": 1,
      "erklaerung": "Past Progressive (were working) betont die Dauer einer Handlung über einen Zeitraum."
    },
    {
      "type": "gap",
      "frage": "My brother ___ (write) a letter to his friend yesterday.",
      "richtig": [
        "wrote"
      ],
      "erklaerung": "Simple Past von 'write' ist die unregelmäßige Form 'wrote'."
    },
    {
      "type": "mc",
      "frage": "While she ___ , it started to rain.",
      "optionen": [
        "walked",
        "was walking",
        "walks"
      ],
      "richtig": 1,
      "erklaerung": "Past Progressive für die längere Hintergrundhandlung; 'started' unterbricht sie."
    },
    {
      "type": "gap",
      "frage": "___ they ___ (enjoy) the concert on Friday?",
      "richtig": [
        "Did enjoy"
      ],
      "erklaerung": "Frage im Simple Past: Did + Subjekt + Grundform 'enjoy'."
    },
    {
      "type": "transform",
      "frage": "Forme in eine Frage um (Simple Past): She found the keys.",
      "richtig": [
        "Did she find the keys?"
      ],
      "erklaerung": "Frage mit 'Did' + Subjekt + Grundform 'find'."
    },
    {
      "type": "mc",
      "frage": "By the time we arrived, the train ___ already ___.",
      "optionen": [
        "has / left",
        "had / left",
        "was / leaving"
      ],
      "richtig": 1,
      "erklaerung": "Past Perfect (had left) für eine Handlung, die vor einer anderen Vergangenheitshandlung abgeschlossen war."
    },
    {
      "type": "gap",
      "frage": "I was tired because I ___ (not / sleep) well the night before.",
      "richtig": [
        "had not slept",
        "hadn't slept"
      ],
      "erklaerung": "Past Perfect (had not slept) für die Vorvergangenheit, die den Grund erklärt."
    },
    {
      "type": "mc",
      "frage": "They ___ for two hours when the bus finally came.",
      "optionen": [
        "waited",
        "had been waiting",
        "were waiting"
      ],
      "richtig": 1,
      "erklaerung": "Past Perfect Progressive (had been waiting) betont die Dauer bis zu einem Punkt in der Vergangenheit."
    },
    {
      "type": "gap",
      "frage": "While my mum ___ (cook) dinner, I ___ (do) my homework.",
      "richtig": [
        "was cooking was doing"
      ],
      "erklaerung": "Zwei gleichzeitige längere Handlungen stehen im Past Progressive (was cooking / was doing)."
    },
    {
      "type": "transform",
      "frage": "Setze in den Plural-Kontext um und ändere das Verb (Simple Past): The child ran across the road. -> The children ...",
      "richtig": [
        "The children ran across the road."
      ],
      "erklaerung": "'ran' (Simple Past von 'run') bleibt für alle Personen gleich; nur das Subjekt wird Plural."
    },
    {
      "type": "mc",
      "frage": "He told me that he ___ the book before.",
      "optionen": [
        "read",
        "had read",
        "has read"
      ],
      "richtig": 1,
      "erklaerung": "In der indirekten Rede über Vergangenes nutzt man Past Perfect (had read)."
    },
    {
      "type": "gap",
      "frage": "When the guests arrived, she ___ (just / finish) cleaning the house.",
      "richtig": [
        "had just finished"
      ],
      "erklaerung": "Past Perfect mit 'just' für eine kurz zuvor abgeschlossene Handlung."
    },
    {
      "type": "mc",
      "frage": "I ___ my homework, so I went out to play.",
      "optionen": [
        "did",
        "had done",
        "was doing"
      ],
      "richtig": 1,
      "erklaerung": "Past Perfect (had done) zeigt, dass die Hausaufgaben vor dem Rausgehen abgeschlossen waren."
    },
    {
      "type": "gap",
      "frage": "The streets were wet because it ___ (rain) all night.",
      "richtig": [
        "had been raining",
        "had rained"
      ],
      "erklaerung": "Past Perfect Progressive (had been raining) betont die andauernde Ursache; 'had rained' ist auch akzeptabel."
    },
    {
      "type": "transform",
      "frage": "Forme in die Vergangenheit um (Simple Past): I get up early and catch the first train.",
      "richtig": [
        "I got up early and caught the first train."
      ],
      "erklaerung": "'get' wird zu 'got', 'catch' wird zu 'caught' (beides unregelmäßig)."
    },
    {
      "type": "mc",
      "frage": "She ___ in London for five years before she moved to Berlin.",
      "optionen": [
        "lived",
        "had lived",
        "was living"
      ],
      "richtig": 1,
      "erklaerung": "Past Perfect (had lived) für einen abgeschlossenen Zeitraum vor einem anderen Vergangenheitsereignis."
    },
    {
      "type": "gap",
      "frage": "What ___ you ___ (do) when I called you at six?",
      "richtig": [
        "were doing"
      ],
      "erklaerung": "Past Progressive für eine zum Zeitpunkt 'at six' laufende Handlung: were + doing."
    },
    {
      "type": "transform",
      "frage": "Forme in die indirekte Rede um (Backshift): She said: 'I lost my keys.'",
      "richtig": [
        "She said that she had lost her keys.",
        "She said she had lost her keys."
      ],
      "erklaerung": "Simple Past in der direkten Rede wird beim Backshift zu Past Perfect (had lost)."
    },
    {
      "type": "mc",
      "frage": "He had been working hard all week, so on Sunday he ___ exhausted.",
      "optionen": [
        "was feeling",
        "felt",
        "had felt"
      ],
      "richtig": 1,
      "erklaerung": "Simple Past (felt) für den Zustand als Folge der vorherigen Handlung (had been working)."
    },
    {
      "type": "gap",
      "frage": "I ___ (read) for an hour when suddenly the lights ___ (go) out.",
      "richtig": [
        "had been reading went"
      ],
      "erklaerung": "Past Perfect Progressive (had been reading) für die Dauer; Simple Past (went) für das plötzliche Ereignis."
    },
    {
      "type": "transform",
      "frage": "Verbinde mit dem Past Perfect (use 'After'): First he finished his work. Then he went home.",
      "richtig": [
        "After he had finished his work, he went home.",
        "After he had finished his work he went home."
      ],
      "erklaerung": "Die frühere Handlung steht im Past Perfect (had finished), die spätere im Simple Past (went)."
    },
    {
      "type": "mc",
      "frage": "When I opened the door, I realised that someone ___ in my room.",
      "optionen": [
        "was",
        "had been",
        "has been"
      ],
      "richtig": 1,
      "erklaerung": "Past Perfect (had been) zeigt, dass das Ereignis vor dem Öffnen der Tür stattgefunden hatte."
    },
    {
      "type": "gap",
      "frage": "They were exhausted; they ___ (drive) since early morning without a break.",
      "richtig": [
        "had been driving"
      ],
      "erklaerung": "Past Perfect Progressive (had been driving) mit 'since' betont die Dauer der Handlung bis zu diesem Punkt."
    }
  ]
};
