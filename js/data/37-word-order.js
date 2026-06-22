/* Thema 37: Word order – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Word order",
  "intro": "Im Englischen ist die Wortstellung viel strenger als im Deutschen: Der Standard ist Subjekt - Verb - Objekt.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Der Grundbau ist <b>Subjekt - Verb - Objekt</b>: <span class=\"ex\">She reads a book.</span></li><li>Angaben kommen meist in der Reihenfolge <b>Art - Ort - Zeit</b> (manner, place, time): <span class=\"ex\">He played football well in the park yesterday.</span></li><li>Häufigkeitsadverbien (<b>always, often, never</b>) stehen vor dem Vollverb, aber nach <b>be</b>: <span class=\"ex\">I often go there.</span> / <span class=\"ex\">She is always late.</span></li><li>Bei Fragen wird <b>invertiert</b>: Hilfsverb vor Subjekt: <span class=\"ex\">Do you like tea?</span></li><li>Zeitangaben am Satzanfang sind möglich, das <b>Verb bleibt aber an zweiter Stelle nicht</b> wie im Deutschen: <span class=\"ex\">Yesterday I saw him.</span> (nicht \"Yesterday saw I him.\")</li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Welcher Satz hat die korrekte Wortstellung?",
      "optionen": [
        "I like very much this film.",
        "I like this film very much.",
        "I very much like this film very."
      ],
      "richtig": 1,
      "erklaerung": "Das Objekt folgt direkt dem Verb; \"very much\" steht am Satzende: I like this film very much."
    },
    {
      "type": "mc",
      "frage": "Welche Reihenfolge der Angaben ist richtig (Art - Ort - Zeit)?",
      "optionen": [
        "She sang yesterday beautifully at the concert.",
        "She sang beautifully at the concert yesterday.",
        "She sang at the concert beautifully yesterday."
      ],
      "richtig": 1,
      "erklaerung": "Reihenfolge: manner (beautifully) - place (at the concert) - time (yesterday)."
    },
    {
      "type": "mc",
      "frage": "Wo steht das Häufigkeitsadverb richtig? \"We ___ on Sundays.\"",
      "optionen": [
        "usually go shopping",
        "go usually shopping",
        "go shopping usually"
      ],
      "richtig": 0,
      "erklaerung": "Häufigkeitsadverbien stehen vor dem Vollverb: We usually go shopping."
    },
    {
      "type": "mc",
      "frage": "Welche Frage ist korrekt gebildet?",
      "optionen": [
        "Where you are going?",
        "Where are you going?",
        "Where going you are?"
      ],
      "richtig": 1,
      "erklaerung": "Bei Fragen wird invertiert: Fragewort + Hilfsverb + Subjekt: Where are you going?"
    },
    {
      "type": "gap",
      "frage": "Bring in Ordnung: Subjekt + Verb + Objekt. \"___ a new car.\" (he / buy, Present Simple)",
      "richtig": [
        "He buys",
        "he buys"
      ],
      "erklaerung": "Subjekt (He) + Verb (buys, 3. Person Singular -s) + Objekt (a new car)."
    },
    {
      "type": "gap",
      "frage": "Setze das Häufigkeitsadverb richtig ein: \"She ___ late for work.\" (be + never)",
      "richtig": [
        "is never",
        "is never,"
      ],
      "erklaerung": "Nach dem Verb \"be\" steht das Adverb: She is never late."
    },
    {
      "type": "gap",
      "frage": "Ergänze in der richtigen Stellung: \"They went ___ last weekend.\" (Ort: to the cinema)",
      "richtig": [
        "to the cinema"
      ],
      "erklaerung": "Die Ortsangabe steht vor der Zeitangabe: They went to the cinema last weekend."
    },
    {
      "type": "transform",
      "frage": "Bilde aus den Wörtern einen korrekten Satz: every / morning / coffee / drinks / Tom",
      "richtig": [
        "Tom drinks coffee every morning.",
        "Tom drinks coffee every morning",
        "Every morning Tom drinks coffee.",
        "Every morning, Tom drinks coffee."
      ],
      "erklaerung": "Subjekt (Tom) + Verb (drinks) + Objekt (coffee) + Zeitangabe (every morning). Die Zeitangabe kann auch vorne stehen, das Verb bleibt aber nach dem Subjekt."
    },
    {
      "type": "transform",
      "frage": "Forme die Aussage in eine Frage um: \"You can speak French.\"",
      "richtig": [
        "Can you speak French?",
        "Can you speak French"
      ],
      "erklaerung": "Für die Frage wird das Hilfsverb \"can\" vor das Subjekt gestellt: Can you speak French?"
    },
    {
      "type": "transform",
      "frage": "Bilde einen korrekten Satz aus: quietly / in the library / read / the children",
      "richtig": [
        "The children read quietly in the library.",
        "The children read quietly in the library"
      ],
      "erklaerung": "Subjekt + Verb + Art (quietly) + Ort (in the library): The children read quietly in the library."
    }
  ]
};
