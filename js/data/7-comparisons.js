/* Thema 7: Comparisons – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Comparisons",
  "intro": "Mit Comparisons (Vergleichen) drückst du auf Englisch aus, dass etwas größer, kleiner, besser oder genauso ist wie etwas anderes.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Kurze Adjektive bekommen im <b>Komparativ</b> die Endung <b>-er</b> und im <b>Superlativ</b> <b>-est</b>: <span class=\"ex\">cold – colder – the coldest</span></li><li>Lange Adjektive (2+ Silben) nutzen <b>more</b> und <b>most</b>: <span class=\"ex\">expensive – more expensive – the most expensive</span></li><li>Im Vergleich folgt nach dem Komparativ <b>than</b>: <span class=\"ex\">She is taller than me.</span></li><li>Gleichheit drückst du mit <b>as ... as</b> aus, Verneinung mit <b>not as ... as</b>: <span class=\"ex\">He is as fast as his brother.</span></li><li>Unregelmäßige Formen musst du lernen: <b>good–better–best</b>, <b>bad–worse–worst</b>, <b>far–further–furthest</b>: <span class=\"ex\">This is the best day ever.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "My brother is ___ than me.",
      "optionen": [
        "taller",
        "more tall",
        "tallest"
      ],
      "richtig": 0,
      "erklaerung": "Kurze Adjektive bilden den Komparativ mit -er: tall -> taller."
    },
    {
      "type": "gap",
      "frage": "This book is more interesting ___ that one.",
      "richtig": [
        "than"
      ],
      "erklaerung": "Nach dem Komparativ steht 'than' (als)."
    },
    {
      "type": "mc",
      "frage": "Today is ___ day of the year.",
      "optionen": [
        "the hottest",
        "the hotter",
        "hottest"
      ],
      "richtig": 0,
      "erklaerung": "Superlativ kurzer Adjektive: the + -est, hier mit Konsonantenverdopplung: hottest."
    },
    {
      "type": "gap",
      "frage": "A car is ___ (fast) than a bike.",
      "richtig": [
        "faster"
      ],
      "erklaerung": "Kurzes Adjektiv: fast -> faster + than."
    },
    {
      "type": "mc",
      "frage": "This exercise is ___ than the last one.",
      "optionen": [
        "more easy",
        "easier",
        "easyer"
      ],
      "richtig": 1,
      "erklaerung": "Zweisilbige Adjektive auf -y: y wird zu i, dann -er: easy -> easier."
    },
    {
      "type": "gap",
      "frage": "She is the ___ (intelligent) student in the class.",
      "richtig": [
        "most intelligent"
      ],
      "erklaerung": "Lange Adjektive bilden den Superlativ mit 'the most'."
    },
    {
      "type": "mc",
      "frage": "My new phone was ___ expensive than my old one.",
      "optionen": [
        "more",
        "most",
        "much"
      ],
      "richtig": 0,
      "erklaerung": "Langes Adjektiv: Komparativ mit 'more' + Adjektiv + than."
    },
    {
      "type": "gap",
      "frage": "Tom runs ___ (quick) than his friends.",
      "richtig": [
        "quicker",
        "more quickly"
      ],
      "erklaerung": "Komparativ von quick: 'quicker' (Adjektiv) bzw. 'more quickly' (Adverb) sind beide möglich."
    },
    {
      "type": "mc",
      "frage": "This is the ___ film I have ever seen.",
      "optionen": [
        "worse",
        "baddest",
        "worst"
      ],
      "richtig": 2,
      "erklaerung": "bad ist unregelmäßig: bad - worse - worst. Superlativ = worst."
    },
    {
      "type": "gap",
      "frage": "Anna sings ___ (good) than her sister.",
      "richtig": [
        "better"
      ],
      "erklaerung": "Unregelmäßig: good/well -> better."
    },
    {
      "type": "mc",
      "frage": "My grades are getting ___.",
      "optionen": [
        "more good",
        "better",
        "gooder"
      ],
      "richtig": 1,
      "erklaerung": "good ist unregelmäßig: good - better - best."
    },
    {
      "type": "gap",
      "frage": "London is ___ (big) than Manchester.",
      "richtig": [
        "bigger"
      ],
      "erklaerung": "Konsonant nach kurzem Vokal wird verdoppelt: big -> bigger."
    },
    {
      "type": "mc",
      "frage": "He is ___ person I know.",
      "optionen": [
        "the friendliest",
        "the most friendly",
        "the friendlier"
      ],
      "richtig": 0,
      "erklaerung": "Zweisilbige Adjektive auf -y: friendly -> friendliest (Superlativ)."
    },
    {
      "type": "gap",
      "frage": "This restaurant is just ___ good ___ the other one.",
      "richtig": [
        "as ... as"
      ],
      "erklaerung": "Gleichheit drückt man mit 'as + Adjektiv + as' aus."
    },
    {
      "type": "transform",
      "frage": "Bilde einen Vergleich der Gleichheit: My bag is heavy. Your bag is heavy too. (as ... as)",
      "richtig": [
        "My bag is as heavy as your bag.",
        "My bag is as heavy as yours."
      ],
      "erklaerung": "Gleicher Grad: 'as heavy as'."
    },
    {
      "type": "mc",
      "frage": "This test wasn't ___ difficult ___ I expected.",
      "optionen": [
        "so / as",
        "as / than",
        "more / as"
      ],
      "richtig": 0,
      "erklaerung": "Verneint kann 'not so ... as' (oder 'not as ... as') stehen."
    },
    {
      "type": "gap",
      "frage": "The ___ I practise, the better I get.",
      "richtig": [
        "more"
      ],
      "erklaerung": "Doppelter Komparativ: 'the more ..., the better ...'."
    },
    {
      "type": "transform",
      "frage": "Forme um in einen Satz mit doppeltem Komparativ: When it gets dark, it gets cold. (the ... the ...)",
      "richtig": [
        "The darker it gets, the colder it gets.",
        "The darker it gets, the colder it becomes."
      ],
      "erklaerung": "Je dunkler, desto kälter: 'the darker ..., the colder ...'."
    },
    {
      "type": "mc",
      "frage": "Prices are rising ___.",
      "optionen": [
        "higher and higher",
        "more and more high",
        "high and higher"
      ],
      "richtig": 0,
      "erklaerung": "Steigerung 'immer höher' = Komparativ + and + Komparativ: higher and higher."
    },
    {
      "type": "gap",
      "frage": "Learning a language becomes ___ ___ ___ interesting the more you understand.",
      "richtig": [
        "more and more"
      ],
      "erklaerung": "Bei langen Adjektiven: 'more and more' (immer interessanter)."
    },
    {
      "type": "mc",
      "frage": "This is by far ___ solution to the problem.",
      "optionen": [
        "the better",
        "the best",
        "best"
      ],
      "richtig": 1,
      "erklaerung": "'by far' verstärkt den Superlativ: 'by far the best'."
    },
    {
      "type": "gap",
      "frage": "He earns ___ (little) money than his colleagues.",
      "richtig": [
        "less"
      ],
      "erklaerung": "Unregelmäßig: little -> less (für nicht zählbare Mengen)."
    },
    {
      "type": "mc",
      "frage": "There were ___ people at the party than last year.",
      "optionen": [
        "less",
        "fewer",
        "least"
      ],
      "richtig": 1,
      "erklaerung": "Bei zählbaren Nomen (people) benutzt man 'fewer', nicht 'less'."
    },
    {
      "type": "transform",
      "frage": "Forme in den Superlativ um: This is an old building. (in the city)",
      "richtig": [
        "This is the oldest building in the city."
      ],
      "erklaerung": "Superlativ kurzer Adjektive: the + -est; nach Superlativ steht oft 'in'."
    },
    {
      "type": "gap",
      "frage": "My job is far ___ stressful than it used to be.",
      "richtig": [
        "more"
      ],
      "erklaerung": "'far' verstärkt den Komparativ langer Adjektive: 'far more stressful'."
    },
    {
      "type": "mc",
      "frage": "The film was ___ more boring than the book.",
      "optionen": [
        "very",
        "much",
        "more"
      ],
      "richtig": 1,
      "erklaerung": "Komparative verstärkt man mit 'much' (oder far/a lot), nicht mit 'very'."
    },
    {
      "type": "transform",
      "frage": "Verbinde zu einem Vergleichssatz mit 'than': Sarah is 25. Her brother is 30. (Sarah / young)",
      "richtig": [
        "Sarah is younger than her brother.",
        "Sarah is younger than her brother is."
      ],
      "erklaerung": "Komparativ kurzer Adjektive: young -> younger + than."
    },
    {
      "type": "gap",
      "frage": "This is one of ___ ___ (beautiful) places I have ever visited.",
      "richtig": [
        "the most beautiful"
      ],
      "erklaerung": "Superlativ langer Adjektive: 'the most beautiful'; nach 'one of' steht der Plural."
    },
    {
      "type": "mc",
      "frage": "The more expensive the hotel, ___ comfortable it usually is.",
      "optionen": [
        "the more",
        "more",
        "the most"
      ],
      "richtig": 0,
      "erklaerung": "Beide Teile des doppelten Komparativs brauchen 'the': the more ..., the more ...."
    },
    {
      "type": "transform",
      "frage": "Drücke denselben Sinn mit 'not as ... as' aus: My old car was faster than my new car.",
      "richtig": [
        "My new car is not as fast as my old car.",
        "My new car isn't as fast as my old car.",
        "My new car is not as fast as my old one.",
        "My new car isn't as fast as my old one."
      ],
      "erklaerung": "'A war schneller als B' = 'B ist nicht so schnell wie A': not as fast as."
    },
    {
      "type": "gap",
      "frage": "Of all my friends, Lucy is the one who works ___ ___ (hard).",
      "richtig": [
        "the hardest"
      ],
      "erklaerung": "hard ist Adjektiv und Adverb; Superlativ: the hardest."
    },
    {
      "type": "mc",
      "frage": "This year's results are ___ than ever before.",
      "optionen": [
        "the best",
        "better",
        "best"
      ],
      "richtig": 1,
      "erklaerung": "Vergleich mit 'than' verlangt den Komparativ: better than ever."
    }
  ]
};
