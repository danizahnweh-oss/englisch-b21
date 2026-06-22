/* Thema 37: Word order – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Word order",
  "intro": "Im Englischen ist die Wortstellung viel strenger als im Deutschen: Der Standard ist Subjekt - Verb - Objekt.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Der Grundbau ist <b>Subjekt - Verb - Objekt</b>: <span class=\"ex\">She reads a book.</span></li><li>Angaben kommen meist in der Reihenfolge <b>Art - Ort - Zeit</b> (manner, place, time): <span class=\"ex\">He played football well in the park yesterday.</span></li><li>Häufigkeitsadverbien (<b>always, often, never</b>) stehen vor dem Vollverb, aber nach <b>be</b>: <span class=\"ex\">I often go there.</span> / <span class=\"ex\">She is always late.</span></li><li>Bei Fragen wird <b>invertiert</b>: Hilfsverb vor Subjekt: <span class=\"ex\">Do you like tea?</span></li><li>Zeitangaben am Satzanfang sind möglich, das <b>Verb bleibt aber an zweiter Stelle nicht</b> wie im Deutschen: <span class=\"ex\">Yesterday I saw him.</span> (nicht \"Yesterday saw I him.\")</li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct word order: ___",
      "optionen": [
        "I have a red car.",
        "I have a car red.",
        "Have I a red car."
      ],
      "richtig": 0,
      "erklaerung": "Im Englischen steht das Adjektiv vor dem Nomen: 'red car'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct sentence: ___",
      "optionen": [
        "She speaks English well.",
        "She speaks well English.",
        "She well speaks English."
      ],
      "richtig": 0,
      "erklaerung": "Das Adverb der Art und Weise steht nach dem Objekt: 'speaks English well'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct word order: ___",
      "optionen": [
        "We watch every day TV.",
        "We watch TV every day.",
        "Every day we TV watch."
      ],
      "richtig": 1,
      "erklaerung": "Zeitangaben stehen meist am Satzende: 'watch TV every day'."
    },
    {
      "type": "gap",
      "frage": "Bring in die richtige Reihenfolge (drink / coffee / I): ___ in the morning.",
      "richtig": [
        "I drink coffee",
        "I drink coffee."
      ],
      "erklaerung": "Grundreihenfolge: Subjekt + Verb + Objekt (I drink coffee)."
    },
    {
      "type": "gap",
      "frage": "Setze 'nice' an die richtige Stelle: She has a ___ dog.",
      "richtig": [
        "nice"
      ],
      "erklaerung": "Das Adjektiv steht vor dem Nomen: 'a nice dog'."
    },
    {
      "type": "transform",
      "frage": "Bilde einen Aussagesatz aus den Wörtern: (a book / reads / Tom)",
      "richtig": [
        "Tom reads a book.",
        "Tom reads a book"
      ],
      "erklaerung": "Subjekt + Verb + Objekt: Tom (S) reads (V) a book (O)."
    },
    {
      "type": "mc",
      "frage": "Choose the correct sentence: ___",
      "optionen": [
        "They go to school on Monday.",
        "They go on Monday to school.",
        "On Monday to school they go."
      ],
      "richtig": 0,
      "erklaerung": "Ortsangabe vor Zeitangabe: 'to school on Monday' (Ort vor Zeit)."
    },
    {
      "type": "transform",
      "frage": "Bilde einen Satz: (often / We / play / football)",
      "richtig": [
        "We often play football.",
        "We often play football"
      ],
      "erklaerung": "Häufigkeitsadverbien ('often') stehen vor dem Vollverb."
    },
    {
      "type": "gap",
      "frage": "Setze 'always' an die richtige Stelle: He ___ gets up early.",
      "richtig": [
        "always"
      ],
      "erklaerung": "'always' steht vor dem Vollverb: 'always gets up'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct sentence: ___",
      "optionen": [
        "I am never late.",
        "I never am late.",
        "Never I am late."
      ],
      "richtig": 0,
      "erklaerung": "Häufigkeitsadverbien stehen NACH 'be': 'am never'."
    },
    {
      "type": "transform",
      "frage": "Mache eine Frage aus: 'You like pizza.'",
      "richtig": [
        "Do you like pizza?",
        "Do you like pizza"
      ],
      "erklaerung": "Frage mit 'do': Hilfsverb + Subjekt + Vollverb."
    },
    {
      "type": "gap",
      "frage": "Frage bilden: ___ she live in London? (Verwende 'does')",
      "richtig": [
        "Does"
      ],
      "erklaerung": "In der 3. Person Singular steht 'Does' am Satzanfang."
    },
    {
      "type": "mc",
      "frage": "Choose the correct word order: ___",
      "optionen": [
        "Where do you live?",
        "Where you do live?",
        "Where live you?"
      ],
      "richtig": 0,
      "erklaerung": "W-Frage: Fragewort + Hilfsverb + Subjekt + Vollverb."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Verneinung: 'She plays tennis.'",
      "richtig": [
        "She does not play tennis.",
        "She doesn't play tennis.",
        "She does not play tennis",
        "She doesn't play tennis"
      ],
      "erklaerung": "Verneinung mit 'does not/doesn't' + Grundform des Verbs."
    },
    {
      "type": "gap",
      "frage": "Setze 'yesterday' ans Ende: They visited their grandparents ___.",
      "richtig": [
        "yesterday"
      ],
      "erklaerung": "Zeitangaben stehen am Satzende: 'visited ... yesterday'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct order of adjectives: ___",
      "optionen": [
        "a big old wooden table",
        "an old big wooden table",
        "a wooden big old table"
      ],
      "richtig": 0,
      "erklaerung": "Adjektivreihenfolge: Größe vor Alter vor Material (big-old-wooden)."
    },
    {
      "type": "transform",
      "frage": "Bilde einen Satz mit korrekter Reihenfolge: (at the cinema / a film / We / saw / last night)",
      "richtig": [
        "We saw a film at the cinema last night.",
        "We saw a film at the cinema last night"
      ],
      "erklaerung": "Reihenfolge: Subjekt-Verb-Objekt-Ort-Zeit (Place before Time)."
    },
    {
      "type": "gap",
      "frage": "Setze 'usually' richtig ein: My parents ___ have dinner at seven.",
      "richtig": [
        "usually"
      ],
      "erklaerung": "'usually' steht vor dem Vollverb 'have'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct sentence: ___",
      "optionen": [
        "I gave my sister a present.",
        "I gave a present my sister.",
        "I gave to my sister a present."
      ],
      "richtig": 0,
      "erklaerung": "Indirektes Objekt vor direktem Objekt ohne 'to': 'gave my sister a present'."
    },
    {
      "type": "transform",
      "frage": "Schreibe mit 'to': 'He sent his friend a letter.'",
      "richtig": [
        "He sent a letter to his friend.",
        "He sent a letter to his friend"
      ],
      "erklaerung": "Direktes Objekt + 'to' + indirektes Objekt: 'a letter to his friend'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct word order: ___",
      "optionen": [
        "She quickly opened the door.",
        "She opened quickly the door.",
        "She opened the door quickly."
      ],
      "richtig": 2,
      "erklaerung": "Adverb der Art und Weise nach dem Objekt (oder vor dem Verb, aber nie zwischen Verb und Objekt)."
    },
    {
      "type": "gap",
      "frage": "Setze 'carefully' ans richtige Ende: He read the instructions ___.",
      "richtig": [
        "carefully"
      ],
      "erklaerung": "Art-und-Weise-Adverb nach dem Objekt: 'read the instructions carefully'."
    },
    {
      "type": "transform",
      "frage": "Bilde eine W-Frage im Past: 'They went to Spain.' (Frage nach dem Ort, mit 'where')",
      "richtig": [
        "Where did they go?",
        "Where did they go"
      ],
      "erklaerung": "W-Frage Past: 'Where' + did + Subjekt + Grundform."
    },
    {
      "type": "mc",
      "frage": "Choose the correct sentence: ___",
      "optionen": [
        "I have already finished my homework.",
        "I have finished already my homework.",
        "Already I have finished my homework."
      ],
      "richtig": 0,
      "erklaerung": "'already' steht zwischen Hilfsverb und Vollverb: 'have already finished'."
    },
    {
      "type": "gap",
      "frage": "Setze 'often' richtig (Present Perfect): She has ___ been to Paris.",
      "richtig": [
        "often"
      ],
      "erklaerung": "Häufigkeitsadverb zwischen 'has' und 'been'."
    },
    {
      "type": "transform",
      "frage": "Bilde einen Satz mit korrekter Reihenfolge von Ort und Zeit: (in the garden / this morning / quietly / The children / played)",
      "richtig": [
        "The children played quietly in the garden this morning.",
        "The children played quietly in the garden this morning"
      ],
      "erklaerung": "Reihenfolge: Subjekt-Verb-Art(quietly)-Ort(garden)-Zeit(this morning)."
    },
    {
      "type": "mc",
      "frage": "Choose the correct indirect question: ___",
      "optionen": [
        "Can you tell me where the station is?",
        "Can you tell me where is the station?",
        "Can you tell me where the station?"
      ],
      "richtig": 0,
      "erklaerung": "In indirekten Fragen gilt Aussatzstellung: '... where the station is'."
    },
    {
      "type": "transform",
      "frage": "Mache eine indirekte Frage: 'What time does the film start?' Beginne mit 'Do you know ...'",
      "richtig": [
        "Do you know what time the film starts?",
        "Do you know what time the film starts"
      ],
      "erklaerung": "Indirekte Frage: kein 'does', normale Wortstellung 'the film starts'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct sentence: ___",
      "optionen": [
        "Never have I seen such a beautiful sunset.",
        "Never I have seen such a beautiful sunset.",
        "Never seen I have such a beautiful sunset."
      ],
      "richtig": 0,
      "erklaerung": "Nach einem negativen Wort am Satzanfang folgt Inversion: 'Never have I seen'."
    },
    {
      "type": "transform",
      "frage": "Forme um mit Inversion (Beginn mit 'Not only'): 'He plays the piano and he sings.'",
      "richtig": [
        "Not only does he play the piano, but he also sings.",
        "Not only does he play the piano but he also sings.",
        "Not only does he play the piano, but he also sings",
        "Not only does he play the piano, but also he sings."
      ],
      "erklaerung": "Nach 'Not only' am Satzanfang folgt Inversion mit 'does': 'Not only does he play'."
    },
    {
      "type": "gap",
      "frage": "Setze das Adverb richtig (Inversion): Rarely ___ I seen such a mess. (Hilfsverb 'have')",
      "richtig": [
        "have"
      ],
      "erklaerung": "Nach 'Rarely' am Satzanfang folgt Inversion: 'Rarely have I seen'."
    }
  ]
};
