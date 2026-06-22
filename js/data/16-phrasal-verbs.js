/* Thema 16: Phrasal verbs – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Phrasal verbs",
  "intro": "Phrasal verbs sind Verben mit einem oder zwei kleinen Partikeln (Präposition oder Adverb), die zusammen eine eigene Bedeutung ergeben.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Ein <b>phrasal verb</b> besteht aus Verb + Partikel und hat oft eine ganz neue Bedeutung: <span class=\"ex\">give up = aufgeben</span></li><li>Bei <b>trennbaren</b> phrasal verbs kann das Objekt dazwischen stehen: <span class=\"ex\">turn the light off / turn off the light</span></li><li>Ein <b>Pronomen</b> muss bei trennbaren Verben in die Mitte: <span class=\"ex\">turn it off</span> (nicht: turn off it)</li><li>Bei <b>untrennbaren</b> phrasal verbs bleibt das Verb mit der Partikel zusammen: <span class=\"ex\">look after the children</span></li><li>Die Bedeutung ist oft nicht wörtlich, also am besten als <b>Vokabel</b> lernen: <span class=\"ex\">look up a word = ein Wort nachschlagen</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Please ___ the light when you leave the room.",
      "optionen": [
        "turn off",
        "turn over",
        "turn into"
      ],
      "richtig": 0,
      "erklaerung": "'turn off' = ausschalten."
    },
    {
      "type": "mc",
      "frage": "What time do you usually ___ in the morning?",
      "optionen": [
        "get up",
        "get over",
        "get along"
      ],
      "richtig": 0,
      "erklaerung": "'get up' = aufstehen."
    },
    {
      "type": "mc",
      "frage": "I need to ___ my friend. I'll call her tonight.",
      "optionen": [
        "call off",
        "call up",
        "call for"
      ],
      "richtig": 1,
      "erklaerung": "'call up' = anrufen."
    },
    {
      "type": "gap",
      "frage": "It's cold outside. Please put ___ your coat before we go.",
      "richtig": [
        "on"
      ],
      "erklaerung": "'put on' = anziehen."
    },
    {
      "type": "gap",
      "frage": "Could you turn ___ the music? It's too loud!",
      "richtig": [
        "down"
      ],
      "erklaerung": "'turn down' = leiser machen."
    },
    {
      "type": "mc",
      "frage": "The plane is going to ___ in five minutes.",
      "optionen": [
        "take off",
        "take after",
        "take up"
      ],
      "richtig": 0,
      "erklaerung": "'take off' = abheben (Flugzeug)."
    },
    {
      "type": "gap",
      "frage": "I can't hear you. Can you speak ___, please?",
      "richtig": [
        "up"
      ],
      "erklaerung": "'speak up' = lauter sprechen."
    },
    {
      "type": "mc",
      "frage": "Hurry ___! The bus is coming.",
      "optionen": [
        "up",
        "off",
        "in"
      ],
      "richtig": 0,
      "erklaerung": "'hurry up' = sich beeilen."
    },
    {
      "type": "gap",
      "frage": "I usually ___ up early on weekdays, but I sleep in on Sundays.",
      "richtig": [
        "get",
        "wake"
      ],
      "erklaerung": "'get up' oder 'wake up' = aufstehen/aufwachen."
    },
    {
      "type": "mc",
      "frage": "She gets ___ very well with her colleagues.",
      "optionen": [
        "along",
        "over",
        "up"
      ],
      "richtig": 0,
      "erklaerung": "'get along (with)' = gut auskommen mit."
    },
    {
      "type": "transform",
      "frage": "Bilde einen Imperativ mit dem Phrasal Verb 'sit down' (du bittest jemanden, sich zu setzen).",
      "richtig": [
        "Sit down.",
        "Sit down, please.",
        "Please sit down.",
        "Sit down please."
      ],
      "erklaerung": "'sit down' = sich hinsetzen."
    },
    {
      "type": "gap",
      "frage": "Don't throw ___ those old newspapers; we can recycle them.",
      "richtig": [
        "away",
        "out"
      ],
      "erklaerung": "'throw away/out' = wegwerfen."
    },
    {
      "type": "mc",
      "frage": "I'm looking ___ to seeing you next week!",
      "optionen": [
        "forward",
        "after",
        "up"
      ],
      "richtig": 0,
      "erklaerung": "'look forward to' = sich freuen auf."
    },
    {
      "type": "gap",
      "frage": "My car broke ___ on the motorway, so I had to call a mechanic.",
      "richtig": [
        "down"
      ],
      "erklaerung": "'break down' = eine Panne haben."
    },
    {
      "type": "mc",
      "frage": "Can you look ___ my dog while I'm on holiday?",
      "optionen": [
        "after",
        "up",
        "into"
      ],
      "richtig": 0,
      "erklaerung": "'look after' = sich kümmern um."
    },
    {
      "type": "transform",
      "frage": "Ersetze 'discover' durch das Phrasal Verb 'find out': 'I want to discover the truth.' Schreibe den ganzen Satz neu.",
      "richtig": [
        "I want to find out the truth.",
        "I want to find the truth out."
      ],
      "erklaerung": "'find out' = herausfinden."
    },
    {
      "type": "gap",
      "frage": "The meeting was cancelled, so they called it ___.",
      "richtig": [
        "off"
      ],
      "erklaerung": "'call off' = absagen."
    },
    {
      "type": "mc",
      "frage": "I ran ___ an old friend at the supermarket yesterday.",
      "optionen": [
        "into",
        "over",
        "up"
      ],
      "richtig": 0,
      "erklaerung": "'run into' = zufällig treffen."
    },
    {
      "type": "gap",
      "frage": "Please fill ___ this form with your name and address.",
      "richtig": [
        "in",
        "out"
      ],
      "erklaerung": "'fill in/out' = ausfüllen."
    },
    {
      "type": "transform",
      "frage": "Ersetze das Objekt in 'Turn off the radio.' durch das Pronomen 'it'. Schreibe den ganzen Satz.",
      "richtig": [
        "Turn it off.",
        "Turn it off!"
      ],
      "erklaerung": "Bei trennbaren Phrasal Verbs steht das Pronomen IMMER zwischen Verb und Partikel: 'turn it off', nicht 'turn off it'."
    },
    {
      "type": "mc",
      "frage": "We've run ___ of milk. Can you buy some more?",
      "optionen": [
        "out",
        "up",
        "over"
      ],
      "richtig": 0,
      "erklaerung": "'run out of' = ausgehen, alle sein."
    },
    {
      "type": "gap",
      "frage": "He gave ___ smoking three years ago and feels much healthier now.",
      "richtig": [
        "up"
      ],
      "erklaerung": "'give up' = aufhören mit, aufgeben."
    },
    {
      "type": "mc",
      "frage": "The teacher told the students to ___ the difficult word in a dictionary.",
      "optionen": [
        "look up",
        "look after",
        "look out"
      ],
      "richtig": 0,
      "erklaerung": "'look up' = nachschlagen."
    },
    {
      "type": "gap",
      "frage": "I came ___ this old photo while I was cleaning the attic.",
      "richtig": [
        "across"
      ],
      "erklaerung": "'come across' = zufällig finden/stoßen auf."
    },
    {
      "type": "mc",
      "frage": "You should never ___ until tomorrow what you can do today.",
      "optionen": [
        "put off",
        "put on",
        "put up"
      ],
      "richtig": 0,
      "erklaerung": "'put off' = aufschieben, verschieben."
    },
    {
      "type": "transform",
      "frage": "Schreibe den Satz im Passiv: 'They set up the new company in 2010.'",
      "richtig": [
        "The new company was set up in 2010.",
        "The new company was set up in 2010"
      ],
      "erklaerung": "Bei Phrasal Verbs im Passiv bleibt die Partikel beim Verb: 'was set up'."
    },
    {
      "type": "gap",
      "frage": "I don't get ___. Could you explain what you mean again? (verstehen)",
      "richtig": [
        "it"
      ],
      "erklaerung": "'get it' = es verstehen/kapieren."
    },
    {
      "type": "mc",
      "frage": "Although the plan failed at first, things finally ___ in the end.",
      "optionen": [
        "worked out",
        "worked up",
        "worked off"
      ],
      "richtig": 0,
      "erklaerung": "'work out' = klappen, gut ausgehen."
    },
    {
      "type": "gap",
      "frage": "She takes ___ her mother; they have the same eyes and the same laugh.",
      "richtig": [
        "after"
      ],
      "erklaerung": "'take after' = jemandem ähneln (Familie)."
    },
    {
      "type": "transform",
      "frage": "Verneine diesen Satz mit 'didn't': 'He gave up easily.'",
      "richtig": [
        "He didn't give up easily.",
        "He did not give up easily."
      ],
      "erklaerung": "Im Simple Past Verneinung: 'didn't' + Grundform des Phrasal Verbs 'give up'."
    },
    {
      "type": "mc",
      "frage": "The negotiations fell ___ because the two sides couldn't agree.",
      "optionen": [
        "through",
        "out",
        "over"
      ],
      "richtig": 0,
      "erklaerung": "'fall through' = scheitern, ins Wasser fallen."
    },
    {
      "type": "gap",
      "frage": "I won't put ___ with this rude behaviour any longer! (tolerieren)",
      "richtig": [
        "up"
      ],
      "erklaerung": "'put up with' = etwas/jemanden ertragen, dulden."
    }
  ]
};
