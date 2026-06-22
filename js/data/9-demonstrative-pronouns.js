/* Thema 9: Demonstrative pronouns – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Demonstrative pronouns",
  "intro": "Demonstrativpronomen (this, that, these, those) zeigen auf Dinge oder Personen und unterscheiden nach Nähe und Anzahl.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>this</b> = Einzahl, nah (hier): <span class=\"ex\">This book is mine.</span></li><li><b>these</b> = Mehrzahl, nah (hier): <span class=\"ex\">These books are mine.</span></li><li><b>that</b> = Einzahl, fern (dort): <span class=\"ex\">That car over there is fast.</span></li><li><b>those</b> = Mehrzahl, fern (dort): <span class=\"ex\">Those mountains look beautiful.</span></li><li>Am Telefon: <b>this</b> für sich selbst, <b>that</b>/<b>this</b> für den anderen: <span class=\"ex\">Hello, this is Tom. Is that Anna?</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "___ is my pen here in my hand.",
      "optionen": [
        "This",
        "These",
        "Those"
      ],
      "richtig": 0,
      "erklaerung": "Ein nahes Einzelding: 'this'."
    },
    {
      "type": "mc",
      "frage": "Look at ___ stars in the sky far away.",
      "optionen": [
        "this",
        "these",
        "those"
      ],
      "richtig": 2,
      "erklaerung": "Mehrere entfernte Dinge: 'those'."
    },
    {
      "type": "mc",
      "frage": "___ apples in my basket are very sweet.",
      "optionen": [
        "This",
        "These",
        "That"
      ],
      "richtig": 1,
      "erklaerung": "Mehrere nahe Dinge: 'these'."
    },
    {
      "type": "gap",
      "frage": "___ is the book on the table next to me. (Singular, nah)",
      "richtig": [
        "This"
      ],
      "erklaerung": "Ein nahes Einzelding bekommt 'this'."
    },
    {
      "type": "gap",
      "frage": "Do you see ___ house over there on the hill? (Singular, fern)",
      "richtig": [
        "that"
      ],
      "erklaerung": "Ein entferntes Einzelding: 'that'."
    },
    {
      "type": "mc",
      "frage": "___ shoes by the door over there are mine.",
      "optionen": [
        "This",
        "These",
        "Those"
      ],
      "richtig": 2,
      "erklaerung": "Mehrzahl und entfernt: 'those'."
    },
    {
      "type": "gap",
      "frage": "___ flowers in my hands smell wonderful. (Plural, nah)",
      "richtig": [
        "These"
      ],
      "erklaerung": "Nahe Mehrzahl: 'these'."
    },
    {
      "type": "mc",
      "frage": "I really like ___ song that is playing now on the radio.",
      "optionen": [
        "this",
        "these",
        "those"
      ],
      "richtig": 0,
      "erklaerung": "Ein Lied (Singular), gerade gegenwärtig: 'this'."
    },
    {
      "type": "gap",
      "frage": "Can you pass me ___ cup right here, please? (Singular, nah)",
      "richtig": [
        "this"
      ],
      "erklaerung": "Nahes Einzelding: 'this'."
    },
    {
      "type": "transform",
      "frage": "Setze in den Plural: 'This box is empty.'",
      "richtig": [
        "These boxes are empty.",
        "These boxes are empty"
      ],
      "erklaerung": "'this' -> 'these', 'box' -> 'boxes', 'is' -> 'are'."
    },
    {
      "type": "transform",
      "frage": "Setze in den Plural: 'That child is very polite.'",
      "richtig": [
        "Those children are very polite.",
        "Those children are very polite"
      ],
      "erklaerung": "'that' -> 'those', unregelmäßiger Plural 'child' -> 'children', 'is' -> 'are'."
    },
    {
      "type": "mc",
      "frage": "___ is my sister Anna. (am Telefon, wenn man sich vorstellt)",
      "optionen": [
        "This",
        "These",
        "That"
      ],
      "richtig": 0,
      "erklaerung": "Am Telefon stellt man sich mit 'this' vor."
    },
    {
      "type": "gap",
      "frage": "Who is ___? (am Telefon nach dem Anrufer fragen)",
      "richtig": [
        "that"
      ],
      "erklaerung": "Nach dem Anrufer am Telefon fragt man mit 'that'."
    },
    {
      "type": "mc",
      "frage": "___ days, many people work from home.",
      "optionen": [
        "This",
        "These",
        "Those"
      ],
      "richtig": 1,
      "erklaerung": "'These days' = heutzutage; feste Wendung mit Plural."
    },
    {
      "type": "gap",
      "frage": "Back in ___ days, there were no mobile phones. (damals)",
      "richtig": [
        "those"
      ],
      "erklaerung": "'In those days' = damals; Verweis auf weit zurückliegende Zeit."
    },
    {
      "type": "transform",
      "frage": "Setze in den Singular: 'These men are firefighters.'",
      "richtig": [
        "This man is a firefighter.",
        "This man is a firefighter"
      ],
      "erklaerung": "'these' -> 'this', 'men' -> 'man', 'are' -> 'is', Artikel 'a' nötig."
    },
    {
      "type": "mc",
      "frage": "___ was a great holiday; I will never forget it.",
      "optionen": [
        "This",
        "That",
        "These"
      ],
      "richtig": 1,
      "erklaerung": "Rückblick auf etwas Vergangenes: 'that'."
    },
    {
      "type": "gap",
      "frage": "___ is going to be an amazing year, I can feel it! (auf das kommende Jahr, das gerade beginnt)",
      "richtig": [
        "This"
      ],
      "erklaerung": "Gegenwärtige/nahe Situation: 'this'."
    },
    {
      "type": "mc",
      "frage": "I don't agree with ___ you just said.",
      "optionen": [
        "this",
        "that",
        "these"
      ],
      "richtig": 1,
      "erklaerung": "Verweis auf eine gerade genannte Äußerung des Anderen: 'that'."
    },
    {
      "type": "transform",
      "frage": "Setze in den Plural: 'That woman is a doctor.'",
      "richtig": [
        "Those women are doctors.",
        "Those women are doctors"
      ],
      "erklaerung": "'that' -> 'those', 'woman' -> 'women', 'is a doctor' -> 'are doctors'."
    },
    {
      "type": "gap",
      "frage": "\"I passed my exam!\" \"___ is wonderful news!\" (Reaktion auf gerade Gesagtes)",
      "richtig": [
        "That"
      ],
      "erklaerung": "Reaktion auf eine eben gemachte Aussage: 'that'."
    },
    {
      "type": "mc",
      "frage": "___ kind of behaviour is simply not acceptable.",
      "optionen": [
        "This",
        "These",
        "Those"
      ],
      "richtig": 0,
      "erklaerung": "'kind' ist Singular, daher 'this'."
    },
    {
      "type": "gap",
      "frage": "All ___ problems we discussed must be solved soon. (Plural, auf zuvor Erwähntes)",
      "richtig": [
        "these",
        "those"
      ],
      "erklaerung": "Plural; 'these' (nah/aktuell) oder 'those' (distanzierter) sind beide möglich."
    },
    {
      "type": "mc",
      "frage": "This is John, and ___ are his parents over there.",
      "optionen": [
        "this",
        "these",
        "those"
      ],
      "richtig": 2,
      "erklaerung": "Plural und entfernt ('over there'): 'those'."
    },
    {
      "type": "transform",
      "frage": "Setze in den Singular: 'Those mice ran into the kitchen.'",
      "richtig": [
        "That mouse ran into the kitchen.",
        "That mouse ran into the kitchen"
      ],
      "erklaerung": "'those' -> 'that', unregelmäßiger Plural 'mice' -> 'mouse'."
    },
    {
      "type": "gap",
      "frage": "My new shoes are nicer than ___ I wore last year. (statt 'the ones', distanziert/Plural)",
      "richtig": [
        "those",
        "the ones"
      ],
      "erklaerung": "'those' ersetzt 'the shoes' im Vergleich; 'the ones' ist ebenfalls korrekt."
    },
    {
      "type": "mc",
      "frage": "The weather here is far better than ___ in the north.",
      "optionen": [
        "this",
        "that",
        "these"
      ],
      "richtig": 1,
      "erklaerung": "'that' ersetzt 'the weather' (unzählbar, Singular) im Vergleich."
    },
    {
      "type": "gap",
      "frage": "___ who arrive late will not be allowed to enter. (formell: 'die Leute, die ...', Plural)",
      "richtig": [
        "Those"
      ],
      "erklaerung": "Formelles 'those who ...' = 'diejenigen, die ...'."
    },
    {
      "type": "transform",
      "frage": "Schreibe mit Demonstrativpronomen statt 'It': 'It is the most beautiful painting I have ever seen.' (auf ein nahes, gerade betrachtetes Bild)",
      "richtig": [
        "This is the most beautiful painting I have ever seen.",
        "This is the most beautiful painting I have ever seen"
      ],
      "erklaerung": "Für ein gerade betrachtetes nahes Objekt passt 'This'."
    },
    {
      "type": "mc",
      "frage": "Of all his films, ___ ones from the 1980s are the best.",
      "optionen": [
        "this",
        "that",
        "those"
      ],
      "richtig": 2,
      "erklaerung": "Plural ('ones') und zeitlich distanziert: 'those'."
    },
    {
      "type": "gap",
      "frage": "Life today is so different from ___ of fifty years ago. (Singular 'life', distanziert)",
      "richtig": [
        "that"
      ],
      "erklaerung": "'that' ersetzt 'the life' im Vergleich; Singular und entfernt."
    }
  ]
};
